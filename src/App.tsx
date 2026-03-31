import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import ProjectList from "./components/sections/ProjectList";
import ContactForm from "./components/forms/ContactForm";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors">
      <Header />
      <main>
        <Hero />
        <About />  {/* Yeni eklendi */}
        <Skills /> {/* Yeni eklendi */}
        <ProjectList />
        <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <ContactForm />
        </section>
      </main>
      <footer className="py-8 text-center border-t dark:border-gray-800 text-gray-500 text-sm">
        © 2026 Berat Erol - Checkpoint #1
      </footer>
    </div>
  );
}