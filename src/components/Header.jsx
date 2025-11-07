import { useEffect, useState } from 'react';
import { Home, User, Code, FolderGit2, Sun, Moon } from 'lucide-react';

function useTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem('theme', next);
  };

  return { theme, toggle };
}

export default function Header() {
  const { theme, toggle } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home', Icon: Home },
    { id: 'about', label: 'About', Icon: User },
    { id: 'skills', label: 'Skills', Icon: Code },
    { id: 'projects', label: 'Projects', Icon: FolderGit2 },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-lg sm:text-xl text-gray-900 dark:text-gray-100">
            Michelle Sera
          </a>
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(({ id, label, Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors hover:bg-gray-100 dark:hover:bg-white/10"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={toggle}
              className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 p-2 hover:bg-gray-100 dark:hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('projects');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden sm:inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-sm font-medium shadow hover:shadow-lg transition"
            >
              Lihat Proyek
            </button>
          </div>
        </div>
      </div>
      {/* Mobile nav */}
      <div className="md:hidden border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between gap-1">
          {navItems.map(({ id, label, Icon }) => (
            <a key={id} href={`#${id}`} className="flex flex-col items-center text-xs text-gray-600 dark:text-gray-300">
              <Icon className="h-5 w-5 mb-0.5" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
