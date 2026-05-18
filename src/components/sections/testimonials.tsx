'use client';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { testimonials } from '@/lib/data';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(() => {

    // ── 1. Parallax background blobs ──────────────────────────────
    gsap.to('.blob-top', {
      y: -90,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
    });
    gsap.to('.blob-bottom', {
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
      .from('.section-badge', {
        x: -28,
        autoAlpha: 0,
        duration: 0.55,
        ease: 'back.out(1.7)',
      })
      .from(
        '.title-line',
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
        '.section-subtitle',
        {
          y: 22,
          autoAlpha: 0,
          duration: 0.7,
          ease: 'power3.out',
        },
        '-=0.45'
      );

    // ── 3. Cards — 3D entrance with ScrollTrigger.batch ───────────
    // initialise invisible before scroll fires
    gsap.set('.testimonial-card', { autoAlpha: 0, y: 70, rotateX: 10, scale: 0.95 });

    ScrollTrigger.batch('.testimonial-card', {
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
          stagger: 0.14,
        });
      },
      start: 'top 86%',
      once: true,
    });

    // ── 4. Quote icons — pop-in after cards ───────────────────────
    gsap.from('.card-quote-icon', {
      scale: 0,
      rotation: -20,
      autoAlpha: 0,
      duration: 0.75,
      ease: 'back.out(2)',
      stagger: { amount: 0.5, from: 'start' },
      scrollTrigger: {
        trigger: '.testimonial-grid',
        start: 'top 82%',
        once: true,
      },
    });

    // ── 5. Card footer dividers — left-to-right wipe ─────────────
    gsap.from('.card-divider', {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 0.9,
      ease: 'power2.inOut',
      stagger: { amount: 0.55, from: 'start' },
      scrollTrigger: {
        trigger: '.testimonial-grid',
        start: 'top 78%',
        once: true,
      },
    });

  }, { scope: containerRef });

  // ── GSAP hover (contextSafe ensures proper cleanup) ─────────────
  const onCardEnter = contextSafe((el: HTMLElement) => {
    gsap.to(el, {
      y: -10,
      scale: 1.015,
      duration: 0.35,
      ease: 'power2.out',
    });
    gsap.to(el.querySelector('.card-quote-icon'), {
      opacity: 0.28,
      scale: 1.12,
      rotation: 8,
      duration: 0.4,
      ease: 'power2.out',
    });
  });

  const onCardLeave = contextSafe((el: HTMLElement) => {
    gsap.to(el, {
      y: 0,
      scale: 1,
      duration: 0.45,
      ease: 'power2.inOut',
    });
    gsap.to(el.querySelector('.card-quote-icon'), {
      opacity: 0.1,
      scale: 1,
      rotation: 0,
      duration: 0.4,
      ease: 'power2.inOut',
    });
  });

  return (
    <section
      id="temoignages"
      className="relative bg-[#f6f6f9] py-24 overflow-hidden"
      ref={containerRef}
    >
      {/* Parallax background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="blob-top absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="blob-bottom absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">

        {/* Header */}
        <div className="max-w-2xl mb-16" ref={titleRef}>
          <div className="section-badge inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            Confiance & Fiabilité
          </div>
          <h2 className="text-4xl font-black tracking-tighter sm:text-5xl text-foreground font-headline leading-tight">
            <span className="title-line block">Des entreprises qui</span>
            <span className="title-line block text-primary">prospèrent</span>
            <span className="title-line block">avec nous.</span>
          </h2>
          <p className="section-subtitle mt-4 text-xl text-muted-foreground font-medium">
            Découvrez comment Kaba Fulfillment aide les marques à conquérir le marché togolais.
          </p>
        </div>

        {/* Cards grid */}
        <div className="testimonial-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card relative bg-white/60 backdrop-blur-md rounded-[2.5rem] p-10 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-default will-change-transform"
              onMouseEnter={(e) => onCardEnter(e.currentTarget)}
              onMouseLeave={(e) => onCardLeave(e.currentTarget)}
            >
              {/* Quote icon — GSAP controls opacity/transform on hover */}
              <div className="card-quote-icon absolute top-8 right-10 opacity-10 pointer-events-none">
                <Quote size={56} className="text-primary" />
              </div>

              <div className="flex flex-col h-full relative z-10">
                <blockquote className="flex-grow">
                  <p className="text-[1.1rem] text-foreground/80 font-medium italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>

                <div className="mt-10 pt-8 card-divider border-t border-black/5">
                  <div className="flex flex-col">
                    <span className="font-black text-xl text-foreground tracking-tight">{t.author}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                      </span>
                      <span className="text-xs text-primary font-black uppercase tracking-[0.2em]">
                        {t.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
