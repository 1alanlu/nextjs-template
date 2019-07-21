import { withRouter } from 'next/router'

// 會報錯 待修正
/*
路由器實例應僅在應用程序的客戶端內部使用。為了防止有關此主題的任何錯誤，在服務器端呈現路由器時，請在componentDidMount()生命週期方法中使用命令式預取方法。
*/
const PrefetchLink = ({ children, title, router, href = '/dynamic' }) => {
  const handleClick = e => {
    e.preventDefault()
    setTimeout(() => router.push(href), 100)
  }

  return (
    <a href={href} title={title} onClick={handleClick}>
      {children}
      {// but we can prefetch it!
      typeof window !== 'undefined' && router.prefetch(href)}
    </a>
  )
}

export default withRouter(PrefetchLink)
