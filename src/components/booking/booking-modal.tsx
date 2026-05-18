'use client';

import * as React from 'react';
import { isBefore, startOfDay, format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { ChevronRight, CheckCircle2, X } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { sendBookingAction } from '@/app/actions';

// ─── Constants ───────────────────────────────────────────────────────────────

const DURATIONS = [15, 30, 45, 60] as const;
type Duration = (typeof DURATIONS)[number];

interface ContactData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function generateTimeSlots(
  duration: number,
  selectedDate?: Date
): { morning: string[]; afternoon: string[] } {
  const morning: string[] = [];
  const afternoon: string[] = [];

  const now = new Date();
  const isToday = selectedDate
    ? selectedDate.toDateString() === now.toDateString()
    : false;
  const cutoff = now.getHours() * 60 + now.getMinutes() + 30; // 30-min buffer

  for (let h = 8; h < 12; h++) {
    for (let m = 0; m < 60; m += 30) {
      const slotStart = h * 60 + m;
      if (slotStart + duration <= 12 * 60) {
        if (!isToday || slotStart >= cutoff) {
          morning.push(`${pad(h)}:${pad(m)}`);
        }
      }
    }
  }

  for (let h = 14; h <= 17; h++) {
    for (let m = 0; m < 60; m += 30) {
      if (h === 17 && m > 0) break;
      const slotStart = h * 60 + m;
      if (slotStart + duration <= 17 * 60 + 30) {
        if (!isToday || slotStart >= cutoff) {
          afternoon.push(`${pad(h)}:${pad(m)}`);
        }
      }
    }
  }

  return { morning, afternoon };
}

function isDayDisabled(day: Date): boolean {
  return isBefore(day, startOfDay(new Date())) || day.getDay() === 0;
}

// ─── Step indicator ───────────────────────────────────────────────────────────

function StepBar({ step }: { step: number }) {
  const steps = ['Date', 'Créneau', 'Vos infos'];
  return (
    <div className="flex items-center gap-2 mt-5">
      {steps.map((label, i) => {
        const idx = i + 1;
        const done = step > idx;
        const active = step === idx;
        return (
          <React.Fragment key={label}>
            <div className="flex flex-col items-center gap-1">
              <div
                className={cn(
                  'h-2 w-2 rounded-full transition-all duration-300',
                  done ? 'bg-white scale-100' : active ? 'bg-white scale-125' : 'bg-white/30'
                )}
              />
              <span
                className={cn(
                  'text-[10px] font-bold uppercase tracking-wider hidden sm:block transition-opacity',
                  active ? 'text-white opacity-100' : done ? 'text-white/80' : 'text-white/40'
                )}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={cn('flex-1 h-px mb-3 transition-colors', done ? 'bg-white/60' : 'bg-white/20')} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ─── Slot button ──────────────────────────────────────────────────────────────

function SlotButton({
  slot,
  selected,
  onClick,
}: {
  slot: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all duration-200',
        selected
          ? 'bg-primary text-white border-primary shadow-md'
          : 'bg-white text-foreground border-black/10 hover:border-primary/50 hover:bg-primary/5'
      )}
    >
      {slot}
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function BookingModal() {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState(1);
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();
  const [duration, setDuration] = React.useState<Duration>(30);
  const [selectedTime, setSelectedTime] = React.useState('');
  const [contact, setContact] = React.useState<ContactData>({
    name: '', email: '', phone: '', company: '', message: '',
  });
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-booking-modal', handler);
    return () => window.removeEventListener('open-booking-modal', handler);
  }, []);

  const resetAndClose = () => {
    setOpen(false);
    setTimeout(() => {
      setStep(1);
      setSelectedDate(undefined);
      setDuration(30);
      setSelectedTime('');
      setContact({ name: '', email: '', phone: '', company: '', message: '' });
      setSending(false);
      setError(null);
      setDone(false);
    }, 300);
  };

  const { morning, afternoon } = generateTimeSlots(duration, selectedDate);

  const handleDurationChange = (d: Duration) => {
    setDuration(d);
    setSelectedTime('');
  };

  // Clear selected time if it's no longer in the available slots
  React.useEffect(() => {
    if (!selectedTime) return;
    const allSlots = [...morning, ...afternoon];
    if (!allSlots.includes(selectedTime)) setSelectedTime('');
  }, [morning, afternoon, selectedTime]);

  const submitBooking = async () => {
    if (!selectedDate || !selectedTime || !canSubmit) return;
    setSending(true);
    setError(null);

    try {
      const result = await sendBookingAction({
        date: format(selectedDate, 'EEEE d MMMM yyyy', { locale: fr }),
        time: selectedTime,
        duration,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        company: contact.company || undefined,
        message: contact.message || undefined,
      });

      if (result.success) {
        setDone(true);
        setStep(4);
      } else {
        setError(result.error ?? 'Une erreur est survenue.');
      }
    } catch {
      setError('Impossible de soumettre la demande. Vérifiez votre connexion.');
    } finally {
      setSending(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitBooking();
  };

  const updateContact = (key: keyof ContactData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setContact((prev) => ({ ...prev, [key]: e.target.value }));

  const canProceed2 = !!selectedDate;
  const canProceed3 = !!selectedTime;
  const canSubmit = !!contact.name.trim() && !!contact.email.trim() && !!contact.phone.trim();

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) resetAndClose(); }}>
      <DialogContent className="max-w-xl w-[95vw] p-0 overflow-hidden rounded-[2rem] border-0 shadow-2xl gap-0">

        {/* Header band */}
        <div className="bg-primary text-white px-7 pt-7 pb-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-black tracking-tight text-white">
              Planifier un rendez-vous
            </DialogTitle>
            <DialogDescription className="text-white/70 text-sm font-medium mt-0.5">
              Choisissez un créneau avec l'équipe Kaba Fulfillment
            </DialogDescription>
          </DialogHeader>
          {!done && <StepBar step={step} />}
        </div>

        {/* Body — hauteur fixe, flex column : contenu scroll / boutons fixes en bas */}
        <div className="h-[480px] max-h-[60vh] overflow-hidden flex flex-col">

          {/* ── Step 1 : Date ──────────────────────────────────────── */}
          {step === 1 && (
            <div className="flex flex-col h-full">
              <div className="flex flex-col items-center gap-5 flex-1 overflow-y-auto min-h-0 px-7 pt-7 pb-3">
                <div className="text-center">
                  <h3 className="text-lg font-black text-foreground">Choisissez une date</h3>
                  <p className="text-sm text-muted-foreground mt-1">Lundi → Samedi · Pas de dimanches</p>
                </div>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={isDayDisabled}
                  locale={fr}
                  className="rounded-2xl border border-black/5 shadow-sm p-3 w-fit"
                />
              </div>
              <div className="px-7 pb-7 pt-4 border-t border-black/5 flex justify-center">
                <Button
                  onClick={() => setStep(2)}
                  disabled={!canProceed2}
                  className="w-full max-w-xs rounded-full h-11 font-bold uppercase tracking-widest text-[11px]"
                >
                  Continuer <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* ── Step 2 : Durée + Créneau ───────────────────────────── */}
          {step === 2 && (
            <div className="flex flex-col h-full">
              <div className="flex flex-col gap-5 flex-1 overflow-y-auto min-h-0 px-7 pt-7 pb-3">
                <div>
                  <h3 className="text-base font-black text-foreground mb-3">Durée de la réunion</h3>
                  <div className="flex gap-2 flex-wrap">
                    {DURATIONS.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => handleDurationChange(d)}
                        className={cn(
                          'px-5 py-2 rounded-full text-sm font-black border-2 transition-all duration-200',
                          duration === d
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-foreground border-black/10 hover:border-primary/50'
                        )}
                      >
                        {d} min
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-black text-foreground mb-1">
                    Heure{selectedDate ? ` — ${format(selectedDate, 'EEEE d MMMM', { locale: fr })}` : ''}
                  </h3>

                  {morning.length > 0 && (
                    <div className="mt-3">
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">
                        Matin
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {morning.map((slot) => (
                          <SlotButton
                            key={slot}
                            slot={slot}
                            selected={selectedTime === slot}
                            onClick={() => setSelectedTime(slot)}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {afternoon.length > 0 && (
                    <div className="mt-4">
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">
                        Après-midi
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {afternoon.map((slot) => (
                          <SlotButton
                            key={slot}
                            slot={slot}
                            selected={selectedTime === slot}
                            onClick={() => setSelectedTime(slot)}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Boutons fixes en bas — ne bougent jamais */}
              <div className="px-7 pb-7 pt-4 border-t border-black/5 flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="rounded-full flex-none"
                >
                  Retour
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={!canProceed3}
                  className="rounded-full flex-1 font-bold uppercase tracking-widest text-[11px]"
                >
                  Continuer <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* ── Step 3 : Coordonnées ───────────────────────────────── */}
          {step === 3 && (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col h-full">
              <div className="flex flex-col gap-5 flex-1 overflow-y-auto min-h-0 px-7 pt-7 pb-3">
                <div>
                  <h3 className="text-lg font-black text-foreground">Vos coordonnées</h3>
                  {selectedDate && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {format(selectedDate, 'EEEE d MMMM yyyy', { locale: fr })} à {selectedTime} · {duration} min
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="bk-name" className="font-black text-sm">Nom complet *</Label>
                    <Input
                      id="bk-name"
                      placeholder="Jean Dupont"
                      value={contact.name}
                      onChange={updateContact('name')}
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="bk-phone" className="font-black text-sm">Téléphone *</Label>
                    <Input
                      id="bk-phone"
                      type="tel"
                      placeholder="+228 70 00 00 00"
                      value={contact.phone}
                      onChange={updateContact('phone')}
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="bk-email" className="font-black text-sm">Email *</Label>
                    <Input
                      id="bk-email"
                      type="email"
                      placeholder="jean@email.com"
                      value={contact.email}
                      onChange={updateContact('email')}
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="bk-company" className="font-black text-sm">Entreprise</Label>
                    <Input
                      id="bk-company"
                      placeholder="Mon Entreprise (facultatif)"
                      value={contact.company}
                      onChange={updateContact('company')}
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="bk-message" className="font-black text-sm">Motif / Message</Label>
                  <Textarea
                    id="bk-message"
                    placeholder="Décrivez brièvement l'objet de votre rendez-vous..."
                    value={contact.message}
                    onChange={updateContact('message')}
                    className="rounded-xl resize-none"
                    rows={3}
                  />
                </div>

              </div>

              {/* Boutons fixes en bas */}
              <div className="px-7 pb-7 pt-4 border-t border-black/5 flex flex-col gap-3">
                {error && (
                  <p className="text-sm text-red-600 font-medium bg-red-50 border border-red-100 px-4 py-3 rounded-xl">
                    {error}
                  </p>
                )}
                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="rounded-full flex-none"
                  >
                    Retour
                  </Button>
                  <Button
                    type="submit"
                    disabled={!canSubmit || sending}
                    className="rounded-full flex-1 font-bold uppercase tracking-widest text-[11px]"
                  >
                    {sending ? 'Envoi…' : 'Confirmer le rendez-vous'}
                  </Button>
                </div>
              </div>
            </form>
          )}

          {/* ── Step 4 : Succès ────────────────────────────────────── */}
          {step === 4 && (
            <div className="flex flex-col items-center text-center gap-6 flex-1 overflow-y-auto min-h-0 px-7 py-7">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>

              <div>
                <h3 className="text-xl font-black text-foreground">Demande envoyée !</h3>
                <p className="text-muted-foreground mt-2 font-medium text-sm leading-relaxed">
                  Votre demande a bien été transmise à l'équipe Kaba.<br />
                  Vous serez contacté par email ou WhatsApp pour la confirmation.
                </p>
              </div>

              {selectedDate && (
                <div className="bg-primary/5 border border-primary/10 rounded-2xl px-6 py-5 text-left w-full max-w-sm">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-3">Récapitulatif</p>
                  <div className="space-y-1.5 text-sm font-medium text-foreground/80">
                    <p>📅 {format(selectedDate, 'EEEE d MMMM yyyy', { locale: fr })}</p>
                    <p>🕐 {selectedTime} · {duration} minutes</p>
                    <p>👤 {contact.name}</p>
                    <p>📧 {contact.email}</p>
                    {contact.phone && <p>📱 {contact.phone}</p>}
                  </div>
                </div>
              )}

              <Button
                onClick={resetAndClose}
                className="rounded-full px-10 font-bold uppercase tracking-widest text-[11px]"
              >
                Fermer
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
