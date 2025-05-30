import React from 'react';
import { motion } from 'framer-motion';
import { User, Shield, Award, Terminal, Link } from 'lucide-react';

const About: React.FC = () => {
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
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
            About <span className="text-neon-green">Me</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mb-8">
            Learn more about my background, expertise, and passion for cybersecurity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Profile Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="terminal h-full">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-xs text-gray-400 ml-2 font-mono">profile.json</span>
              </div>
              <div className="terminal-content p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32 rounded-full bg-terminal-gray border-2 border-neon-green flex items-center justify-center">
                    <User className="w-16 h-16 text-neon-green" />
                  </div>
                </div>

                <div className="font-mono text-sm">
                  <div className="text-gray-400 mb-1">$ cat name.txt</div>
                  <p className="text-neon-green mb-4">Sahil Ahmad</p>

                  <div className="text-gray-400 mb-1">$ cat title.txt</div>
                  <p className="text-white mb-4">Cybersecurity Expert</p>

                  <div className="text-gray-400 mb-1">$ cat location.txt</div>
                  <p className="text-white mb-4">Lucknow, India</p>

                  <div className="text-gray-400 mb-1">$ cat experience.txt</div>
                  <p className="text-white">7+ Years in InfoSec</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="terminal h-full">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-xs text-gray-400 ml-2 font-mono">biography.md</span>
              </div>
              <div className="terminal-content p-6">
                <h2 className="text-xl text-neon-green font-mono mb-4">Bio</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    I am a passionate cybersecurity professional with over 7 years of experience in securing digital assets and infrastructure.
                    My expertise spans across penetration testing, vulnerability assessment, security architecture, and incident response.
                  </p>
                  <p>
                    After earning my degree in Computer Science with a focus on Information Security, I worked with several leading tech companies to strengthen their security posture and protect their sensitive data from emerging threats.
                  </p>
                  <p>
                    I believe in a proactive approach to security and stay on top of the latest security trends, vulnerabilities, and attack vectors. My passion lies in building robust security solutions that don't compromise on user experience.
                  </p>
                  <p>
                    When I'm not securing systems or hunting for vulnerabilities, you can find me contributing to open-source security tools, writing technical blogs, or participating in CTF competitions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <Terminal className="text-neon-blue mr-3" size={24} />
            <h2 className="text-2xl font-bold font-mono text-white">Professional Journey</h2>
          </div>

          <div className="relative border-l-2 border-neon-blue/30 pl-8 ml-4">
            {[
              {
                year: '2023 - Present',
                title: 'Senior Security Engineer',
                company: 'SecureTech Solutions',
                description: 'Leading security architecture design and implementation for cloud-native applications. Conducting regular security assessments and coordinating incident response.'
              },
              {
                year: '2020 - 2023',
                title: 'Cybersecurity Consultant',
                company: 'CyberDefense Inc.',
                description: 'Provided security consulting services to enterprise clients, performed penetration testing, and implemented security best practices across various organizations.'
              },
              {
                year: '2018 - 2020',
                title: 'Security Analyst',
                company: 'DataGuard Systems',
                description: 'Monitored security events, conducted vulnerability assessments, and assisted in developing security policies and procedures.'
              },
              {
                year: '2016 - 2018',
                title: 'IT Security Specialist',
                company: 'TechSecure',
                description: 'Implemented and managed security solutions including firewalls, IDS/IPS, and VPNs. Performed security audits and user education.'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="mb-10 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-12 w-4 h-4 bg-neon-blue rounded-full border-4 border-background-darker"></div>

                <div className="bg-terminal-black p-5 rounded-lg border border-neon-blue/20">
                  <span className="font-mono text-xs text-neon-blue mb-2 inline-block">{item.year}</span>
                  <h3 className="text-white text-lg font-bold mb-1">{item.title}</h3>
                  <h4 className="text-neon-green text-sm mb-3">{item.company}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <Link className="text-neon-purple mr-3" size={24} />
            <h2 className="text-2xl font-bold font-mono text-white">Beyond Security</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Open Source Contributor',
                description: 'Actively contributing to security tools and libraries that help the community identify and mitigate threats.',
                icon: <Shield className="text-neon-green\" size={24} />,
              },
              {
                title: 'Security Blogger',
                description: 'Writing technical articles and tutorials on various cybersecurity topics to share knowledge and best practices.',
                icon: <Terminal className="text-neon-blue" size={24} />,
              },
              {
                title: 'CTF Competitor',
                description: 'Regularly participating in Capture The Flag competitions to sharpen skills and stay updated with the latest techniques.',
                icon: <Award className="text-neon-purple\" size={24} />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-terminal-black p-5 rounded-lg border border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-mono text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;