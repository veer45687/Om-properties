'use client';

import { Search, SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import { PropertyCard } from '@/components/property/property-card';
import { filterProperties } from '@/lib/properties';
import type { PropertyFilters, PropertyStatus, PropertyType } from '@/types/property';

const types: Array<'All' | PropertyType> = ['All', 'Residential', 'Commercial', 'Agricultural', 'Plot', 'Farmhouse'];
const statuses: Array<'All' | PropertyStatus> = ['All', 'For Sale', 'For Rent', 'Investment'];

export function PropertySearch() {
  const [filters, setFilters] = useState<PropertyFilters>({ query: '', type: 'All', status: 'All', minPrice: 0, maxPrice: 20000000, sort: 'featured' });
  const results = useMemo(() => filterProperties(filters), [filters]);
  const update = <K extends keyof PropertyFilters>(key: K, value: PropertyFilters[K]) => setFilters((current) => ({ ...current, [key]: value }));

  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="glass dark-panel rounded-[2rem] p-5">
        <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <label><span className="text-xs text-white/60">Search locality or keyword</span><div className="mt-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-black/25 px-4"><Search className="h-4 w-4 text-[#d8c08a]" /><input value={filters.query} onChange={(event) => update('query', event.target.value)} className="w-full bg-transparent py-3 outline-none" placeholder="Kaithal, Jind, highway..." /></div></label>
          <label><span className="text-xs text-white/60">Type</span><select value={filters.type} onChange={(event) => update('type', event.target.value as PropertyFilters['type'])} className="mt-2 w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3">{types.map((type) => <option key={type}>{type}</option>)}</select></label>
          <label><span className="text-xs text-white/60">Purpose</span><select value={filters.status} onChange={(event) => update('status', event.target.value as PropertyFilters['status'])} className="mt-2 w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3">{statuses.map((status) => <option key={status}>{status}</option>)}</select></label>
          <label><span className="text-xs text-white/60">Max budget</span><select value={filters.maxPrice} onChange={(event) => update('maxPrice', Number(event.target.value))} className="mt-2 w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3"><option value={20000000}>Any budget</option><option value={6000000}>Up to ₹60 Lac</option><option value={10000000}>Up to ₹1 Cr</option><option value={15000000}>Up to ₹1.5 Cr</option></select></label>
          <label><span className="text-xs text-white/60">Sort</span><select value={filters.sort} onChange={(event) => update('sort', event.target.value as PropertyFilters['sort'])} className="mt-2 w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3"><option value="featured">Featured</option><option value="newest">Newest</option><option value="price-asc">Price low to high</option><option value="price-desc">Price high to low</option><option value="area-desc">Largest area</option></select></label>
        </div>
      </div>
      <div className="mt-8 flex items-center gap-2 text-white/70"><SlidersHorizontal className="h-4 w-4" />Showing {results.length} verified matching {results.length === 1 ? 'property' : 'properties'}</div>
      {results.length ? <div className="mt-8 grid gap-7 md:grid-cols-2 xl:grid-cols-3">{results.map((property) => <PropertyCard key={property.id} property={property} />)}</div> : <div className="glass dark-panel mt-8 rounded-3xl p-10 text-center"><h2 className="text-2xl font-bold">No exact match found</h2><p className="mt-2 text-white/60">Adjust filters or contact us for off-market options from our verified network.</p></div>}
    </section>
  );
}
