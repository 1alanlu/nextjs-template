module.exports = {
  root: true,
  parser: 'babel-eslint', // 解決 ES6 import 會報錯
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true, // 如果不配置browser，window就會被eslint報undefined的錯誤
    node: true,
    commonjs: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y', 'import'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/ignore': ['node_modules', '\\.(scss|less|css)$'],
    // Aliases help with shortening relative paths
    'import/resolver': {
      webpack: {
        config: './config/configForEslintImportResolver.js',
      },
      node: {
        moduleDirectory: ['./src/components'],
      },
    },
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'prettier/prettier': 'error',
    // react 如果在項目中文件名後綴是 .js 而不是 .jsx 避免報錯
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // react props validation 錯誤
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/destructuring-assignment': 0,
    // 'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': 'warn',
    'func-names': 0,
    // "generator-star-spacing": 0,
    'jsx-a11y/anchor-is-valid': 0,
    /* 'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ], */
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
}
