module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: false,
        useBuiltIns: 'usage',
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
        },
      },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime', // 避免全局导入，污染全局
      {
        corejs: 2, // 参考官方文档
      },
    ],
  ],
};

// @babel/plugin-transform-runtime, 依赖 @babel/runtime-xx
// corejs:fasle,默认    安装 @babel/runtime
// corejs:2             安装 @babel/runtime-corejs2   only supports global variables (e.g. Promise) and static properties (e.g. Array.from),
// corejs:3             安装 @babel/runtime-corejs2   also supports instance properties (e.g. [].includes).
