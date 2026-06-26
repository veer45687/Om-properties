import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Bath, BedDouble, CalendarDays, CheckCircle2, MapPin, Ruler, Share2, ShieldCheck } from 'lucide-react';
import { ContactForm } from '@/components/shared/contact-form';
import { ImageGallery } from '@/components/property/image-gallery';
import { Button } from '@/components/ui/button';
import { company, properties } from '@/data/site';
import { buildWhatsAppUrl, getPropertyBySlug } from '@/lib/properties';

export async function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  if (!property) return { title: 'Property Not Found' };
  return { title: property.title, description: property.summary, openGraph: { title: property.title, description: property.summary, images: [property.images[0]] } };
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  if (!property) notFound();
  const jsonLd = { '@context': 'https://schema.org', '@type': 'RealEstateListing', name: property.title, description: property.summary, url: `/properties/${property.slug}`, address: property.address, image: property.images };
  return <main className="pt-28"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><section className="mx-auto max-w-7xl px-5 py-10"><div className="mb-8 flex flex-wrap items-center justify-between gap-5"><div><p className="text-[#d8c08a]">{property.status} • {property.type}</p><h1 className="mt-2 font-[var(--font-poppins)] text-4xl font-extrabold md:text-6xl">{property.title}</h1><p className="mt-4 flex items-center gap-2 text-white/65"><MapPin className="h-5 w-5 text-[#d8c08a]" />{property.address}</p></div><div className="text-right"><p className="text-sm text-white/55">Guide price</p><b className="text-3xl text-[#d8c08a]">{property.priceLabel}</b></div></div><ImageGallery images={property.images} title={property.title} /><div className="mt-10 grid gap-8 lg:grid-cols-[1fr_390px]"><article className="glass dark-panel rounded-[2rem] p-7"><div className="grid gap-4 sm:grid-cols-4"><span className="rounded-2xl bg-white/5 p-4"><Ruler className="mb-2 text-[#d8c08a]" />{property.area}</span>{property.bedrooms && <span className="rounded-2xl bg-white/5 p-4"><BedDouble className="mb-2 text-[#d8c08a]" />{property.bedrooms} bedrooms</span>}{property.bathrooms && <span className="rounded-2xl bg-white/5 p-4"><Bath className="mb-2 text-[#d8c08a]" />{property.bathrooms} bathrooms</span>}<span className="rounded-2xl bg-white/5 p-4"><CalendarDays className="mb-2 text-[#d8c08a]" />Listed {new Date(property.listedAt).toLocaleDateString('en-IN')}</span></div><h2 className="mt-8 text-2xl font-bold">Property overview</h2><p className="mt-4 leading-8 text-white/68">{property.description}</p><h2 className="mt-8 text-2xl font-bold">Highlights</h2><div className="mt-4 grid gap-3 md:grid-cols-2">{property.highlights.map((item) => <p key={item} className="flex items-center gap-3 text-white/70"><CheckCircle2 className="h-5 w-5 text-[#9fbdb5]" />{item}</p>)}</div><h2 className="mt-8 text-2xl font-bold">Amenities & support</h2><div className="mt-4 flex flex-wrap gap-3">{property.amenities.map((item) => <span key={item} className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70">{item}</span>)}</div><iframe title={`${property.title} map`} className="mt-8 h-80 w-full rounded-3xl border-0 grayscale" loading="lazy" src={`https://www.google.com/maps?q=${property.coordinates.lat},${property.coordinates.lng}&output=embed`} /></article><aside className="space-y-5"><div className="glass dark-panel rounded-[2rem] p-6"><p className="flex items-center gap-2 text-[#9fbdb5]"><ShieldCheck />Verified by Om Properties</p><p className="mt-3 text-sm text-white/60">Our team checks listing details before sharing site visits and documentation next steps.</p><div className="mt-5 flex gap-3"><a href={buildWhatsAppUrl(`I am interested in ${property.title} (${property.id}).`)}><Button>WhatsApp</Button></a><a href={`tel:${company.phoneHref}`}><Button variant="outline">Call</Button></a></div><button className="mt-4 flex items-center gap-2 text-sm text-white/60"><Share2 className="h-4 w-4" />Share listing ID {property.id}</button></div><ContactForm propertyTitle={property.title} /></aside></div></section></main>;
}
