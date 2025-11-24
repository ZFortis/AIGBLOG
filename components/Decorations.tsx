import React from 'react';

const Decorations: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-tech-grid bg-[length:40px_40px] opacity-40" />
      
      {/* Big Geometric Shape */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] border border-retro-grey rounded-full opacity-20" />
      <div className="absolute top-[-15%] right-[-15%] w-[800px] h-[800px] border border-retro-grey rounded-full opacity-10 dashed" />

      {/* Tech Markers - Top Left */}
      <div className="absolute top-8 left-8 w-64 h-64 opacity-60">
        <div className="absolute top-0 left-0 w-4 h-[1px] bg-dark-text"></div>
        <div className="absolute top-0 left-0 h-4 w-[1px] bg-dark-text"></div>
        <div className="absolute top-2 left-2 text-[10px] text-retro-grey">COORD: 00-00</div>
      </div>

      {/* Tech Markers - Bottom Right */}
      <div className="absolute bottom-8 right-8 w-64 h-64 opacity-60 flex flex-col items-end justify-end">
         <div className="text-[10px] text-retro-grey mb-1">SYS.STATUS: ONLINE</div>
        <div className="relative w-8 h-8">
            <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-dark-text"></div>
            <div className="absolute bottom-0 right-0 h-4 w-[1px] bg-dark-text"></div>
        </div>
      </div>

      {/* Center Crosshairs */}
      <div className="absolute top-1/2 left-10 w-4 h-4 opacity-40">
         <div className="absolute w-full h-[1px] bg-dark-text top-1/2 -translate-y-1/2"></div>
         <div className="absolute h-full w-[1px] bg-dark-text left-1/2 -translate-x-1/2"></div>
      </div>
      <div className="absolute top-1/4 right-20 w-4 h-4 opacity-40">
         <div className="absolute w-full h-[1px] bg-dark-text top-1/2 -translate-y-1/2"></div>
         <div className="absolute h-full w-[1px] bg-dark-text left-1/2 -translate-x-1/2"></div>
      </div>
      
      {/* Ruler Lines Left */}
      <div className="absolute left-0 top-1/3 flex flex-col gap-4 opacity-20">
         {[...Array(10)].map((_, i) => (
             <div key={i} className="w-4 h-[1px] bg-dark-text"></div>
         ))}
      </div>
    </div>
  );
};

export default Decorations;