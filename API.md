# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamUserWithAccessKey <a name="IamUserWithAccessKey" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey"></a>

An IAM User including an Access Key that will be stored in Secrets Manager.

The properties as for normal IAM Users.

#### Initializers <a name="Initializers" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.Initializer"></a>

```typescript
import { IamUserWithAccessKey } from '@pcg-x-aws/cdk-iamuserwithaccesskey'

new IamUserWithAccessKey(scope: Construct, id: string, props?: IamUserWithAccessKeyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.Initializer.parameter.props">props</a></code> | <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps">IamUserWithAccessKeyProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.Initializer.parameter.props"></a>

- *Type:* <a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps">IamUserWithAccessKeyProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.addManagedPolicy">addManagedPolicy</a></code> | Attaches a managed policy to the user. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.addToGroup">addToGroup</a></code> | Adds this user to a group. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.addToPolicy">addToPolicy</a></code> | Add to the policy of this principal. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.addToPrincipalPolicy">addToPrincipalPolicy</a></code> | Adds an IAM statement to the default policy. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.attachInlinePolicy">attachInlinePolicy</a></code> | Attaches a policy to this user. |

---

##### `toString` <a name="toString" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addManagedPolicy` <a name="addManagedPolicy" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.addManagedPolicy"></a>

```typescript
public addManagedPolicy(policy: IManagedPolicy): void
```

Attaches a managed policy to the user.

###### `policy`<sup>Required</sup> <a name="policy" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.addManagedPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy

The managed policy to attach.

---

##### `addToGroup` <a name="addToGroup" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.addToGroup"></a>

```typescript
public addToGroup(group: IGroup): void
```

Adds this user to a group.

###### `group`<sup>Required</sup> <a name="group" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.addToGroup.parameter.group"></a>

- *Type:* aws-cdk-lib.aws_iam.IGroup

---

##### `addToPolicy` <a name="addToPolicy" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.addToPolicy"></a>

```typescript
public addToPolicy(statement: PolicyStatement): boolean
```

Add to the policy of this principal.

###### `statement`<sup>Required</sup> <a name="statement" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.addToPolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `addToPrincipalPolicy` <a name="addToPrincipalPolicy" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.addToPrincipalPolicy"></a>

```typescript
public addToPrincipalPolicy(statement: PolicyStatement): AddToPrincipalPolicyResult
```

Adds an IAM statement to the default policy.

###### `statement`<sup>Required</sup> <a name="statement" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.addToPrincipalPolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `attachInlinePolicy` <a name="attachInlinePolicy" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.attachInlinePolicy"></a>

```typescript
public attachInlinePolicy(policy: Policy): void
```

Attaches a policy to this user.

###### `policy`<sup>Required</sup> <a name="policy" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.attachInlinePolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.aws_iam.Policy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.fromUserArn">fromUserArn</a></code> | Import an existing user given a user ARN. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.fromUserAttributes">fromUserAttributes</a></code> | Import an existing user given user attributes. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.fromUserName">fromUserName</a></code> | Import an existing user given a username. |

---

##### `isConstruct` <a name="isConstruct" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.isConstruct"></a>

```typescript
import { IamUserWithAccessKey } from '@pcg-x-aws/cdk-iamuserwithaccesskey'

IamUserWithAccessKey.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.isOwnedResource"></a>

```typescript
import { IamUserWithAccessKey } from '@pcg-x-aws/cdk-iamuserwithaccesskey'

IamUserWithAccessKey.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.isResource"></a>

```typescript
import { IamUserWithAccessKey } from '@pcg-x-aws/cdk-iamuserwithaccesskey'

IamUserWithAccessKey.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromUserArn` <a name="fromUserArn" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.fromUserArn"></a>

```typescript
import { IamUserWithAccessKey } from '@pcg-x-aws/cdk-iamuserwithaccesskey'

IamUserWithAccessKey.fromUserArn(scope: Construct, id: string, userArn: string)
```

Import an existing user given a user ARN.

If the ARN comes from a Token, the User cannot have a path; if so, any attempt
to reference its username will fail.

###### `scope`<sup>Required</sup> <a name="scope" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.fromUserArn.parameter.scope"></a>

- *Type:* constructs.Construct

construct scope.

---

###### `id`<sup>Required</sup> <a name="id" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.fromUserArn.parameter.id"></a>

- *Type:* string

construct id.

---

###### `userArn`<sup>Required</sup> <a name="userArn" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.fromUserArn.parameter.userArn"></a>

- *Type:* string

the ARN of an existing user to import.

---

##### `fromUserAttributes` <a name="fromUserAttributes" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.fromUserAttributes"></a>

```typescript
import { IamUserWithAccessKey } from '@pcg-x-aws/cdk-iamuserwithaccesskey'

IamUserWithAccessKey.fromUserAttributes(scope: Construct, id: string, attrs: UserAttributes)
```

Import an existing user given user attributes.

If the ARN comes from a Token, the User cannot have a path; if so, any attempt
to reference its username will fail.

###### `scope`<sup>Required</sup> <a name="scope" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.fromUserAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

construct scope.

---

###### `id`<sup>Required</sup> <a name="id" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.fromUserAttributes.parameter.id"></a>

- *Type:* string

construct id.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.fromUserAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_iam.UserAttributes

the attributes of the user to import.

---

##### `fromUserName` <a name="fromUserName" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.fromUserName"></a>

```typescript
import { IamUserWithAccessKey } from '@pcg-x-aws/cdk-iamuserwithaccesskey'

IamUserWithAccessKey.fromUserName(scope: Construct, id: string, userName: string)
```

Import an existing user given a username.

###### `scope`<sup>Required</sup> <a name="scope" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.fromUserName.parameter.scope"></a>

- *Type:* constructs.Construct

construct scope.

---

###### `id`<sup>Required</sup> <a name="id" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.fromUserName.parameter.id"></a>

- *Type:* string

construct id.

---

###### `userName`<sup>Required</sup> <a name="userName" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.fromUserName.parameter.userName"></a>

- *Type:* string

the username of the existing user to import.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.assumeRoleAction">assumeRoleAction</a></code> | <code>string</code> | When this Principal is used in an AssumeRole policy, the action to use. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.policyFragment">policyFragment</a></code> | <code>aws-cdk-lib.aws_iam.PrincipalPolicyFragment</code> | Return the policy fragment that identifies this principal in a Policy. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.userArn">userArn</a></code> | <code>string</code> | An attribute that represents the user's ARN. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.userName">userName</a></code> | <code>string</code> | An attribute that represents the user name. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.userRef">userRef</a></code> | <code>aws-cdk-lib.interfaces.aws_iam.UserReference</code> | A reference to a User resource. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy</code> | Returns the permissions boundary attached  to this user. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.principalAccount">principalAccount</a></code> | <code>string</code> | The AWS account ID of this principal. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.accessKey">accessKey</a></code> | <code>aws-cdk-lib.aws_iam.CfnAccessKey</code> | An attribute that represents the iam access_key. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.secret">secret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.Secret</code> | An attribute that represents the secret. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `assumeRoleAction`<sup>Required</sup> <a name="assumeRoleAction" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.assumeRoleAction"></a>

```typescript
public readonly assumeRoleAction: string;
```

- *Type:* string

When this Principal is used in an AssumeRole policy, the action to use.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

##### `policyFragment`<sup>Required</sup> <a name="policyFragment" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.policyFragment"></a>

```typescript
public readonly policyFragment: PrincipalPolicyFragment;
```

- *Type:* aws-cdk-lib.aws_iam.PrincipalPolicyFragment

Return the policy fragment that identifies this principal in a Policy.

---

##### `userArn`<sup>Required</sup> <a name="userArn" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.userArn"></a>

```typescript
public readonly userArn: string;
```

- *Type:* string

An attribute that represents the user's ARN.

---

##### `userName`<sup>Required</sup> <a name="userName" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

An attribute that represents the user name.

---

##### `userRef`<sup>Required</sup> <a name="userRef" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.userRef"></a>

```typescript
public readonly userRef: UserReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_iam.UserReference

A reference to a User resource.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: IManagedPolicy;
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy

Returns the permissions boundary attached  to this user.

---

##### `principalAccount`<sup>Optional</sup> <a name="principalAccount" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.principalAccount"></a>

```typescript
public readonly principalAccount: string;
```

- *Type:* string

The AWS account ID of this principal.

Can be undefined when the account is not known
(for example, for service principals).
Can be a Token - in that case,
it's assumed to be AWS::AccountId.

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.accessKey"></a>

```typescript
public readonly accessKey: CfnAccessKey;
```

- *Type:* aws-cdk-lib.aws_iam.CfnAccessKey

An attribute that represents the iam access_key.

---

##### `secret`<sup>Required</sup> <a name="secret" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.secret"></a>

```typescript
public readonly secret: Secret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.Secret

An attribute that represents the secret.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.PROPERTY_INJECTION_ID">PROPERTY_INJECTION_ID</a></code> | <code>string</code> | Uniquely identifies this class. |

---

##### `PROPERTY_INJECTION_ID`<sup>Required</sup> <a name="PROPERTY_INJECTION_ID" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.PROPERTY_INJECTION_ID"></a>

```typescript
public readonly PROPERTY_INJECTION_ID: string;
```

- *Type:* string

Uniquely identifies this class.

---

## Structs <a name="Structs" id="Structs"></a>

### IamUserWithAccessKeyProps <a name="IamUserWithAccessKeyProps" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps"></a>

Properties for the IAM User.

#### Initializer <a name="Initializer" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.Initializer"></a>

```typescript
import { IamUserWithAccessKeyProps } from '@pcg-x-aws/cdk-iamuserwithaccesskey'

const iamUserWithAccessKeyProps: IamUserWithAccessKeyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.groups">groups</a></code> | <code>aws-cdk-lib.aws_iam.IGroup[]</code> | Groups to add this user to. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.managedPolicies">managedPolicies</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy[]</code> | A list of managed policies associated with this role. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.password">password</a></code> | <code>aws-cdk-lib.SecretValue</code> | The password for the user. This is required so the user can access the AWS Management Console. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.passwordResetRequired">passwordResetRequired</a></code> | <code>boolean</code> | Specifies whether the user is required to set a new password the next time the user logs in to the AWS Management Console. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.path">path</a></code> | <code>string</code> | The path for the user name. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy</code> | AWS supports permissions boundaries for IAM entities (users or roles). |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.userName">userName</a></code> | <code>string</code> | A name for the IAM user. |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | An optional custom encryption key for the secret. |

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.groups"></a>

```typescript
public readonly groups: IGroup[];
```

- *Type:* aws-cdk-lib.aws_iam.IGroup[]
- *Default:* No groups.

Groups to add this user to.

You can also use `addToGroup` to add this
user to a group.

---

##### `managedPolicies`<sup>Optional</sup> <a name="managedPolicies" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.managedPolicies"></a>

```typescript
public readonly managedPolicies: IManagedPolicy[];
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy[]
- *Default:* No managed policies.

A list of managed policies associated with this role.

You can add managed policies later using
`addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName(policyName))`.

---

##### `password`<sup>Optional</sup> <a name="password" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.password"></a>

```typescript
public readonly password: SecretValue;
```

- *Type:* aws-cdk-lib.SecretValue
- *Default:* User won't be able to access the management console without a password.

The password for the user. This is required so the user can access the AWS Management Console.

You can use `SecretValue.unsafePlainText` to specify a password in plain text or
use `secretsmanager.Secret.fromSecretAttributes` to reference a secret in
Secrets Manager.

---

##### `passwordResetRequired`<sup>Optional</sup> <a name="passwordResetRequired" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.passwordResetRequired"></a>

```typescript
public readonly passwordResetRequired: boolean;
```

- *Type:* boolean
- *Default:* false

Specifies whether the user is required to set a new password the next time the user logs in to the AWS Management Console.

If this is set to 'true', you must also specify "initialPassword".

---

##### `path`<sup>Optional</sup> <a name="path" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string
- *Default:* /

The path for the user name.

For more information about paths, see IAM
Identifiers in the IAM User Guide.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: IManagedPolicy;
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy
- *Default:* No permissions boundary.

AWS supports permissions boundaries for IAM entities (users or roles).

A permissions boundary is an advanced feature for using a managed policy
to set the maximum permissions that an identity-based policy can grant to
an IAM entity. An entity's permissions boundary allows it to perform only
the actions that are allowed by both its identity-based policies and its
permissions boundaries.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html)

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string
- *Default:* Generated by CloudFormation (recommended)

A name for the IAM user.

For valid values, see the UserName parameter for
the CreateUser action in the IAM API Reference. If you don't specify a
name, AWS CloudFormation generates a unique physical ID and uses that ID
for the user name.

If you specify a name, you cannot perform updates that require
replacement of this resource. You can perform updates that require no or
some interruption. If you must replace the resource, specify a new name.

If you specify a name, you must specify the CAPABILITY_NAMED_IAM value to
acknowledge your template's capabilities. For more information, see
Acknowledging IAM Resources in AWS CloudFormation Templates.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* The Accounts default Secret Manager KMS Key will be used.

An optional custom encryption key for the secret.

---



