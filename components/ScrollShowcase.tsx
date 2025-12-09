import React, { useState, useEffect, useRef } from 'react';
import { ProductVariant } from '../types';
import { DividerLine } from './Motifs';

interface ScrollShowcaseProps {
  products: ProductVariant[];
  bgColor?: string; // Tailwind class
  textColor?: string; // Tailwind class
}

const ScrollShowcase: React.FC<ScrollShowcaseProps> = ({ 
  products, 
  bgColor = 'bg-beige', 
  textColor = 'text-maroon'
}) => {
  const [activeId, setActiveId] = useState<string>(products[0].id);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when content is in the middle 20% of screen
      threshold: 0
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    products.forEach((product) => {
      const el = document.getElementById(product.id);
      if (el && observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [products]);

  // Determine active product for initial render or fallback
  const activeProduct = products.find(p => p.id === activeId) || products[0];

  return (
    <section className={`relative ${bgColor} ${textColor}`}>
      <div className="flex flex-col lg:flex-row">
        
        {/* Sticky Left Panel - Images (Desktop Only) */}
        <div className="hidden lg:block w-1/2 h-screen sticky top-0 overflow-hidden">
          <div className="relative w-full h-full bg-inherit">
             {products.map((product) => (
                <div 
                  key={product.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${
                    activeId === product.id ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                   <div className="relative w-full h-full">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                      />
                      {/* Subtle overlay for better contrast if needed */}
                      <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
                      
                      {/* Decorative border inside image */}
                      <div className="absolute inset-12 border border-white/40 pointer-events-none"></div>
                   </div>
                </div>
             ))}
          </div>
        </div>

        {/* Scrolling Right Panel - Text Details */}
        <div className="w-full lg:w-1/2">
          {products.map((product) => (
            <div 
              key={product.id} 
              id={product.id} 
              className="min-h-screen flex flex-col justify-center p-8 md:p-16 lg:p-24 relative"
            >
               {/* Mobile Image (Visible only on lg hidden) */}
               <div className="lg:hidden mb-8 aspect-[4/5] overflow-hidden rounded-sm relative shadow-lg">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-4 border border-white/40 pointer-events-none"></div>
               </div>

              <div className="max-w-md relative animate-fade-in">
                 <span className="text-sm font-bold tracking-[0.2em] uppercase mb-4 block opacity-60">
                   Signature Selection
                 </span>
                 <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                   {product.name}
                 </h3>
                 <DividerLine className="my-8 justify-start opacity-50" />
                 <p className="text-lg leading-relaxed font-light mb-8 opacity-90">
                   {product.description}
                 </p>
                 
                 <div className="space-y-4">
                   <h4 className="text-xs font-bold uppercase tracking-widest opacity-60">Crafted With</h4>
                   <ul className="flex flex-wrap gap-2">
                     {product.ingredients.map((ing, idx) => (
                       <li key={idx} className="border border-current px-4 py-2 rounded-sm text-xs font-medium uppercase tracking-widest">
                         {ing}
                       </li>
                     ))}
                   </ul>
                 </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ScrollShowcase;