import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface Skill {
  _id: string;
  name: string;
  category: string;
  level: number;
}

interface Certification {
  _id: string;
  name: string;
  issuer: string;
  date: string;
  imageUrl?: string;
  credentialUrl?: string;
}

interface PortfolioContextType {
  projects: Project[];
  skills: Skill[];
  certifications: Certification[];
  loading: boolean;
  error: string | null;
}

// Create context with default values
const PortfolioContext = createContext<PortfolioContextType>({
  projects: [],
  skills: [],
  certifications: [],
  loading: false,
  error: null,
});

// Custom hook for using the portfolio context
export const usePortfolio = () => useContext(PortfolioContext);

// Mock data for initial development
const MOCK_PROJECTS: Project[] = [
  {
    _id: '1',
    title: 'Network Intrusion Detection System',
    description: 'Developed a real-time network intrusion detection system using machine learning algorithms to identify and alert on suspicious network activity.',
    technologies: ['Python', 'TensorFlow', 'Wireshark', 'Flask'],
    imageUrl: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg',
    githubUrl: 'https://github.com/username/nids-project',
  },
  {
    _id: '2',
    title: 'Secure Messaging Application',
    description: 'End-to-end encrypted messaging platform with zero-knowledge architecture ensuring complete privacy and security for users.',
    technologies: ['React', 'Node.js', 'Signal Protocol', 'MongoDB'],
    imageUrl: 'https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg',
    githubUrl: 'https://github.com/username/secure-messenger',
    liveUrl: 'https://secure-msg-app.example.com',
  },
  {
    _id: '3',
    title: 'Vulnerability Scanner',
    description: 'Automated security tool that scans web applications for common vulnerabilities such as SQL injection, XSS, and CSRF.',
    technologies: ['JavaScript', 'Express.js', 'Docker', 'Redis'],
    imageUrl: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg',
    githubUrl: 'https://github.com/username/vuln-scanner',
  },
];

const MOCK_SKILLS: Skill[] = [
  { _id: '1', name: 'Penetration Testing', category: 'Security', level: 90 },
  { _id: '2', name: 'Network Security', category: 'Security', level: 85 },
  { _id: '3', name: 'Python', category: 'Programming', level: 95 },
  { _id: '4', name: 'JavaScript/TypeScript', category: 'Programming', level: 90 },
  { _id: '5', name: 'Docker', category: 'DevOps', level: 80 },
  { _id: '6', name: 'Kubernetes', category: 'DevOps', level: 75 },
  { _id: '7', name: 'OWASP Top 10', category: 'Security', level: 95 },
  { _id: '8', name: 'Malware Analysis', category: 'Security', level: 85 },
];

const MOCK_CERTIFICATIONS: Certification[] = [
  {
    _id: '1',
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    date: '2024-01-15',
    credentialUrl: 'https://example.com/cert/ceh',
  },
  {
    _id: '2',
    name: 'Certified Information Systems Security Professional (CISSP)',
    issuer: 'ISC²',
    date: '2023-06-22',
    credentialUrl: 'https://example.com/cert/cissp',
  },
  {
    _id: '3',
    name: 'Offensive Security Certified Professional (OSCP)',
    issuer: 'Offensive Security',
    date: '2022-11-10',
    credentialUrl: 'https://example.com/cert/oscp',
  },
];

// Provider component
export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const [skills, setSkills] = useState<Skill[]>(MOCK_SKILLS);
  const [certifications, setCertifications] = useState<Certification[]>(MOCK_CERTIFICATIONS);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // In a production environment, this would fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      // This is commented out for now as we're using mock data
      // In production, uncomment and adjust as needed
      /*
      setLoading(true);
      try {
        const projectsRes = await axios.get('/api/projects');
        const skillsRes = await axios.get('/api/skills');
        const certsRes = await axios.get('/api/certifications');
        
        setProjects(projectsRes.data);
        setSkills(skillsRes.data);
        setCertifications(certsRes.data);
      } catch (err) {
        setError('Failed to fetch portfolio data');
        console.error(err);
      } finally {
        setLoading(false);
      }
      */
    };

    fetchData();
  }, []);

  return (
    <PortfolioContext.Provider value={{ projects, skills, certifications, loading, error }}>
      {children}
    </PortfolioContext.Provider>
  );
};