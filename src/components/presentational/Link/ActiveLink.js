import { useRouter } from 'next/router'

const ActiveLink = ({ children, title, href, as = `${process.env.LOCATION_PREFIX}${href}` }) => {
  const router = useRouter()

  const handleClick = e => {
    e.preventDefault()
    if (router.asPath !== as) router.push(href, as)

    // const as = href
    // router.push(href, as, { shallow: true })
  }

  return (
    <a href={as} title={title} onClick={handleClick}>
      {children}
    </a>
  )
}
export default ActiveLink
