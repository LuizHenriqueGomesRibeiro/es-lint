import defaultExportComponentRule from './eslint-rules/default-export-component.js'
import reactRefresh from 'eslint-plugin-react-refresh'
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
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    files: ['src/components/**/*.{ts,tsx}'],
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
