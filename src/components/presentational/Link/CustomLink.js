import Link from 'next/link'
import PropTypes from 'prop-types'

// href: pages資料夾中的路徑 + 查詢字串
// as: 將會顯示在瀏覽器  URL bar 的路徑
const CustomLink = ({ href, as: asHref, children, prefetch, replace, shallow, ...props }) => {
  return (
    <Link
      href={href}
      as={asHref || process.env.LOCATION_PREFIX + href}
      prefetch={prefetch}
      replace={replace}
      shallow={shallow}
      {...props}
    >
      {children}
    </Link>
  )
}

CustomLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  as: PropTypes.string,
  prefetch: PropTypes.bool,
  replace: PropTypes.bool,
  shallow: PropTypes.bool,
}

CustomLink.defaultProps = {
  as: '',
  prefetch: true,
  replace: false,
  shallow: false,
}

export default CustomLink
