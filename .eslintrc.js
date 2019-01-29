module.exports = {
    root: true,
    // 解析器，这里我们使用babel-eslint
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module'
    },
    // required to lint *.vue files
    plugins: [
      'html'
    ],
    // add your custom rules here
    'rules': {
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
  }