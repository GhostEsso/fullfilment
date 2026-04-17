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
    <section className="bg-white py-12 md:py-32 overflow-hidden">
      <div className="container mx-auto px-2 sm:px-8">
        <div
          ref={containerRef}
          className="relative rounded-[2rem] sm:rounded-[3.5rem] bg-gradient-to-br from-primary to-[#be123c] text-primary-foreground p-5 sm:p-12 lg:p-20 overflow-hidden shadow-[0_40px_100px_-20px_rgba(225,29,72,0.4)]"
        >
          {/* Liquid Background Effects */}
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[80%] bg-white/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-black/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">
            {/* Text Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left" ref={contentRef}>
              <div className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] sm:text-xs font-black mb-4 sm:mb-6 uppercase tracking-widest border border-white/20">
                 C'est le moment d'agir
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black font-headline tracking-tighter leading-[1.1] text-balance">
                Prêt à <span className="text-white/80">optimiser</span> votre logistique ?
              </h2>
              <p className="mt-4 text-sm sm:text-lg text-white/90 font-medium leading-relaxed max-w-sm sm:max-w-xl">
                Rejoignez les e-commerçants qui nous font confiance. Simplifiez vos opérations et accélérez votre croissance dès aujourd'hui.
              </p>
              
              <Button 
                size="lg" 
                className="mt-6 lg:mt-10 bg-white text-primary hover:bg-white/95 w-full sm:w-fit h-auto min-h-[3rem] py-3 lg:h-16 px-2 sm:px-10 rounded-[1.25rem] lg:rounded-[1.5rem] text-[11px] sm:text-base lg:text-xl font-black uppercase tracking-wider shadow-2xl transition-all duration-300 hover:scale-[1.02] whitespace-normal lg:whitespace-nowrap leading-tight" 
                asChild
              >
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 lg:gap-3 text-center">
                  <span>Démarrer avec Kaba-Fulfillment</span>
                  <ArrowRight className="h-4 w-4 lg:h-6 lg:w-6 flex-shrink-0" />
                </a>
              </Button>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center w-full mt-10 lg:mt-0" ref={imageRef}>
              {ctaImage && (
                <div className="relative w-full max-w-[200px] sm:max-w-sm lg:max-w-lg aspect-square">
                  <div className="absolute -inset-6 bg-white/10 rounded-full blur-3xl opacity-50" />
                  <div className="relative h-full w-full rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden border-4 lg:border-8 border-white/20 shadow-2xl">
                    <Image
                      src={ctaImage.imageUrl}
                      alt={ctaImage.description}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      priority
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
