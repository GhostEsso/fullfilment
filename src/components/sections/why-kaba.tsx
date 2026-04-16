'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { benefits } from '@/lib/data';
import { ICON_COLOR_FILTER, getWhatsAppLink } from '@/lib/utils';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export function WhyKaba() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(titleRef.current, 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo('.why-kaba-card', 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="pourquoi-kaba" className="relative bg-[#f6f6f9] py-32 overflow-hidden" ref={containerRef}>
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20" ref={titleRef}>
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-black mb-4 uppercase tracking-[0.2em]">
             Expertise & Performance
          </div>
          <h2 className="text-4xl font-black tracking-tighter sm:text-6xl text-foreground font-headline leading-[1.05]">
            Pourquoi propulser votre business avec <span className="text-primary">Kaba-Fulfillment</span> ?
          </h2>
          <p className="mt-6 text-xl text-muted-foreground font-medium max-w-2xl">
            Bien plus qu'un prestataire, nous devenons le moteur de votre croissance sur le marché africain.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          ref={cardsRef}
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="why-kaba-card group relative bg-white/60 backdrop-blur-md rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 border border-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col gap-6"
            >
              {/* Glass Icon Container */}
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-inner overflow-hidden border border-black/5 group-hover:border-primary/20 transition-all duration-500">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src={benefit.iconPath}
                  alt={benefit.title}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                  style={{ filter: ICON_COLOR_FILTER }}
                />
              </div>

              {/* Text Area */}
              <div>
                <h3 className="font-black text-xl text-foreground mb-3 tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-[1.05rem] text-muted-foreground leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>

              {/* Subtle accent corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-20 flex justify-center">
          <Button 
            asChild 
            size="lg" 
            className="h-16 px-12 text-lg font-black uppercase tracking-widest rounded-2xl shadow-[0_20px_40px_rgba(225,29,72,0.2)] hover:scale-[1.05] transition-all duration-300"
          >
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Exploser votre croissance dès aujourd'hui
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
