// /*
//     转换 import {Button} from 'antd' ===>
//     import Button from "antd/lib/button"
// */

// import * as babel from "@babel/core";

// const originCode = `import {Button} from 'antd'`;
// let plugins = [
//   function ({ types: t }) {
//     return {
//       visitor: {
//         ImportDeclaration(path) {
//           const {
//             node: { specifiers, source },
//           } = path;
//           if (!t.isImportDefaultSpecifier(specifiers[0])) {
//             const newImport = specifiers.map((specifier) =>
//               t.ImportDeclaration(
//                 [t.ImportDefaultSpecifier(specifier.local)],
//                 t.stringLiteral(`${source.value}/lib/${specifier.local.name}`)
//               )
//             );
//             path.replaceWithMultiple(newImport);
//           }
//         },
//       },
//     };
//   },
// ];
// let { code } = babel.transform(originCode, { plugins });

// console.log(code); // import Button from "antd/lib/button"

// import * as parser from '@babel/parser';

module.exports = function ({ types: babelTypes }) {
  return {
    name: "deadly-simple-plugin-example",
    visitor: {
      Identifier(path, state) {
        console.log(path);
        if (path.node.name === "bad") {
          path.node.name = "good";
        }
      },
    },
  };
};
