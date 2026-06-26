import * as React from 'react';
import { cn } from '@/lib/utils';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' | 'ghost'; size?: 'sm' | 'md' | 'lg' };
export function Button({ className, variant = 'primary', size = 'md', ...props }: Props) {
  return <button className={cn('ripple inline-flex items-center justify-center rounded-full font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8c08a] disabled:opacity-50', {
    'bg-gradient-to-r from-[#f7efd9] via-[#d8c08a] to-[#9d8553] text-[#10100d] shadow-[0_18px_45px_rgba(216,192,138,.18)] hover:scale-[1.015] hover:shadow-[0_24px_70px_rgba(216,192,138,.22)]': variant==='primary',
    'border border-[#d8c08a]/35 bg-white/[.045] text-[#f7f1e6] backdrop-blur hover:bg-[#d8c08a]/10 hover:border-[#d8c08a]/55': variant==='outline',
    'text-[#f7f1e6] hover:bg-white/10': variant==='ghost',
    'px-4 py-2 text-sm': size==='sm', 'px-6 py-3 text-sm': size==='md', 'px-8 py-4 text-base': size==='lg'
  }, className)} {...props} />;
}
