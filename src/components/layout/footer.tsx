import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer id="contact" className="relative bg-white/60 backdrop-blur-3xl text-foreground/70 overflow-hidden border-t border-black/5">
      {/* Background Accent Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container relative z-10 pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6 group">
              <Image 
                src="/assets/logo.png" 
                alt="Kaba-Fulfillment - Votre partenaire logistique" 
                width={180} 
                height={50} 
                className="h-12 md:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <p className="text-lg leading-relaxed max-w-md font-medium text-foreground/60">
              Simplifiez votre logistique africaine. Nous gérons le stockage, la préparation et la livraison pour votre croissance.
            </p>
            
            <div className="flex gap-3 mt-6">
              {[
                { icon: Facebook, href: "https://web.facebook.com/kabadelivery" },
                { icon: Instagram, href: "https://www.instagram.com/kaba_delivery/" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/kaba-delivery-sarl/posts/?feedView=all" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-black/5 text-foreground/60 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-3 lg:pl-10">
            <h3 className="text-foreground font-black uppercase tracking-widest text-xs mb-6">Navigation</h3>
            <ul className="space-y-3">
              {[
                { label: "Nos Offres", href: "#nos-offres" },
                { label: "Pourquoi KABA", href: "#pourquoi-kaba" },
                { label: "Tarifs & Plans", href: "#tarifs" },
                { label: "Questions FAQ", href: "#faq" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-base font-medium hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h3 className="text-foreground font-black uppercase tracking-widest text-xs mb-6">Bureau de Lomé</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                 <Image
                   src="/assets/icones/Pin.svg"
                   alt="Map"
                   width={20}
                   height={20}
                   className="h-5 w-5 mt-0.5 flex-shrink-0"
                   style={{ filter: 'invert(15%) sepia(95%) saturate(6932%) hue-rotate(348deg) brightness(92%) contrast(100%)' }}
                 />
                <p className="text-base leading-relaxed text-foreground/80">
                  Agbalepedo, 319 Rue AZIABOR, Lomé, Togo
                </p>
              </div>
              
              <div className="space-y-2 pt-4 border-t border-black/5">
                <a href="tel:+22892109474" className="block text-xl font-black text-foreground hover:text-primary transition-all">
                  +228 92 10 94 74
                </a>
                <a href="mailto:contact@kaba-delivery.com" className="block text-base hover:text-primary transition-colors">
                  contact@kaba-delivery.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium">
            &copy; {new Date().getFullYear()} Kaba-Fulfillment.
          </p>
          <div className="flex gap-6 text-xs font-semibold">
            <Link href="/mentions-legales" className="hover:text-primary transition-colors">Mentions Légales</Link>
            <Link href="/confidentialite" className="hover:text-primary transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
