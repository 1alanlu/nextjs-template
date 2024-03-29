import { useRouter } from 'next/router'
import Layout from '@components/Layout'

const Content = () => {
  const router = useRouter()
  console.log(router)
  return (
    <>
      <h1>{router.query.title}</h1>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </>
  )
}

const Page = () => (
  <Layout>
    <Content />
  </Layout>
)

Page.getInitialProps = () => {
  return {}
}

export default Page
