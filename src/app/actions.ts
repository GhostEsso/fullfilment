'use server';

import {
  generateOfferDescription,
  type GenerateOfferDescriptionInput,
  type GenerateOfferDescriptionOutput,
} from '@/ai/flows/generate-offer-description';

type ActionResult<T> =
  | { success: true; data: T }
  | { success: false; error: string };

// ─── Booking ──────────────────────────────────────────────────────────────────

export type BookingData = {
  date: string;
  time: string;
  duration: number;
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
};

export async function sendBookingAction(
  input: BookingData
): Promise<ActionResult<null>> {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.log('[Booking — dev mode, no RESEND_API_KEY]', input);
      return { success: true, data: null };
    }

    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    const rows = [
      ['Date', input.date],
      ['Heure', input.time],
      ['Durée', `${input.duration} minutes`],
      ['', ''],
      ['Nom', input.name],
      ['Email', `<a href="mailto:${input.email}">${input.email}</a>`],
      ['Téléphone', `<a href="tel:${input.phone}">${input.phone}</a>`],
      ...(input.company ? [['Entreprise', input.company]] : []),
      ...(input.message ? [['Message', input.message]] : []),
    ] as [string, string][];

    const tableRows = rows
      .map(([label, value]) =>
        label
          ? `<tr>
              <td style="padding:6px 12px 6px 0;font-weight:700;color:#6b6b7b;white-space:nowrap;vertical-align:top">${label}</td>
              <td style="padding:6px 0;color:#1a1a2e">${value}</td>
             </tr>`
          : `<tr><td colspan="2" style="padding:8px 0"><hr style="border:none;border-top:1px solid #eee;margin:0"/></td></tr>`
      )
      .join('');

    const html = `
      <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08)">
        <div style="background:#CD1F45;color:#fff;padding:28px 32px">
          <h1 style="margin:0;font-size:22px;font-weight:900;letter-spacing:-.5px">Nouveau rendez-vous</h1>
          <p style="margin:6px 0 0;opacity:.75;font-size:14px">Kaba Fulfillment — Demande reçue</p>
        </div>
        <div style="padding:28px 32px">
          <table style="width:100%;border-collapse:collapse;font-size:15px">${tableRows}</table>
          <div style="margin-top:20px;padding:14px 18px;background:#fdf2f4;border-radius:12px;font-size:13px;color:#6b6b7b">
            Répondre à cet email contactera directement <strong>${input.name}</strong>
          </div>
        </div>
      </div>`;

    // ── Email 1 : notification RDV admin ────────────────────────────────────
    const bookingEmail = resend.emails.send({
      from: 'Kaba Fulfillment <no-reply@kabafulfillment.com>',
      to: ['infos@kabafulfillment.com'],
      replyTo: input.email,
      subject: `📅 Nouveau RDV — ${input.name} · ${input.date} à ${input.time}`,
      html,
    });

    // ── Email 2 : lead marketing ─────────────────────────────────────────────
    const contactDate = new Date().toLocaleDateString('fr-FR', {
      day: '2-digit', month: '2-digit', year: 'numeric',
    });
    const csvRow = `"${input.name}";"${input.email}";"${input.phone}";"${input.company ?? ''}";"${contactDate}";"Réservation RDV"`;

    const leadHtml = `
      <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08)">
        <div style="background:#1a1a2e;color:#fff;padding:24px 32px">
          <h1 style="margin:0;font-size:20px;font-weight:900;letter-spacing:-.5px">🎯 Nouveau Lead</h1>
          <p style="margin:6px 0 0;opacity:.6;font-size:13px">Source : Réservation RDV · kabafulfillment.com</p>
        </div>
        <div style="padding:24px 32px">
          <table style="width:100%;border-collapse:collapse;font-size:15px">
            <tr><td style="padding:7px 14px 7px 0;font-weight:700;color:#6b6b7b;width:110px">Nom</td><td style="padding:7px 0;color:#1a1a2e;font-weight:600">${input.name}</td></tr>
            <tr><td style="padding:7px 14px 7px 0;font-weight:700;color:#6b6b7b">Email</td><td style="padding:7px 0"><a href="mailto:${input.email}" style="color:#CD1F45;text-decoration:none">${input.email}</a></td></tr>
            <tr><td style="padding:7px 14px 7px 0;font-weight:700;color:#6b6b7b">Téléphone</td><td style="padding:7px 0"><a href="tel:${input.phone}" style="color:#CD1F45;text-decoration:none">${input.phone}</a></td></tr>
            ${input.company ? `<tr><td style="padding:7px 14px 7px 0;font-weight:700;color:#6b6b7b">Entreprise</td><td style="padding:7px 0;color:#1a1a2e">${input.company}</td></tr>` : ''}
            <tr><td style="padding:7px 14px 7px 0;font-weight:700;color:#6b6b7b">Date contact</td><td style="padding:7px 0;color:#6b6b7b">${contactDate}</td></tr>
          </table>

          <div style="margin-top:20px;background:#f8f8f8;border:1px dashed #ddd;border-radius:10px;padding:14px 16px">
            <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#999">Ligne CSV — coller dans Google Sheets</p>
            <code style="font-size:12px;color:#444;word-break:break-all;display:block;line-height:1.6">${csvRow}</code>
          </div>

          <p style="margin-top:16px;font-size:12px;color:#aaa">
            Colonnes : Nom · Email · Téléphone · Entreprise · Date · Source
          </p>
        </div>
      </div>`;

    const marketingTo = process.env.MARKETING_EMAIL ?? 'infos@kabafulfillment.com';
    const leadEmail = resend.emails.send({
      from: 'Kaba Fulfillment <no-reply@kabafulfillment.com>',
      to: [marketingTo],
      subject: `🎯 Nouveau Lead — ${input.name} (${input.phone})`,
      html: leadHtml,
    });

    await Promise.all([bookingEmail, leadEmail]);

    return { success: true, data: null };
  } catch (err) {
    console.error('[sendBookingAction]', err);
    return { success: false, error: "Impossible d'envoyer la demande. Veuillez réessayer." };
  }
}

export async function generateOfferDescriptionAction(
  input: GenerateOfferDescriptionInput
): Promise<ActionResult<GenerateOfferDescriptionOutput>> {
  try {
    const output = await generateOfferDescription(input);
    return { success: true, data: output };
  } catch (error) {
    console.error('Error generating offer description:', error);
    // In a real app, you might want to log this error to a monitoring service
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again later.',
    };
  }
}
