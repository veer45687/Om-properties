import { PremiumHome } from '@/components/home/premium-home';
import { company } from '@/data/site';

export default function HomePage() {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'RealEstateAgent', name: company.name, telephone: company.phone, email: company.email, address: company.address, areaServed: company.serviceArea };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <PremiumHome />
  </>;
}
