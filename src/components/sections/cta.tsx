'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getWhatsAppLink } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Cta() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ctaImage = PlaceHolderImages.find((img) => img.id === 'cta-image');

  useGSAP(() => {

    // ── 1. Blobs initial set (opacity handled by class, GSAP loops below) ──

    // ── 2. Blobs — smooth GSAP pulse loops ────────────────────────
    gsap.to('.cta-blob-top', {
      scale: 1.2,
      opacity: 0.18,
      duration: 3.5,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
    gsap.to('.cta-blob-bottom', {
      scale: 1.15,
      opacity: 0.25,
      duration: 4,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: 0.8,
    });

    // ── 3. Text — sequenced timeline ─────────────────────────────
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.cta-content',
        start: 'top 82%',
        once: true,
      },
    });

    tl
      .from('.cta-badge', {
        y: -20,
        autoAlpha: 0,
        duration: 0.5,
        ease: 'power3.out',
      })
      .from(
        '.cta-title-line',
        {
          y: 55,
          autoAlpha: 0,
          duration: 0.85,
          ease: 'power4.out',
          stagger: 0.1,
        },
        '-=0.2'
      )
      .from(
        '.cta-desc',
        {
          y: 22,
          autoAlpha: 0,
          duration: 0.65,
          ease: 'power3.out',
        },
        '-=0.4'
      )
      .from(
        '.cta-btn',
        {
          y: 28,
          autoAlpha: 0,
          scale: 0.9,
          duration: 0.6,
          ease: 'back.out(1.7)',
          stagger: 0.12,
        },
        '-=0.3'
      );

    // ── 4. Image — rotate + scale entrance ───────────────────────
    gsap.from('.cta-image-wrap', {
      rotation: -6,
      scale: 0.82,
      autoAlpha: 0,
      duration: 1.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.cta-image-wrap',
        start: 'top 88%',
        once: true,
      },
    });

    // Continuous floating loop (starts after entrance)
    gsap.to('.cta-image-wrap', {
      y: -14,
      duration: 2.8,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: 1.3,
    });

  }, { scope: containerRef });

  return (
    <section className="cta-card relative bg-gradient-to-br from-primary to-[#be123c] text-primary-foreground py-20 md:py-32 overflow-hidden" ref={containerRef}>

      {/* Blobs */}
      <div className="cta-blob-top absolute top-[-20%] right-[-10%] w-[60%] h-[80%] bg-white/10 rounded-full blur-[120px] pointer-events-none opacity-10" />
      <div className="cta-blob-bottom absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-black/20 rounded-full blur-[100px] pointer-events-none opacity-20" />

      <div className="container relative z-10 px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* Text */}
            <div className="cta-content flex flex-col items-center lg:items-start text-center lg:text-left">

              <div className="cta-badge inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] sm:text-xs font-black mb-4 sm:mb-6 uppercase tracking-widest border border-white/20">
                C&apos;est le moment d&apos;agir
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black font-headline tracking-tighter leading-[1.1] text-balance">
                <span className="cta-title-line block">Prêts à ouvrir votre</span>
                <span className="cta-title-line block">business au marché</span>
                <span className="cta-title-line block text-white/80">Togolais ?</span>
              </h2>

              <p className="cta-desc mt-4 text-sm sm:text-lg text-white/90 font-medium leading-relaxed max-w-sm sm:max-w-xl">
                Rejoignez les e-commerçants et entreprises qui nous font confiance.
                Simplifiez vos opérations et accélérez votre croissance dès aujourd&apos;hui.
              </p>

              <div className="mt-6 lg:mt-10 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Button
                  size="lg"
                  className="cta-btn bg-white text-primary hover:bg-white/95 w-full sm:w-fit h-12 md:h-14 px-6 md:px-10 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-normal lg:whitespace-nowrap leading-tight group/btn"
                  asChild
                >
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 lg:gap-3 text-center">
                    <span>Démarrer avec Kaba</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-booking-modal'))}
                  className="cta-btn border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary w-full sm:w-fit h-12 md:h-14 px-6 md:px-10 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap leading-tight flex items-center gap-2"
                >
                  <CalendarDays className="h-4 w-4" />
                  Prendre un rendez-vous
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center w-full mt-10 lg:mt-0">
              {ctaImage && (
                <div className="cta-image-wrap relative w-full max-w-[200px] sm:max-w-sm lg:max-w-lg aspect-square">
                  <div className="absolute -inset-6 bg-white/10 rounded-full blur-3xl opacity-50" />
                  <div className="relative h-full w-full rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden border-4 lg:border-8 border-white/20 shadow-2xl">
                    <Image
                      src={ctaImage.imageUrl}
                      alt={ctaImage.description}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              )}
            </div>

          </div>
      </div>
    </section>
  );
}
