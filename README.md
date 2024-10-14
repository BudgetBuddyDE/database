# [`@budgetbuddyde/database`](https://www.npmjs.com/package/@budgetbuddyde/database)

NPM package that provides schemas necessary for the operation of Budget-Buddy. Additionally, schemas required for the operation of the Auth-Service are generated using the [Better Auth CLI](https://www.better-auth.com/docs/concepts/cli).

## Getting started

1. Clone the repository

   ```shell
   git clone git@github.com:BudgetBuddyDE/database.git
   ```

2. Install all required dependencies

   ```shell
   npm install
   ```

3. Build the application

   > [!IMPORTANT]
   > Make sure you have the correct version of [Better Auth](https://better-auth.com) installed to generate the correct schema

   ```shell
   npm run generate-auth-schema # generate for Better Auth
   npm run build
   ```

## Publish a new version

1. Bump version

   ```shell
   npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
   ```

2. Build the package as defined under [getting-started](#getting-started)

3. Publish the new build

   ```shell
   npm publish
   ```
