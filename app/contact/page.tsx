import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/shared/contact-form';
import { company } from '@/data/site';

export const metadata: Metadata = { title: 'Contact', description: 'Contact Om Properties for verified property buying, selling, renting, and investment support in Kaithal and Jind.' };

export default function ContactPage() {
  return <main className="pt-28"><section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-2"><div><p className="text-amber-300">Speak to a local advisor</p><h1 className="mt-3 font-[var(--font-poppins)] text-5xl font-extrabold">Tell us your property requirement</h1><p className="mt-5 leading-8 text-white/65">Share your budget, preferred location, timeline, and property purpose. Om Properties will respond with verified options, site-visit scheduling, and documentation guidance.</p><div className="mt-8 space-y-4 text-white/75"><p><Phone className="mr-2 inline text-amber-300"/>{company.phone}</p><p><Mail className="mr-2 inline text-amber-300"/>{company.email}</p><p><MapPin className="mr-2 inline text-amber-300"/>{company.address}</p></div><iframe title="Om Properties map" className="mt-8 h-80 w-full rounded-3xl border-0 grayscale" loading="lazy" src={company.officeMap}/></div><ContactForm /></section></main>;
}
