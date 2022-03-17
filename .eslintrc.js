const path = require('path');


const extensions = ['.js', '.ts', '.tsx', '.json', '.css', '.scss'];

const customHooksWithDeps = [
    'useUpdateOnlyEffect',
    // 'useSelector',
    // 'useAction',
];

module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['airbnb'],
    settings: {
        'import/extensions': extensions,
        'import/resolver': {
            alias: {
                map: [
                    ['Modules', path.join(__dirname, 'src')],
                ],
                extensions,
            },
            node: {
                extensions,
            },
        },
        'import/core-modules': [
            'redux-saga/effects',
        ],
    },

    plugins: [
        '@typescript-eslint',
        'react-hooks',
    ],
    globals: {
        window: true,
        document: true,
        __dirname: true,
        process: true,
        jest: true,
        describe: true,
        test: true,
        it: true,
        expect: true,
        beforeEach: true,
        File: true,

        // typescript
        Element: true,
        HTMLElement: true,
        HTMLDivElement: true,
        HTMLInputElement: true,
        HTMLButtonElement: true,
        HTMLSelectElement: true,
        HTMLAnchorElement: true,
        Event: true,
        MouseEvent: true,
        TimerHandler: true,
        DOMRect: true,
        JSX: true,
        NodeJS: true,
    },
    rules: {
        'max-len': ['warn', {
            code: 100,
            tabWidth: 4,
            ignoreUrls: true,
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        'linebreak-style': 'off',

        'no-debugger': 'warn',

        indent: 'off',
        '@typescript-eslint/indent': ['error', 4, {
            SwitchCase: 1,
        }],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
        }],
        '@typescript-eslint/member-delimiter-style': ['error', {
            multiline: {
                delimiter: 'semi',
                requireLast: true,
            },
            singleline: {
                delimiter: 'comma',
                requireLast: false,
            },
        }],
        '@typescript-eslint/no-use-before-define': ['error'],

        'no-use-before-define': 'off',
        'no-continue': 'off',
        'no-empty': ['error', {
            allowEmptyCatch: true,
        }],
        'no-extra-parens': ['warn', 'all', {
            ignoreJSX: 'all',
        }],
        'operator-linebreak': ['error', 'after', {
            overrides: {
                '?': 'before',
                ':': 'before',
            },
        }],
        'no-restricted-syntax': 'off',
        'no-mixed-operators': 'off',
        'no-console': 'off',
        'no-shadow': 'off',
        'no-nested-ternary': 'off',
        'no-confusing-arrow': 'off',
        'no-multiple-empty-lines': ['error', {
            max: 2,
        }],
        'no-plusplus': 'off',

        'no-underscore-dangle': 'off',
        'implicit-arrow-linebreak': 'off',
        'prefer-destructuring': ['error', {
            VariableDeclarator: {
                array: false,
                object: true,
            },
            AssignmentExpression: {
                array: false,
                object: false,
            },
        }],

        'global-require': 'off',
        'import/no-dynamic-require': 'off',
        'import/prefer-default-export': 'off',
        'import/newline-after-import': ['error', {
            count: 2,
        }],
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: true,
        }],
        'import/order': ['warn', {
            pathGroups: [
                {
                    pattern: '@factorin/**',
                    group: 'external',
                },
            ],
            groups: [
                ['builtin', 'external'],
                'internal',
                ['parent', 'sibling', 'index'],
            ],
            'newlines-between': 'always',
        }],
        'import/first': 'off',
        'import/no-unresolved': ['warn', {
            commonjs: true,
            caseSensitive: true,
            ignore: ['/packages/container/macro'],
        }],
        'import/extensions': 'off',
        'import/no-default-export': 'off',

        'arrow-parens': ['error', 'as-needed', {
            requireForBlockBody: false,
        }],
        'no-param-reassign': ['error', {
            props: false,
        }],
        'max-classes-per-file': 'off',

        'object-curly-newline': ['error', {
            multiline: true,
            consistent: true,
        }],
        'nonblock-statement-body-position': ['error', 'below'],
        curly: ['error', 'multi-or-nest'],
        // 'quote-props': [2, 'consistent-as-needed'],

        'react/jsx-props-no-spreading': 'off',
        'react/jsx-filename-extension': ['error', {
            extensions: ['.js', '.tsx'],
        }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-curly-newline': 'off',
        'react/destructuring-assignment': 'off',
        'react/prop-types': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': ['warn', {
            additionalHooks: `^(${customHooksWithDeps.join('|')})$`,
        }],
        'react/jsx-props-no-multi-spaces': 'off',
        'react/no-multi-comp': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
        'react/no-array-index-key': 'off',
        'react/button-has-type': 'off',
        'react/sort-comp': ['error', {
            order: [
                'instance-variables',
                'static-methods',
                'lifecycle',
                'everything-else',
                'rendering',
            ],
            groups: {
                rendering: [
                    '/^render.+$/',
                    'render',
                ],
            },
        }],
        'react/require-default-props': 'off',
        'react/state-in-constructor': ['error', 'never'],
        'react/static-property-placement': ['error', 'static public field'],
        'react/no-unused-prop-types': 'off',
        'react/default-props-match-prop-types': 'off',

        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
    },
    overrides: [
        {
            files: ['*.ts', '*.d.ts', '*.tsx'],
            rules: {
                'import/named': 'off',
                'no-redeclare': 'off',
                'import/export': 'off',
                'import/no-unresolved': 'off',
            },
        },
        {
            files: ['*.stories.tsx', '*.stories.js'],
            rules: {
                'import/no-default-export': 'off',
            },
        },
    ],
};
