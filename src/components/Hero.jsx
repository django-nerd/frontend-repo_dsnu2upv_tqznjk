import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-black dark:to-blue-950/20">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* overlay gradients that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white dark:from-black/70 dark:to-black/60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur px-3 py-1 text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 border border-black/5 dark:border-white/10">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for freelance projects
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Michelle Sera
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-700 dark:text-gray-300">
            Web Developer • Siswi SMA • Modern, playful, and interactive web experiences.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 text-sm font-semibold shadow hover:shadow-lg transition">
              Lihat Proyek
            </a>
            <a href="#about" className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 text-gray-800 dark:text-gray-200 px-5 py-3 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-white/10 transition">
              Tentang Saya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
