'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import { useState } from 'react';

export function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div className="grid gap-4 md:grid-cols-3">
        {images.map((image, index) => <button key={image} onClick={() => setActive(image)} className={`relative overflow-hidden rounded-[2rem] ${index === 0 ? 'h-96 md:col-span-2' : 'h-44 md:h-full'}`}><Image fill sizes="(min-width: 768px) 50vw, 100vw" src={image} alt={`${title} image ${index + 1}`} className="object-cover transition duration-500 hover:scale-105" /></button>)}
      </div>
      {active && <div role="dialog" aria-modal="true" className="fixed inset-0 z-[80] grid place-items-center bg-black/90 p-5" onClick={() => setActive(null)}><button aria-label="Close gallery" className="absolute right-5 top-5 rounded-full bg-white/10 p-3" onClick={() => setActive(null)}><X /></button><div className="relative h-[75vh] w-full max-w-5xl"><Image fill sizes="100vw" src={active} alt={`${title} enlarged view`} className="object-contain" /></div></div>}
    </>
  );
}
