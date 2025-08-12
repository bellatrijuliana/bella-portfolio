import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experiences";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />

        {/* Footer */}
        <footer className="bg-primary text-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-white mb-2">
                © 2025 Bella Tri's Portfolio. Built with passion for quality and excellence.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App
