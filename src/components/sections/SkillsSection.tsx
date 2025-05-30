import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import SkillBar from '../common/SkillBar';
import { usePortfolio } from '../../context/PortfolioContext';

const SkillsSection: React.FC = () => {
  const { skills, loading } = usePortfolio();
  
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-16 bg-background-darker relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center mb-3">
            <Cpu className="text-neon-blue mr-3" size={24} />
            <h2 className="section-title">Technical Skills</h2>
          </div>
          <p className="text-gray-400 max-w-2xl">
            A comprehensive overview of my technical expertise and competencies in cybersecurity, 
            programming, and related technologies.
          </p>
        </motion.div>
        
        {loading ? (
          <div className="flex justify-center">
            <div className="text-neon-blue">Loading skills...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <motion.div
                key={category}
                className="bg-terminal-black p-6 rounded-lg border border-neon-blue/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-white font-mono text-lg mb-4 pb-2 border-b border-neon-blue/20">
                  {category}
                </h3>
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
    </section>
  );
};

export default SkillsSection;