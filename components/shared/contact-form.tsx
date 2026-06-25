'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { buildWhatsAppUrl } from '@/lib/properties';

type FormState = { name: string; phone: string; interest: string; message: string };
const initialState: FormState = { name: '', phone: '', interest: 'Residential Property', message: '' };

export function ContactForm({ propertyTitle }: { propertyTitle?: string }) {
  const [form, setForm] = useState<FormState>({ ...initialState, message: propertyTitle ? `I am interested in ${propertyTitle}. Please share details.` : '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  function validate() {
    const next: Partial<FormState> = {};
    if (form.name.trim().length < 2) next.name = 'Please enter your full name.';
    if (!/^\+?[0-9\s-]{8,15}$/.test(form.phone.trim())) next.phone = 'Please enter a valid phone number.';
    if (form.message.trim().length < 10) next.message = 'Please share a little more detail.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 650));
    setSubmitting(false);
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="glass dark-panel grid gap-4 rounded-[2rem] p-6" noValidate>
      {sent && <div role="status" className="flex items-center gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-emerald-200"><CheckCircle2 />Your enquiry is ready for our CRM. We will contact you shortly.</div>}
      <label><span className="text-sm text-white/70">Full name</span><input aria-invalid={Boolean(errors.name)} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2 w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-4 outline-none focus:border-amber-300" placeholder="Your name" />{errors.name && <small className="text-rose-300">{errors.name}</small>}</label>
      <label><span className="text-sm text-white/70">Phone / WhatsApp</span><input aria-invalid={Boolean(errors.phone)} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-2 w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-4 outline-none focus:border-amber-300" placeholder="+91 98765 43210" />{errors.phone && <small className="text-rose-300">{errors.phone}</small>}</label>
      <label><span className="text-sm text-white/70">Requirement</span><select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className="mt-2 w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-4"><option>Residential Property</option><option>Commercial Property</option><option>Agricultural Land</option><option>Investment Guidance</option><option>Sell My Property</option></select></label>
      <label><span className="text-sm text-white/70">Message</span><textarea aria-invalid={Boolean(errors.message)} rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2 w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-4 outline-none focus:border-amber-300" placeholder="Tell us your preferred location, budget, and timeline" />{errors.message && <small className="text-rose-300">{errors.message}</small>}</label>
      <div className="flex flex-wrap gap-3"><Button disabled={submitting} size="lg" type="submit">{submitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}Submit Enquiry</Button><a className="inline-flex items-center rounded-full border border-emerald-400/40 px-6 py-3 font-semibold text-emerald-200" href={buildWhatsAppUrl(`${form.name || 'Customer'}: ${form.message || 'I want to enquire about Om Properties listings.'}`)}>WhatsApp Instead</a></div>
    </form>
  );
}
