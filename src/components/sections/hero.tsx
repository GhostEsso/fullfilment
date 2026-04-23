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
      className="relative min-h-screen w-full flex flex-col items-start justify-center overflow-hidden pt-20 md:pt-32"
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



      {/* Content */}
      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 text-primary-foreground px-5 sm:px-8 pb-20 md:pb-16">

        {/* Left / main content */}
        <div className="md:col-span-7 flex flex-col justify-start md:justify-center text-left py-4 md:py-0">
          
          {/* TOP SECTION: Badge & Header */}
          <div className="flex flex-col gap-3 md:gap-8 mt-4 md:mt-0">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <Image
                src="/assets/icones/Pin.svg"
                alt="Zone UEMOA"
                width={24}
                height={24}
                className="h-5 w-5 md:h-8 md:w-8 flex-shrink-0"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <span className="text-white text-[11px] md:text-base font-black tracking-[0.2em] uppercase">
                Zone UEMOA • Kaba Fulfillment
              </span>
            </div>

            {/* General Message (Header) */}
            <h2 className="text-2xl md:text-xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] max-w-2xl font-headline">
              Vendez au Togo maintenant avec Kaba.
            </h2>
            <p className="text-sm md:text-lg font-bold text-white/70 tracking-tight leading-snug max-w-xl">
              Solutions de Stockage, gestion de commandes et livraisons pour
              e-commerçants et entreprises mondiales.
            </p>
          </div>

          {/* MIDDLE SECTION: Offer specific content */}
          <div className="flex flex-col justify-center mt-16 md:mt-24 md:min-h-[200px] border-l-2 border-white/10 pl-6 md:pl-10">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-4xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white">
              {currentOffer.name}
              <span className="block mt-2 text-2xl md:text-2xl lg:text-5xl font-black text-white/40 normal-case tracking-normal">
                ({currentOffer.price.toLowerCase() === 'sur devis' ? 'sur mesure' : currentOffer.price.split(' /')[0].toLowerCase()})
              </span>
            </h1>
            
            {/* Specific Subtitle (Message 1) */}
            <h3 className="text-lg md:text-xl font-black text-primary uppercase tracking-tighter leading-none mt-2 md:mt-4">
              {currentOffer.subtitle}
            </h3>

            {/* Specific Description (Message 2) */}
            <p className="mt-3 md:mt-4 max-w-xl text-sm md:text-base text-white font-medium leading-relaxed opacity-90 drop-shadow-lg">
              {currentOffer.description}
            </p>
          </div>

          {/* BOTTOM SECTION: CTAs */}
          <div className="flex flex-wrap gap-3 md:gap-5 mb-4 mt-20 md:mt-16">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 md:px-10 h-12 md:h-12 rounded-full font-bold text-[10px] md:text-[11px] uppercase tracking-widest shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <a href={getWhatsAppLink(currentOffer.name)} target="_blank" rel="noopener noreferrer">
                Choisir cette offre
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/20 text-white bg-white/5 backdrop-blur-md hover:bg-white hover:text-black rounded-full px-8 md:px-10 h-12 md:h-12 font-bold text-[10px] md:text-[11px] uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5"
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
      <div className="absolute bottom-8 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-end gap-2 px-4" style={{ width: 'min(400px, 90vw)' }}>
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
