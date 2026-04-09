import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'KABA Fulfillment - Logistique & Livraison en Zone UEMOA',
  description:
    'Solutions de stockage, gestion de commandes et livraison pour les e-commerçants. Kaba-Fulfillment optimise votre logistique en Côte d’Ivoire, Sénégal, Togo, Bénin.',
  keywords: [
    'kaba-fulfillment',
    'kaba fulfillment',
    'logistique e-commerce afrique',
    'fulfillment togo',
    'livraison uemoa',
    'stockage e-commerce',
    'gestion de commandes',
  ],
  openGraph: {
    title: 'KABA Fulfillment - Logistique & Livraison en Zone UEMOA',
    description: 'Optimisez votre logistique e-commerce avec Kaba-Fulfillment. Solutions de stockage et livraison régionales.',
    images: ['/icon.png'],
  },
  icons: {
    icon: '/icon.png',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${urbanist.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
          <Header />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'LogisticsService',
                'name': 'Kaba-Fulfillment',
                'description': 'Solutions de stockage, gestion de commandes et livraison pour les e-commerçants en zone UEMOA.',
                'url': 'https://fullfilment.kaba-delivery.com',
                'address': {
                  '@type': 'PostalAddress',
                  'addressLocality': 'Lomé',
                  'addressCountry': 'TG',
                },
              }),
            }}
          />
          <main>{children}</main>
          <Footer />
          <Toaster />
      </body>
    </html>
  );
}
