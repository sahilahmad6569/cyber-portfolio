import React from 'react';
import Hero from '../components/sections/Hero';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import ContactSection from '../components/sections/ContactSection';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
};

export default Home;