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

The mixins to apply.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

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

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pcg-x-aws/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
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



