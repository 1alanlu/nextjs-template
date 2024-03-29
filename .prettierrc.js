module.exports = {
  printWidth: 120, // 一行最大多少字符
  tabWidth: 2, // 標籤佔用的字符數
  useTabs: false, // 是否使用tab代替空格
  semi: false, // 是否每句後都加分號
  singleQuote: true, // 是否使用單引號
  jsxSingleQuote: false, // jsx是否使用單引號
  trailingComma: 'es5', // 數組尾逗號。
  bracketSpacing: true, // { foo: bar }還是{foo: bar}
  jsxBracketSameLine: false, // 將>多行JSX元素放在最後一行的末尾，而不是單獨放在下一行（不適用於自閉元素）。
  arrowParens: 'avoid', // 剪頭函數參數是否使用（）
  requirePragma: false, // 需要編譯指示
  insertPragma: false, // 插入Pragma
  proseWrap: 'preserve',
  endOfLine: 'crlf', // 行結尾的風格
}
