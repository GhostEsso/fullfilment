'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MapPin } from 'lucide-react';
import { ICON_COLOR_FILTER } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

export function Location() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const locationImage = PlaceHolderImages.find(
    (img) => img.id === 'location-pickup'
  );

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.from(imageRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }).from(
      contentRef.current,
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.6'
    );
  }, { scope: containerRef });

  return (
    <section id="location" className="relative py-24 md:py-32 overflow-hidden bg-white" ref={containerRef}>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Unified Card Container */}
        <div
          ref={contentRef}
          className="bg-white/60 backdrop-blur-xl rounded-[3rem] md:rounded-[4rem] border border-white shadow-[0_40px_100px_rgba(0,0,0,0.08)] overflow-hidden"
        >
          <div className="grid md:grid-cols-2">

            {/* Image Side */}
            <div className="relative min-h-[400px] md:min-h-full" ref={imageRef}>
              {locationImage && (
                <Image
                  src={locationImage.imageUrl}
                  alt={locationImage.description}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  data-ai-hint={locationImage.imageHint}
                />
              )}
              {/* Overlay for better text blending if needed on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden" />
            </div>

            {/* Text Side */}
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-primary mb-8">
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

              <h2 className="text-4xl font-black font-headline tracking-tighter sm:text-5xl text-foreground leading-[1.1]">
                Votre direction <span className="text-primary italic">logistique</span> à Lomé.
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-foreground/80 font-medium">
                Offrez plus de liberté à vos clients. Ils peuvent désormais retirer leurs commandes directement dans nos locaux sécurisés à Lomé.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4 p-5 bg-white/50 rounded-2xl border border-white/40 shadow-sm transition-all hover:bg-white hover:shadow-md">
                  <div className="mt-1.5 h-3 w-3 rounded-full bg-primary animate-pulse" />
                  <div>
                    <h4 className="font-black text-foreground">Service de Retrait Express</h4>
                    <p className="text-sm text-muted-foreground mt-1">Évitez les délais de livraison pour vos clients les plus pressés.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-white/50 rounded-2xl border border-white/40 shadow-sm transition-all hover:bg-white hover:shadow-md">
                  <div className="mt-1.5 h-3 w-3 rounded-full bg-primary" />
                  <div>
                    <h4 className="font-black text-foreground">Accueil Professionnel</h4>
                    <p className="text-sm text-muted-foreground mt-1">Une équipe dédiée pour accueillir vos clients comme s'ils étaient chez vous.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
