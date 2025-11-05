import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        {/* Minimal contact banner to close the narrative */}
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-rose-600 p-8 md:p-12">
              <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(800px_400px_at_0%_0%,white,transparent)]" />
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                    Let’s compose your flagship experience.
                  </h3>
                  <p className="mt-2 text-white/80 max-w-xl">
                    Share your ambition. We’ll translate it into an immersive interface that feels inevitable.
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md transition"
                >
                  Book a discovery call
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} MONA Studio. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
