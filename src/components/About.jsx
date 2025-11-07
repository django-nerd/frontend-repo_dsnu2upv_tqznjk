export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white dark:bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/40 via-transparent to-transparent dark:from-blue-900/30" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Tentang Michelle</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              Saya adalah Web Developer dan siswi SMA yang menyukai hal-hal modern, estetis, dan interaktif. 
              Fokus pada pengembangan antarmuka yang cepat, responsif, dan menyenangkan. 
              Saat ini saya mengeksplorasi animasi, 3D web, dan pengalaman pengguna yang imersif.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-black/10 dark:border-white/10 p-4 bg-white/70 dark:bg-white/5 backdrop-blur">
                <p className="text-gray-500 dark:text-gray-400">Role</p>
                <p className="font-semibold text-gray-900 dark:text-white">Front-end & Creative Dev</p>
              </div>
              <div className="rounded-xl border border-black/10 dark:border-white/10 p-4 bg-white/70 dark:bg-white/5 backdrop-blur">
                <p className="text-gray-500 dark:text-gray-400">Focus</p>
                <p className="font-semibold text-gray-900 dark:text-white">3D Web, Animations</p>
              </div>
              <div className="rounded-xl border border-black/10 dark:border-white/10 p-4 bg-white/70 dark:bg-white/5 backdrop-blur">
                <p className="text-gray-500 dark:text-gray-400">Location</p>
                <p className="font-semibold text-gray-900 dark:text-white">Indonesia</p>
              </div>
              <div className="rounded-xl border border-black/10 dark:border-white/10 p-4 bg-white/70 dark:bg-white/5 backdrop-blur">
                <p className="text-gray-500 dark:text-gray-400">Status</p>
                <p className="font-semibold text-gray-900 dark:text-white">Open to Collaborate</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 border border-black/10 dark:border-white/10 p-2">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-zinc-900 flex items-center justify-center text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                MS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
