import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const SectionContainer: React.FC<SectionProps> = ({ id, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionContainer;
