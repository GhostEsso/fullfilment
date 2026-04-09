'use client';

import * as React from 'react';
import { offers } from '@/lib/data';
import type { ServiceOffer } from '@/lib/types';

import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { WhyKaba } from '@/components/sections/why-kaba';
import { Pricing } from '@/components/sections/pricing';
import { Location } from '@/components/sections/location';
import { Faq } from '@/components/sections/faq';
import { Cta } from '@/components/sections/cta';

export default function Home() {
  const [currentOfferIndex, setCurrentOfferIndex] = React.useState(0);
  const currentOffer: ServiceOffer = offers[currentOfferIndex];

  const nextOffer = () => {
    setCurrentOfferIndex((prev) => (prev + 1) % offers.length);
  };

  const prevOffer = () => {
    setCurrentOfferIndex(
      (prev) => (prev - 1 + offers.length) % offers.length
    );
  };

  return (
    <div className="flex flex-col">
      <Hero
        currentOffer={currentOffer}
        currentOfferIndex={currentOfferIndex}
        totalOffers={offers.length}
        nextOffer={nextOffer}
        prevOffer={prevOffer}
      />
      <About />
      <WhyKaba />
      <Pricing offers={offers} />
      <Location />
      <Faq />
      <Cta />
    </div>
  );
}
