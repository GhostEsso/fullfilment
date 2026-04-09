'use client';

import * as React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn, WHATSAPP_URL, getWhatsAppLink } from '@/lib/utils';
import type { ServiceOffer } from '@/lib/types';

const SCROLL_MULTIPLIER = 150;

interface PricingProps {
  offers: ServiceOffer[];
}

// Whether a card should have an "accent" (highlighted) style
const accentIndices = [2]; // Offre 3 is featured

export function Pricing({ offers }: PricingProps) {
  const outerRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);

  const allItems = [...offers];

  React.useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;

    const handleScroll = () => {
      const rect = outer.getBoundingClientRect();
      const scrolled = -rect.top;
      if (scrolled < 0) return;
      const maxX = track.scrollWidth - window.innerWidth;
      const scrollHeight = outer.offsetHeight - window.innerHeight;
      const progress = Math.min(scrolled / scrollHeight, 1);
      track.style.transform = `translateX(${progress * -maxX}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const outerHeight = `calc(100vh + ${allItems.length * SCROLL_MULTIPLIER}px)`;

  return (
    <div ref={outerRef} id="tarifs" style={{ height: outerHeight }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-[#f6f6f9] flex flex-col justify-center">

        {/* Heading */}
        <div className="container mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-foreground font-headline">
            Des Solutions Adaptées à{' '}
            <span className="text-primary">Votre Croissance</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl font-medium">
            De l'offre tout inclus à la solution personnalisée, choisissez la formule qui vous ressemble.
          </p>
        </div>

        {/* Cards Track */}
        <div
          ref={trackRef}
          className="flex gap-6 pl-[max(2.5rem,calc((100vw-1280px)/2+1rem))] pr-24 will-change-transform md:pl-[max(4rem,calc((100vw-1280px)/2+1.5rem))]"
          style={{ width: 'max-content', transition: 'transform 0.05s linear' }}
        >
          {offers.map((offer, index) => {
            const isFeatured = accentIndices.includes(index);
            const isLastOffer = index === offers.length - 1;

            return (
              <div
                key={offer.id}
                className={cn(
                  'relative flex flex-col w-[280px] md:w-[320px] flex-shrink-0 rounded-2xl p-6 pt-8 transition-shadow duration-300 hover:shadow-xl',
                  isFeatured
                    ? 'bg-foreground text-background shadow-2xl ring-2 ring-foreground'
                    : 'bg-white text-foreground shadow-md'
                )}
              >
                {/* Badge — absolute top-left corner */}
                <span
                  className={cn(
                    'absolute -top-3 left-5 inline-block text-xs font-bold px-3 py-1.5 rounded-full shadow-sm',
                    isFeatured
                      ? 'bg-white text-foreground'
                      : 'bg-primary text-white'
                  )}
                >
                  {offer.name}
                </span>

                {/* Subtitle */}
                <p className={cn(
                  'text-sm leading-snug mb-5 min-h-[44px]',
                  isFeatured ? 'text-background/70' : 'text-muted-foreground'
                )}>
                  {offer.subtitle}
                </p>

                {/* Price */}
                <div className="mb-6">
                  {isLastOffer ? (
                    <p className={cn(
                      'text-4xl font-black tracking-tight leading-none',
                      isFeatured ? 'text-white' : 'text-foreground'
                    )}>
                      Sur devis
                    </p>
                  ) : (
                    <>
                      <span className={cn(
                        'text-4xl font-black tracking-tight',
                        isFeatured ? 'text-white' : 'text-foreground'
                      )}>
                        {offer.price.split('/')[0].trim()}
                      </span>
                      <span className={cn(
                        'text-sm ml-1',
                        isFeatured ? 'text-background/60' : 'text-muted-foreground'
                      )}>
                        /{offer.price.split('/')[1]?.trim()}
                      </span>
                    </>
                  )}
                </div>

                {/* Divider */}
                <div className={cn(
                  'h-px mb-5',
                  isFeatured ? 'bg-white/20' : 'bg-border'
                )} />

                {/* Feature checklist */}
                <ul className="flex-grow space-y-3 mb-6">
                  {offer.priceDetails.map((detail) => (
                    <li key={detail.label} className="flex items-start gap-3">
                      <span className={cn(
                        'flex-shrink-0 mt-0.5 flex h-4 w-4 items-center justify-center rounded-full',
                        isFeatured ? 'bg-white/20' : 'bg-primary/10'
                      )}>
                        <Check className={cn(
                          'h-2.5 w-2.5',
                          isFeatured ? 'text-white' : 'text-primary'
                        )} strokeWidth={3} />
                      </span>
                      <span className={cn(
                        'text-sm leading-tight',
                        isFeatured ? 'text-background/80' : 'text-muted-foreground'
                      )}>
                        <strong className={cn(isFeatured ? 'text-white' : 'text-foreground')}>
                          {detail.label}
                        </strong>
                        {' — '}{detail.value}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  className={cn(
                    'w-full h-11 font-bold rounded-xl text-sm',
                    isFeatured
                      ? 'bg-white text-foreground hover:bg-white/90'
                      : isLastOffer
                        ? 'bg-foreground text-background hover:bg-foreground/90'
                        : 'bg-primary text-white hover:bg-primary/90'
                  )}
                >
                  <a href={getWhatsAppLink(offer.name)} target="_blank" rel="noopener noreferrer">
                    {isLastOffer ? 'Nous contacter' : 'Choisir cette offre'}
                  </a>
                </Button>
              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}
