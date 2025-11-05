import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center" id="home">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for depth (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80 dark:from-neutral-950/80 dark:via-neutral-950/20 dark:to-neutral-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white dark:from-neutral-950" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-8 pt-24 md:pt-28 pb-24">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-200 ring-1 ring-black/5">
            Premium Digital Design Studio
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-[-0.02em] text-neutral-900 dark:text-white">
            Immersive websites for tech visionaries and luxury brands.
          </h1>
          <p className="mt-5 md:mt-6 text-base md:text-lg text-neutral-700/80 dark:text-neutral-300/90 max-w-2xl">
            We blend art direction, motion, and engineering to craft modern, elegant experiences that earn attention and trust.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-rose-600 shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30 transition">
              Start a project
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-neutral-900 dark:text-white bg-white/70 dark:bg-white/10 backdrop-blur ring-1 ring-black/5 hover:ring-black/10 transition">
              See our work
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-neutral-600 dark:text-neutral-400">
            <span>Strategy</span>
            <span className="h-1 w-1 rounded-full bg-neutral-400/60" />
            <span>UX/UI & 3D</span>
            <span className="h-1 w-1 rounded-full bg-neutral-400/60" />
            <span>Webflow & React</span>
          </div>
        </div>
      </div>
    </section>
  );
}
