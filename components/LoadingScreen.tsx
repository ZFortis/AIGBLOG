import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const bootText = [
    "INITIALIZING KERNEL...",
    "LOADING MEMORY BLOCKS [OK]",
    "MOUNTING FILE SYSTEM...",
    "CHECKING PERMISSIONS...",
    "ESTABLISHING NEURAL LINK...",
    "SYSTEM READY."
  ];

  useEffect(() => {
    let delay = 0;
    bootText.forEach((line, index) => {
      delay += Math.random() * 400 + 100;
      setTimeout(() => {
        setLines(prev => [...prev, line]);
        if (index === bootText.length - 1 && onComplete) {
            // Wait a bit after last line
            setTimeout(onComplete, 800);
        }
      }, delay);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-retro-white flex flex-col items-start justify-center p-8 md:p-20 text-dark-text font-mono"
    >
      <div className="w-full max-w-2xl">
          <div className="mb-4 text-xs text-slate-400 border-b border-retro-grey pb-2 flex justify-between">
            <span>BOOT_SEQ_V1.0</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
          
          <div className="space-y-2">
            {lines.map((line, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm md:text-lg"
                >
                    <span className="text-safety-orange mr-2">{">"}</span>
                    {line}
                </motion.div>
            ))}
            <motion.div 
                animate={{ opacity: [0, 1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-3 h-5 bg-dark-text inline-block align-middle ml-2"
            />
          </div>

          <div className="mt-12 w-full h-2 bg-retro-grey/30 border border-dark-text">
             <motion.div 
                className="h-full bg-safety-orange"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
             />
          </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;