import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KIA Semarang - Dealer Resmi Mobil KIA Jawa Tengah',
  description: 'Website resmi Dealer KIA Semarang. Dapatkan promo terbaru KIA EV9, EV6, Seltos, Sonet, dan Grand Carnival. Servis resmi, test drive gratis & simulasi kredit.',
  keywords: ['KIA Semarang', 'Dealer KIA Semarang', 'KIA EV9 Semarang', 'KIA EV6', 'KIA Seltos Semarang', 'Mobil Listrik Semarang'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-gray-900 min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
