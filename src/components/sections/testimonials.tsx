'use client';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { testimonials } from '@/lib/data';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Direction map: repeats every 4 cards
const FROM_DIRS = [
  { x: -120, y: 0 },   // card 1 → from left
  { x: 0,   y: 120 },  // card 2 → from bottom
  { x: 120,  y: 0 },   // card 3 → from right
  { x: 0,   y: -120 }, // card 4 → from top
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // --- Title fade-in ---
    gsap.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 88%',
        toggleActions: 'play none none reverse',
      },
    });

    // --- Set cards invisible initially ---
    const cards = gsap.utils.toArray<HTMLElement>('.testimonial-card');
    cards.forEach((card, i) => {
      const dir = FROM_DIRS[i % 4];
      gsap.set(card, { x: dir.x, y: dir.y, opacity: 0, scale: 0.85 });
    });

    // --- ScrollTrigger.batch: the official GSAP way ---
    // Fires onEnter for all cards that enter the viewport within the interval,
    // then animates them as a group with a stagger.
    ScrollTrigger.batch('.testimonial-card', {
      interval: 0.15,            // collect cards entering within 150ms
      batchMax: 3,               // max 3 per batch (matches 3-col grid)
      start: 'top 90%',

      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: { each: 0.15, grid: [1, 3] },
          overwrite: true,
        });
      },

      onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, overwrite: true }),

      onEnterBack: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.12,
          overwrite: true,
        }),

      onLeaveBack: (batch) => {
        batch.forEach((card) => {
          const i = cards.indexOf(card as HTMLElement);
          const dir = FROM_DIRS[i % 4];
          gsap.set(card, { x: dir.x, y: dir.y, opacity: 0, overwrite: true });
        });
      },
    });

    // Resetting y:0 before ScrollTrigger refresh so position calcs are accurate
    ScrollTrigger.addEventListener('refreshInit', () => {
      gsap.set('.testimonial-card', { clearProps: 'transform' });
    });
  }, { scope: containerRef });

  return (
    <section id="temoignages" className="relative bg-[#f6f6f9] py-24 overflow-hidden" ref={containerRef}>
      {/* Subtle Background Mesh/Circles for Glass Effect Visibility */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16" ref={titleRef}>
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-4">
             Confiance & Fiabilité
          </div>
          <h2 className="text-4xl font-black tracking-tighter sm:text-5xl text-foreground font-headline leading-tight">
            Des entreprises qui <span className="text-primary">prospèrent</span> avec nous.
          </h2>
          <p className="mt-4 text-xl text-muted-foreground font-medium">
            Découvrez comment Kaba-Fulfillment aide les marques à conquérir le marché togolais.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card group relative bg-white/60 backdrop-blur-md rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              {/* Decorative Quote Icon with Glow */}
              <div className="absolute top-8 right-10 opacity-10 group-hover:opacity-30 transition-all duration-500 scale-100 group-hover:scale-110">
                <Quote size={56} className="text-primary" />
              </div>

              <div className="flex flex-col h-full relative z-10">
                <blockquote className="flex-grow">
                  <p className="text-[1.1rem] text-foreground/80 font-medium italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </blockquote>

                <div className="mt-10 pt-8 border-t border-black/5">
                  <div className="flex flex-col">
                    <span className="font-black text-xl text-foreground tracking-tight">{t.author}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
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
