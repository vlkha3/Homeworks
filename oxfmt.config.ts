import { defineConfig } from 'oxfmt'

export default defineConfig({
	semi: false,
	singleQuote: true,
	trailingComma: 'all',

	htmlWhitespaceSensitivity: 'ignore',
	singleAttributePerLine: true,

	sortImports: {
		groups: [
			'type-import',
			['value-builtin', 'value-external'],
			'type-internal',
			'value-internal',
			['type-parent', 'type-sibling', 'type-index'],
			['value-parent', 'value-sibling', 'value-index'],
			'unknown',
		],
	},

	ignorePatterns: ['pnpm-lock.yaml', 'public/'],
})
