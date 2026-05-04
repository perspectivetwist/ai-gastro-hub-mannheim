import fs from 'fs'
import path from 'path'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  let articleUrls: MetadataRoute.Sitemap = []
  try {
    const dir = path.join(process.cwd(), 'public', 'newsroom')
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'))
    articleUrls = files.map(f => ({
      url: `https://www.ki-gastronomie.com/newsroom/${f.replace('.json', '')}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  } catch {}
  return [
    { url: 'https://www.ki-gastronomie.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://www.ki-gastronomie.com/newsroom', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ...articleUrls,
    { url: 'https://www.ki-gastronomie.com/impressum', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: 'https://www.ki-gastronomie.com/datenschutz', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ]
}
