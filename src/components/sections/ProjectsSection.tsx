import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../common/ProjectCard';
import { usePortfolio } from '../../context/PortfolioContext';
import { Code } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const { projects, loading } = usePortfolio();

  return (
    <section id="projects" className="py-16 bg-background-dark relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center mb-3">
            <Code className="text-neon-green mr-3" size={24} />
            <h2 className="section-title">Security Projects</h2>
          </div>
          <p className="text-gray-400 max-w-2xl">
            Explore my portfolio of cybersecurity projects, from vulnerability scanners to secure application development.
            Each project demonstrates my technical expertise and commitment to digital security.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center">
            <div className="text-neon-green">Loading projects...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project._id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;