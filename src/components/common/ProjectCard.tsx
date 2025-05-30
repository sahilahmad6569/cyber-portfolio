import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
}) => {
  return (
    <motion.div 
      className="terminal group relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500"></div>
        <div className="terminal-dot bg-yellow-500"></div>
        <div className="terminal-dot bg-green-500"></div>
        <div className="ml-2 text-xs font-mono text-gray-400 truncate">{title}.sh</div>
      </div>
      
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-darker via-transparent to-transparent"></div>
        
        {/* Overlay links */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-4 bg-background-darker bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-terminal-black p-2 rounded-full text-neon-green hover:text-neon-blue hover:scale-110 transition-all"
              title="View Source Code"
            >
              <Github size={20} />
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-terminal-black p-2 rounded-full text-neon-green hover:text-neon-blue hover:scale-110 transition-all"
              title="View Live Project"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      
      {/* Project Content */}
      <div className="terminal-content p-4">
        <h3 className="text-lg text-neon-green font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="inline-flex items-center px-2 py-1 text-xs rounded bg-terminal-gray text-neon-blue border border-neon-blue/30"
            >
              <Code size={12} className="mr-1" />
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Decorative scan line */}
      <div className="scan-line"></div>
    </motion.div>
  );
};

export default ProjectCard;