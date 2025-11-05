import React from 'react';
import { Sparkles, Layers, Globe, Shield } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Brand & Art Direction',
    desc: 'Distinctive visual systems and narratives that elevate premium perception.',
  },
  {
    icon: Layers,
    title: 'Immersive Product Sites',
    desc: 'Motion-first interfaces, 3D and micro‑interactions tailored to your story.',
  },
  {
    icon: Globe,
    title: 'Web Engineering',
    desc: 'Robust, fast builds with React + WebGL that scale globally with confidence.',
  },
  {
    icon: Shield,
    title: 'Enterprise Craft',
    desc: 'Accessibility, performance and reliability for brands that can’t compromise.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            Precision, polish, performance.
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400">
            We fuse aesthetics with engineering to create meaningful, measurable impact.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur ring-1 ring-black/5 hover:ring-black/10 transition p-5 md:p-6"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-rose-500/10" />
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 text-violet-700 dark:text-violet-300 ring-1 ring-black/5">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
