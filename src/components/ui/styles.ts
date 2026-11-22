/** Clase Tailwind comune, ca aspectul sa se schimbe dintr-un singur loc. */

export const cardClass =
  'rounded-2xl border border-slate-200 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-white/5';

export const eyebrowClass =
  'font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300';

/** Titlu cu gradient, folosit in hero-uri. */
export const gradientTextClass =
  'bg-gradient-to-r from-cyan-500 via-teal-400 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'md' | 'sm';

export function buttonClass(variant: ButtonVariant = 'primary', size: ButtonSize = 'md') {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition';
  const sizes = { md: 'px-6 py-3', sm: 'px-5 py-2.5 text-sm' }[size];
  const variants = {
    primary:
      'bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 shadow-lg shadow-cyan-500/20 hover:brightness-110',
    secondary:
      'border border-slate-300 hover:border-cyan-500 dark:border-white/20 dark:hover:border-cyan-300',
  }[variant];
  return `${base} ${sizes} ${variants}`;
}

export const chipClass =
  'rounded-full border border-cyan-600/40 px-3 py-1 text-xs font-semibold text-cyan-800 transition hover:border-cyan-500 hover:bg-cyan-500/10 dark:border-cyan-300/40 dark:text-cyan-200';
