
import React from 'react';
import SectionContainer from './SectionContainer';
import { projects } from '../data/portfolio';
import { Github, ExternalLink, Star } from 'lucide-react';

const Projects = () => {
  return (
    <SectionContainer id="projects" className="bg-white dark:bg-slate-900">
      <div className="flex flex-col gap-4 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`group relative flex flex-col glass-card rounded-2xl overflow-hidden ${project.featured ? 'lg:col-span-2 xl:col-span-2' : ''}`}
          >
            {/* Project Image */}
            <div className={`h-48 ${project.featured ? 'md:h-80' : ''} bg-slate-200 dark:bg-slate-800 relative overflow-hidden`}>
              <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              
              <div className="absolute top-4 right-4 flex gap-2">
                 <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider border border-white/10">
                   {project.category}
                 </span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.featured && <Star className="text-yellow-400 fill-yellow-400" size={20} />}
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 flex-1">
                {project.description}
              </p>

              {project.features && (
                <ul className="mb-6 space-y-1">
                  {project.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent font-medium transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;
