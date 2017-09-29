module.exports = {
    extends: 'airbnb-base',

    rules: {
        indent: ['error', 4],
        'comma-dangle': ['error', 'never'],
        'no-underscore-dangle': ['error', { allowAfterThis: true }],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'prefer-destructuring': [0]
    }
};
