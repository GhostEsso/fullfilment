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
  title: 'KABA DELIVERY - Logistics & Fulfillment',
  description:
    'Solutions de stockage, gestion de commandes et livraison pour les e-commerçants et marques de la zone UEMOA.',
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
          <main>{children}</main>
          <Footer />
          <Toaster />
      </body>
    </html>
  );
}
