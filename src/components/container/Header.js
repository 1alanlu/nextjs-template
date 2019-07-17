import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
}

const Header = () => (
  <div>
    <Link href="/" as={`${process.env.FRONTEND_URL}/`}>
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about" as={`${process.env.FRONTEND_URL}/about`}>
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/demo" as={`${process.env.FRONTEND_URL}/demo`}>
      <a style={linkStyle}>Demo</a>
    </Link>
    <Link href="/test" as={`${process.env.FRONTEND_URL}/test`}>
      <a style={linkStyle}>Test</a>
    </Link>
  </div>
)

export default Header
