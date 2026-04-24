# Contributing

We love pull requests. Here's a quick guide.

1. Fork, clone and branch off `main`:

    ```bash
    git clone git@github.com:pcg-x-aws/cdk-iamuserwithaccesskey.git
    git checkout -b <my-branch>
    ```

2. Install the repository dependencies: `npm ci` (or `npm install` if you do not have a lockfile yet).
3. Make your changes.
4. Test your changes using CDK commands such as `cdk synth`, `cdk diff`, and `cdk deploy`
5. Ensure the unit tests pass:

    ```bash
    npm test
    ```

6. Push to your fork and submit a pull request

At this point you're waiting on us. We may suggest some changes or improvements or alternatives.
