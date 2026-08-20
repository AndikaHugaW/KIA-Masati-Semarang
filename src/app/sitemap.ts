import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://kiasemarang.id';

  // Core pages
  const routes = [
    '',
    '/katalog',
    '/bengkel',
    '/kontak',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Car Detail pages
  const carIds = [
    'kia-sonet',
    'kia-seltos',
    'kia-carens',
    'kia-all-new-carens',
    'kia-ev6',
  ];

  const carRoutes = carIds.map((id) => ({
    url: `${baseUrl}/katalog/${id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...carRoutes];
}
