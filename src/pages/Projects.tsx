import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/common/ProjectCard';
import { usePortfolio } from '../context/PortfolioContext';
import { Code, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const { projects, loading } = usePortfolio();
  const [filter, setFilter] = React.useState<string>('all');

  const [fadeOut, setFadeOut] = React.useState(false);
  const [showScanLine, setShowScanLine] = React.useState(true);

  const handleAnimationEnd = () => {
    setFadeOut(true);
    setTimeout(() => setShowScanLine(false), 500); // fade duration matches CSS
  };

  // Get unique technologies from all projects
  const allTechnologies = React.useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => {
        techSet.add(tech);
      });
    });
    return Array.from(techSet);
  }, [projects]);

  // Filter projects based on selected technology
  const filteredProjects = React.useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter(project =>
      project.technologies.includes(filter)
    );
  }, [projects, filter]);

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
            Security <span className="text-neon-green">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mb-8">
            A showcase of my cybersecurity projects, tools, and applications.
            Each project demonstrates my technical expertise and security mindset.
          </p>

          {/* Filter controls */}
          <div className="mb-8">
            <div className="flex items-center mb-3">
              <Filter size={18} className="text-neon-green mr-2" />
              <h2 className="text-white font-mono text-lg">Filter by Technology</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                className={`px-3 py-1 text-sm rounded-md font-mono transition-all ${filter === 'all' ? 'bg-neon-green text-background-dark' : 'bg-terminal-black text-neon-green hover:bg-neon-green/10'}`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              {allTechnologies.map(tech => (
                <button
                  key={tech}
                  className={`px-3 py-1 text-sm rounded-md font-mono transition-all ${filter === tech ? 'bg-neon-green text-background-dark' : 'bg-terminal-black text-neon-green hover:bg-neon-green/10'}`}
                  onClick={() => setFilter(tech)}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center">
            <div className="text-neon-green">Loading projects...</div>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="bg-terminal-black p-8 rounded-lg border border-neon-green/20 text-center">
            <Code className="text-neon-green mx-auto mb-3 h-10 w-10" />
            <h3 className="text-white text-lg font-mono mb-2">No Projects Found</h3>
            <p className="text-gray-400">No projects match the selected filter. Try selecting a different technology.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
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
    </div>
  );
};

export default Projects;