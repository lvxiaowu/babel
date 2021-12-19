import { parse } from '@babel/parser';
import traverse, { NodePath } from '@babel/traverse';
import { isImportDefaultSpecifier, classMethod, blockStatement, isClassMethod, isClassProperty, Identifier, expressionStatement, ClassMethod } from '@babel/types';
import generate from '@babel/generator';
import codeFrame from '@babel/code-frame';
let codeText = "\nimport fs from 'fs'\n\n@testDecorators()\nexport class Index {\n  a: number\n  private b: number = 1\n  constructor (a: number) {\n    this.a = a\n  }\n  private sum (): number {\n    return this.a + this.b\n  }\n\n  getB (): number {\n    return this.b\n  }\n\n  getSum (): number {\n    return this.sum()\n  }\n}\n";
const astTree = parse(codeText, {
  sourceType: 'module',
  plugins: ['typescript', ['decorators', {
    decoratorsBeforeExport: true
  }], 'classProperties', 'classPrivateProperties']
});
console.log(astTree);
traverse(astTree, {
  ImportDeclaration: function (path) {
    path.node.specifiers.forEach(function (specifier) {
      if (isImportDefaultSpecifier(specifier)) {
        console.log('禁止使用默认导入');
        const errorMsg = codeFrame(testText, path.node.loc.start.line, specifier.local.loc.end.column, {
          highlightCode: true
        });
        console.log(errorMsg);
      }
    });
    console.log(path.node.source.value);
  }
}); // import * as babylon from "babylon";
// const code = `function square(n) {
//   return n * n;
// }`;
// babylon.parse(code);
//# sourceMappingURL=main.mjs.map