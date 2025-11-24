import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "circOut" }
    },
  };

  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center z-10">
      <motion.div
        className="text-center max-w-5xl px-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item} className="mb-6 flex items-center justify-center gap-4">
             <div className="h-[1px] w-12 bg-safety-orange"></div>
             <p className="text-safety-orange font-bold tracking-widest text-sm md:text-base font-mono">
                /// SYSTEM READY ///
             </p>
             <div className="h-[1px] w-12 bg-safety-orange"></div>
        </motion.div>

        <motion.h1 variants={item} className="text-4xl md:text-7xl lg:text-8xl font-display font-black text-dark-text leading-tight mb-8 tracking-wide">
          NEURAL IMAGING<br/>DATABASE
        </motion.h1>
        
        <motion.p variants={item} className="text-slate-500 text-sm md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-mono">
          ARCHIVE_REF: 2024-X // EXPLORING THE LATENT SPACE // GENERATIVE OUTPUT LOGS
        </motion.p>

        <motion.div variants={item}>
            <a 
                href="#gallery"
                className="inline-block bg-safety-orange text-white font-bold text-lg px-8 py-4 border-2 border-dark-text box-shadow-hard box-shadow-hard-active transition-transform hover:brightness-105 font-mono"
            >
                INITIATE SCAN
            </a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-10 md:left-20 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="text-[10px] text-retro-grey flex flex-col gap-1 font-mono">
            <span>MEM: 64KB OK</span>
            <span>VRAM: OPTIMIZED</span>
            <span>CONN: SECURE</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;