# Babel 组成

1. @babel/core 抽象语法树转换的核心
2. @babel/cli 命令行工具，执行编译
3. @babel/plugin\* Babel 插件机制，每一个语法对应一个插件
4. @babel/preset-env Babel 插件的集合，避免一个一个的配置
5. @babel/polyfill(v7.4.0 起已废弃，core-js、regenerator-runtime 代替) --> 把浏览器不支持的 API，导入到项目中，可以全部导入，也可以按需导入
6. @babel/plugin-transform-runtime 缩减代码，解决 polyfill 直接修改 API 带来的全局污染的问题

> babel7 废弃了@babel/polyfill,转而使用 core-js 和 regenerator-runtime

## @babel/core

babel 编译器,被拆分三个模块：@babel/parser，@babel/traverse，@babel/generator
@babel/parser:接受源码，进行词法分析、语法分析，生成 AST。
@babel/traverse：接受一个 AST，并对其遍历，根据 preset、plugin 进行逻辑处理，进行替换、删除、添加节点。
@babel/generator：接受最终生成的 AST，并将其转换为代码字符串，同时此过程也可以创建 source map。
babel 转码流程：input string -> @babel/parser parser-> AST -> transformer[s] -> AST ->@babel/generator -> output string。

![Image text](https://pic1.zhimg.com/80/v2-de37f03d1e870958b3152cc4d323c263_720w.jpg?source=1940ef5c)

## @babel/cli

[使用参考](https://blog.csdn.net/qdmoment/article/details/106218299)

> @babel/cli 是 babel 自带的命令行集成工具,执行编译

```js
npm install --save-dev @babel/core @babel/cli
```

```js
babel main
```

## @babel/plugin

> Babel 是代码转换器，比如将 ES6 转成 ES5，或者将 JSX 转成 JS 等。借助 Babel，开发者可以提前用上新的 JS 特性，这对生产力的提升大有帮助。
> 实现 Babel 代码转换功能的核心，就是 Babel 插件（plugin）。
> 原始代码 --> [Babel Plugin] --> 转换后的代码

## @babel/preset-env

> 上面提到过 @babel/preset-\* 其实是转换插件的集合，最常用的就是 @babel/preset-env，它包含了 大部分 ES6 的语法，具体包括哪些插件，可以在 Babel 的日志中看到。如果源码中使用了不在 @babel/preset-env 中的语法，会报错，手动在 plugins 中增加即可。

## @babel/preset-env、@babel/plugin 执行顺序

1. 先执行 plugin 的配置项、再执行 preset 的配置项
2. plugin 配置项，按照声明的顺序执行
3. preset 配置项，按照声明逆序执行

## @babel/polyfill

[使用参考](https://segmentfault.com/a/1190000023077637)

`Babel` 只是转换 `syntax` 层语法,所有需要 `@babel/polyfill` 来处理 API 兼容,
又因为 `polyfill` 体积太大，所以通过 `preset`的 useBuiltIns 来实现按需加载,
再接着为了满足 npm 组件开发的需要 出现了 `@babel/runtime` 来做隔离

语法层： let、const、class、箭头函数等，这些需要在构建时进行转译，是指在语法层面上的转译
api 方法层：Promise、includes、map 等，这些是在全局或者 Object、Array 等的原型上新增的方法，它们可以由相应 es5 的方式重新定义

1. babel v7.4.0 前

`import "@bable/polyfill"`

2. babel v7.4.0 后
   上面我们通过 import "@bable/polyfill" 的方式来实现针对 api 层面的“抹平”。然而从 babel v7.4.0 开始官方就不建议采取这样的方式了。
   因为引入 @bable/polyfill 就相当于在代码中引入下面两个库
   `import "core-js/stable"; `
   `import "regenerator-runtime/runtime";`

   这意味着不仅不能按需加载还有全局空间被污染的问题。因为他是通过向全局对象和内置对象的 prototype 上添加方法来实现的。

2.1 useBuiltIns 设置

`false` 是默认值,表示啥也不干

`entry`表示就是把全部 `@babel/polyfill` 全部一次性引入

`usage` 的意思是 按需加载 ,把上面 改成 `"useBuiltIns": "usage"` 打包出来如下

```js
.babelrc
{
   "presets": [
       [
           "@babel/preset-env",
           {
               "useBuiltIns": "usage",
                "corejs": 3,
               "targets":{
                   "browsers":["> 1%"]
               }
           }
       ]
   ]

}
```

## @babel/plugin-transform-runtime

除了 require 的部分，还多了好多自定义的函数。如果每一个转换后的文件中都存在相同的函数，那岂不是浪费了，怎么才能把重复的函数去掉呢？

1. 对辅助函数的复用，解决转译语法层时出现的代码冗余
2. 解决转译 api 层出现的全局变量污染

## 插件开发

1. [插件官方文档](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)

2. [ast 在线转换](https://astexplorer.net/#/Z1exs6BWMq)

## 相关文章

1. [https://www.wenjiangs.com/doc/babel](https://www.wenjiangs.com/doc/babel)
