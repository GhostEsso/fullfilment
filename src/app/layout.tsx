import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WhatsAppFloatingButton } from '@/components/ui/whatsapp-button';

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fullfilment-eight.vercel.app'),
  title: 'Kaba Fulfillment – Logistique & Livraison en Zone UEMOA',
  description: 'Kaba Fulfillment gère le stockage, la préparation et la livraison de vos commandes à Lomé et en zone UEMOA. Vendez partout en Afrique de l\'Ouest, sans vous déplacer.',
  keywords: [
    'fulfillment Togo',
    'logistique UEMOA',
    'livraison Lomé',
    'e-commerce Afrique de l\'Ouest',
    'stockage Lomé',
    'kaba fulfillment',
    'kaba logistique',
  ],
  alternates: {
    canonical: 'https://fullfilment-eight.vercel.app/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Kaba Fulfillment – Logistique & Livraison en Zone UEMOA',
    description: 'Kaba Fulfillment gère le stockage, la préparation et la livraison de vos commandes à Lomé et en zone UEMOA. Vendez partout en Afrique de l\'Ouest, sans vous déplacer.',
    url: 'https://fullfilment-eight.vercel.app/',
    siteName: 'Kaba Fulfillment',
    locale: 'fr_TG',
    type: 'website',
    images: [
      {
        url: '/assets/images/pic.jpg',
        width: 1200,
        height: 630,
        alt: 'Kaba Fulfillment - Logistique & Livraison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaba Fulfillment – Logistique & Livraison en Zone UEMOA',
    description: 'Kaba Fulfillment gère le stockage, la préparation et la livraison de vos commandes à Lomé et en zone UEMOA. Vendez partout en Afrique de l\'Ouest, sans vous déplacer.',
    images: ['/assets/images/pic.jpg'],
  },
  icons: {
    icon: '/icon.png?v=1',
  },
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Service'],
  'name': 'Kaba Fulfillment',
  'image': 'https://fullfilment-eight.vercel.app/assets/images/pic.jpg',
  'description': 'Kaba Fulfillment gère le stockage, la préparation et la livraison de vos commandes à Lomé et en zone UEMOA.',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '319 Rue AZIABOR, Agbalepedo',
    'addressLocality': 'Lomé',
    'addressCountry': 'TG',
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': '6.1922',
    'longitude': '1.2114',
  },
  'telephone': '+228 70 69 42 06',
  'email': 'infos@kabafulfillment.com',
  'url': 'https://fullfilment-eight.vercel.app',
  'areaServed': [
    { '@type': 'Country', 'name': 'Togo' },
    { '@type': 'Country', 'name': 'Côte d\'Ivoire' },
    { '@type': 'Country', 'name': 'Bénin' },
    { '@type': 'Country', 'name': 'Burkina Faso' }
  ],
  'priceRange': '1000 FCFA - 75000 FCFA/mois',
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    'opens': '07:30',
    'closes': '17:30'
  }
};

import { CookieBanner } from '@/components/ui/cookie-banner';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          id="business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
          suppressHydrationWarning
        />
      </head>
      <body
        className={`${urbanist.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
          <Header />
          <CookieBanner />
          <main className="pt-0">{children}</main>
          <WhatsAppFloatingButton />
          <Footer />
          <Toaster />
      </body>
    </html>
  );
}
