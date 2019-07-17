import dynamic from 'next/dynamic'
import Markdown from 'react-markdown'
import Layout from '@components/Layout'
import InfiniteScrollDemo from '@components/_demo/InfiniteScrollDemo'

const DemoPageContent = () => {
  return (
    <Layout>
      <DynamicBlock />
      <hr />
      <MarkdownBlock />
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

const MarkdownBlock = () => {
  return (
    <>
      <h1>Markdown</h1>
      <div className="markdown">
        <Markdown
          source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
    `}
        />
      </div>
      <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
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
