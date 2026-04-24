const { awscdk, javascript, github } = require('projen');
const { YamlFile } = require('projen/lib/yaml');

const RELEASE_PUSH_BRANCHES = ['main', 'feature/majorVersion2'];
const DEPENDABOT_BRANCHES = ['main', 'feature/majorVersion2'];

const project = new awscdk.AwsCdkConstructLibrary({
  packageManager: javascript.NodePackageManager.NPM,
  devEngines: {
    packageManager: {
      name: 'npm',
      version: '11.8.0',
      onFail: 'ignore',
    },
  },
  author: 'Markus Ellers',
  authorAddress: 'm.ellers@inno-on.de',
  cdkVersion: '2.250.0',
  minNodeVersion: '22.14.0',
  majorVersion: '1',
  defaultReleaseBranch: 'main',
  releaseBranches: {
    'feature/majorVersion2': {
      majorVersion: '2',
      prerelease: true,
      workflowName: 'release-majorVersion2',
    },
  },
  name: '@pcg-x-aws/cdk-iamuserwithaccesskey',
  description: 'Creating an IAM user with access key stored in Secrets manager',
  keywords: ['IAM', 'Access Key', 'Secretsmanager'],
  repositoryUrl: 'https://github.com/pcg-x-aws/cdk-iamuserwithaccesskey.git',
  npmDistTag: 'latest',
  npmAccess: javascript.NpmAccess.PUBLIC,
  npmTrustedPublishing: true,
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
  buildWorkflowOptions: {
    mutableInstall: false,
  },
  jestOptions: {
    jestVersion: '^29.0.0',
  },
  devDeps: ['aws-cdk-lib', 'constructs', 'awslint'],
  gitignore: ['.DS_Store', '.idea', '.vscode'],
  docgen: true,
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['inno-projen[bot]', 'inno-projen', 'dependabot[bot]'],
  },
  autoApproveProjenUpgrades: true,
  depsUpgrade: false,
  dependabot: false,
  renovatebot: false,
});

project.package.addField('packageManager', 'npm@11.8.0');

new YamlFile(project, '.github/dependabot.yml', {
  committed: true,
  obj: {
    version: 2,
    updates: DEPENDABOT_BRANCHES.map((targetBranch) => ({
      'package-ecosystem': 'npm',
      directory: '/',
      'versioning-strategy': 'lockfile-only',
      schedule: { interval: 'weekly' },
      'target-branch': targetBranch,
      labels: ['auto-approve'],
      'open-pull-requests-limit': 5,
      ignore: [{ 'dependency-name': 'projen' }],
    })),
  },
});

project.package.addDevDeps(
  'eslint-plugin-import@^2.32.0',
  'eslint-import-resolver-typescript@^4.4.4',
  'jsii-docgen@^10.11.16',
  'jsii-pacmak@^1.128.0',
  'jsii-diff@^1.128.0',
);

const gh = github.GitHub.of(project);

// One workflow file for npm Trusted Publishing: push for both lines runs `release.yml` only.
const releaseWf = gh?.tryFindWorkflow('release')?.file;
releaseWf?.addOverride('on.push.branches', RELEASE_PUSH_BRANCHES);
releaseWf?.addOverride(
  'jobs.release.steps.4.run',
  [
    'set -euo pipefail',
    'if [ "${GITHUB_REF}" = "refs/heads/main" ]; then',
    '  npx projen release',
    'elif [ "${GITHUB_REF}" = "refs/heads/feature/majorVersion2" ]; then',
    '  npx projen release:feature/majorVersion2',
    'else',
    '  echo "Unexpected ref: ${GITHUB_REF}" >&2',
    '  exit 1',
    'fi',
  ].join('\n'),
);

// Projen still emits this workflow for the v2 line; disable push so it does not compete with `release.yml`.
gh?.tryFindWorkflow('release-majorVersion2')?.file?.addDeletionOverride('on.push');

// npm OIDC: never use setup-node registry-url (injects NODE_AUTH_TOKEN=github.token → E404 on publish).
// npm >= 11.5 for trusted publishing; Node 22 still ships npm 10.x.
releaseWf?.addDeletionOverride('jobs.release_npm.steps.0.with.registry-url');
releaseWf?.addOverride(
  'jobs.release_npm.steps.9.run',
  'npm install -g npm@^11.5.1 && npx -p publib@latest publib-npm',
);

project.synth();
