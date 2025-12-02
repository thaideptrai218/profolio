import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">Thai.dev</span>
          </div>

          <div className="text-slate-600 dark:text-slate-400 text-sm text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end gap-1 mb-2">
              Built with <Heart size={16} className="text-red-500 fill-red-500" /> using React, Tailwind & Framer Motion
            </p>
            <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          </div>

          <button 
            onClick={scrollToTop}
            className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-all transform hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
