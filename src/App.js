import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(8,145,178,0.2),_rgba(2,6,23,0.95)_55%)]" />
          <div className="neural-grid absolute inset-0" />
          <div className="absolute inset-x-0 top-24 h-56 bg-[radial-gradient(circle,_rgba(56,189,248,0.17),transparent_60%)] blur-3xl" />
          <div className="signal-wave absolute bottom-10 left-0 right-0" />
        </div>

        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
