'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Bath, BedDouble, GitCompare, Heart, MapPin, MoveRight, Ruler, Share2, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import type { Property } from '@/types/property';

export function PropertyCard({ property }: { property: Property }) {
  const [liked, setLiked] = useState(false);
  const [compare, setCompare] = useState(false);

  return (
    <article className="glass dark-panel group overflow-hidden rounded-[2rem] transition duration-500 hover:-translate-y-2 hover:border-[#d8c08a]/40 hover:shadow-[0_35px_100px_rgba(216,192,138,.10)]">
      <Link href={`/properties/${property.slug}`} className="relative block h-64 overflow-hidden">
        <Image sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" fill src={property.images[0]} alt={property.title} className="object-cover transition duration-[1200ms] group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-80" />
        <span className="absolute left-4 top-4 rounded-full bg-[#103c35]/85 px-3 py-1 text-xs">{property.type}</span>
        {property.verified && <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs"><ShieldCheck className="h-3 w-3 text-[#d8c08a]" />Verified</span>}
        <span className="absolute bottom-4 left-4 rounded-full bg-[#d8c08a] px-3 py-1 text-xs font-black text-[#11100d]">{property.status}</span>
      </Link>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="flex items-center gap-2 text-sm text-white/60"><MapPin className="h-4 w-4" />{property.location}</p>
          <div className="flex gap-2">
            <button aria-label="Save property" onClick={() => setLiked((value) => !value)} className={`rounded-full border p-2 transition ${liked ? 'border-[#d8c08a] bg-[#d8c08a] text-[#11100d]' : 'border-white/10 bg-white/5 text-white/60 hover:text-[#d8c08a]'}`}><Heart className="h-4 w-4" fill={liked ? 'currentColor' : 'none'} /></button>
            <button aria-label="Compare property" onClick={() => setCompare((value) => !value)} className={`rounded-full border p-2 transition ${compare ? 'border-[#d8c08a] bg-[#d8c08a] text-[#11100d]' : 'border-white/10 bg-white/5 text-white/60 hover:text-[#d8c08a]'}`}><GitCompare className="h-4 w-4" /></button>
          </div>
        </div>
        <h3 className="mt-2 text-xl font-bold"><Link href={`/properties/${property.slug}`}>{property.title}</Link></h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/58">{property.summary}</p>
        <div className="my-5 flex flex-wrap gap-3 text-sm text-white/70">
          <span className="flex items-center gap-1"><Ruler className="h-4 w-4" />{property.area}</span>
          {property.bedrooms && <span className="flex items-center gap-1"><BedDouble className="h-4 w-4" />{property.bedrooms} Beds</span>}
          {property.bathrooms && <span className="flex items-center gap-1"><Bath className="h-4 w-4" />{property.bathrooms} Baths</span>}
        </div>
        <div className="mb-4 flex flex-wrap gap-2">{property.amenities.slice(0, 3).map((amenity) => <span key={amenity} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/55">{amenity}</span>)}</div>
        <div className="flex items-center justify-between gap-4"><b className="text-[#d8c08a]">{property.priceLabel}</b><Link href={`/properties/${property.slug}`}><Button variant="outline">View <MoveRight className="ml-2 h-4 w-4" /></Button></Link></div>
        <button className="mt-4 flex items-center gap-2 text-xs text-white/45 transition hover:text-[#ead8ac]"><Share2 className="h-3 w-3" />Share / print ready details</button>
      </div>
    </article>
  );
}
