/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Permitir somente export default com arrow function anônima com retorno JSX implícito',
    },
    schema: [],
  },
  create(context) {
    return {
      ExportDefaultDeclaration(node) {
        const decl = node.declaration

        if (decl.type !== 'ArrowFunctionExpression') {
          context.report({
            node,
            message: 'Somente arrow function anônima com retorno JSX implícito é permitida no export default.',
          })
          return
        }

        const isJSX =
          decl.body.type === 'JSXElement' || decl.body.type === 'JSXFragment'

        if (!isJSX) {
          context.report({
            node,
            message: 'Arrow function deve ter retorno implícito JSX (sem chaves e return).',
          })
        }
      },

      ExportNamedDeclaration(node) {
        context.report({
          node,
          message: 'Somente export default é permitido. Exporte componentes apenas como export default.',
        })
      },
    }
  },
}
