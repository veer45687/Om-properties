import * as React from 'react';
import { cn } from '@/lib/utils';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' | 'ghost'; size?: 'sm' | 'md' | 'lg' };
export function Button({ className, variant = 'primary', size = 'md', ...props }: Props) {
  return <button className={cn('inline-flex items-center justify-center rounded-full font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 disabled:opacity-50', {
    'bg-gradient-to-r from-amber-300 to-yellow-600 text-neutral-950 shadow-[0_0_35px_rgba(245,158,11,.28)] hover:scale-[1.02]': variant==='primary',
    'border border-amber-300/40 bg-white/5 text-white backdrop-blur hover:bg-amber-300/10': variant==='outline',
    'text-white hover:bg-white/10': variant==='ghost',
    'px-4 py-2 text-sm': size==='sm', 'px-6 py-3 text-sm': size==='md', 'px-8 py-4 text-base': size==='lg'
  }, className)} {...props} />;
}
