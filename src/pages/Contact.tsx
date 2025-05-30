import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection';

const Contact: React.FC = () => {
  const [showScanLine, setShowScanLine] = React.useState(true);
  const [fadeOut, setFadeOut] = React.useState(false);

  const handleAnimationEnd = () => {
    setFadeOut(true);
    setTimeout(() => setShowScanLine(false), 500); // fade duration matches CSS
  };
  return (
    <div className="pt-8 pb-16 bg-background-dark min-h-screen">
      {showScanLine && (
        <div
          className={`scan-line ${fadeOut ? 'fade-out' : ''}`}
          onAnimationEnd={handleAnimationEnd}
        />
      )}
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
            Contact <span className="text-neon-red">Me</span>
          </h1>
          <p className="text-gray-400 max-w-3xl">
            Have a cybersecurity project in mind or need consultation? I'm available for freelance
            work, full-time opportunities, speaking engagements, and security assessments.
          </p>
        </motion.div>
      </div>

      <ContactSection />
    </div>
  );
};

export default Contact;