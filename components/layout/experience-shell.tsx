'use client';

import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function ExperienceShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [splash, setSplash] = useState(true);
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const timer = window.setTimeout(() => setSplash(false), 2800);
    const move = (event: MouseEvent) => setPos({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', move, { passive: true });
    return () => { window.clearTimeout(timer); window.removeEventListener('mousemove', move); };
  }, []);

  return <>
    <motion.div className="fixed left-0 top-0 z-[90] h-1 origin-left bg-gradient-to-r from-[#fff7df] via-[#d8c08a] to-[#9fbdb5]" style={{ scaleX }} />
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"><span className="blob left-[5%] top-[12%]"/><span className="blob right-[8%] top-[38%] animation-delay-2000"/><span className="blob bottom-[8%] left-[38%] animation-delay-4000"/></div>
    <div className="pointer-events-none fixed z-[70] hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8c08a]/10 blur-3xl lg:block" style={{ left: pos.x, top: pos.y }} />
    <AnimatePresence mode="wait"><motion.div key={pathname} initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -12, filter: 'blur(8px)' }} transition={{ duration: .45, ease: 'easeOut' }}>{children}</motion.div></AnimatePresence>
    <AnimatePresence>{splash && <motion.div className="fixed inset-0 z-[100] grid place-items-center bg-[#050504]" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .7 }}><motion.div className="text-center" initial={{ scale: .82, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: .9, ease: 'easeOut' }}><motion.div className="mx-auto grid h-28 w-28 place-items-center rounded-[2rem] bg-gradient-to-br from-[#fff7df] via-[#d8c08a] to-[#8f7a4f] text-4xl font-black text-[#11100d] shadow-[0_0_90px_rgba(216,192,138,.42)]" animate={{ rotate: [0, 0, -3, 3, 0], scale: [1, 1.08, 1] }} transition={{ duration: 2.2 }}>OM</motion.div><motion.h1 className="mt-6 font-[var(--font-poppins)] text-4xl font-extrabold gold-text" initial={{ y: 22, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .45 }}>Om Properties</motion.h1><motion.p className="mt-3 text-[#f7ecd0]/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}>Verified luxury real estate experiences</motion.p></motion.div></motion.div>}</AnimatePresence>
  </>;
}

export function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .65, delay }}>{children}</motion.div>;
}
