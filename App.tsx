import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Decorations from './components/Decorations';
import ImageCard from './components/ImageCard';
import Modal from './components/Modal';
import LoadingScreen from './components/LoadingScreen';
import { ARTWORK_DATA } from './constants';
import { ArtPiece } from './types';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [selectedArt, setSelectedArt] = useState<ArtPiece | null>(null);
  const [columns, setColumns] = useState<ArtPiece[][]>([[], [], []]);

  // Handle Loading Simulation (controlled by LoadingScreen internally now, but keeping safety timeout)
  useEffect(() => {
    // Fallback if loading animation takes too long
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); 
    return () => clearTimeout(timer);
  }, []);

  // Handle Masonry Layout Logic
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      let numCols = 1;
      if (width >= 768) numCols = 2;
      if (width >= 1024) numCols = 3;

      const newCols: ArtPiece[][] = Array.from({ length: numCols }, () => []);
      
      ARTWORK_DATA.forEach((art, index) => {
        newCols[index % numCols].push(art);
      });

      setColumns(newCols);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  return (
    <div className="min-h-screen bg-retro-white text-dark-text relative">
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Content */}
      {!loading && (
        <>
          <Decorations />
          <Navbar />
          
          <main className="relative z-10">
            <Hero />
            
            {/* Masonry Grid Section */}
            <section id="gallery" className="max-w-7xl mx-auto px-4 pb-32 pt-20">
               <div className="flex gap-6 md:gap-8">
                 {columns.map((col, colIndex) => (
                   <div key={colIndex} className="flex-1 flex flex-col gap-0">
                     {col.map((art) => (
                       <ImageCard 
                          key={art.id} 
                          art={art} 
                          onClick={setSelectedArt} 
                       />
                     ))}
                   </div>
                 ))}
               </div>
            </section>

            {/* Simple Footer/About Section for Anchor */}
            <section id="about" className="py-20 bg-slate-100 border-t border-retro-grey">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-4 uppercase">/// About Terminal ///</h2>
                    <p className="text-slate-500 max-w-lg mx-auto mb-8">
                        This is a curated collection of neural network outputs. 
                        Design inspired by 70s/80s industrial interfaces.
                    </p>
                    <div className="inline-block border border-dark-text px-4 py-2 text-xs font-bold uppercase hover:bg-dark-text hover:text-white transition-colors cursor-pointer">
                        End Session
                    </div>
                </div>
            </section>
          </main>

          {/* Detail Modal */}
          <Modal 
            art={selectedArt} 
            onClose={() => setSelectedArt(null)} 
          />
        </>
      )}
    </div>
  );
};

export default App;