import React, { useState } from 'react';
import SectionContainer from './SectionContainer';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import toast from 'react-hot-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call since we don't have real keys here
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <SectionContainer id="contact" className="bg-white dark:bg-slate-900">
      <div className="flex flex-col gap-4 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        <p className="text-slate-600 dark:text-slate-400">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="glass-card p-6 rounded-xl flex items-center gap-4">
            <div className="p-4 bg-primary/10 text-primary rounded-full">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase">Email</h3>
              <a href={`mailto:${personalInfo.email}`} className="text-lg font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors">
                {personalInfo.email}
              </a>
            </div>
          </div>

          <div className="glass-card p-6 rounded-xl flex items-center gap-4">
            <div className="p-4 bg-accent/10 text-accent rounded-full">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase">Phone</h3>
              <a href={`tel:${personalInfo.phone}`} className="text-lg font-semibold text-slate-900 dark:text-white hover:text-accent transition-colors">
                {personalInfo.phone}
              </a>
            </div>
          </div>

          <div className="glass-card p-6 rounded-xl flex items-center gap-4">
            <div className="p-4 bg-secondary/10 text-secondary rounded-full">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase">Location</h3>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                {personalInfo.location}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none dark:text-white"
              placeholder="How can I help you?"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={20} /> Sending...
              </>
            ) : (
              <>
                Send Message <Send size={20} />
              </>
            )}
          </button>
        </form>

      </div>
    </SectionContainer>
  );
};

export default Contact;
