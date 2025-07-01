/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Permite apenas export default function anônima com return explícito',
    },
    schema: [],
  },
  create(context) {
    return {
      ExportDefaultDeclaration(node) {
        const decl = node.declaration

        const isAnonymousFunction =
          decl?.type === 'FunctionDeclaration' && decl.id === null

        const hasReturn =
          decl?.body?.type === 'BlockStatement' &&
          decl.body.body.some((stmt) => stmt.type === 'ReturnStatement')

        if (!isAnonymousFunction || !hasReturn) {
          context.report({
            node,
            message: 'Somente export default function anônima com return explícito é permitida.',
          })
        }
      },

      ExportNamedDeclaration(node) {
        context.report({
          node,
          message: 'Somente export default é permitido em hooks.',
        })
      },
    }
  },
}
