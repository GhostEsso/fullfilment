'use client';

import { useRef } from 'react';
import { Check, ArrowRight, CalendarDays } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Button } from '@/components/ui/button';
import { cn, getWhatsAppLink } from '@/lib/utils';
import type { ServiceOffer } from '@/lib/types';
import { event } from '@/lib/gtag';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const accentIndices = [0];

interface PricingProps {
  offers: ServiceOffer[];
}

export function Pricing({ offers }: PricingProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef  = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    // ── 1. Parallax blobs ─────────────────────────────────────────
    gsap.to('.pr-blob-top', {
      y: -80,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
    });
    gsap.to('.pr-blob-bottom', {
      y: 60,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
    });

    // ── 2. Title — sequenced timeline ─────────────────────────────
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
    titleTl
      .from('.pr-badge', {
        x: -28,
        autoAlpha: 0,
        duration: 0.55,
        ease: 'back.out(1.7)',
      })
      .from(
        '.pr-title-line',
        {
          y: 55,
          autoAlpha: 0,
          duration: 0.85,
          ease: 'power4.out',
          stagger: 0.1,
        },
        '-=0.25'
      )
      .from(
        '.pr-subtitle',
        {
          y: 22,
          autoAlpha: 0,
          duration: 0.7,
          ease: 'power3.out',
        },
        '-=0.45'
      );

    // ── 3. Cards — stagger from right (no pin, no overflow) ──────
    const cards = gsap.utils.toArray<HTMLElement>('.pricing-card', sectionRef.current);

    gsap.set(cards, { x: () => window.innerWidth + 60, autoAlpha: 0 });

    gsap.to(cards, {
      x: 0,
      autoAlpha: 1,
      duration: 0.95,
      ease: 'power3.out',
      stagger: 0.16,
      scrollTrigger: {
        trigger: '.pr-cards-grid',
        start: 'top 82%',
        once: true,
      },
    });

  }, { scope: sectionRef });

  return (
    <section
      id="tarifs"
      ref={sectionRef}
      className="relative bg-[#f6f6f9] py-20 overflow-hidden w-full"
    >
      {/* Parallax blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="pr-blob-top absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="pr-blob-bottom absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">

        {/* Heading */}
        <div className="max-w-3xl mb-12" ref={titleRef}>
          <div className="pr-badge inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-black mb-4 uppercase tracking-widest">
            Tarifs & Formules
          </div>
          <h2 className="text-4xl font-black tracking-tighter sm:text-6xl text-foreground font-headline leading-[1.05]">
            <span className="pr-title-line block">Investissez dans</span>
            <span className="pr-title-line block text-primary">votre succès</span>
            <span className="pr-title-line block">logistique.</span>
          </h2>
          <p className="pr-subtitle mt-6 text-xl text-muted-foreground max-w-2xl font-medium leading-relaxed">
            Des tarifs transparents, sans frais cachés, pour propulser votre business au Togo et dans la zone UEMOA.
          </p>
          <Button
            className="pr-subtitle mt-8 h-12 px-8 text-[11px] font-bold uppercase tracking-widest rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            onClick={() => window.dispatchEvent(new CustomEvent('open-booking-modal'))}
          >
            <CalendarDays className="h-4 w-4" />
            Prendre un rendez-vous
          </Button>
        </div>

        {/* Cards Grid */}
        <div className="pr-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 overflow-hidden">
          {offers.map((offer, index) => {
            const isFeatured = accentIndices.includes(index);
            const isLastOffer = index === offers.length - 1;

            return (
              <div
                key={offer.id}
                className={cn(
                  'pricing-card group relative flex flex-col w-full h-full rounded-[2rem] px-6 pt-12 pb-7 will-change-transform',
                  isFeatured
                    ? 'bg-primary text-white shadow-[0_20px_50px_-12px_rgba(225,29,72,0.4)] ring-1 ring-white/20 z-10'
                    : 'bg-white/70 backdrop-blur-md text-foreground shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white'
                )}
              >
                {/* Badges */}
                <div className="absolute top-0 left-0 flex items-start z-10 w-full">
                  <div
                    className={cn(
                      'inline-flex items-center px-4 md:px-6 py-3 rounded-br-3xl text-[10px] md:text-[11px] font-black uppercase tracking-widest shadow-sm whitespace-nowrap',
                      isFeatured ? 'bg-white text-primary' : 'bg-primary text-white'
                    )}
                  >
                    {offer.name}
                  </div>
                  {(offer.tag || isFeatured) && (
                    <div className="inline-flex items-center px-4 py-3 rounded-br-3xl text-[9px] font-black uppercase tracking-[0.2em] shadow-lg backdrop-blur-sm -ml-1 bg-gradient-to-br from-yellow-300 to-orange-400 text-black">
                      {offer.tag || 'Populaire'}
                    </div>
                  )}
                </div>

                {/* Subtitle */}
                <p className={cn(
                  'text-sm font-medium leading-relaxed mb-4',
                  isFeatured ? 'text-white/80' : 'text-muted-foreground'
                )}>
                  {offer.subtitle}
                </p>

                {/* Price */}
                <div className="mb-4">
                  {index === 4 ? (
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
                          isFeatured ? 'text-white/80' : 'text-muted-foreground'
                        )}>
                          /{offer.price.split('/')[1]?.trim()}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className={cn('h-px mb-4', isFeatured ? 'bg-white/20' : 'bg-black/5')} />

                {/* Feature list */}
                <ul className="flex-grow space-y-2.5 mb-6">
                  {offer.priceDetails.map((detail) => (
                    <li key={detail.label} className="flex items-start gap-3">
                      <span className={cn(
                        'flex-shrink-0 mt-1 flex h-4 w-4 items-center justify-center rounded-full',
                        isFeatured ? 'bg-white/20' : 'bg-primary/10'
                      )}>
                        <Check
                          className={cn('h-2.5 w-2.5', isFeatured ? 'text-white' : 'text-primary')}
                          strokeWidth={4}
                        />
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

                {/* CTA */}
                <div className="mt-auto pt-5">
                  <Button
                    asChild
                    className={cn(
                      'w-full h-10 md:h-11 font-bold rounded-full text-[10px] md:text-[11px] uppercase tracking-widest transition-all duration-300 group/btn shadow-md hover:shadow-xl hover:-translate-y-0.5',
                      isFeatured
                        ? 'bg-white text-primary hover:bg-white/90'
                        : isLastOffer
                          ? 'bg-foreground text-background hover:bg-foreground/90'
                          : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    )}
                  >
                    <a
                      href={getWhatsAppLink(offer.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                      onClick={() => event({ action: 'select_offer', category: 'pricing', label: offer.name })}
                    >
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
