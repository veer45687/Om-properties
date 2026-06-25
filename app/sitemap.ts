export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { properties } from '@/data/site';
export default function sitemap(): MetadataRoute.Sitemap { const base='https://omproperties.example.com'; return ['', '/properties','/contact','/about','/services','/blog','/careers','/legal','/valuation','/dashboard', ...properties.map(p=>`/properties/${p.slug}`)].map((url)=>({url:base+url,lastModified:new Date()})); }
