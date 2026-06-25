import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Footer } from '@/components/layout/footer';
import { FloatingActions } from '@/components/layout/floating-actions';
import { Header } from '@/components/layout/header';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700','800'], variable: '--font-poppins' });

export const metadata: Metadata = {
  metadataBase: new URL('https://omproperties.example.com'),
  title: { default: 'Om Properties | Verified Real Estate in Kaithal & Jind', template: '%s | Om Properties' },
  description: 'Verified residential, commercial, agricultural, rental, and investment properties in Kaithal and Jind with documentation support.',
  keywords: ['Om Properties', 'Kaithal property dealer', 'Jind real estate', 'agricultural land Haryana', 'commercial property Kaithal'],
  openGraph: { title: 'Om Properties Kaithal', description: 'Premium real estate, transparent deals, verified properties, and investment guidance across Kaithal and Jind.', type: 'website', locale: 'en_IN', images: ['/og-image.jpg'] },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN" suppressHydrationWarning><body className={`${inter.variable} ${poppins.variable}`}><Header />{children}<Footer /><FloatingActions /></body></html>;
}
