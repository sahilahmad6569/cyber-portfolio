import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Terminal } from 'lucide-react'; // Changed from Shield to Terminal
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background-darker flex flex-col items-center justify-center p-4">
        <div className="terminal w-full max-w-xs sm:max-w-sm md:max-w-md">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-xs text-gray-400 ml-2 font-mono">loading.sh</span>
          </div>
          <div className="terminal-content p-4 sm:p-6 text-center">
            <Terminal className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-neon-green mx-auto mb-3 sm:mb-4" />
            <h2 className="text-neon-green text-xl sm:text-2xl font-mono mb-2">SAHIL AHMAD</h2> {/* Changed from CYBERSEC */}
            <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">Initializing security protocols...</p>
            <div className="w-full bg-terminal-gray h-2 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-neon-green"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2 }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;