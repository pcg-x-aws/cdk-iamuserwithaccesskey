import { CfnOutput, Fn, Names } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as sm from 'aws-cdk-lib/aws-secretsmanager';
import { Construct } from 'constructs';

/**
 * Properties for the IAM User
 */
export interface IamUserWithAccessKeyProps extends iam.UserProps {
  /**
   * An optional custom encryption key for the secret.
   *
   * @default The Accounts default Secret Manager KMS Key will be used.
   */
  readonly encryptionKey?: kms.IKey | undefined;
}

/**
 * An IAM User including an Access Key that will be stored in Secrets Manager. The properties as for normal IAM Users.
 */
export class IamUserWithAccessKey extends Construct {
  /**
   * An attribute that represents the iam access_key.
   *
   * @attribute true
   */
  public readonly accessKey: iam.CfnAccessKey;
  /**
     * An attribute that represents the secret.
     *
     * @attribute true
     */
  public readonly secret: sm.Secret;

  constructor(scope: Construct, id: string, props?: IamUserWithAccessKeyProps) {
    super(scope, id);

    const user = new iam.User(this, 'Resource', props);

    this.accessKey = new iam.CfnAccessKey(this, 'AccessKey', {
      userName: user.userName,
    });

    let UserSecretString = JSON.stringify({
      Access_Key_Id: this.accessKey.ref,
      Secret_Access_Key: Fn.getAtt(this.accessKey.logicalId, 'SecretAccessKey').toString(), //TODO: Check if this references the correct resource. AccessKey vs SecretAccessKey
    });

    if (props?.encryptionKey) {
      this.secret = new sm.Secret(this, 'UserSecret', {
        encryptionKey: props.encryptionKey,
      });
    } else {
      this.secret = new sm.Secret(this, 'UserSecret');
    };

    // We need to access the underlying cfn resource to set the secret string
    const cfnSecret = this.secret.node.defaultChild as sm.CfnSecret;
    cfnSecret.secretString = UserSecretString;

    // We need a raw override because otherwise cdk always expects a secretStringGenerator object
    cfnSecret.addOverride('Properties.GenerateSecretString', Fn.ref('AWS::NoValue'));

    new CfnOutput(this, 'SecretArn', {
      value: this.secret.secretArn.toString(),
      // Construct id alone collides across stacks; uniqueId is stable per construct path.
      exportName: Names.uniqueId(this),
    });
  }
}
