# Ecommerce

Click [https://main.d26n91xt1o9he3.amplifyapp.com/](https://main.d26n91xt1o9he3.amplifyapp.com/) to see the results.

## Stack

1. Next.js 15.
2. Vitest for testing.
3. TailwindCSS

## AWS

Deployed this application on AWS Amplify with the help of CI. You can checkout the github workflow files @ <https://github.com/ankurnecessary/ecommerce/blob/main/.github/workflows/main.yml>

## Commands

```bash
npm run dev
```

This will run the project in development mode.

```bash
npm run build
```

This command will prepare a build of the project.

```bash
npm run start
```

This will run the project from the most recent build in .next folder.

```bash
npm run lint
```

This command will lint the code of whole project.

```bash
npm run lint:fix
```

This command will fix all the lint bugs which are auto-fixable.

```bash
npm run lint:strict
```

This command will strictly run the lint only on the files that we are actullay coding.

```bash
npm run prettier
```

This command will format the code.

```bash
npm run test
```

This command will run the unit test cases in watch mode.

```bash
npm run coverage
```

This command will run the unit test cases once and generate a coverage report in the end. Good for CI.
