import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ to, subject, text, html }: {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}) {
  const from = process.env.RESEND_FROM_EMAIL;
  if (!from) throw new Error('RESEND_FROM_EMAIL is not set');

  const payload: { from: string; to: string; subject: string; text?: string; html?: string } = {
    from,
    to,
    subject,
  };

  if (text) payload.text = text;
  if (html) payload.html = html;

  return resend.emails.send(payload as any);
}
