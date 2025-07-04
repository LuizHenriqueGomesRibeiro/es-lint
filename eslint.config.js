import defaultExportComponentRule from './eslint-rules/default-export-component.js'
import defaultExportHookRule from './eslint-rules/default-export-hook.js'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'
import globals from 'globals'
import js from '@eslint/js'

import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    files: ['src/packages/core/hooks/**/*.{tsx}'],
    rules: {
      'custom/default-export-hook': 'error',
    },
    plugins: {
      custom: {
        rules: {
          'default-export-hook': defaultExportHookRule,
        },
      },
    },
  },
  {
    files: ['src/packages/ui/components/**/*.{ts,tsx}'],
    rules: {
      'custom/default-export-component': 'error',
    },
    plugins: {
      custom: {
        rules: {
          'default-export-component': defaultExportComponentRule,
        },
      },
    },
  },
])
