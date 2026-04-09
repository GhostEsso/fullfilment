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
    <section id="location" className="bg-muted" ref={containerRef}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center" ref={imageRef}>
            {locationImage && (
              <Card className="overflow-hidden shadow-2xl">
                <Image
                  src={locationImage.imageUrl}
                  alt={locationImage.description}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={locationImage.imageHint}
                />
              </Card>
            )}
          </div>
          <div ref={contentRef}>
            <div className="flex items-center gap-2 text-primary">
              <Image
                src="/assets/icones/Pin.svg"
                alt="Point de vente"
                width={24}
                height={24}
                className="h-6 w-6"
                style={{ filter: ICON_COLOR_FILTER }}
              />
              <h3 className="text-lg font-semibold">Notre Point de Vente Physique</h3>
            </div>
            <h2 className="mt-2 text-3xl font-bold font-headline tracking-tight sm:text-4xl">
              Retirez vos Commandes à Lomé
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Pour plus de flexibilité, vos clients ont la possibilité de
              retirer directement leurs commandes auprès de notre direction
              logistique à Lomé.
            </p>
            <p className="mt-4 text-muted-foreground">
              Notre équipe sur place assure un service client de qualité pour
              une expérience de retrait simple et rapide. C'est une excellente
              option pour les clients locaux ou ceux qui préfèrent ne pas
              attendre la livraison.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
