import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    desc: 'Landing page modern dengan elemen 3D dan animasi halus.',
    tech: ['React', 'Spline', 'Tailwind'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Portfolio Minimalis',
    desc: 'Portofolio clean dengan fokus tipografi dan grid karya.',
    tech: ['React', 'Framer Motion'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Dashboard Sekolah',
    desc: 'Dashboard akademik responsif dengan chart dan filter.',
    tech: ['React', 'Tailwind'],
    live: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-white dark:bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_0%_0%,_rgba(59,130,246,0.15),_transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-col sm:flex-row">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Proyek Pilihan</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-2xl">
              Beberapa karya yang menonjol dalam eksplorasi desain dan interaksi.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10">Hubungi Saya</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden bg-white/70 dark:bg-white/5 backdrop-blur">
              <div className="h-40 bg-gradient-to-br from-blue-500/30 to-indigo-500/20" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-blue-600/10 text-blue-700 dark:text-blue-300 border border-blue-600/20">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.live} className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline">
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:underline">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
