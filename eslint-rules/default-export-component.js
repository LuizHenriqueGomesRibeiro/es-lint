/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Força exportação default para componentes React',
    },
    schema: [],
  },
  create(context) {
    return {
      ExportNamedDeclaration(node) {
        if (
          node.declaration &&
          (node.declaration.type === 'FunctionDeclaration' ||
            node.declaration.type === 'VariableDeclaration')
        ) {
          context.report({
            node,
            message: 'Componentes devem ser exportados como default.',
          });
        }
      },
    };
  },
};
