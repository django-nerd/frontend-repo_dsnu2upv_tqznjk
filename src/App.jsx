import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <footer id="contact" className="border-t border-black/5 dark:border-white/10 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Michelle Sera. All rights reserved.</p>
              <div className="flex items-center gap-3 text-sm">
                <a href="mailto:michelle@example.com" className="text-blue-600 hover:underline">Email</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:underline">Instagram</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:underline">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
