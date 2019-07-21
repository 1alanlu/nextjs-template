import dynamic from 'next/dynamic'
import Layout from '@components/Layout'
import InfiniteScrollDemo from '@components/_demo/InfiniteScrollDemo'

const DemoPageContent = () => {
  return (
    <Layout title="Demo">
      <DynamicBlock />
      <hr />
      <InfiniteScrollBlock />
    </Layout>
  )
}

const DynamicBlock = () => {
  const DynamicComponent = dynamic(() => import('@components/_demo/CandyDispenserDemo'))
  const DynamicComponentWithCustomLoading = dynamic(() => import('@components/_demo/CountContextDemo'), {
    loading: () => <p>loading...</p>,
  })
  const DynamicComponentWithNoSSR = dynamic(() => import('@components/_demo/CountContextReducerDemo'), {
    ssr: false,
  })

  return (
    <>
      <h1>DynamicComponent</h1>
      <div>
        <br />
        DynamicComponent:
        <DynamicComponent />
        <br />
        DynamicComponentWithCustomLoading:
        <DynamicComponentWithCustomLoading />
        <br />
        DynamicComponentWithNoSSR:
        <DynamicComponentWithNoSSR />
      </div>
    </>
  )
}

const InfiniteScrollBlock = () => {
  return (
    <>
      <h1>InfiniteScrollDemo</h1>
      <InfiniteScrollDemo />
    </>
  )
}

export default DemoPageContent
