import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ScanLine } from 'lucide-react';
import { ArtPiece } from '../types';

interface ImageCardProps {
  art: ArtPiece;
  onClick: (art: ArtPiece) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ art, onClick }) => {
  // Generate a stable random ID for visual decoration
  const randomId = useMemo(() => {
      const num = Math.floor(Math.random() * 999).toString().padStart(3, '0');
      return `IMG-${num}`;
  }, []);

  return (
    <motion.div
      layoutId={`card-container-${art.id}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }} // Mechanical ease-out-quart ish
      className="relative group mb-8 cursor-pointer"
      onClick={() => onClick(art)}
    >
      {/* Cassette Shell */}
      <div className="bg-white border border-retro-grey p-3 pb-8 shadow-sm transition-all duration-200 hover:shadow-md hover:border-dark-text">
        
        {/* Header Decor */}
        <div className="flex justify-between items-center mb-2 px-1">
             <span className="text-[10px] text-retro-grey font-bold tracking-widest">{randomId}</span>
             <div className="flex gap-1">
                 <div className="w-1 h-1 bg-retro-grey rounded-full"></div>
                 <div className="w-1 h-1 bg-retro-grey rounded-full"></div>
             </div>
        </div>

        {/* Image Container */}
        <div className="relative overflow-hidden border border-retro-grey bg-slate-100 aspect-auto">
            <motion.img
                src={art.imageUrl}
                alt={art.title}
                className="w-full h-auto object-cover grayscale-[0.2] transition-all duration-300 group-hover:grayscale-0"
                loading="lazy"
            />

            {/* Orange Scanning Overlay */}
            <div className="absolute inset-0 bg-safety-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 mix-blend-multiply"></div>
            
            {/* Scanlines & Text */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 flex flex-col items-center justify-center">
                <div className="scanline absolute inset-0 opacity-50"></div>
                <div className="bg-safety-orange text-white text-xs font-bold px-2 py-1 tracking-widest border border-white animate-pulse">
                    SCANNING...
                </div>
            </div>
        </div>

        {/* Label Area */}
        <div className="mt-4 px-1 border-t border-dashed border-retro-grey pt-2">
            <h3 className="text-dark-text font-bold text-sm truncate uppercase">{art.title}</h3>
            <p className="text-[10px] text-slate-500 uppercase">{art.model} // {art.date}</p>
        </div>
        
        {/* Physical notches (Decor) */}
        <div className="absolute bottom-3 right-3 w-4 h-4 border-t border-l border-retro-grey"></div>
      </div>
    </motion.div>
  );
};

export default ImageCard;