'use client';

import * as React from 'react';
import { offers, faqItems } from '@/lib/data';
import type { ServiceOffer } from '@/lib/types';

import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { WhyKaba } from '@/components/sections/why-kaba';
import { Pricing } from '@/components/sections/pricing';
import { Location } from '@/components/sections/location';
import { Faq } from '@/components/sections/faq';
import { Testimonials } from '@/components/sections/testimonials';
import { Cta } from '@/components/sections/cta';

export default function Home() {
  const [currentOfferIndex, setCurrentOfferIndex] = React.useState(0);
  const currentOffer: ServiceOffer = offers[currentOfferIndex];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqItems.map((item) => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer,
      },
    })),
  };

  const nextOffer = React.useCallback(() => {
    setCurrentOfferIndex((prev) => (prev + 1) % offers.length);
  }, []);

  const prevOffer = React.useCallback(() => {
    setCurrentOfferIndex(
      (prev) => (prev - 1 + offers.length) % offers.length
    );
  }, []);

  React.useEffect(() => {
    const interval = setInterval(nextOffer, 3000);
    return () => clearInterval(interval);
  }, [nextOffer]);

  return (
    <div className="flex flex-col">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <Hero
        currentOffer={currentOffer}
        currentOfferIndex={currentOfferIndex}
        totalOffers={offers.length}
      />
      <About />
      <WhyKaba />
      <Pricing offers={offers} />
      <Testimonials />
      <Location />
      <Faq />
      <Cta />
    </div>
  );
}
