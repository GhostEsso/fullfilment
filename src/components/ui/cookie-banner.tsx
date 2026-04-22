'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Cookie, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('kaba-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('kaba-cookie-consent', 'accepted');
    setIsVisible(false);
    // Ici, vous pourriez initialiser Google Analytics ou d'autres scripts de tracking
    console.log('Cookies acceptés');
  };

  const handleDecline = () => {
    localStorage.setItem('kaba-cookie-consent', 'declined');
    setIsVisible(false);
    console.log('Cookies refusés');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[9999]"
        >
          <Card className="p-6 bg-white/80 backdrop-blur-xl border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[2rem] overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary shrink-0">
                <Cookie size={24} strokeWidth={2.5} />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-black tracking-tight text-foreground">
                    Expérience personnalisée
                  </h3>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-medium">
                  Nous utilisons des cookies pour améliorer votre navigation et mesurer l'audience de notre plateforme logistique. En continuant, vous acceptez notre politique de confidentialité.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button 
                    onClick={handleAccept}
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-2 text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
                  >
                    Accepter
                  </Button>
                  <Button 
                    onClick={handleDecline}
                    variant="ghost"
                    className="rounded-full px-6 py-2 text-xs font-black uppercase tracking-widest hover:bg-black/5 transition-all"
                  >
                    Refuser
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
