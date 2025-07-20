module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
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
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'no-console': 'warn',
        'react/prop-types': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        'prettier/prettier': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};