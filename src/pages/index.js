import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import Layout from '@components/Layout'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const PostLink = ({ post }) => (
  <li>
    <Link href="/p/[id]" as={`${process.env.LOCATION_PREFIX}/p/${post.id}`} prefetch={false}>
      <a>{post.name}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

const Index = ({ shows }) => (
  <Layout>
    <Title>Batman TV Shows</Title>
    <ul>
      {shows.map(show => (
        <PostLink key={show.id} post={show} />
      ))}
    </ul>
    <style jsx>{`
      h1,
      a {
        font-family: 'Arial';
      }

      ul {
        padding: 0;
      }
    `}</style>
  </Layout>
)

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data.map(entry => entry.show),
  }
}

export default Index
