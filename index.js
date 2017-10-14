module.exports = {
    extends: ['eslint:recommended', 'google'],
    parser: 'babel-eslint',
    globals: {
        Promise: false
    },
    env: {
        node: true
    },
    rules: {
        'max-len': [2, {
              code: 100,
              tabWidth: 4,
              ignoreUrls: true,
              ignorePattern: '^goog.(module|require)'
            }],
        'comma-dangle': ['error', 'never']
    }
};
