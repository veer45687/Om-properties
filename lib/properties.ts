import { properties } from '@/data/site';
import type { PropertyFilters } from '@/types/property';

export async function getProperties() {
  return properties;
}

export async function getFeaturedProperties() {
  return properties.filter((property) => property.featured);
}

export async function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug) ?? null;
}

export function filterProperties(filters: PropertyFilters) {
  const query = filters.query.trim().toLowerCase();
  return properties
    .filter((property) => !query || [property.title, property.location, property.summary, property.type].join(' ').toLowerCase().includes(query))
    .filter((property) => filters.type === 'All' || property.type === filters.type)
    .filter((property) => filters.status === 'All' || property.status === filters.status)
    .filter((property) => property.price >= filters.minPrice && property.price <= filters.maxPrice)
    .sort((a, b) => {
      if (filters.sort === 'price-asc') return a.price - b.price;
      if (filters.sort === 'price-desc') return b.price - a.price;
      if (filters.sort === 'newest') return Date.parse(b.listedAt) - Date.parse(a.listedAt);
      if (filters.sort === 'area-desc') return b.areaSqFt - a.areaSqFt;
      return Number(b.featured) - Number(a.featured) || Date.parse(b.listedAt) - Date.parse(a.listedAt);
    });
}

export function buildWhatsAppUrl(message: string) {
  const phone = '919876543210';
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
