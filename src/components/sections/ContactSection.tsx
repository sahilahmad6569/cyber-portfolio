import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, AlertCircle, CheckCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus('submitting');
    
    try {
      // In a real application, this would be an API call
      // await axios.post('/api/contact', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      
      // Reset error state after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-16 bg-background-darker relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center mb-3">
            <Mail className="text-neon-red mr-3" size={24} />
            <h2 className="section-title">Get In Touch</h2>
          </div>
          <p className="text-gray-400 max-w-2xl">
            Have a project in mind or want to discuss cybersecurity solutions? 
            I'm available for consultation, freelance work, and full-time opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="terminal h-full">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-xs text-gray-400 ml-2 font-mono">contact_info.txt</span>
              </div>
              <div className="terminal-content p-6 h-full">
                <div className="mb-6">
                  <div className="text-gray-400 mb-1 text-sm">$ cat email.txt</div>
                  <a href="mailto:sahilahmad6569@gmail.com" className="text-neon-green">sahilahmad6569@gmail.com</a>
                </div>
                
                <div className="mb-6">
                  <div className="text-gray-400 mb-1 text-sm">$ cat location.txt</div>
                  <p className="text-white">Lucknow, India</p>
                </div>
                
                <div className="mb-6">
                  <div className="text-gray-400 mb-1 text-sm">$ cat availability.txt</div>
                  <p className="text-white">Available for remote work & consultation</p>
                </div>
                
                <div>
                  <div className="text-gray-400 mb-1 text-sm">$ cat response_time.txt</div>
                  <p className="text-white">Usually within 24-48 hours</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="terminal h-full">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-xs text-gray-400 ml-2 font-mono">message.sh</span>
              </div>
              <div className="terminal-content p-6">
                {formStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-8">
                    <CheckCircle className="text-neon-green h-12 w-12 mb-4" />
                    <h3 className="text-neon-green text-xl mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </div>
                ) : formStatus === 'error' ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-8">
                    <AlertCircle className="text-neon-red h-12 w-12 mb-4" />
                    <h3 className="text-neon-red text-xl mb-2">Message Failed to Send</h3>
                    <p className="text-gray-400">There was an error sending your message. Please try again later.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-300 mb-1 text-sm">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full bg-terminal-gray border ${errors.name ? 'border-neon-red' : 'border-gray-700'} rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-neon-green`}
                        />
                        {errors.name && <p className="text-neon-red text-xs mt-1">{errors.name}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-300 mb-1 text-sm">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full bg-terminal-gray border ${errors.email ? 'border-neon-red' : 'border-gray-700'} rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-neon-green`}
                        />
                        {errors.email && <p className="text-neon-red text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-gray-300 mb-1 text-sm">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-terminal-gray border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-neon-green"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-300 mb-1 text-sm">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full bg-terminal-gray border ${errors.message ? 'border-neon-red' : 'border-gray-700'} rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-neon-green`}
                      ></textarea>
                      {errors.message && <p className="text-neon-red text-xs mt-1">{errors.message}</p>}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className={`cyber-button w-full flex items-center justify-center ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {formStatus === 'submitting' ? (
                        <>Processing<span className="typing-cursor ml-1"></span></>
                      ) : (
                        <>
                          <Send size={16} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;