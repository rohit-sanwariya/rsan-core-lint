module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: false, // Angular does not use JSX
        },
    },
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'no-console': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        'prettier/prettier': 'error',
    },
};