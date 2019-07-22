# NextJs 模板 (Next.js Template)

## 內容

### 基本 (Base)

- [x] ESlint + StyleLint + Prettier
- [x] husky + lint-staged
- [x] scss(module) / styled-components

### 附加 (Bonus)

- [x] GA (Google Analytics)
- [x] SEO (Search Engine Optimization)
- [x] AOS (Animate On Scroll Library)

### 佈署 (Deploy)

- [x] GitHub 分支 (git push origin gh-pages)
- [ ] ZEIT Now

### 其他 (Other)

- [ ] AMP (Accelerated Mobile Pages)
- [ ] PWA (Progressive Web App)

## Folder Structure

```bash
.
├── .vscode/ (vscode 配置)
│
├── config/ (配置)
│   ├── runtime/ (執行期)
│   │   ├── configForEslintImportResolver.js (別名 配置)
│   │   └── next.runtimeConfig.js (*NextJS 執行期配置)
│   ├── aos.config.js (動畫 配置)
│   ├── seo.config.js (SEO 配置)
│   └── [...]
│
├── node_modules/ (安裝套件)
│
├── server/ (服務端)
│   └── index.js
│
├── src/
│   │
│   ├── api/ (API統一管理)
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
│   │       ├── vendors/ (第三方工具)
│   │       ├── gtag.js (GA)
│   │       └── [...]
│   │
│   ├── build/ (建置)
│   │
│   ├── components/ (公用組件)
│   │   ├── _demo/ (示範組件)
│   │   ├── container/ (容器組件)
│   │   ├── presentational/ (展示組件)
│   │   ├── Layout.js (佈局)
│   │   └── [...]
│   │
│   ├── context/ (上下文)
│   │
│   ├── out/ (輸出)
│   │
│   ├── pages/ (頁面路由)
│   │   ├── api/ (API路由)
│   │   ├── _app.js
│   │   ├── _document.js
│   │   ├── _error.js
│   │   ├── index.js
│   │   └── [...]
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

### 操作

#### 初始安裝

```bash
yarn
yarn deploy:setup
```

#### 建置佈署

```bash
yarn qq
yarn deploy
```
