import fs from 'fs'
import path from 'path'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  let articleUrls: MetadataRoute.Sitemap = []
  try {
    const dir = path.join(process.cwd(), 'public', 'newsroom')
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'))
    articleUrls = files.map(f => ({
      url: `https://ai-gastro-hub.vercel.app/newsroom/${f.replace('.json', '')}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  } catch {}
  return [
    { url: 'https://ai-gastro-hub.vercel.app', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://ai-gastro-hub.vercel.app/newsroom', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ...articleUrls,
    { url: 'https://ai-gastro-hub.vercel.app/impressum', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: 'https://ai-gastro-hub.vercel.app/datenschutz', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ]
}
