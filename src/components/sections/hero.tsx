'use client';
import * as React from 'react';
import Image from 'next/image';

import type { ServiceOffer } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { getWhatsAppLink } from '@/lib/utils';

interface HeroProps {
  currentOffer: ServiceOffer;
  currentOfferIndex: number;
  totalOffers: number;
}

const SLIDE_DURATION_MS = 3000;
const OFFER_LABELS = ['Offre 1', 'Offre 2', 'Offre 3', 'Sur Mesure'];

export function Hero({
  currentOffer,
  currentOfferIndex,
  totalOffers,
}: HeroProps) {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === `hero-offer-${currentOffer.id}`
  );

  return (
    <section
      id="nos-offres"
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height: '100dvh', minHeight: '100dvh' }}
    >
      {/* Background image */}
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content — centred vertically, padded top for fixed navbar */}
      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 text-primary-foreground px-5 sm:px-8 pt-20 pb-20 md:pt-0 md:pb-0">

        {/* Left / main content */}
        <div className="md:col-span-7 flex flex-col justify-center text-left">

          {/* Badge */}
          <div className="flex items-center gap-3 mb-4 md:mb-8">
            <Image
              src="/assets/icones/Pin.svg"
              alt="Zone UEMOA"
              width={24}
              height={24}
              className="h-6 w-6 md:h-10 md:w-10 flex-shrink-0"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <span className="bg-primary/20 text-white px-4 py-1.5 rounded-full text-[10px] md:text-sm font-black tracking-[0.2em] uppercase border border-white/20 backdrop-blur-sm">
              Zone UEMOA • Fulfillment By Kaba
            </span>
          </div>

          {/* General Message (Header) */}
          <div className="min-h-[80px] md:min-h-[100px] flex flex-col justify-end">
            <h2 className="text-sm md:text-2xl font-bold text-white/70 tracking-tight leading-snug max-w-2xl">
              Solutions de Stockage, gestion de commandes et livraisons pour
              e-commerçants et entreprises mondiales.
            </h2>
          </div>

          {/* Offer specific content area with stable height to prevent CTA jumping */}
          <div className="mt-8 md:mt-10 min-h-[320px] md:min-h-[450px] flex flex-col justify-start">
            {/* Offer name */}
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white">
              {currentOffer.name}
            </h1>
            
            {/* Specific Subtitle (Message 1) */}
            <h3 className="text-lg md:text-3xl font-black text-primary uppercase tracking-tighter leading-none mt-3 md:mt-4">
              {currentOffer.subtitle}
            </h3>

            {/* Specific Description (Message 2) */}
            <p className="mt-5 md:mt-8 max-w-xl text-sm md:text-xl text-white font-medium leading-relaxed opacity-90 drop-shadow-lg">
              {currentOffer.description}
            </p>
          </div>

          {/* CTAs — Position is now locked horizontally and vertically */}
          <div className="mt-6 md:mt-8 flex flex-wrap gap-4 md:gap-5">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 md:px-10 h-12 md:h-14 font-black text-sm md:text-lg uppercase tracking-widest shadow-2xl shadow-primary/40 transition-all hover:scale-105"
            >
              <a href={getWhatsAppLink(currentOffer.name)} target="_blank" rel="noopener noreferrer">
                Choisir cette offre
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white bg-white/5 backdrop-blur-md hover:bg-white hover:text-black px-8 md:px-10 h-12 md:h-14 font-black text-sm md:text-lg uppercase tracking-widest transition-all"
            >
              <a href="#tarifs">Nos Offres</a>
            </Button>
          </div>
        </div>

        {/* Right — large number (desktop only) */}
        <div className="hidden md:col-span-4 md:flex items-center justify-center">
          <span
            className="font-headline font-black text-white/5 tabular-nums select-none pointer-events-none"
            style={{ fontSize: '16rem', lineHeight: 1 }}
          >
            {String(currentOfferIndex + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Slide progress bars — visible on all screens */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-end gap-2 px-4" style={{ width: 'min(400px, 90vw)' }}>
        {Array.from({ length: totalOffers }).map((_, i) => (
          <div key={i} className="flex-1">
            {/* Track */}
            <div className="relative h-[3px] w-full rounded-full bg-white/20 overflow-hidden">
              {i < currentOfferIndex && (
                // Already played — fully filled
                <div className="absolute inset-0 bg-primary rounded-full" />
              )}
              {i === currentOfferIndex && (
                // Currently active — animated fill
                <div
                  key={`progress-${currentOfferIndex}`}
                  className="absolute inset-y-0 left-0 bg-primary rounded-full"
                  style={{
                    animation: `hero-fill ${SLIDE_DURATION_MS}ms linear forwards`,
                  }}
                />
              )}
              {/* Upcoming → empty (bg-white/20 shows through) */}
            </div>
          </div>
        ))}
      </div>

      {/* Keyframe for the progress fill animation */}
      <style>{`
        @keyframes hero-fill {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
