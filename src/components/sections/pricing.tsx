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
  return (
    <section id="tarifs" className="relative bg-[#f6f6f9] py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Heading */}
        <div className="max-w-3xl mb-20">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-black mb-4 uppercase tracking-widest">
             Tarifs & Formules
          </div>
          <h2 className="text-4xl font-black tracking-tighter sm:text-6xl text-foreground font-headline leading-[1.05]">
            Investissez dans <span className="text-primary">votre succès</span> logistique.
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl font-medium leading-relaxed">
            Des tarifs transparents, sans frais cachés, pour propulser votre business au Togo et dans la zone UEMOA.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, index) => {
            const isFeatured = accentIndices.includes(index);
            const isLastOffer = index === offers.length - 1;

            return (
                <div
                  key={offer.id}
                  className={cn(
                    'group relative flex flex-col w-full h-full rounded-[2.5rem] p-8 pt-16 transition-all duration-500 hover:-translate-y-2 overflow-hidden',
                    isFeatured
                      ? 'bg-primary text-white shadow-[0_25px_60px_-15px_rgba(225,29,72,0.4)] ring-1 ring-white/20 transform md:scale-105 z-10'
                      : 'bg-white/70 backdrop-blur-md text-foreground shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white'
                  )}
                >
                  {/* Container for incrusted badges — flat in the corner */}
                  <div className="absolute top-0 left-0 flex items-start z-20">
                    {/* Main Offer Badge */}
                    <div
                      className={cn(
                        'inline-flex items-center px-6 py-3 rounded-br-3xl text-[11px] font-black uppercase tracking-[0.2em] shadow-sm',
                        isFeatured
                          ? 'bg-white text-primary'
                          : 'bg-primary text-white'
                      )}
                    >
                      {offer.name}
                    </div>

                    {/* Secondary Tag (Marketing Badge) */}
                    {offer.tag && (
                      <div
                        className={cn(
                          'inline-flex items-center px-4 py-3 rounded-br-3xl text-[9px] font-black uppercase tracking-[0.2em] shadow-lg backdrop-blur-sm -ml-1 transition-all',
                          'bg-gradient-to-br from-yellow-300 to-orange-400 text-black'
                        )}
                      >
                        {offer.tag}
                      </div>
                    )}
                  </div>

                  {/* Subtitle */}
                  <p className={cn(
                    'text-[1.05rem] font-medium leading-relaxed mb-6 min-h-[50px]',
                    isFeatured ? 'text-white/80' : 'text-muted-foreground'
                  )}>
                    {offer.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    {isLastOffer ? (
                      <p className={cn(
                        'text-4xl md:text-5xl font-black tracking-tighter leading-none font-headline',
                        isFeatured ? 'text-white' : 'text-foreground'
                      )}>
                        Sur devis
                      </p>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className={cn(
                          'text-4xl md:text-5xl font-black tracking-tighter font-headline',
                          isFeatured ? 'text-white' : 'text-foreground'
                        )}>
                          {offer.price.split('/')[0].trim()}
                        </span>
                        <span className={cn(
                          'text-base font-bold',
                          isFeatured ? 'text-white/60' : 'text-muted-foreground'
                        )}>
                          /{offer.price.split('/')[1]?.trim()}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Divider */}
                  <div className={cn(
                    'h-px mb-8',
                    isFeatured ? 'bg-white/20' : 'bg-black/5'
                  )} />

                  {/* Feature checklist */}
                  <ul className="flex-grow space-y-4 mb-10">
                    {offer.priceDetails.map((detail) => (
                      <li key={detail.label} className="flex items-start gap-4">
                        <span className={cn(
                          'flex-shrink-0 mt-1 flex h-5 w-5 items-center justify-center rounded-full',
                          isFeatured ? 'bg-white/20' : 'bg-primary/10'
                        )}>
                          <Check className={cn(
                            'h-3 w-3',
                            isFeatured ? 'text-white' : 'text-primary'
                          )} strokeWidth={4} />
                        </span>
                        <span className={cn(
                          'text-[0.95rem] leading-tight font-medium',
                          isFeatured ? 'text-white/90' : 'text-muted-foreground'
                        )}>
                          <strong className={cn(isFeatured ? 'text-white' : 'text-foreground', 'font-black')}>
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
                    size="lg"
                    className={cn(
                      'w-full h-14 font-black rounded-[1.25rem] text-base uppercase tracking-wider transition-all duration-300',
                      isFeatured
                        ? 'bg-white text-primary hover:bg-white/90 shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:scale-[1.02]'
                        : isLastOffer
                          ? 'bg-foreground text-background hover:bg-foreground/90 hover:scale-[1.02]'
                          : 'bg-primary text-white hover:bg-primary/90 hover:scale-[1.02] shadow-[0_10px_20px_rgba(225,29,72,0.2)]'
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
    </section>
  );
}
