'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { benefits } from '@/lib/data';
import { ICON_COLOR_FILTER, getWhatsAppLink } from '@/lib/utils';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function WhyKaba() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(() => {

    // ── 1. Parallax background blobs ──────────────────────────────
    gsap.to('.wk-blob-top', {
      y: -90,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
    });
    gsap.to('.wk-blob-bottom', {
      y: 70,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
    });

    // ── 2. Title section — sequenced timeline ─────────────────────
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    titleTl
      .from('.wk-badge', {
        x: -28,
        autoAlpha: 0,
        duration: 0.55,
        ease: 'back.out(1.7)',
      })
      .from(
        '.wk-title-line',
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
        '.wk-subtitle',
        {
          y: 22,
          autoAlpha: 0,
          duration: 0.7,
          ease: 'power3.out',
        },
        '-=0.45'
      );

    // ── 3. Cards — 3D entrance with ScrollTrigger.batch ───────────
    gsap.set('.why-kaba-card', { autoAlpha: 0, y: 70, rotateX: 10, scale: 0.95 });

    ScrollTrigger.batch('.why-kaba-card', {
      onEnter: (elements) => {
        gsap.to(elements, {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          transformPerspective: 900,
          transformOrigin: 'center bottom',
          duration: 1.05,
          ease: 'power3.out',
          stagger: 0.12,
        });
      },
      start: 'top 86%',
      once: true,
    });

    // ── 4. Icon containers — pop-in after cards ───────────────────
    gsap.from('.wk-icon-wrap', {
      scale: 0,
      autoAlpha: 0,
      rotation: -15,
      duration: 0.65,
      ease: 'back.out(2)',
      stagger: { amount: 0.45, from: 'start' },
      scrollTrigger: {
        trigger: '.wk-cards-grid',
        start: 'top 82%',
        once: true,
      },
    });

    // ── 5. CTA button ─────────────────────────────────────────────
    gsap.from('.wk-cta', {
      y: 28,
      autoAlpha: 0,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.wk-cta',
        start: 'top 92%',
        once: true,
      },
    });

  }, { scope: containerRef });

  // ── GSAP hover ────────────────────────────────────────────────────
  const onCardEnter = contextSafe((el: HTMLElement) => {
    gsap.to(el, { y: -10, scale: 1.015, duration: 0.35, ease: 'power2.out' });
    gsap.to(el.querySelector('.wk-icon-wrap'), {
      scale: 1.1,
      rotate: 4,
      duration: 0.35,
      ease: 'power2.out',
    });
    gsap.to(el.querySelector('.wk-accent-corner'), {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    });
  });

  const onCardLeave = contextSafe((el: HTMLElement) => {
    gsap.to(el, { y: 0, scale: 1, duration: 0.45, ease: 'power2.inOut' });
    gsap.to(el.querySelector('.wk-icon-wrap'), {
      scale: 1,
      rotate: 0,
      duration: 0.4,
      ease: 'power2.inOut',
    });
    gsap.to(el.querySelector('.wk-accent-corner'), {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.inOut',
    });
  });

  return (
    <section
      id="pourquoi-kaba"
      className="relative bg-[#f6f6f9] py-32 overflow-hidden"
      ref={containerRef}
    >
      {/* Parallax blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="wk-blob-top absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px]" />
        <div className="wk-blob-bottom absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]" />
      </div>

      <div className="container relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-20" ref={titleRef}>
          <div className="wk-badge inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-black mb-4 uppercase tracking-[0.2em]">
            Expertise & Performance
          </div>
          <h2 className="text-4xl font-black tracking-tighter sm:text-6xl text-foreground font-headline leading-[1.05]">
            <span className="wk-title-line block">Pourquoi propulser</span>
            <span className="wk-title-line block">votre business avec</span>
            <span className="wk-title-line block text-primary">Kaba Fulfillment ?</span>
          </h2>
          <p className="wk-subtitle mt-6 text-xl text-muted-foreground font-medium max-w-2xl">
            Bien plus qu'un prestataire, nous devenons le moteur de votre croissance sur le marché africain.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="wk-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="why-kaba-card relative bg-white/60 backdrop-blur-md rounded-[2rem] p-8 border border-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col gap-6 cursor-default will-change-transform"
              onMouseEnter={(e) => onCardEnter(e.currentTarget)}
              onMouseLeave={(e) => onCardLeave(e.currentTarget)}
            >
              {/* Icon */}
              <div className="wk-icon-wrap relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-inner overflow-hidden border border-black/5">
                <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-500" />
                <Image
                  src={benefit.iconPath}
                  alt={benefit.title}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain relative z-10"
                  style={{ filter: ICON_COLOR_FILTER }}
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-black text-xl text-foreground mb-3 tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-[1.05rem] text-foreground/80 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>

              {/* Accent corner — GSAP controls opacity */}
              <div className="wk-accent-corner absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="wk-cta mt-16 md:mt-20 flex justify-center px-4">
          <Button
            asChild
            className="h-12 md:h-14 px-8 md:px-12 text-[10px] md:text-[11px] font-bold uppercase tracking-widest rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full md:w-auto leading-tight whitespace-normal md:whitespace-nowrap"
          >
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-center">
              Vendez au Togo maintenant avec Kaba
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
}
