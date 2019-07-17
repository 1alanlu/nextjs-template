# Next.js Template

## Folder Structure

```
.
├── .vscode/ (vscode 配置)
│
├── config/ (其他配置)
│   ├── configForEslintImportResolver.js (別名 配置)
│   └── next.runtimeConfig.js (*NextJS 執行期配置)
│
├── node_modules/ (安裝套件)
│
├── server/ (服務端)
│   ├── models/
│   ├── routes/
│   └── index.js
│
├── src/
│   │
│   ├── assets/ (資源)
│   │   │
│   │   ├── sass/ (樣式庫)
│   │   │   ├── base/ (基礎樣式)
│   │   │   ├── components/ (組件樣式)
│   │   │   ├── helpers/ (樣式工具庫)
│   │   │   ├── pages/ (頁面樣式)
│   │   │   ├── vendors/ (第三方套件樣式)
│   │   │   ├── vendors-extensions/ (第三方套件樣式修改)
│   │   │   ├── helpers.scss (工具樣式入口)
│   │   │   └── main.scss (主要樣式入口)
│   │   │
│   │   └── utils/ (工具庫)
│   │       ├── common/ (通用工具)
│   │       ├── hooks/ (Hooks工具)
│   │       └── vendors/ (第三方工具)
│   │
│   ├── build/ (建置)
│   │
│   ├── components/ (公用組件)
│   │   ├── _demo/ (示範組件)
│   │   ├── container/ (容器組件)
│   │   ├── presentational/ (展示組件)
│   │   └── Layout.js (佈局)
│   │
│   ├── context/ (上下文)
│   │
│   ├── out/ (輸出)
│   │
│   ├── pages/ (頁面路由)
│   │   ├── _app.js
│   │   ├── _document.js
│   │   ├── _error.js
│   │   └── index.js
│   │
│   └── static/ (靜態資源)
│       ├── data/ (json資料庫)
│       ├── fonts/ (字型庫)
│       ├── images/
│       ├── svg/
│       └── favicon.ico
│
├── .babelrc.js (babel 配置)
├── .editorconfig (團隊統一的寫作規範)
├── .env (* 環境變數)
├── .eslintignore (Eslint ignore)
├── .eslintrc.js (Eslint 配置)
├── .gitattributes (git 規則)
├── .gitignore (git ignore)
├── .postcssrc.js (PostCss 配置)
├── .prettierignore (Prettier ignore)
├── .prettierrc.js (Prettier 配置)
├── .stylelintignore (Stylelint ignore)
├── .stylelintrc.js (Stylelint 配置)
├── jsconfig.json (指定根文件和JavaScript的語言服務提供的功能選項)
├── LICENSE (版權聲明)
├── next.config.js (* NextJS 配置)
├── now.json
├── package.json (專案 配置)
├── README.md
└── yarn.lock
```
