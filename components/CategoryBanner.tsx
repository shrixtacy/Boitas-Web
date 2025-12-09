import React from 'react';
import { CornerMotif } from './Motifs';

interface CategoryBannerProps {
  title: string;
  subtitle: string;
  bgColor: string; // Tailwind class
  textColor: string; // Tailwind class
}

const CategoryBanner: React.FC<CategoryBannerProps> = ({ title, subtitle, bgColor, textColor }) => {
  return (
    <section className={`py-24 md:py-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden ${bgColor} ${textColor}`}>
      <CornerMotif className="top-4 left-4" />
      <CornerMotif className="bottom-4 right-4 rotate-180" />
      
      <div className="max-w-3xl z-10">
        <h2 className="text-5xl md:text-7xl font-serif mb-6 relative inline-block">
          {title}
        </h2>
        <div className="w-24 h-1 bg-current mx-auto mb-6 opacity-80"></div>
        <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default CategoryBanner;