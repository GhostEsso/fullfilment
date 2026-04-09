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
    <section id="faq" className="bg-background" ref={containerRef}>
      <div className="container max-w-3xl mx-auto">
        <div className="text-center" ref={titleRef}>
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Questions Fréquemment Posées
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Trouvez les réponses à vos questions sur nos services.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full mt-12" ref={accordionRef}>
          {faqItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
