'use client';

import Link from 'next/link';
import { BriefcaseBusiness, Building2, ChevronDown, FileText, Home, Menu, Moon, Phone, Search, Sun, UserRound, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { company } from '@/data/site';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Properties' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Guides' },
  { href: '/contact', label: 'Contact' }
];

const mega = [
  { href: '/properties?type=Residential', label: 'Homes', icon: Home },
  { href: '/properties?type=Commercial', label: 'Commercial', icon: Building2 },
  { href: '/valuation', label: 'Valuation', icon: Search },
  { href: '/legal', label: 'Legal Docs', icon: FileText },
  { href: '/careers', label: 'Careers', icon: BriefcaseBusiness },
  { href: '/dashboard', label: 'Dashboard UI', icon: UserRound }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('light', light);
  }, [light]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4" aria-label="Primary navigation">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-amber-200 to-yellow-700 font-black text-black shadow-[0_0_35px_rgba(215,168,63,.25)] transition group-hover:rotate-6 group-hover:scale-105">OM</span>
          <span><b className="block font-[var(--font-poppins)] text-lg">Om Properties</b><small className="text-amber-200/80">Kaithal • Jind</small></span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => <Link className="text-sm text-white/75 transition hover:text-amber-200" href={item.href} key={item.href}>{item.label}</Link>)}
          <div className="relative" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
            <button className="flex items-center gap-1 text-sm text-white/75 hover:text-amber-200">More <ChevronDown className="h-4 w-4" /></button>
            {megaOpen && <div className="absolute right-0 top-6 grid w-[34rem] grid-cols-2 gap-3 rounded-[2rem] border border-white/10 bg-neutral-950/95 p-4 shadow-2xl backdrop-blur-2xl">{mega.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-amber-300/50 hover:bg-amber-300/10"><Icon className="mb-3 h-5 w-5 text-amber-300"/><b>{label}</b><p className="mt-1 text-xs text-white/50">Premium ready module</p></Link>)}</div>}
          </div>
          <Link href="/contact"><Button size="sm">Enquire Now</Button></Link>
          <a className="hidden items-center gap-2 text-sm text-amber-200 xl:flex" href={`tel:${company.phoneHref}`}><Phone className="h-4 w-4" />{company.phone}</a>
          <button aria-label="Toggle light theme" onClick={() => setLight((value) => !value)} className="rounded-full border border-white/15 p-2 transition hover:border-amber-300/50">{light ? <Moon /> : <Sun />}</button>
        </div>
        <button className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Open menu">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <div className="glass mx-5 mb-4 rounded-3xl p-5 lg:hidden">{[...nav, ...mega.map(({ href, label }) => ({ href, label }))].map((item) => <Link onClick={() => setOpen(false)} key={item.href} className="block rounded-2xl px-3 py-3 hover:bg-white/10" href={item.href}>{item.label}</Link>)}</div>}
    </header>
  );
}
