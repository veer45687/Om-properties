export type PropertyStatus = 'For Sale' | 'For Rent' | 'Investment';
export type PropertyType = 'Residential' | 'Commercial' | 'Agricultural' | 'Plot' | 'Farmhouse';

export interface Property {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  location: string;
  address: string;
  price: number;
  priceLabel: string;
  area: string;
  areaSqFt: number;
  type: PropertyType;
  status: PropertyStatus;
  bedrooms?: number;
  bathrooms?: number;
  featured: boolean;
  verified: boolean;
  images: string[];
  amenities: string[];
  highlights: string[];
  coordinates: { lat: number; lng: number };
  listedAt: string;
}

export interface PropertyFilters {
  query: string;
  type: 'All' | PropertyType;
  status: 'All' | PropertyStatus;
  minPrice: number;
  maxPrice: number;
  sort: 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'area-desc';
}
