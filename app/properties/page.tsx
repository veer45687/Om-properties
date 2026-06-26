import type { Metadata } from 'next';
import { PropertySearch } from '@/components/property/property-search';

export const metadata: Metadata = {
  title: 'Property Listings',
  description: 'Search verified residential, commercial, agricultural, rental, and investment properties in Kaithal and Jind.'
};

export default function PropertiesPage() {
  return <main className="pt-28"><section className="px-5 py-12 text-center"><p className="text-[#d8c08a]">Verified inventory</p><h1 className="mx-auto mt-3 max-w-4xl font-[var(--font-poppins)] text-5xl font-extrabold">Property listings with search, filters, and quick enquiries</h1><p className="mx-auto mt-5 max-w-2xl text-white/65">Explore curated listings from Om Properties. Use filters to shortlist the right property, then request a site visit or instant WhatsApp consultation.</p></section><PropertySearch /></main>;
}
