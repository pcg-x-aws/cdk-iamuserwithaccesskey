const { awscdk, javascript, github } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  packageManager: javascript.NodePackageManager.NPM,
  author: 'Markus Ellers',
  authorAddress: 'm.ellers@inno-on.de',
  cdkVersion: '2.250.0',
  minNodeVersion: '18.12.0',
  majorVersion: '1',
  defaultReleaseBranch: 'main',
  releaseBranches: {
    'feature/majorVersion2': {
      majorVersion: '2',
      prerelease: true,
      workflowName: 'release-majorVersion2',
    },
  },
  name: '@innovationson/cdk-iamuserwithaccesskey',
  description: 'Creating an IAM user with access key stored in Secrets manager',
  keywords: ['IAM', 'Access Key', 'Secretsmanager'],
  repositoryUrl: 'https://github.com/innovations-on-gmbh/cdk-iamuserwithaccesskey.git',
  npmDistTag: 'latest',
  releaseToNpm: true,
  githubOptions: {
    projenCredentials: github.GithubCredentials.fromApp({
      appIdSecret: 'PROJEN_APP_ID',
      privateKeySecret: 'PROJEN_APP_PRIVATE_KEY',
    }),
    pullRequestLintOptions: {
      semanticTitleOptions: {
        types: ['feat', 'fix', 'chore', 'docs'],
      },
    },
  },
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      schedule: javascript.UpgradeDependenciesSchedule.WEEKLY,
    },
  },
  buildWorkflowOptions: {
    // Use frozen lockfile install (npm ci) on PR builds; keep package-lock.json authoritative
    mutableInstall: false,
  },
  devDeps: ['aws-cdk-lib', 'constructs', 'awslint'],
  gitignore: ['.DS_Store', '.idea', '.vscode'],
  docgen: true,
  autoApproveUpgrades: true,
  autoApproveOptions: { allowedUsernames: ['inno-projen[bot]', 'inno-projen'] },
  autoApproveProjenUpgrades: true,
  depsUpgrade: true,
  renovatebot: false,
});

// Newer versions satisfy npm peer resolution (eslint 9, jsii-rosetta ~5.9)
project.package.addDevDeps(
  'eslint-plugin-import@^2.32.0',
  'eslint-import-resolver-typescript@^4.4.4',
  'jsii-docgen@^10.11.16',
  'jsii-pacmak@^1.128.0',
  'jsii-diff@^1.128.0',
);

project.synth();
