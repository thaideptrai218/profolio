import React from 'react';
import SectionContainer from './SectionContainer';
import { skills } from '../data/portfolio';
import { motion } from 'framer-motion';

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <SectionContainer id="skills" className="bg-slate-50 dark:bg-slate-950">
      <div className="flex flex-col gap-4 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A growing arsenal of tools and technologies I use to bring ideas to life.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        {Object.entries(skills).map(([key, category]) => (
          <motion.div key={key} variants={item} className="glass-card p-8 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <category.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {category.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
};

export default Skills;
