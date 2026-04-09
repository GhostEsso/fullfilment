'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { benefits } from '@/lib/data';
import { ICON_COLOR_FILTER } from '@/lib/utils';

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
    <section id="pourquoi-kaba" className="bg-[#f6f6f9] py-24" ref={containerRef}>
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16" ref={titleRef}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Pourquoi Choisir{' '}
            <span className="text-primary">KABA ?</span>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Plus qu'un service de livraison, nous sommes le partenaire logistique qui propulse votre entreprise.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          ref={cardsRef}
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="why-kaba-card group bg-white rounded-2xl p-6 shadow-sm border border-transparent hover:border-primary/10 hover:shadow-lg transition-all duration-300 flex flex-col gap-4"
            >
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/8 group-hover:bg-primary/15 transition-colors duration-300">
                <Image
                  src={benefit.iconPath}
                  alt={benefit.title}
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                  style={{ filter: ICON_COLOR_FILTER }}
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-bold text-base text-foreground mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
