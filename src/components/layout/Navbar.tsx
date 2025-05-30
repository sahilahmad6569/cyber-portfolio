import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Terminal, 
  Home, 
  User, 
  FolderGit2, 
  Code2, 
  Mail 
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Projects', path: '/projects', icon: FolderGit2 },
    { name: 'Skills', path: '/skills', icon: Code2 },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <nav
      className={`relative fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? 'bg-background-darker/95 shadow-md shadow-neon-green/10'
          : 'bg-background-darker/20'
      }`}
    >
      <div className="container mx-auto px-4 py-4 overflow-hidden">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Terminal className="w-8 h-8 text-neon-green group-hover:text-neon-blue transition-colors duration-300" />
            <span className="text-white font-mono text-xl font-bold tracking-wider">
              SA<span className="text-neon-green">HIL</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-mono text-sm tracking-wide px-1 py-2 border-b-2 ${
                  location.pathname === link.path
                    ? 'border-neon-green text-neon-green'
                    : 'border-transparent text-gray-300 hover:text-neon-blue'
                } transition-all duration-300`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neon-green hover:text-neon-blue transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-full left-0 w-full border-t border-b border-neon-green/30 shadow-lg transform transition-all duration-300 md:hidden z-50 backdrop-blur-lg bg-background-darker/95 ${
          isOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-5 opacity-0 pointer-events-none'
        }`}
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="w-full py-3 px-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-mono text-sm tracking-wide px-4 py-3 flex items-center border-l-2 ${
                    location.pathname === link.path
                      ? 'border-neon-green text-neon-green bg-neon-green/5'
                      : 'border-transparent hover:border-neon-blue hover:bg-neon-blue/5'
                  } transition-all duration-300`}
                >
                  <IconComponent size={18} className="mr-3" />
                  {link.name.toUpperCase()}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;