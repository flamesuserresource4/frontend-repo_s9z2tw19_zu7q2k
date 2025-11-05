import React from 'react';

const projects = [
  {
    name: 'Astra Quantum',
    tag: 'Web • Tech Venture',
    gradient: 'from-violet-500/40 via-fuchsia-500/30 to-rose-500/40',
  },
  {
    name: 'Maison Étoile',
    tag: 'E‑Commerce • Luxury',
    gradient: 'from-neutral-900/70 via-neutral-700/40 to-neutral-900/60',
  },
  {
    name: 'Helio Robotics',
    tag: 'Product • Launch Site',
    gradient: 'from-amber-400/40 via-orange-500/30 to-red-500/40',
  },
];

export default function Showcase() {
  return (
    <section id="work" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
              Selected work
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400">
              A glimpse of how we translate ambition into interactive detail.
            </p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-full px-5 py-2 text-sm font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 ring-1 ring-black/5 hover:opacity-90">
            Work with us
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.name} className="group rounded-3xl overflow-hidden ring-1 ring-black/5 bg-white/60 dark:bg-white/5 backdrop-blur">
              <div className={`relative h-64 md:h-80 bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(1200px_600px_at_0%_0%,rgba(255,255,255,0.25),transparent)]" />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-white">{p.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-black/5 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 ring-1 ring-black/5">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Elegantly engineered storytelling with motion, depth and restraint.
                </p>
                <div className="mt-4 inline-flex items-center text-sm font-medium text-violet-700 dark:text-violet-300">
                  View case study →
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
