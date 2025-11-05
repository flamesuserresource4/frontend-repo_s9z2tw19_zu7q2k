import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/40 dark:bg-neutral-900/40 border-b border-white/20 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-xl md:text-2xl text-neutral-900 dark:text-white">
            MONA <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500">Studio</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700 dark:text-neutral-300">
            <a href="#work" className="hover:text-neutral-900 dark:hover:text-white transition">Work</a>
            <a href="#services" className="hover:text-neutral-900 dark:hover:text-white transition">Services</a>
            <a href="#about" className="hover:text-neutral-900 dark:hover:text-white transition">About</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition"
            >
              Start a project
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
