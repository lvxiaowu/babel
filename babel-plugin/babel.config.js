module.exports = {
  // presets: [
  //   [
  //     '@babel/preset-env',
  //     {
  //       debug: false,
  //       useBuiltIns: 'usage',
  //       targets: {
  //         browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
  //       },
  //     },
  //   ],
  // ],
  plugins: [
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-template-literals',
  ],
};
