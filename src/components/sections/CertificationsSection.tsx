import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import CertificationCard from '../common/CertificationCard';
import { usePortfolio } from '../../context/PortfolioContext';

const CertificationsSection: React.FC = () => {
  const { certifications, loading } = usePortfolio();

  return (
    <section id="certifications" className="py-16 bg-background-dark relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center mb-3">
            <Award className="text-neon-purple mr-3" size={24} />
            <h2 className="section-title">Certifications</h2>
          </div>
          <p className="text-gray-400 max-w-2xl">
            Professional certifications validating my expertise and knowledge in cybersecurity, 
            ethical hacking, and information security.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center">
            <div className="text-neon-purple">Loading certifications...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <CertificationCard
                key={cert._id}
                name={cert.name}
                issuer={cert.issuer}
                date={cert.date}
                imageUrl={cert.imageUrl}
                credentialUrl={cert.credentialUrl}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;