'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-kaba');

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.from(textRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }).from(
      imageRef.current,
      {
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.6'
    );
  }, { scope: containerRef });

  return (
    <section id="about" className="bg-background py-16 md:py-24">
      <div className="container" ref={containerRef}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={textRef} className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                Fulfillment Haute Performance
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-headline tracking-tighter text-foreground leading-[1.05] text-balance">
              Kaba-Fulfillment — Le Meilleur en Afrique de l'Ouest.
            </h2>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground font-medium max-w-2xl">
              Rejoignez les e-commerçants qui font confiance à Kaba-Fulfillment pour gérer leur logistique de A à Z. Concentrez-vous sur vos ventes, on s'occupe du reste.
            </p>
            
            <div className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-2xl lg:max-w-none">
                <div className="flex flex-col items-center lg:items-start lg:border-l-2 lg:border-primary lg:pl-6 bg-primary/5 lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none">
                    <span className="text-4xl sm:text-5xl font-black text-primary leading-none">5</span>
                    <span className="text-sm sm:text-base font-bold uppercase tracking-wider mt-3 text-foreground">Offres</span>
                    <span className="text-sm text-muted-foreground mt-2 leading-tight">Pour tous les profils d'e-commerçants</span>
                </div>
                <div className="flex flex-col items-center lg:items-start lg:border-l-2 lg:border-primary lg:pl-6 bg-primary/5 lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none">
                    <span className="text-4xl sm:text-5xl font-black text-primary leading-none">—</span>
                    <span className="text-sm sm:text-base font-bold uppercase tracking-wider mt-3 text-foreground">Zone UEMOA</span>
                    <span className="text-sm text-muted-foreground mt-2 leading-tight">Couverture régionale complète</span>
                </div>
                <div className="flex flex-col items-center lg:items-start lg:border-l-2 lg:border-primary lg:pl-6 bg-primary/5 lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none">
                    <span className="text-4xl sm:text-5xl font-black text-primary leading-none">—</span>
                    <span className="text-sm sm:text-base font-bold uppercase tracking-wider mt-3 text-foreground">Sur Mesure</span>
                    <span className="text-sm text-muted-foreground mt-2 leading-tight">Solutions adaptées à votre activité</span>
                </div>
            </div>
          </div>
          <div className="flex justify-center" ref={imageRef}>
            {aboutImage && (
              <Card className="overflow-hidden shadow-2xl">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
