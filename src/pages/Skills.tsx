import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SkillBar from '../components/common/SkillBar';
import { usePortfolio } from '../context/PortfolioContext';
import { Cpu, Zap } from 'lucide-react';
import CertificationCard from '../components/common/CertificationCard';

const Skills: React.FC = () => {
  const { skills, certifications, loading } = usePortfolio();
  const [showScanLine, setShowScanLine] = React.useState(true);
  const [fadeOut, setFadeOut] = React.useState(false);

  const handleAnimationEnd = () => {
    setFadeOut(true);
    setTimeout(() => setShowScanLine(false), 500); // fade duration matches CSS
  };
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="pt-8 pb-16 bg-background-dark min-h-screen">
      {showScanLine && (
        <div
          className={`scan-line ${fadeOut ? 'fade-out' : ''}`}
          onAnimationEnd={handleAnimationEnd}
        />
      )}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
            Technical <span className="text-neon-blue">Skills</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mb-8">
            An overview of my technical expertise in cybersecurity, programming languages,
            tools, and methodologies that I've mastered through years of experience.
          </p>
        </motion.div>

        {/* Skills Section */}
        <div className="mb-16">
          {loading ? (
            <div className="flex justify-center">
              <div className="text-neon-blue">Loading skills...</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(groupedSkills).map(([category, categorySkills], index) => (
                <motion.div
                  key={category}
                  className="bg-terminal-black p-6 rounded-lg border border-neon-blue/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <Zap className="text-neon-blue mr-2" size={18} />
                    <h3 className="text-white font-mono text-lg">
                      {category}
                    </h3>
                  </div>
                  <div>
                    {categorySkills.map((skill) => (
                      <SkillBar
                        key={skill._id}
                        name={skill.name}
                        level={skill.level}
                        category={skill.category}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center mb-4">
            <Cpu className="text-neon-purple mr-3" size={24} />
            <h2 className="text-2xl font-bold font-mono text-white">Certifications</h2>
          </div>
          <p className="text-gray-400 max-w-2xl mb-8">
            Industry-recognized certifications that validate my expertise in cybersecurity
            and demonstrate my commitment to continuous learning.
          </p>

          {loading ? (
            <div className="flex justify-center">
              <div className="text-neon-purple">Loading certifications...</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <CertificationCard
                    name={cert.name}
                    issuer={cert.issuer}
                    date={cert.date}
                    imageUrl={cert.imageUrl}
                    credentialUrl={cert.credentialUrl}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;