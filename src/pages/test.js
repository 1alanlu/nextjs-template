import getConfig from 'next/config'
import { useRouter } from 'next/router'
import Layout from '@components/Layout'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
// Only holds serverRuntimeConfig and publicRuntimeConfig from next.config.js nothing else.
// const { projectName, staticFolder } = publicRuntimeConfig
console.log('serverRuntimeConfig', serverRuntimeConfig)
console.log('publicRuntimeConfig', publicRuntimeConfig)

const TestPageContent = ({ userAgent = '' }) => {
  return (
    <Layout title="測試">
      <h1>userAgent</h1>
      <div>{userAgent}</div>
      <hr />
      <ENVBlock />
      <hr />
      <RouterBlock />
    </Layout>
  )
}

// 請注意，要在頁面加載時加載數據，我們使用的getInitialProps是async靜態方法。
// 它可以異步獲取解析為Object填充的JavaScript平面的任何內容props。

// 返回的數據getInitialProps在服務器渲染時被序列化，類似於JSON.stringify。
// 確保返回的getInitialProps對像是普通的Object而不是使用Date，Map或Set。

// getInitialProps 只會在第一次載入頁面時在伺服器端執行. 而在用戶端則只在使用 Link 瀏覽其他路徑或使用路由API時執行
// 另外, getInitialProps 不可使用在子元件上, 只能在頂層 pages 使用.

/*
getInitialProps 會接收到一個context物件, 這個物件有如下屬性:
  pathname - URL 的 path
  query - URL的查詢字串 (object)
  asPath- 整行路徑的字串
  req - HTTP請求對象（僅限服務器）
  res - HTTP響應對象（僅限服務器）
  err - 如果在渲染過程中遇到任何錯誤，則為Error對象
*/
TestPageContent.getInitialProps = async ({ req }) => {
  await new Promise(resolve => {
    setTimeout(resolve, 3000)
  })
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

const ENVBlock = () => {
  return (
    <>
      <h1>ENV</h1>
      <p>NODE_ENV={process.env.NODE_ENV}</p>
      <p>PORT={process.env.PORT}</p>
      <p>VERSION={process.env.VERSION}</p>

      <p>SITE_URL={process.env.SITE_URL}</p>
      <p>SITE_NAME={process.env.SITE_NAME}</p>
      <p>PROFILE_NAME={process.env.PROFILE_NAME}</p>

      <p>LOCATION_PREFIX={process.env.LOCATION_PREFIX}</p>
      <p>STATIC_FOLDER={process.env.STATIC_FOLDER}</p>
      <p>GA_TRACKING_ID={process.env.GA_TRACKING_ID}</p>

      <p>TAB_CONTAINER_HEIGHT={process.env.TAB_CONTAINER_HEIGHT}</p>
      <p>TRIGGER_OFFSET={process.env.TRIGGER_OFFSET}</p>
    </>
  )
}

const RouterBlock = () => {
  const router = useRouter()
  // console.log('query', router.query)

  return (
    <>
      <h1>router</h1>
      <div>
        <p>pathname: {router.pathname}</p>
        <p>route: {router.route}</p>
        <p>asPath: {router.asPath}</p>
        <p>
          query:
          {Object.keys(router.query).map(key => {
            return <span key={key}> {`${key}=${router.query[key]}`} &</span>
          })}
        </p>
      </div>
    </>
  )
}
export default TestPageContent
