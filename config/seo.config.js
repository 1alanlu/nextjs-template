export default {
  title: 'Default Page Title',
  titleTemplate: `%s | ${process.env.SITE_NAME}`,
  description: 'Description of page',
  canonical: process.env.SITE_URL,
  noindex: false,

  openGraph: {
    url: process.env.SITE_URL,
    title: 'Default Open Graph Title',
    description: 'Description of open graph',
    type: 'website',
    images: [
      {
        url: `${process.env.SITE_URL}/static/images/cover/cover.jpg`,
        width: 1426,
        height: 1074,
        alt: 'Cover',
      },
    ],
    locale: 'zh_tw',
    site_name: process.env.SITE_NAME,
  },

  facebook: {
    appId: 895271347480268,
  },

  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
}
