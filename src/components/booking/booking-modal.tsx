'use client';

import * as React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

const CALENDLY_URL = 'https://calendly.com/kaba-delivery';

export function BookingModal() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-booking-modal', handler);
    return () => window.removeEventListener('open-booking-modal', handler);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[480px] w-[95vw] h-[70vh] p-0 overflow-hidden rounded-[2rem] border-0 shadow-2xl">
        <DialogTitle className="sr-only">
          Prendre rendez-vous — Kaba Fulfillment
        </DialogTitle>
        <iframe
          src={CALENDLY_URL}
          width="100%"
          height="100%"
          title="Prendre rendez-vous — Kaba Fulfillment"
          className="rounded-[2rem]"
        />
      </DialogContent>
    </Dialog>
  );
}
