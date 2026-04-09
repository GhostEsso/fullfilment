'use client';
import * as React from 'react';
import Image from 'next/image';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

import type { ServiceOffer } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ICON_COLOR_FILTER, WHATSAPP_URL, getWhatsAppLink } from '@/lib/utils';

interface HeroProps {
  currentOffer: ServiceOffer;
  currentOfferIndex: number;
  totalOffers: number;
  nextOffer: () => void;
  prevOffer: () => void;
}

export function Hero({
  currentOffer,
  currentOfferIndex,
  totalOffers,
  nextOffer,
  prevOffer,
}: HeroProps) {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? 'relative' : 'fixed'
  );

  const heroImage = PlaceHolderImages.find(
    (img) => img.id === `hero-offer-${currentOffer.id}`
  );

  return (
    <section id="nos-offres" className="relative h-[200vh]" ref={targetRef}>
      <motion.div
        style={{ opacity, scale, position }}
        className="h-screen w-full top-0 left-0 flex items-center justify-center"
      >
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />

        <div className="container relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 text-primary-foreground">
          {/* Left Side */}
          <div className="md:col-span-7 flex flex-col justify-center text-left">
            <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/assets/icones/Pin.svg"
                  alt="Zone UEMOA"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-white/20">
                    Zone UEMOA
                </span>
            </div>
            <h1 className="font-headline text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white">
              {currentOffer.name}
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-primary mt-4 tracking-tight">
              Vendez à Lomé, sans y être, sans local.
            </h2>
            {/* Fixed height container prevents buttons from shifting */}
            <div className="mt-6 h-[80px]">
              <p className="max-w-lg text-lg text-primary-foreground/90 leading-relaxed font-medium line-clamp-3">
                {currentOffer.description}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 font-bold text-lg shadow-lg shadow-primary/20">
                <a href={getWhatsAppLink(currentOffer.name)} target="_blank" rel="noopener noreferrer">
                    Démarrer maintenant
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black px-8 h-14 font-bold text-lg transition-all">
                Voir les détails
              </Button>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden md:col-span-5 md:flex items-center justify-center">
            <div className="relative flex items-center gap-8">
              <span
                className="font-headline font-bold text-primary-foreground/10 tabular-nums select-none"
                style={{ fontSize: '12rem', lineHeight: 1, width: '280px', display: 'inline-block', textAlign: 'center' }}
              >
                {String(currentOfferIndex + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-4">
                <Button variant="outline" size="icon" onClick={prevOffer} className="bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10 rounded-full h-12 w-12">
                  <ArrowUp />
                  <span className="sr-only">Previous</span>
                </Button>
                <Button variant="outline" size="icon" onClick={nextOffer} className="bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10 rounded-full h-12 w-12">
                  <ArrowDown />
                  <span className="sr-only">Next</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Nav */}
        <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
            <Button variant="outline" size="icon" onClick={prevOffer} className="bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10">
                <ArrowUp />
                <span className="sr-only">Previous</span>
            </Button>
            <Button variant="outline" size="icon" onClick={nextOffer} className="bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10">
                <ArrowDown />
                <span className="sr-only">Next</span>
            </Button>
        </div>

      </motion.div>
    </section>
  );
}
