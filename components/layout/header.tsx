'use client';

import Link from 'next/link';
import { Menu, Moon, Phone, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { company } from '@/data/site';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Properties' },
  { href: '/#services', label: 'Services' },
  { href: '/#why-us', label: 'Why Us' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('light', light);
  }, [light]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4" aria-label="Primary navigation">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-amber-200 to-yellow-700 font-black text-black">OM</span>
          <span><b className="block font-[var(--font-poppins)] text-lg">Om Properties</b><small className="text-amber-200/80">Kaithal • Jind</small></span>
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => <Link className="text-sm text-white/75 hover:text-amber-200" href={item.href} key={item.href}>{item.label}</Link>)}
          <Link href="/contact"><Button size="sm">Enquire Now</Button></Link>
          <a className="hidden items-center gap-2 text-sm text-amber-200 xl:flex" href={`tel:${company.phoneHref}`}><Phone className="h-4 w-4" />{company.phone}</a>
          <button aria-label="Toggle light theme" onClick={() => setLight((value) => !value)} className="rounded-full border border-white/15 p-2">{light ? <Moon /> : <Sun />}</button>
        </div>
        <button className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Open menu">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <div className="glass mx-5 mb-4 rounded-3xl p-5 lg:hidden">{nav.map((item) => <Link onClick={() => setOpen(false)} key={item.href} className="block py-3" href={item.href}>{item.label}</Link>)}</div>}
    </header>
  );
}
