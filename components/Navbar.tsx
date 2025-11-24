import React from 'react';
import { motion } from 'framer-motion';
import { Home, Image as ImageIcon, Info, Github } from 'lucide-react';

const Navbar: React.FC = () => {
  const items = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: ImageIcon, label: 'Gallery', href: '#gallery' },
    { icon: Info, label: 'About', href: '#about' },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-md px-4">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: "circOut" }}
        className="bg-white/70 backdrop-blur-md border border-retro-grey shadow-lg px-6 py-3 flex justify-between items-center"
      >
        <div className="flex space-x-10 mx-auto">
          {items.map((item, idx) => (
            <a 
              key={idx} 
              href={item.href}
              className="group flex flex-col items-center text-retro-grey hover:text-safety-orange transition-colors gap-1 relative"
            >
              <item.icon size={20} strokeWidth={1.5} />
              <span className="absolute -top-8 bg-dark-text text-retro-white text-[10px] px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap box-shadow-hard">
                {item.label}
              </span>
            </a>
          ))}
          <div className="w-[1px] h-6 bg-retro-grey mx-2" />
           <a 
              href="#"
              className="group flex flex-col items-center text-retro-grey hover:text-dark-text transition-colors gap-1"
            >
              <Github size={20} strokeWidth={1.5} />
            </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;