import React from 'react';

export const DividerLine: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`w-full flex items-center justify-center opacity-60 ${className}`}>
    <div className="h-px bg-current w-12 md:w-24"></div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2 text-current">
       <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" stroke="currentColor" strokeWidth="1" />
    </svg>
    <div className="h-px bg-current w-12 md:w-24"></div>
  </div>
);

export const CornerMotif: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg 
    width="80" 
    height="80" 
    viewBox="0 0 80 80" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`absolute pointer-events-none opacity-40 ${className}`}
  >
    <path d="M1 79V1H79" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M10 70V10H70" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="20" cy="20" r="3" fill="currentColor"/>
    <path d="M20 20 L35 35" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M35 20 L20 35" stroke="currentColor" strokeWidth="0.5"/>
  </svg>
);

export const IconGrain: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22v-8" />
    <path d="M5.4 17.5C4 16 4 13.5 5.5 12l2.5-2.5 4 4" />
    <path d="M9 18.5C7.5 20 5 20 3.5 18.5" />
    <path d="M8 12 12 8" />
    <path d="M18.6 17.5C20 16 20 13.5 18.5 12l-2.5-2.5-4 4" />
    <path d="M15 18.5C16.5 20 19 20 20.5 18.5" />
    <path d="M12 12 12 2" />
  </svg>
);

export const IconHand: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 5 12 18" strokeDasharray="2 2" />
  </svg>
);

export const IconTemple: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 22h16" />
    <path d="M6 22V10l6-8 6 8v12" />
    <path d="M12 2v4" />
    <circle cx="12" cy="15" r="3" />
    <path d="M9 15h6" />
    <path d="M12 12v6" />
  </svg>
);