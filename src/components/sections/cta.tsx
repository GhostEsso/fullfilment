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
    <section className="bg-white py-24 md:py-32">
      <div className="container px-5 sm:px-8">
        <div
          ref={containerRef}
          className="relative rounded-[3.5rem] bg-gradient-to-br from-primary to-[#be123c] text-primary-foreground p-8 sm:p-12 md:p-24 overflow-hidden shadow-[0_40px_100px_-20px_rgba(225,29,72,0.4)]"
        >
          {/* Liquid Background Effects */}
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[80%] bg-white/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-black/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left" ref={contentRef}>
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-black mb-6 uppercase tracking-widest border border-white/20">
                 C'est le moment d'agir
              </div>
              <h2 className="text-4xl font-black font-headline tracking-tighter sm:text-5xl md:text-6xl leading-[1.05]">
                Prêt à <span className="text-white/80">optimiser</span> votre logistique ?
              </h2>
              <p className="mt-8 text-xl md:text-2xl text-white/90 font-medium leading-relaxed max-w-xl">
                Rejoignez les e-commerçants qui nous font confiance. Simplifiez vos opérations et accélérez votre croissance dès aujourd'hui.
              </p>
              
              <Button 
                size="lg" 
                className="mt-10 md:mt-12 bg-white text-primary hover:bg-white/95 w-full sm:w-fit h-16 px-10 rounded-[1.5rem] text-lg lg:text-xl font-black uppercase tracking-widest shadow-2xl transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] group" 
                asChild
              >
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                  <span className="whitespace-normal md:whitespace-nowrap">Démarrer avec Kaba-Fulfillment</span>
                  <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center order-first md:order-last w-full" ref={imageRef}>
              {ctaImage && (
                <div className="relative w-full max-w-lg aspect-square">
                  <div className="absolute -inset-6 bg-white/10 rounded-full blur-3xl opacity-50" />
                  <div className="relative h-full w-full rounded-[3.5rem] overflow-hidden border-8 border-white/20 shadow-2xl">
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
