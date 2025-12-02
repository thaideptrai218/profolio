import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-accent mb-4">
              Hi, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
              Dinh Cong <span className="text-gradient">Thai</span>
            </h1>
            <h3 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 font-light">
              Full Stack Developer | Backend Specialist
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
              Building scalable web applications with Java, Node.js, and React. 
              Turning complex problems into elegant, efficient code.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects"
                className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-medium transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2"
              >
                View My Work <ArrowRight size={18} />
              </a>
              <a 
                href="#contact"
                className="px-8 py-3 border-2 border-slate-300 dark:border-slate-700 hover:border-primary dark:hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary rounded-full font-medium transition-all"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Connect:</span>
              <div className="flex gap-4">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:text-primary hover:scale-110 transition-all">
                  <Github size={20} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:text-primary hover:scale-110 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:text-primary hover:scale-110 transition-all">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Abstract Tech Illustration */}
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full animate-pulse"></div>
              
              {/* Outer Orbit Ring (Backend & Infrastructure) - Clockwise */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-slate-200 dark:border-slate-800 rounded-full border-dashed"
              >
                {/* Java */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div 
                    animate={{ rotate: -360 }} 
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="p-3 bg-white dark:bg-slate-900 rounded-full shadow-lg border border-slate-100 dark:border-slate-800"
                  >
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-8 h-8" />
                  </motion.div>
                </div>
                {/* Node.js */}
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                  <motion.div 
                    animate={{ rotate: -360 }} 
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="p-3 bg-white dark:bg-slate-900 rounded-full shadow-lg border border-slate-100 dark:border-slate-800"
                  >
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-8 h-8" />
                  </motion.div>
                </div>
                {/* Docker */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <motion.div 
                    animate={{ rotate: -360 }} 
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="p-3 bg-white dark:bg-slate-900 rounded-full shadow-lg border border-slate-100 dark:border-slate-800"
                  >
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-8 h-8" />
                  </motion.div>
                </div>
                {/* Spring */}
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                  <motion.div 
                    animate={{ rotate: -360 }} 
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="p-3 bg-white dark:bg-slate-900 rounded-full shadow-lg border border-slate-100 dark:border-slate-800"
                  >
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" className="w-8 h-8" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Inner Orbit Ring (Frontend & Data) - Counter-Clockwise */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-24 border border-slate-200 dark:border-slate-800 rounded-full border-dashed"
              >
                 {/* React */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="p-2 bg-white dark:bg-slate-900 rounded-full shadow-lg border border-slate-100 dark:border-slate-800"
                  >
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6" />
                  </motion.div>
                </div>
                {/* TypeScript */}
                <div className="absolute bottom-1/4 right-[5%] translate-x-1/2">
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="p-2 bg-white dark:bg-slate-900 rounded-full shadow-lg border border-slate-100 dark:border-slate-800"
                  >
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-6 h-6" />
                  </motion.div>
                </div>
                {/* MongoDB */}
                <div className="absolute bottom-1/4 left-[5%] -translate-x-1/2">
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="p-2 bg-white dark:bg-slate-900 rounded-full shadow-lg border border-slate-100 dark:border-slate-800"
                  >
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-6 h-6" />
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Central Code Card */}
              <div className="relative z-10 glass p-8 rounded-2xl shadow-2xl border border-white/20 dark:border-slate-700 backdrop-blur-xl max-w-xs w-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex gap-2">
                    <span className="text-secondary">const</span>
                    <span className="text-accent">thai</span>
                    <span className="text-slate-500">=</span>
                    <span className="text-primary">{"{"}</span>
                  </div>
                  <div className="pl-6 text-slate-600 dark:text-slate-300 space-y-1">
                    <div>role: <span className="text-green-500">'Full Stack'</span>,</div>
                    <div>main: [<span className="text-green-500">'Java'</span>, <span className="text-green-500">'Node'</span>],</div>
                    <div>status: <span className="text-secondary">true</span></div>
                  </div>
                  <div className="text-primary">{"}"}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;