import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kiasemarang.id'),
  title: {
    default: 'KIA Semarang - Dealer Resmi Mobil KIA Jawa Tengah',
    template: '%s | KIA Semarang',
  },
  description:
    'Website resmi Dealer KIA Semarang. Dapatkan promo terbaik KIA EV9, EV6, Seltos, Sonet, dan Grand Carnival. Servis resmi, test drive gratis & simulasi kredit.',
  keywords: [
    'KIA Semarang',
    'Dealer KIA Semarang',
    'KIA EV9 Semarang',
    'KIA EV6',
    'KIA Seltos Semarang',
    'KIA Sonet Semarang',
    'Mobil Listrik Semarang',
    'Dealer Mobil Semarang',
    'Promo KIA Semarang',
    'Service KIA Semarang',
  ],
  authors: [{ name: 'KIA Semarang' }],
  creator: 'KIA Semarang',
  publisher: 'KIA Semarang',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://kiasemarang.id',
    siteName: 'KIA Semarang',
    title: 'KIA Semarang - Dealer Resmi Mobil KIA Jawa Tengah',
    description:
      'Dealer resmi KIA di Semarang dengan pilihan SUV, MPV, dan EV terbaru. Promo spesial, test drive gratis, dan kredit DP ringan.',
    images: [
      {
        url: '/images/kontak/kantor.jpeg',
        width: 1200,
        height: 630,
        alt: 'KIA Semarang Showroom Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KIA Semarang - Dealer Resmi Mobil KIA Jawa Tengah',
    description:
      'Website resmi Dealer KIA Semarang. Servis resmi, test drive gratis & simulasi kredit.',
    images: ['/images/kontak/kantor.jpeg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className={`${plusJakartaSans.className} antialiased bg-white text-gray-900 min-h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

