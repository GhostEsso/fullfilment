'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { WHATSAPP_URL, getWhatsAppLink } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Cta() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaImage = PlaceHolderImages.find((img) => img.id === 'cta-image');

  useGSAP(() => {
    gsap.from(contentRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(imageRef.current, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: containerRef });

  return (
    <section className="bg-background">
      <div className="container">
        <div
          ref={containerRef}
          className="relative rounded-lg bg-primary text-primary-foreground p-8 md:p-16 overflow-hidden shadow-2xl"
        >
          <div className="absolute -bottom-20 -right-20 opacity-10 scale-150">
            <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M38.1,-48.7C52.1,-42.2,68.2,-33.8,75.1,-21.2C82,-8.6,79.8,8.2,71.9,21.5C64,34.8,50.4,44.6,36.8,51.9C23.1,59.2,9.4,64,-4.3,65.8C-17.9,67.6,-35.8,66.4,-48.9,58.8C-62,51.2,-70.3,37.3,-74.6,22.2C-78.9,7.1,-79.2,-9.1,-72.1,-22.4C-65,-35.7,-50.6,-46.1,-36.8,-52C-22.9,-57.9,-9.6,-59.3,2.4,-59.8C14.4,-60.3,28.8,-59.9,38.1,-48.7Z" transform="translate(100 100)" /></svg>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center relative">
            <div className="md:pr-8" ref={contentRef}>
              <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
                Prêt à optimiser votre logistique ?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Rejoignez les e-commerçants qui nous font confiance. Simplifiez vos opérations et accélérez votre croissance dès aujourd'hui.
              </p>
              <Button size="lg" className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  Démarrer avec KABA
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-center order-first md:order-last" ref={imageRef}>
              {ctaImage && (
                <Image
                  src={ctaImage.imageUrl}
                  alt={ctaImage.description}
                  width={400}
                  height={400}
                  className="rounded-lg object-contain shadow-2xl aspect-square"
                  data-ai-hint={ctaImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
