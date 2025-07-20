# Core Lint

Core Lint is a monorepo workspace that provides shared linting configurations for JavaScript, TypeScript, and CSS projects. This repository includes configurations for ESLint, Prettier, and Stylelint, allowing developers to maintain consistent coding standards and formatting across their projects.

## Packages

### ESLint Config
- **Location**: `packages/eslint-config`
- **Description**: This package exports an ESLint configuration object that defines rules and settings for linting JavaScript and TypeScript projects.

### Prettier Config
- **Location**: `packages/prettier-config`
- **Description**: This package exports a Prettier configuration object that specifies formatting rules for code.

### Stylelint Config
- **Location**: `packages/stylelint-config`
- **Description**: This package exports a Stylelint configuration object that defines rules and settings for linting CSS and other stylesheets.

## Installation

To install the Core Lint workspace, clone the repository and run the following command in the root directory:

```
npm install
```

## Usage

After installation, you can use the configurations in your projects by installing the respective packages. For example, to use the ESLint configuration, you can add it to your project's ESLint configuration file:

```json
{
  "extends": "@your-scope/eslint-config"
}
```

Replace `@your-scope` with the appropriate scope if you are using scoped packages.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.