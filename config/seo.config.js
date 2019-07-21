export default {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: process.env.SITE_URL,
    site_name: process.env.SITE_NAME,
    images: [
      {
        url: `${process.env.SITE_URL + process.env.STATIC_FOLDER}/images/cover/cover.jpg`,
        width: 1426,
        height: 1074,
        alt: 'Cover',
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
}
