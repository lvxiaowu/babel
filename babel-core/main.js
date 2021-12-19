import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import { isImportDefaultSpecifier } from '@babel/types';
import codeFrame from '@babel/code-frame';

let codeText = `
import fs from 'fs'

@testDecorators()
export class Index {
  a: number
  private b: number = 1
  constructor (a: number) {
    this.a = a
  }
  private sum (): number {
    return this.a + this.b
  }

  getB (): number {
    return this.b
  }

  getSum (): number {
    return this.sum()
  }
}
`;

const astTree = parse(codeText, {
  sourceType: 'module',
  plugins: [
    'typescript',
    ['decorators', { decoratorsBeforeExport: true }],
    'classProperties',
    'classPrivateProperties',
  ],
});

traverse(astTree, {
  ImportDeclaration: (path) => {
    path.node.specifiers.forEach((specifier) => {
      if (isImportDefaultSpecifier(specifier)) {
        console.log('禁止使用默认导入');
        const errorMsg = codeFrame(
          testText,
          path.node.loc.start.line,
          specifier.local.loc.end.column,
          {
            highlightCode: true,
          }
        );
        console.log(errorMsg);
      }
    });
    console.log(path.node.source.value);
  },
});

// import * as babylon from "babylon";

// const code = `function square(n) {
//   return n * n;
// }`;

// babylon.parse(code);
