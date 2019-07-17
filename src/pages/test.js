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
    <Layout>
      <h1>userAgent</h1>
      <div>{userAgent}</div>
      <hr />
      <ENVBlock />
      <hr />
      <RouterBlock />
    </Layout>
  )
}

TestPageContent.getInitialProps = async ({ req }) => {
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
      <p>BACKEND_URL={process.env.BACKEND_URL}</p>
      <p>FRONTEND_URL={process.env.FRONTEND_URL}</p>
      <p>STATIC_FOLDER={process.env.STATIC_FOLDER}</p>
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
