'use client';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { faqItems } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

gsap.registerPlugin(ScrollTrigger);

export function Faq() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(accordionRef.current?.children || [], {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: accordionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: containerRef });

  return (
    <section id="faq" className="relative py-24 overflow-hidden bg-background" ref={containerRef}>
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="container relative z-10 max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16" ref={titleRef}>
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
             Aide & Support
          </div>
          <h2 className="text-4xl font-black font-headline tracking-tighter sm:text-5xl text-foreground leading-[1.1]">
            Tout savoir sur <span className="text-primary underline decoration-primary/20">Kaba-Fulfillment</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Nous avons compilé les réponses aux questions les plus fréquentes pour vous aider à démarrer rapidement.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4" ref={accordionRef}>
          {faqItems.map((item) => (
            <AccordionItem 
              key={item.value} 
              value={item.value}
              className="group border-none bg-white/40 backdrop-blur-md rounded-2xl px-6 md:px-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 border border-white/60"
            >
              <AccordionTrigger className="text-left text-lg font-bold py-6 hover:no-underline hover:text-primary transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[1.05rem] leading-relaxed pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
