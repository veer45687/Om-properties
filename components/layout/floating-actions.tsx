'use client';

import { ChevronUp, MessageCircle, Phone } from 'lucide-react';
import { company } from '@/data/site';
import { buildWhatsAppUrl } from '@/lib/properties';

export function FloatingActions() {
  return (
    <>
      <a aria-label="WhatsApp Om Properties" href={buildWhatsAppUrl('Hello Om Properties, I would like to discuss a property requirement.')} className="fixed bottom-24 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#103c35] shadow-2xl"><MessageCircle /></a>
      <a aria-label="Call Om Properties" href={`tel:${company.phoneHref}`} className="fixed bottom-40 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#d8c08a] text-[#11100d] shadow-2xl md:hidden"><Phone /></a>
      <button aria-label="Scroll to top" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-black/60 backdrop-blur"><ChevronUp /></button>
    </>
  );
}
