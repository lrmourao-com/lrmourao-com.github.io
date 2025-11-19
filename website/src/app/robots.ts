import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true'

  if (allowIndexing) {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
      },
      sitemap: 'https://lrmourao.com/sitemap.xml',
    }
  }

  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
  }
}
