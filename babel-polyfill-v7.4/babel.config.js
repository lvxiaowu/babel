module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: false,
        // v7.4 + 以上的配置
        corejs: {
          version: 3,
          proposals: true,
        },
        useBuiltIns: 'usage',
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
        },
      },
    ],
  ],
};
