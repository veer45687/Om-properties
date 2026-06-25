import type { Property } from '@/types/property';

export const company = {
  name: 'Om Properties',
  phone: '+91 98765 43210',
  phoneHref: '+919876543210',
  email: 'info@ompropertieskaithal.com',
  address: 'Near Pehowa Chowk, Kaithal, Haryana 136027',
  whatsapp: '919876543210',
  serviceArea: 'Kaithal, Jind, Kurukshetra, and nearby Haryana growth corridors',
  officeMap: 'https://www.google.com/maps?q=Near%20Pehowa%20Chowk%20Kaithal%20Haryana%20India&output=embed'
};

const home = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=82';
const villa = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=82';
const office = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=82';
const farm = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=82';
const interiors = 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=82';
const plot = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=82';
const land = 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=82';
const shop = 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=82';

export const properties: Property[] = [
  {
    id: 'OP-101', slug: 'premium-residential-plot-sector-20-kaithal', title: 'Premium Residential Plot in Sector 20',
    summary: 'Registry-ready plot in a developed sector with wide road access and family-friendly surroundings.',
    description: 'A clear-title residential plot positioned for end users and long-term investors. The site has reliable approach roads, nearby schools, daily conveniences, and documentation reviewed by the Om Properties team before listing.',
    location: 'Sector 20, Kaithal', address: 'Sector 20, Kaithal, Haryana', price: 4200000, priceLabel: '₹42 Lac', area: '180 sq yd', areaSqFt: 1620,
    type: 'Plot', status: 'For Sale', featured: true, verified: true, images: [home, villa, interiors], amenities: ['Clear title', 'Gated neighbourhood', 'Wide road', 'Registry support'], highlights: ['Ready for immediate site visit', 'High-demand residential pocket', 'Negotiation assistance included'], coordinates: { lat: 29.8015, lng: 76.3998 }, listedAt: '2026-06-12'
  },
  {
    id: 'OP-102', slug: 'main-road-commercial-sco-ambala-road-kaithal', title: 'Main Road Commercial SCO',
    summary: 'High-visibility commercial SCO on Ambala Road suitable for retail, clinic, showroom, or office use.',
    description: 'A premium commercial asset on an active road corridor with strong frontage and flexible floor planning. Ideal for businesses seeking visibility and investors seeking rental income potential.',
    location: 'Ambala Road, Kaithal', address: 'Ambala Road, Kaithal, Haryana', price: 13500000, priceLabel: '₹1.35 Cr', area: '92 sq yd', areaSqFt: 828,
    type: 'Commercial', status: 'Investment', featured: true, verified: true, images: [office, shop, interiors], amenities: ['Main road frontage', 'Parking access', 'Rental potential', 'Business-ready location'], highlights: ['Excellent visibility', 'Suitable for multiple business formats', 'Strong appreciation corridor'], coordinates: { lat: 29.7857, lng: 76.3970 }, listedAt: '2026-06-15'
  },
  {
    id: 'OP-103', slug: 'fertile-agricultural-land-kaithal-jind-highway', title: 'Fertile Agricultural Land on Highway Belt',
    summary: 'Contiguous agricultural holding with dependable approach and productive soil profile.',
    description: 'A carefully verified land parcel for buyers looking at farming, land banking, or future corridor appreciation. Revenue record guidance and site coordination are available from first inquiry through closing.',
    location: 'Kaithal-Jind Highway', address: 'Kaithal-Jind Highway, Haryana', price: 9800000, priceLabel: '₹98 Lac', area: '6 acres', areaSqFt: 261360,
    type: 'Agricultural', status: 'For Sale', featured: true, verified: true, images: [farm, land, plot], amenities: ['Road approach', 'Water access nearby', 'Revenue record guidance', 'Boundary inspection'], highlights: ['Productive farming belt', 'Good land-banking option', 'Document support available'], coordinates: { lat: 29.6039, lng: 76.3058 }, listedAt: '2026-06-08'
  },
  {
    id: 'OP-104', slug: 'investment-farmhouse-land-near-jind-bypass', title: 'Investment Farmhouse Land',
    summary: 'Lifestyle and investment parcel close to Jind Bypass with peaceful surroundings.',
    description: 'A scenic land option for farmhouse planning, weekend living, and portfolio diversification. The parcel offers accessibility without losing the quiet feel customers expect from a farmhouse investment.',
    location: 'Near Jind Bypass', address: 'Jind Bypass, Jind, Haryana', price: 7800000, priceLabel: '₹78 Lac', area: '2.5 acres', areaSqFt: 108900,
    type: 'Farmhouse', status: 'Investment', featured: false, verified: true, images: [land, villa, farm], amenities: ['Green surroundings', 'Bypass connectivity', 'Farmhouse potential', 'Site visit support'], highlights: ['Balanced lifestyle and investment use', 'Peaceful access road', 'Flexible parcel planning'], coordinates: { lat: 29.3165, lng: 76.3149 }, listedAt: '2026-05-27'
  },
  {
    id: 'OP-105', slug: 'modern-family-home-pehowa-chowk-kaithal', title: 'Modern Family Home near Pehowa Chowk',
    summary: 'Move-in-ready residential home with premium interiors near Kaithal city conveniences.',
    description: 'Designed for families who want convenient access to markets, schools, and healthcare while enjoying refined interiors and practical room sizes. Visit scheduling and price discussion are handled privately.',
    location: 'Pehowa Chowk, Kaithal', address: 'Pehowa Chowk, Kaithal, Haryana', price: 8600000, priceLabel: '₹86 Lac', area: '220 sq yd', areaSqFt: 1980,
    type: 'Residential', status: 'For Sale', bedrooms: 4, bathrooms: 3, featured: true, verified: true, images: [villa, interiors, home], amenities: ['Modular kitchen', 'Covered parking', 'City-centre access', 'Premium fittings'], highlights: ['Move-in ready', 'Excellent family locality', 'Private visits available'], coordinates: { lat: 29.7951, lng: 76.3980 }, listedAt: '2026-06-20'
  },
  {
    id: 'OP-106', slug: 'leased-office-space-civil-lines-jind', title: 'Leased Office Space in Civil Lines',
    summary: 'Professionally maintained office floor available for lease in a central Jind location.',
    description: 'A practical commercial space for startups, consultancies, training institutes, and professional offices. The floor offers clean access, flexible seating, and quick handover after documentation.',
    location: 'Civil Lines, Jind', address: 'Civil Lines, Jind, Haryana', price: 55000, priceLabel: '₹55,000 / month', area: '1,450 sq ft', areaSqFt: 1450,
    type: 'Commercial', status: 'For Rent', featured: false, verified: true, images: [shop, office, interiors], amenities: ['Flexible layout', 'Central location', 'Power backup provision', 'Visitor access'], highlights: ['Ready for fit-out', 'Suitable for professional use', 'Fast lease processing'], coordinates: { lat: 29.3211, lng: 76.3106 }, listedAt: '2026-06-18'
  }
];

export const testimonials = [
  { name: 'Rajesh Malik', role: 'Plot Buyer', text: 'Om Properties handled our plot purchase with transparent pricing, clear papers, and quick registry support.' },
  { name: 'Neha Sharma', role: 'Home Buyer', text: 'Professional guidance and genuine options in Kaithal. Their team understood our family requirements perfectly.' },
  { name: 'Vikram Hooda', role: 'Land Investor', text: 'Excellent investment advice for agricultural land near Jind. Documentation support was smooth and reliable.' }
];
