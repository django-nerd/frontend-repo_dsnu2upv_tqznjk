import { CheckCircle2, Sparkles } from 'lucide-react';

const skills = [
  'React + TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Spline 3D',
  'API Integration',
  'Responsive Design',
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-slate-900/30">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)] bg-gradient-to-b from-blue-500/20 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-8 flex-col md:flex-row">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-2">
              Keahlian Utama <Sparkles className="h-6 w-6 text-blue-600" />
            </h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300 max-w-2xl">
              Kombinasi teknologi modern untuk membangun website imersif dan cepat.
            </p>
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => (
            <div key={s} className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-white/70 dark:bg-white/5 backdrop-blur flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5" />
              <p className="font-medium text-gray-800 dark:text-gray-200">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
