import globals from 'globals'
import pluginJs from '@eslint/js'
import js from '@eslint/js'
import prettier from 'eslint-config-prettier'

export default [
    js.configs.recommended,
    {
        files: ['**/*.js', '**/*.mjs'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: globals.node,
        },
        rules: {
            // Add any custom rules here
            'no-unused-vars': 'warn',
        },
    },
    prettier,
    pluginJs.configs.recommended,
]
