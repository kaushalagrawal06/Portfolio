import type { MetadataRoute } from 'next'
import { caseStudies } from '@/data/ventures'
import { articles } from '@/data/articles'
import { demos } from '@/data/demos'

const siteUrl = 'https://kaushal-portfolio-main.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes = ['', '/about', '/expertise', '/work', '/demos', '/insights', '/contact'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${siteUrl}/work/${study.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const demoRoutes = demos.map((demo) => ({
    url: `${siteUrl}/demos/${demo.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const articleRoutes = articles.map((article) => ({
    url: `${siteUrl}/insights/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...caseStudyRoutes, ...demoRoutes, ...articleRoutes]
}
