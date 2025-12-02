import React from 'react';
import SectionContainer from './SectionContainer';
import { experience, education } from '../data/portfolio';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <SectionContainer id="experience" className="bg-slate-50 dark:bg-slate-950">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Experience Column */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-primary/10 text-primary rounded-xl">
              <Briefcase size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Experience</h2>
          </div>

          <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-8 relative">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-slate-900 bg-primary"></span>
                <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors">
                  <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <span className="text-sm font-medium px-3 py-1 bg-slate-100 dark:bg-slate-800 text-primary rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-3">{exp.company}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Education</h2>
          </div>

          <div className="glass-card p-8 rounded-2xl border-l-4 border-l-secondary">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{education.institution}</h3>
            <h4 className="text-xl text-secondary font-medium mb-4">{education.degree}</h4>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Calendar size={18} />
                <span>{education.period}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <MapPin size={18} />
                <span>{education.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg font-bold">
                GPA: {education.gpa}
              </div>
              {education.certs.map((cert, idx) => (
                <div key={idx} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-medium">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </SectionContainer>
  );
};

export default Experience;
