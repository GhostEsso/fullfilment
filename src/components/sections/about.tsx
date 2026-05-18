'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef    = useRef<HTMLDivElement>(null);

  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-kaba');

  useGSAP(() => {

    // ── 1. Text left — sequenced timeline ────────────────────────
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 82%',
        toggleActions: 'play none none reverse',
      },
    });

    textTl
      .from('.abt-badge', {
        x: -28,
        autoAlpha: 0,
        duration: 0.55,
        ease: 'back.out(1.7)',
      })
      .from(
        '.abt-title-line',
        {
          y: 60,
          autoAlpha: 0,
          duration: 0.9,
          ease: 'power4.out',
          stagger: 0.1,
        },
        '-=0.25'
      )
      .from(
        '.abt-desc',
        {
          y: 22,
          autoAlpha: 0,
          duration: 0.7,
          ease: 'power3.out',
        },
        '-=0.45'
      );

    // ── 2. Stats blocks — pop-in stagger ─────────────────────────
    gsap.from('.abt-stat', {
      y: 45,
      autoAlpha: 0,
      scale: 0.88,
      duration: 0.75,
      ease: 'back.out(1.5)',
      stagger: 0.14,
      scrollTrigger: {
        trigger: '.abt-stats',
        start: 'top 86%',
        once: true,
      },
    });

    // ── 3. Counter: 0 → 5 for the numeric stat ───────────────────
    const counterEl = document.querySelector<HTMLElement>('.abt-count');
    if (counterEl) {
      gsap.fromTo(
        counterEl,
        { textContent: '0' },
        {
          textContent: '5',
          snap: { textContent: 1 },
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.abt-stats',
            start: 'top 86%',
            once: true,
          },
        }
      );
    }

    // ── 4. Image — clip-path wipe from left + parallax ────────────
    gsap.fromTo(
      imageRef.current,
      {
        clipPath: 'inset(0 100% 0 0 round 16px)',
        autoAlpha: 0,
      },
      {
        clipPath: 'inset(0 0% 0 0 round 16px)',
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

    // Subtle image parallax on scroll
    gsap.to(imageRef.current, {
      y: -40,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.8,
      },
    });

  }, { scope: containerRef });

  return (
    <section id="about" className="bg-background py-16 md:py-24 overflow-hidden">
      <div className="container" ref={containerRef}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="abt-badge inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              Fulfillment Haute Performance
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-headline tracking-tighter text-foreground leading-[1.05] text-balance">
              <span className="abt-title-line block">Kaba Fulfillment —</span>
              <span className="abt-title-line block">Le Meilleur en</span>
              <span className="abt-title-line block text-primary">Afrique de l&apos;Ouest.</span>
            </h2>

            <p className="abt-desc mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground font-medium max-w-2xl">
              Rejoignez les e-commerçants et entreprises qui font confiance à Kaba
              Fulfillment pour gérer leur logistique de A à Z. Concentrez-vous sur
              vos ventes, on s&apos;occupe du reste.
            </p>

            {/* Stats */}
            <div className="abt-stats mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-2xl lg:max-w-none">

              <div className="abt-stat flex flex-col items-center lg:items-start lg:border-l-2 lg:border-primary lg:pl-6 bg-primary/5 lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none">
                <span className="abt-count text-4xl sm:text-5xl font-black text-primary leading-none">5</span>
                <span className="text-sm sm:text-base font-bold uppercase tracking-wider mt-3 text-foreground">Offres</span>
                <span className="text-sm text-muted-foreground mt-2 leading-tight">Pour tous les profils d&apos;e-commerçants</span>
              </div>

              <div className="abt-stat flex flex-col items-center lg:items-start lg:border-l-2 lg:border-primary lg:pl-6 bg-primary/5 lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none">
                <span className="text-4xl sm:text-5xl font-black text-primary leading-none">—</span>
                <span className="text-sm sm:text-base font-bold uppercase tracking-wider mt-3 text-foreground">Zone UEMOA</span>
                <span className="text-sm text-muted-foreground mt-2 leading-tight">Couverture régionale complète</span>
              </div>

              <div className="abt-stat flex flex-col items-center lg:items-start lg:border-l-2 lg:border-primary lg:pl-6 bg-primary/5 lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none">
                <span className="text-4xl sm:text-5xl font-black text-primary leading-none">—</span>
                <span className="text-sm sm:text-base font-bold uppercase tracking-wider mt-3 text-foreground">Sur Mesure</span>
                <span className="text-sm text-muted-foreground mt-2 leading-tight">Solutions adaptées à votre activité</span>
              </div>

            </div>
          </div>

          {/* Right — image with clip-path reveal */}
          <div className="flex justify-center" ref={imageRef}>
            {aboutImage && (
              <Card className="overflow-hidden shadow-2xl w-full">
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
