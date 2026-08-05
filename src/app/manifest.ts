import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'KIA Semarang - Dealer Resmi Mobil KIA',
    short_name: 'KIA Semarang',
    description: 'Dealer Resmi Mobil KIA Semarang. Promo terbaru, test drive gratis & simulasi kredit.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
