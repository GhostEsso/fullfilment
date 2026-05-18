'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ICON_COLOR_FILTER } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Location() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef     = useRef<HTMLDivElement>(null);

  const locationImage = PlaceHolderImages.find((img) => img.id === 'location-pickup');

  useGSAP(() => {

    // ── 1. Background blob parallax ───────────────────────────────
    gsap.to('.loc-blob', {
      y: -80,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
    });

    // ── 2. Image — clip-path wipe left → right + inner parallax ──
    gsap.fromTo(
      imageRef.current,
      { clipPath: 'inset(0 100% 0 0 round 40px)', autoAlpha: 0 },
      {
        clipPath: 'inset(0 0% 0 0 round 40px)',
        autoAlpha: 1,
        duration: 1.3,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 82%',
          once: true,
        },
      }
    );

    // Subtle Ken Burns parallax on the image itself
    gsap.to('.loc-img-inner', {
      scale: 1.06,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
    });

    // ── 3. Text side — sequenced timeline ────────────────────────
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.loc-text',
        start: 'top 82%',
        toggleActions: 'play none none reverse',
      },
    });

    textTl
      .from('.loc-badge', {
        x: 30,
        autoAlpha: 0,
        duration: 0.55,
        ease: 'back.out(1.7)',
      })
      .from(
        '.loc-title-line',
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
        '.loc-desc',
        {
          y: 22,
          autoAlpha: 0,
          duration: 0.7,
          ease: 'power3.out',
        },
        '-=0.45'
      );

    // ── 4. Feature items — slide from right with stagger ─────────
    gsap.from('.loc-feature', {
      x: 50,
      autoAlpha: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.18,
      scrollTrigger: {
        trigger: '.loc-features',
        start: 'top 88%',
        once: true,
      },
    });

  }, { scope: containerRef });

  return (
    <section
      id="location"
      className="relative py-24 md:py-32 overflow-hidden bg-white"
      ref={containerRef}
    >
      {/* Background blob */}
      <div className="loc-blob absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Image side ────────────────────────────────────────── */}
          <div
            ref={imageRef}
            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[400px] md:min-h-[560px]"
          >
            {locationImage && (
              <Image
                src={locationImage.imageUrl}
                alt={locationImage.description}
                fill
                className="loc-img-inner object-cover"
                data-ai-hint={locationImage.imageHint}
              />
            )}
            {/* subtle bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
          </div>

          {/* ── Text side ─────────────────────────────────────────── */}
          <div className="loc-text flex flex-col justify-center">

            {/* Badge */}
            <div className="loc-badge flex items-center gap-3 text-primary mb-8 w-fit">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Image
                  src="/assets/icones/Pin.svg"
                  alt="Point de vente"
                  width={28}
                  height={28}
                  className="h-7 w-7"
                  style={{ filter: ICON_COLOR_FILTER }}
                />
              </div>
              <span className="text-sm font-black uppercase tracking-[0.2em]">Présence Physique</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl font-black font-headline tracking-tighter sm:text-5xl text-foreground leading-[1.1]">
              <span className="loc-title-line block">Votre direction</span>
              <span className="loc-title-line block"><span className="text-primary italic">logistique</span> à Lomé.</span>
            </h2>

            {/* Description */}
            <p className="loc-desc mt-8 text-xl leading-relaxed text-foreground/80 font-medium">
              Offrez plus de liberté à vos clients. Ils peuvent désormais retirer
              leurs commandes directement dans nos locaux sécurisés à Lomé.
            </p>

            {/* Feature items */}
            <div className="loc-features mt-10 space-y-5">

              <div className="loc-feature group flex items-start gap-4 p-5 bg-primary/5 hover:bg-primary/10 rounded-2xl border border-primary/10 transition-colors duration-300 cursor-default">
                <div className="mt-1.5 h-3 w-3 rounded-full bg-primary animate-pulse flex-shrink-0" />
                <div>
                  <h4 className="font-black text-foreground">Service de Retrait Express</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Évitez les délais de livraison pour vos clients les plus pressés.
                  </p>
                </div>
              </div>

              <div className="loc-feature group flex items-start gap-4 p-5 bg-primary/5 hover:bg-primary/10 rounded-2xl border border-primary/10 transition-colors duration-300 cursor-default">
                <div className="mt-1.5 h-3 w-3 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <h4 className="font-black text-foreground">Accueil Professionnel</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Une équipe dédiée pour accueillir vos clients comme s&apos;ils étaient chez vous.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
