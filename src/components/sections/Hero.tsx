import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import TerminalText from '../common/TerminalText';
import profilePhoto from '../../assets/images/profile/2.png';
const Hero: React.FC = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  // Animation sequence for terminal text
  useEffect(() => {
    const titleTimer = setTimeout(() => setShowTitle(true), 500);
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 2000);
    const ctaTimer = setTimeout(() => setShowCTA(true), 4000);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(ctaTimer);
    };
  }, []);

  return (
    <section className="min-h-screen relative grid-pattern flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 bg-background-darker bg-opacity-60"></div>

      {/* Binary rain effect (improved visuals) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity: 0.35 }}>
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-green font-mono select-none"
            style={{
              top: `-${Math.floor(Math.random() * 150)}px`,
              left: `${(i * 4) + 2}%`,
              fontSize: `${12 + Math.random() * 10}px`,
              animation: `falling ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${-(Math.random() * 10)}s`,
              textShadow: '0 0 6px #39ff14, 0 0 14px #39ff14',
              opacity: 0.7 + Math.random() * 0.3,
              filter: 'drop-shadow(0 0 2px #39ff14)',
              userSelect: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {[...Array(20)]
              .map(() => Math.round(Math.random()))
              .join('')}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto w-full gap-10 md:gap-20">

{/* Inside the profile photo section - replace the image with this code */}
<div className="relative">
  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-neon-green/5 border border-neon-green/20 overflow-hidden relative">
    {/* Main image */}
    <img 
      src={profilePhoto} 
      alt="Sahil Ahmad" 
      className="w-full h-full object-cover transition-all duration-500 hover:scale-105 mt-4"
    />
    
    {/* Glitch layers */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Glitch layer 1 */}
      <div className="absolute inset-0 glitch-effect" style={{ '--delay': '0' } as React.CSSProperties}>
        <img 
          src={profilePhoto} 
          alt="Glitch effect" 
          className="w-full h-full object-cover mt-4 opacity-70 mix-blend-lighten"
        />
      </div>
      
      {/* Glitch layer 2 */}
      <div className="absolute inset-0 glitch-effect" style={{ '--delay': '0.33' } as React.CSSProperties}>
        <img 
          src={profilePhoto} 
          alt="Glitch effect" 
          className="w-full h-full object-cover mt-4 opacity-60 mix-blend-hard-light"
        />
      </div>
      
      {/* Glitch layer 3 */}
      <div className="absolute inset-0 glitch-effect" style={{ '--delay': '0.66' } as React.CSSProperties}>
        <img 
          src={profilePhoto} 
          alt="Glitch effect" 
          className="w-full h-full object-cover mt-4 opacity-50 mix-blend-color-dodge"
        />
      </div>
    </div>
  </div>
  
  {/* Animated rings */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-neon-green animate-ping opacity-50 scale-110 absolute"></div>
    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-neon-green animate-ping opacity-30 scale-125 absolute delay-300"></div>
  </div>
  
  {/* Glow effect */}
  <div className="absolute inset-0 rounded-full shadow-[0_0_30px_5px_rgba(57,255,20,0.3)] pointer-events-none"></div>
</div>
          {/* Terminal Section */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="terminal max-w-lg">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-xs text-gray-400 ml-2 font-mono">
                  cybersecurity.sh
                </span>
              </div>
              <div className="terminal-content p-6">
                {showTitle && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-gray-400 mb-2 text-sm">$ whoami</div>
                    <TerminalText
                      text="Sahil Ahmad"
                      className="text-neon-green text-xl md:text-3xl font-bold mb-4"
                      typingSpeed={80}
                      onComplete={() => {}}
                    />
                  </motion.div>
                )}

                {showSubtitle && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-gray-400 mb-2 text-sm">$ cat skills.txt</div>
                    <TerminalText
                      text="Cybersecurity Expert | Ethical Hacker | Security Researcher"
                      className="text-white text-sm md:text-base mb-6"
                      typingSpeed={30}
                      onComplete={() => {}}
                    />
                  </motion.div>
                )}

                {showCTA && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex space-x-4">
                      <Link to="/projects" className="cyber-button flex items-center">
                        <Terminal size={16} className="mr-2" />
                        View Projects
                      </Link>
                      <Link to="/contact" className="cyber-button flex items-center">
                        <ArrowRight size={16} className="mr-2" />
                        Connect
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;