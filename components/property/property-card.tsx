import Image from 'next/image';
import Link from 'next/link';
import { Bath, BedDouble, MapPin, MoveRight, Ruler, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Property } from '@/types/property';

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="glass dark-panel group overflow-hidden rounded-[2rem]">
      <Link href={`/properties/${property.slug}`} className="relative block h-64 overflow-hidden">
        <Image sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" fill src={property.images[0]} alt={property.title} className="object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-emerald-900/85 px-3 py-1 text-xs">{property.type}</span>
        {property.verified && <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs"><ShieldCheck className="h-3 w-3 text-amber-300" />Verified</span>}
      </Link>
      <div className="p-5">
        <p className="flex items-center gap-2 text-sm text-white/60"><MapPin className="h-4 w-4" />{property.location}</p>
        <h3 className="mt-2 text-xl font-bold"><Link href={`/properties/${property.slug}`}>{property.title}</Link></h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/58">{property.summary}</p>
        <div className="my-5 flex flex-wrap gap-3 text-sm text-white/70">
          <span className="flex items-center gap-1"><Ruler className="h-4 w-4" />{property.area}</span>
          {property.bedrooms && <span className="flex items-center gap-1"><BedDouble className="h-4 w-4" />{property.bedrooms} Beds</span>}
          {property.bathrooms && <span className="flex items-center gap-1"><Bath className="h-4 w-4" />{property.bathrooms} Baths</span>}
        </div>
        <div className="flex items-center justify-between gap-4"><b className="text-amber-300">{property.priceLabel}</b><Link href={`/properties/${property.slug}`}><Button variant="outline">View <MoveRight className="ml-2 h-4 w-4" /></Button></Link></div>
      </div>
    </article>
  );
}
