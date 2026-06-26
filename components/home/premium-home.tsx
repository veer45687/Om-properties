'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Award, BellRing, Bot, Building2, Calculator, CheckCircle2, Compass, FileCheck2, Heart, Home, Landmark, Leaf, Map, MessageCircle, Newspaper, PlayCircle, Search, ShieldCheck, Sparkles, Star, TrendingUp, Users, Video, Zap } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { PropertyCard } from '@/components/property/property-card';
import { ContactForm } from '@/components/shared/contact-form';
import { company, properties, testimonials } from '@/data/site';

const services = [
  ['Buy / Sell Homes', Home, 'Verified residential deals with family-first shortlisting.'],
  ['Commercial Growth', Building2, 'Retail, SCO, office and rental-income opportunities.'],
  ['Land Banking', Leaf, 'Agricultural and highway-belt land with document guidance.'],
  ['Plots & Registry', Landmark, 'Clear-title plots, negotiation and registry coordination.'],
  ['Investment Desk', TrendingUp, 'ROI-led advisory for appreciation and rentals.'],
  ['Legal Docs', FileCheck2, 'Paperwork readiness, checklists and closing support.'],
  ['NRI Support', ShieldCheck, 'Remote shortlists, video walkthroughs and visit planning.'],
  ['Rental Services', Users, 'Tenant-ready commercial and residential matching.']
] as const;

const platform = [
  ['AI property assistant', Bot], ['Live chat / WhatsApp', MessageCircle], ['EMI & ROI calculators', Calculator],
  ['360° tour ready', Video], ['Saved searches', BellRing], ['Smart dashboard', Compass]
] as const;
const locations = ['Kaithal', 'Jind', 'Ambala Road', 'Sector 20', 'Pehowa Chowk', 'Jind Bypass', 'Civil Lines', 'Highway Belt'];
const guides = ['2026 Haryana property trends', 'Plot registry checklist', 'Rental yield hotspots'];

export function PremiumHome() {
  const featured = useMemo(() => properties.filter((property) => property.featured).slice(0, 3), []);
  const [active, setActive] = useState(0);
  const [toast, setToast] = useState('');
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-80, 80], [8, -8]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-8, 8]), { stiffness: 180, damping: 18 });

  const fireToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(''), 2600);
  };

  return <main className="overflow-hidden">
    {toast && <motion.div initial={{ opacity: 0, y: -20, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }} className="fixed right-5 top-24 z-[80] rounded-2xl border border-[#d8c08a]/30 bg-[#10100d]/85 px-5 py-4 shadow-2xl backdrop-blur-xl"><CheckCircle2 className="mr-2 inline h-5 w-5 text-[#d8c08a]" />{toast}</motion.div>}

    <section className="relative min-h-screen px-5 pt-28">
      <Image priority fill src={featured[active].images[0]} alt={featured[active].title} className="object-cover transition duration-[1400ms] ease-out" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(216,192,138,.18),transparent_25%),linear-gradient(90deg,#050504_8%,rgba(5,5,4,.62),rgba(5,5,4,.90))]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[#f7ecd0]"><Zap className="h-4 w-4" /> Private estate cinema experience</div>
          <h1 className="mt-7 max-w-4xl font-[var(--font-poppins)] text-5xl font-semibold leading-[.94] tracking-[-.055em] md:text-8xl">Live exceptionally. <span className="gold-text">Invest beautifully</span>.</h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-white/76">A refined real-estate atelier for verified homes, commercial assets, land and investments across Haryana — presented with cinematic discovery, discreet advisory and documentation-led trust.</p>
          <div className="mt-9 flex flex-wrap gap-4"><Link href="/properties"><Button size="lg">Start exploring <ArrowRight className="ml-2 h-5 w-5" /></Button></Link><button onClick={() => fireToast('Visit request flow is ready for CRM integration.')} className="glass rounded-full px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:border-[#d8c08a]/50"><PlayCircle className="mr-2 inline h-5 w-5 text-[#d8c08a]" /> Arrange a private viewing</button></div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">{[['12+','Years'],['350+','Clients'],['75+','Deals']].map(([n,l]) => <div key={l} className="glass rounded-3xl p-4"><b className="gold-text text-3xl">{n}</b><p className="text-sm text-white/55">{l}</p></div>)}</div>
        </motion.div>

        <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} onMouseMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); x.set(event.clientX - rect.left - rect.width / 2); y.set(event.clientY - rect.top - rect.height / 2); }} onMouseLeave={() => { x.set(0); y.set(0); }} className="glass relative rounded-[2.5rem] p-4 shadow-[0_45px_130px_rgba(0,0,0,.42)]">
          <div className="absolute -right-6 -top-6 rounded-3xl bg-[#d8c08a] px-5 py-3 font-semibold tracking-wide text-[#11100d] shadow-2xl">Curated estate</div>
          <div className="relative h-[28rem] overflow-hidden rounded-[2rem]"><Image fill src={featured[active].images[1]} alt={featured[active].title} className="object-cover transition duration-[1600ms] group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6"><p className="text-[#ead8ac]">{featured[active].status} • {featured[active].type}</p><h2 className="mt-2 text-3xl font-bold">{featured[active].title}</h2><p className="mt-2 text-white/65">{featured[active].location} · {featured[active].priceLabel}</p></div></div>
          <div className="mt-4 grid grid-cols-3 gap-3">{featured.map((item, index) => <button key={item.id} onClick={() => setActive(index)} className={`rounded-2xl border p-3 text-left transition ${active === index ? 'border-[#d8c08a] bg-[#d8c08a]/10' : 'border-white/10 bg-white/5 hover:border-[#d8c08a]/35'}`}><span className="block text-xs text-white/50">{item.id}</span><b className="line-clamp-1 text-sm">{item.location}</b></button>)}</div>
        </motion.div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-20"><div className="glass dark-panel rounded-[2rem] p-5"><form action="/properties" className="grid gap-4 lg:grid-cols-[1.4fr_1fr_1fr_1fr_auto]"><label><span className="text-xs text-white/55">Search anything</span><div className="mt-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-black/25 px-4"><Search className="h-4 w-4 text-[#d8c08a]" /><input name="q" className="w-full bg-transparent py-4 outline-none" placeholder="Try: Sector 20 estate, highway land, private residence..." /></div></label><Select name="type" label="Type" options={['All','Residential','Commercial','Agricultural','Plot']} /><Select name="purpose" label="Purpose" options={['Buy','Rent','Investment']} /><Select name="budget" label="Budget" options={['Any','₹60 Lac','₹1 Cr','₹1.5 Cr+']} /><Button className="self-end" type="submit">Search</Button></form><div className="mt-5 flex flex-wrap gap-2">{locations.slice(0,6).map((location) => <Link key={location} href={`/properties?q=${location}`} className="rounded-full bg-white/5 px-4 py-2 text-sm text-white/65 hover:bg-[#d8c08a] hover:text-[#11100d]">#{location.replaceAll(' ','')}</Link>)}</div></div></section>

    <SectionHeader eyebrow="Services" title="A complete advisory suite, refined for serious decisions." text="Buy, rent, invest, value, verify and close with a calm, discreet experience built around clarity and confidence." />
    <section id="services" className="mx-auto grid max-w-7xl gap-5 px-5 pb-24 sm:grid-cols-2 lg:grid-cols-4">{services.map(([title, Icon, text], index) => <motion.article key={title} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .04 }} className="glass dark-panel hover-lift rounded-3xl p-6"><Icon className="mb-5 h-10 w-10 text-[#d8c08a]" /><h3 className="text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{text}</p></motion.article>)}</section>

    <SectionHeader eyebrow="Signature listings" title="Verified opportunities presented like a private portfolio." text="Explore residences, commercial addresses and land parcels with elegant detail, measured pacing and immediate advisory access." />
    <section className="mx-auto grid max-w-7xl gap-7 px-5 pb-24 md:grid-cols-2 xl:grid-cols-3">{featured.map((property, index) => <motion.div key={property.id} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}><PropertyCard property={property} /></motion.div>)}</section>

    <section className="bg-white/[.03] px-5 py-24"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr]"><div><p className="text-[#d8c08a]">Private client tools</p><h2 className="mt-3 text-4xl font-semibold tracking-[-.035em] md:text-6xl">Technology with a concierge sensibility.</h2><p className="mt-5 leading-8 text-white/65">Designed for guided searches, saved preferences, remote walkthroughs and decision support without losing the feeling of a premium human service.</p></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{platform.map(([item, Icon]) => <div key={item} className="glass hover-lift rounded-3xl p-6"><Icon className="mb-4 text-[#9fbdb5]"/><h3 className="font-semibold">{item}</h3><p className="mt-2 text-sm text-white/55">Interactive UI pattern ready for backend wiring.</p></div>)}</div></div></section>

    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-24 lg:grid-cols-2"><div className="glass dark-panel rounded-[2rem] p-8"><Map className="mb-4 h-10 w-10 text-[#d8c08a]"/><h2 className="text-4xl font-bold">Growth corridors</h2><div className="mt-5 flex flex-wrap gap-3">{locations.map((location) => <Link key={location} href={`/properties?q=${encodeURIComponent(location)}`} className="rounded-full border border-white/10 px-4 py-2 text-white/70 hover:border-[#d8c08a] hover:text-[#ead8ac]">{location}</Link>)}</div><iframe title="Om Properties map" className="mt-8 h-72 w-full rounded-3xl border-0 grayscale" loading="lazy" src={company.officeMap}/></div><div className="grid gap-5 sm:grid-cols-2">{[['Verified badges',ShieldCheck],['Animated counters',Award],['Favorites UI',Heart],['Trend reports',Newspaper]].map(([title, Icon]) => { const I = Icon as typeof ShieldCheck; return <div key={String(title)} className="glass hover-lift rounded-3xl p-6"><I className="mb-4 text-[#d8c08a]"/><h3 className="font-bold">{String(title)}</h3><p className="mt-2 text-sm text-white/60">A quiet trust signal for measured, high-value decisions.</p></div>; })}</div></section>

    <section id="why-us" className="bg-white/[.03] px-5 py-24"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">{[['12+','years experience',Award],['350+','happy customers',Users],['75+','properties sold',Home],['4.9★','review score',Star]].map(([n,t,Icon]) => { const I = Icon as typeof Award; return <article key={String(t)} className="glass dark-panel hover-lift rounded-3xl p-7 text-center"><I className="mx-auto mb-4 text-[#d8c08a]"/><b className="text-4xl gold-text">{String(n)}</b><p className="mt-2 text-white/70">{String(t)}</p></article>; })}</div></section>

    <section className="mx-auto max-w-7xl px-5 py-24"><div className="grid gap-8 lg:grid-cols-3"><div><p className="text-[#d8c08a]">Social proof</p><h2 className="mt-3 text-4xl font-semibold">Client stories and field intelligence.</h2></div><div className="grid gap-5 lg:col-span-2 md:grid-cols-3">{testimonials.map((item) => <article key={item.name} className="glass dark-panel hover-lift rounded-[2rem] p-6"><div className="mb-4 flex gap-1 text-[#d8c08a]">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4" fill="currentColor" />)}</div><p className="text-sm leading-6 text-white/70">“{item.text}”</p><b className="mt-5 block text-[#ead8ac]">{item.name}</b><small className="text-white/50">{item.role}</small></article>)}</div></div><div className="mt-10 grid gap-5 md:grid-cols-3">{guides.map((guide) => <Link key={guide} href="/blog" className="glass hover-lift rounded-3xl p-6"><Newspaper className="mb-4 text-[#d8c08a]"/><h3 className="font-semibold">{guide}</h3><p className="mt-2 text-sm text-white/55">A concise market note for confident property decisions.</p></Link>)}</div></section>

    <section className="px-5 pb-24"><div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-[#d8c08a]/20 bg-gradient-to-br from-[#d8c08a]/12 via-white/[.045] to-[#103c35]/18 p-6 lg:grid-cols-2 lg:p-10"><div><Sparkles className="mb-4 text-[#d8c08a]"/><h2 className="text-4xl font-semibold">Begin a private property conversation.</h2><p className="mt-4 text-white/65">Share your brief and receive a curated shortlist, private viewing plan and documentation guidance from Om Properties.</p></div><ContactForm /></div></section>
  </main>;
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return <label><span className="text-xs text-white/55">{label}</span><select name={name} className="mt-2 w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-4 outline-none">{options.map((option) => <option key={option}>{option}</option>)}</select></label>;
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="mx-auto max-w-4xl px-5 py-16 text-center"><p className="text-[#d8c08a]">{eyebrow}</p><h2 className="mt-3 font-[var(--font-poppins)] text-4xl font-semibold tracking-[-.035em] md:text-6xl">{title}</h2><p className="mt-5 text-lg leading-8 text-white/65">{text}</p></section>;
}
