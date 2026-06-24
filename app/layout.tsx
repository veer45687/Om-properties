import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700','800'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'Om Properties | Premium Real Estate in Kaithal & Jind',
  description: 'Trusted property dealers in Kaithal and Jind for residential, commercial, agricultural, rental, documentation, and investment properties.',
  keywords: ['Om Properties', 'Kaithal property dealer', 'Jind real estate', 'agricultural land Haryana', 'commercial property Kaithal'],
  openGraph: { title: 'Om Properties Kaithal', description: 'Premium real estate, transparent deals, verified properties, and investment guidance across Kaithal and Jind.', type: 'website', locale: 'en_IN', images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'] }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN" suppressHydrationWarning><body className={`${inter.variable} ${poppins.variable}`}>{children}</body></html>;
}
