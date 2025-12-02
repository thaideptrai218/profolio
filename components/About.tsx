import React from 'react';
import SectionContainer from './SectionContainer';
import { personalInfo } from '../data/portfolio';
import { BookOpen, Code, Trophy, Globe } from 'lucide-react';

const stats = [
  { label: 'GPA', value: '3.3', icon: Trophy },
  { label: 'IELTS', value: '6.5', icon: Globe },
  { label: 'Technologies', value: '10+', icon: Code },
  { label: 'Projects', value: '5+', icon: BookOpen },
];

const About = () => {
  return (
    <SectionContainer id="about" className="bg-white dark:bg-slate-900">
      <div className="flex flex-col gap-4 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Avatar Section */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-72 h-72 md:w-80 md:h-80 lg:w-full lg:max-w-sm aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl transform rotate-6 scale-105 opacity-30 group-hover:rotate-12 transition-transform duration-500 blur-sm"></div>
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-2xl transform -rotate-3 scale-105 opacity-50 group-hover:-rotate-6 transition-transform duration-500"></div>
            <img 
              src="https://static.topcv.vn/avatars/KRGwQkaDMpSMzR0M1b3M_687bec3037b41_cvtpl.jpg" 
              alt={personalInfo.name} 
              className="relative z-10 w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white dark:border-slate-800 transform group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            Software Engineering Student & <span className="text-primary">Full Stack Developer</span>
          </h3>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {personalInfo.bio}
          </p>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            I thrive in collaborative environments and enjoy solving complex problems with clean, maintainable code. My approach combines solid fundamentals in OOP, data structures, and system design with enthusiasm for learning cutting-edge technologies.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {stats.map((stat, index) => (
              <div key={index} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-primary/50 transition-colors text-center group">
                <div className="flex justify-center mb-2 text-primary group-hover:scale-110 transition-transform">
                  <stat.icon size={24} />
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;