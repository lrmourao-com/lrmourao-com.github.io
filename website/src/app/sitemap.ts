import { MetadataRoute } from 'next'
import { LANGUAGE_CODES } from '@/lib/constants'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lrmourao.com'
  
  const languageRoutes = LANGUAGE_CODES.map((lang) => ({
    url: `${baseUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: lang === 'pt' ? 1 : 0.9,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...languageRoutes,
  ]
}
