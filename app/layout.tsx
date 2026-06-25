import type { Metadata } from 'next';
import { Footer } from '@/components/layout/footer';
import { FloatingActions } from '@/components/layout/floating-actions';
import { Header } from '@/components/layout/header';
import { ExperienceShell } from '@/components/layout/experience-shell';
import './globals.css';


export const metadata: Metadata = {
  metadataBase: new URL('https://omproperties.example.com'),
  title: { default: 'Om Properties | Verified Real Estate in Kaithal & Jind', template: '%s | Om Properties' },
  description: 'Verified residential, commercial, agricultural, rental, and investment properties in Kaithal and Jind with documentation support.',
  keywords: ['Om Properties', 'Kaithal property dealer', 'Jind real estate', 'agricultural land Haryana', 'commercial property Kaithal'],
  openGraph: { title: 'Om Properties Kaithal', description: 'Premium real estate, transparent deals, verified properties, and investment guidance across Kaithal and Jind.', type: 'website', locale: 'en_IN', images: ['/og-image.jpg'] },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN" suppressHydrationWarning><body><ExperienceShell><Header />{children}<Footer /><FloatingActions /></ExperienceShell></body></html>;
}
