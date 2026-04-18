const { awscdk, javascript, github } = require('projen');
const { YamlFile } = require('projen/lib/yaml');
const project = new awscdk.AwsCdkConstructLibrary({
  packageManager: javascript.NodePackageManager.NPM,
  // Explicit semver so devEngines.packageManager is valid for Dependabot (Projen omits version for npm by default)
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
  buildWorkflowOptions: {
    // Use frozen lockfile install (npm ci) on PR builds; keep package-lock.json authoritative
    mutableInstall: false,
  },
  // Jest 27 pulls vulnerable jsdom/http-proxy-agent; 29+ clears npm audit (use ^29.0 — projen pins ts-jest to same range)
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
  // Dependabot replaces projen upgrade workflows (mutually exclusive)
  depsUpgrade: false,
  dependabot: false,
  renovatebot: false,
});

// Corepack-style field; Dependabot expects a concrete npm@semver (not only devEngines without version)
project.package.addField('packageManager', 'npm@11.8.0');

// Two release lines: Dependabot opens PRs against each branch (lockfile-only; package.json is projen-owned)
new YamlFile(project, '.github/dependabot.yml', {
  committed: true,
  obj: {
    version: 2,
    updates: [
      {
        'package-ecosystem': 'npm',
        'directory': '/',
        'versioning-strategy': 'lockfile-only',
        'schedule': { interval: 'weekly' },
        'target-branch': 'main',
        'labels': ['auto-approve'],
        'open-pull-requests-limit': 5,
        'ignore': [{ 'dependency-name': 'projen' }],
      },
      {
        'package-ecosystem': 'npm',
        'directory': '/',
        'versioning-strategy': 'lockfile-only',
        'schedule': { interval: 'weekly' },
        'target-branch': 'feature/majorVersion2',
        'labels': ['auto-approve'],
        'open-pull-requests-limit': 5,
        'ignore': [{ 'dependency-name': 'projen' }],
      },
    ],
  },
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
