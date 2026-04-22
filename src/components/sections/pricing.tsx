'use client';

import * as React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn, WHATSAPP_URL, getWhatsAppLink } from '@/lib/utils';
import type { ServiceOffer } from '@/lib/types';

const SCROLL_MULTIPLIER = 150;

interface PricingProps {
  offers: ServiceOffer[];
}

// Whether a card should have an "accent" (highlighted) style
const accentIndices = [0]; // Offre 1 is featured

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {offers.map((offer, index) => {
            const isFeatured = accentIndices.includes(index);
            const isLastOffer = index === offers.length - 1;

            return (
                <div
                  key={offer.id}
                  className={cn(
                    'group relative flex flex-col w-full h-full rounded-[2.5rem] px-8 pt-16 pb-10 transition-all duration-500 hover:-translate-y-2',
                    isFeatured
                      ? 'bg-primary text-white shadow-[0_25px_60px_-15px_rgba(225,29,72,0.4)] ring-1 ring-white/20 transform md:scale-105 z-10'
                      : 'bg-white/70 backdrop-blur-md text-foreground shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white'
                  )}
                >
                  {/* Container for incrusted badges — flat in the corner */}
                  <div className="absolute top-0 left-0 flex items-start z-10 w-full">
                    {/* Primary Tag (Offer Name) */}
                    <div
                      className={cn(
                        'inline-flex items-center px-4 md:px-6 py-3 rounded-br-3xl text-[10px] md:text-[11px] font-black uppercase tracking-widest shadow-sm whitespace-nowrap',
                        isFeatured
                          ? 'bg-white text-primary'
                          : 'bg-primary text-white'
                      )}
                    >
                      {offer.name}
                    </div>

                    {/* Secondary Tag (Marketing Badge) */}
                    {(offer.tag || isFeatured) && (
                      <div
                        className={cn(
                          'inline-flex items-center px-4 py-3 rounded-br-3xl text-[9px] font-black uppercase tracking-[0.2em] shadow-lg backdrop-blur-sm -ml-1 transition-all',
                          'bg-gradient-to-br from-yellow-300 to-orange-400 text-black'
                        )}
                      >
                        {offer.tag || 'Populaire'}
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
                    {index === 4 ? ( // Offer 5 is custom
                      <p className={cn(
                        'text-3xl md:text-4xl font-black tracking-tighter leading-none font-headline',
                        isFeatured ? 'text-white' : 'text-foreground'
                      )}>
                        Sur devis
                      </p>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className={cn(
                          'text-3xl md:text-4xl font-black tracking-tighter font-headline',
                          isFeatured ? 'text-white' : 'text-foreground'
                        )}>
                          {offer.price.split('/')[0].trim()}
                        </span>
                        {offer.price.includes('/') && (
                          <span className={cn(
                            'text-xs font-bold',
                            isFeatured ? 'text-white/60' : 'text-muted-foreground'
                          )}>
                            /{offer.price.split('/')[1]?.trim()}
                          </span>
                        )}
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
                      <li key={detail.label} className="flex items-start gap-3">
                        <span className={cn(
                          'flex-shrink-0 mt-1 flex h-4 w-4 items-center justify-center rounded-full',
                          isFeatured ? 'bg-white/20' : 'bg-primary/10'
                        )}>
                          <Check className={cn(
                            'h-2.5 w-2.5',
                            isFeatured ? 'text-white' : 'text-primary'
                          )} strokeWidth={4} />
                        </span>
                        <span className={cn(
                          'text-[0.85rem] leading-tight font-medium',
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
                  <div className="mt-auto pt-8">
                    <Button
                      asChild
                      className={cn(
                        'w-full h-12 md:h-14 font-bold rounded-full text-[10px] md:text-[11px] uppercase tracking-widest transition-all duration-300 group/btn shadow-md hover:shadow-xl hover:-translate-y-0.5',
                        isFeatured
                          ? 'bg-white text-primary hover:bg-white/90'
                          : isLastOffer
                            ? 'bg-foreground text-background hover:bg-foreground/90'
                            : 'bg-primary text-primary-foreground hover:bg-primary/90'
                      )}
                    >
                      <a href={getWhatsAppLink(offer.name)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <span>{index === 4 ? 'Nous contacter' : 'Choisir cette offre'}</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
