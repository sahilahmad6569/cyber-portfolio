import React from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom'; // Added import

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-darker border-t border-neon-green/20 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline - UPDATED */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2 group">
              <Terminal className="w-6 h-6 text-neon-green group-hover:text-neon-blue transition-colors duration-300" />
              <span className="text-white font-mono text-lg font-bold tracking-wider">
                SA<span className="text-neon-green">HIL</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Defending digital frontiers with innovative security solutions and ethical hacking expertise.
            </p>
            <div className="pt-2 flex space-x-4">
              <a href="https://github.com/sahilahmad6569" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/sahil-ahmad-dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green">
                <Linkedin size={20} />
              </a>
              <a href="mailto:sahilahmad6569@gmail.com" className="text-gray-400 hover:text-neon-green">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick links - UPDATED TO USE LINK COMPONENT */}
          <div>
            <h4 className="text-white font-mono text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-neon-green text-sm transition-colors duration-300"
                  >
                    &gt; {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-mono text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="mailto:sahilahmad6569@gmail.com" className="hover:text-neon-green transition-colors duration-300">
                  sahilahmad6569@gmail.com
                </a>
              </li>
              <li>Lucknow, India</li>
              <li>Available for remote work & consultation</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center md:text-left text-gray-500 text-xs">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <span className="font-mono">© {currentYear} Sahil Ahmad. All rights reserved.</span>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="font-mono tracking-wide">
                <span className="text-neon-green">&#123;</span> 
                Built with security in mind 
                <span className="text-neon-green">&#125;</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;