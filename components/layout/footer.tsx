import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { company } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div><b className="text-2xl gold-text">Om Properties</b><p className="mt-3 text-sm text-white/60">Verified real estate guidance for buyers, sellers, tenants, and investors across Haryana.</p></div>
        <div><h3 className="mb-3 font-bold">Quick Links</h3><Link className="block py-1 text-white/60" href="/properties">Properties</Link><Link className="block py-1 text-white/60" href="/#services">Services</Link><Link className="block py-1 text-white/60" href="/contact">Contact</Link></div>
        <div><h3 className="mb-3 font-bold">Contact</h3><p className="py-1 text-white/60"><Phone className="mr-2 inline h-4 w-4" />{company.phone}</p><p className="py-1 text-white/60"><Mail className="mr-2 inline h-4 w-4" />{company.email}</p><p className="py-1 text-white/60"><MapPin className="mr-2 inline h-4 w-4" />{company.address}</p></div>
        <p className="text-white/60">© 2026 Om Properties. Professional property services for Kaithal & Jind.</p>
      </div>
    </footer>
  );
}
