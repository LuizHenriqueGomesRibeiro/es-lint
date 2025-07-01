/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Aceitar somente export default function anônima',
    },
    schema: [],
  },
  create(context) {
    return {
      ExportDefaultDeclaration(node) {
        const decl = node.declaration

        if (
          decl.type === 'FunctionDeclaration' &&
          decl.id !== null
        ) {
          context.report({
            node,
            message: 'Só é permitido export default function anônima, sem nome.',
          })
        }
      },
      ExportNamedDeclaration(node) {
        context.report({
          node,
          message: 'Componentes devem ser exportados como default.',
        })
      },
    }
  },
}
