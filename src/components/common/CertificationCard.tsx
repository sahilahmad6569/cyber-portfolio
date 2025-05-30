import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface CertificationCardProps {
  name: string;
  issuer: string;
  date: string;
  imageUrl?: string;
  credentialUrl?: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  name,
  issuer,
  date,
  imageUrl,
  credentialUrl,
}) => {
  // Format date to be more readable
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });

  return (
    <motion.div 
      className="bg-terminal-black border border-neon-purple/30 rounded-lg overflow-hidden shadow-md hover:shadow-neon-purple/20 hover:border-neon-purple/50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="p-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={`${name} certificate`} 
                className="w-12 h-12 object-contain"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-neon-purple" />
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="font-mono text-white text-base font-semibold mb-1">{name}</h3>
            <p className="text-gray-400 text-sm mb-2">{issuer}</p>
            <p className="text-neon-purple text-xs font-mono">{formattedDate}</p>
            
            {credentialUrl && (
              <a 
                href={credentialUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center text-xs text-neon-purple hover:text-neon-blue"
              >
                <span className="mr-1">Verify</span>
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;