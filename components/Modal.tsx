import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Zap, Database, Fingerprint, Hash, Disc } from 'lucide-react';
import { ArtPiece } from '../types';

interface ModalProps {
  art: ArtPiece | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ art, onClose }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  if (!art) return null;

  return (
    <AnimatePresence>
      {art && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-retro-white/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            layoutId={`card-container-${art.id}`}
            className="relative w-full max-w-6xl h-[90vh] md:h-[80vh] bg-retro-white border-2 border-dark-text flex flex-col md:flex-row overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-0 right-0 z-50 p-3 bg-safety-orange text-white hover:bg-dark-text transition-colors border-l-2 border-b-2 border-dark-text"
            >
              <X size={24} strokeWidth={3} />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full bg-slate-100 relative overflow-hidden flex items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-dark-text">
               {/* Pattern Overlay */}
               <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none"></div>

              {/* Background Blur Layer */}
              <div 
                className="absolute inset-0 bg-cover bg-center blur-xl opacity-30 scale-110 grayscale"
                style={{ backgroundImage: `url(${art.imageUrl})` }}
              />
              
              {/* Main Image */}
              <motion.img
                src={art.imageUrl}
                alt={art.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="max-w-full max-h-full w-auto h-auto object-contain relative z-10 shadow-lg border border-retro-grey"
              />
            </div>

            {/* Details Section */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-y-auto bg-retro-white p-6 md:p-10 flex flex-col gap-6 relative">
              
              {/* Header */}
              <div className="border-b-2 border-dashed border-retro-grey pb-4">
                 <motion.div
                   initial={{ x: -20, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ delay: 0.2 }}
                 >
                     <div className="flex items-center gap-2 mb-2 text-safety-orange font-bold text-xs tracking-widest uppercase">
                        <Disc className="animate-spin-slow" size={14} /> File Loaded
                     </div>
                     <h2 className="text-3xl md:text-5xl font-bold text-dark-text mb-4 uppercase">
                        {art.title}
                     </h2>
                 </motion.div>
                 
                 <div className="flex flex-wrap gap-2">
                    {art.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 border border-dark-text text-dark-text font-bold uppercase hover:bg-alert-yellow transition-colors cursor-default">
                            #{tag}
                        </span>
                    ))}
                 </div>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-100 p-4 border border-retro-grey">
                    <div className="flex items-center gap-2 text-slate-500 text-xs uppercase mb-1 font-bold">
                        <Zap size={14} /> Model Ver.
                    </div>
                    <div className="text-dark-text font-bold">{art.model}</div>
                  </div>
                   <div className="bg-slate-100 p-4 border border-retro-grey">
                    <div className="flex items-center gap-2 text-slate-500 text-xs uppercase mb-1 font-bold">
                        <Fingerprint size={14} /> Seed ID
                    </div>
                    <div className="text-dark-text font-bold font-mono tracking-tighter">{art.seed}</div>
                  </div>
              </div>

              {/* Prompt Section */}
              <div className="space-y-6">
                 {/* Positive */}
                 <div>
                    <div className="flex justify-between items-center mb-2">
                         <h3 className="text-sm font-bold text-dark-text uppercase flex items-center gap-2">
                            <Database size={16} /> Input Data
                         </h3>
                         <button 
                            onClick={() => handleCopy(art.prompt, 'prompt')}
                            className="text-xs flex items-center gap-1 bg-dark-text text-white px-2 py-1 hover:bg-safety-orange transition-colors"
                         >
                             {copied === 'prompt' ? <Check size={12} /> : <Copy size={12} />}
                             {copied === 'prompt' ? 'COPIED' : 'COPY'}
                         </button>
                    </div>
                    <div className="bg-slate-50 p-4 border border-retro-grey text-xs text-slate-700 font-mono leading-relaxed max-h-32 overflow-y-auto">
                        {art.prompt}
                    </div>
                 </div>

                 {/* Negative */}
                 <div>
                    <div className="flex justify-between items-center mb-2">
                         <h3 className="text-sm font-bold text-slate-400 uppercase flex items-center gap-2">
                            <Hash size={16} /> Exclusion Data
                         </h3>
                          <button 
                            onClick={() => handleCopy(art.negativePrompt, 'neg')}
                            className="text-xs flex items-center gap-1 text-slate-500 hover:text-dark-text transition-colors"
                         >
                             {copied === 'neg' ? <Check size={12} /> : <Copy size={12} />}
                             {copied === 'neg' ? 'COPIED' : 'COPY'}
                         </button>
                    </div>
                    <div className="bg-slate-50 p-4 border border-retro-grey text-xs text-slate-500 font-mono leading-relaxed max-h-24 overflow-y-auto">
                        {art.negativePrompt || "N/A"}
                    </div>
                 </div>
              </div>
              
              {/* Footer Stamp */}
              <div className="mt-auto pt-8 flex justify-between items-end">
                <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400">AUTHORIZED PERSONNEL ONLY</span>
                    <div className="w-24 h-1 bg-alert-yellow mt-1"></div>
                </div>
                <span className="text-4xl text-slate-100 font-bold select-none">DB-X</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;