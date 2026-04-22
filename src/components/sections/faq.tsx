'use client';
import { faqItems } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function Faq() {
  return (
    <section id="faq" className="relative py-24 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="container relative z-10 max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-black mb-4 uppercase tracking-[0.2em]">
             Aide &amp; Support
          </div>
          <h2 className="text-4xl font-black font-headline tracking-tighter sm:text-5xl text-foreground leading-[1.1]">
            Tout savoir sur <span className="text-primary underline underline-offset-8 decoration-primary/20">Kaba Fulfillment</span>
          </h2>
          <p className="mt-4 text-xl text-foreground/70 font-medium max-w-2xl mx-auto">
            Nous avons compilé les réponses aux questions les plus fréquentes pour vous aider à démarrer rapidement.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={item.value} 
              value={item.value}
              className="group border-none bg-white rounded-2xl px-6 md:px-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 border border-black/5"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <AccordionTrigger className="text-left text-lg md:text-xl font-black py-6 hover:no-underline hover:text-primary transition-colors text-foreground">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 text-base md:text-lg leading-relaxed pb-6 font-medium">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
