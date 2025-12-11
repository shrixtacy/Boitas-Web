import React, { useState, useEffect, useRef } from 'react';
import { Plus, ShoppingBag } from 'lucide-react';
import { ProductVariant } from '../types';
import { DividerLine } from './Motifs';
import { useCart } from '../contexts/CartContext';

interface ScrollShowcaseProps {
  products: ProductVariant[];
  bgColor?: string;
  textColor?: string;
}

const ScrollShowcase: React.FC<ScrollShowcaseProps> = ({
  products,
  bgColor = 'bg-beige',
  textColor = 'text-maroon'
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { addItem } = useCart();

  const handleAddToCart = (product: ProductVariant) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.discountedPrice,
      weight: product.weight,
      category: product.category
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const triggerPoint = scrollY + windowHeight / 2;

      contentRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const elementTop = scrollY + rect.top;
        const elementBottom = elementTop + rect.height;

        if (triggerPoint >= elementTop && triggerPoint < elementBottom) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${bgColor} ${textColor} w-full`}>

      {/* DESKTOP: Sticky Left Panel + Scrolling Right Panel */}
      <div className="hidden md:flex relative items-start">

        {/* LEFT: Sticky Image Panel */}
        <div className="w-1/2 h-screen sticky top-0 flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full">
            {products.map((product, index) => (
              <div
                key={`image-${product.id}`}
                className={`absolute inset-0 transition-opacity duration-700 ${activeIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                style={{ zIndex: activeIndex === index ? 10 : 0 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20" />
                {/* Border Frame */}
                <div className="absolute inset-8 border-2 border-white/50" />
                {/* Product Name */}
                <div className="absolute bottom-8 left-8 text-white z-20">
                  <h3 className="text-2xl font-serif font-bold">{product.name}</h3>
                  <div className="w-12 h-0.5 bg-white mt-2" />
                </div>
              </div>
            ))}

            {/* Progress Dots */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
              {products.map((_, index) => (
                <div
                  key={`dot-${index}`}
                  className={`rounded-full transition-all duration-300 ${activeIndex === index
                    ? 'w-2.5 h-2.5 bg-white'
                    : 'w-2 h-2 bg-white/40'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Scrolling Content Panel */}
        <div className="w-1/2">
          {products.map((product, index) => (
            <div
              key={`content-${product.id}`}
              ref={(el) => (contentRefs.current[index] = el)}
              className="min-h-screen flex items-center justify-center px-12 py-16"
            >
              <div className="max-w-lg">
                <div className="text-xs uppercase tracking-[0.3em] opacity-60 font-bold mb-6">
                  Signature Selection
                </div>

                <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
                  {product.name}
                </h2>

                <DividerLine className="opacity-40 mb-6" />

                <p className="text-lg leading-relaxed opacity-90 mb-8">
                  {product.description}
                </p>

                {/* Pricing */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gold">₹{product.discountedPrice}</span>
                    <span className="text-lg text-current/60 line-through">₹{product.originalPrice}</span>
                  </div>
                  <span className="text-sm text-current/70">({product.weight})</span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="group bg-maroon text-beige border border-maroon px-8 py-3 text-sm uppercase tracking-widest font-bold hover:bg-maroon-dark transition-all duration-300 flex items-center gap-3 shadow-lg mb-10"
                >
                  <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                  Add to Cart
                </button>

                <div>
                  <h4 className="text-xs uppercase tracking-[0.3em] opacity-60 font-bold mb-4">
                    Crafted With
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient, idx) => (
                      <span
                        key={idx}
                        className="border border-current px-4 py-1.5 text-xs uppercase tracking-widest"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE: Simple Stacked Layout */}
      <div className="md:hidden px-6 py-12 space-y-16">
        {products.map((product) => (
          <div key={`mobile-${product.id}`} className="space-y-6">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.3em] opacity-60 font-bold">
                Signature Selection
              </div>

              <h2 className="text-3xl font-serif font-bold leading-tight">
                {product.name}
              </h2>

              <DividerLine className="opacity-40" />

              <p className="text-lg leading-relaxed opacity-90 mb-6">
                {product.description}
              </p>

              {/* Pricing */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-gold">₹{product.discountedPrice}</span>
                  <span className="text-base text-current/60 line-through">₹{product.originalPrice}</span>
                </div>
                <span className="text-sm text-current/70">({product.weight})</span>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className="group bg-maroon text-beige border border-maroon px-6 py-2.5 text-sm uppercase tracking-widest font-bold hover:bg-maroon-dark transition-all duration-300 flex items-center gap-2 shadow-lg mb-6"
              >
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                Add to Cart
              </button>

              <div>
                <h4 className="text-xs uppercase tracking-[0.3em] opacity-60 font-bold mb-3">
                  Crafted With
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, idx) => (
                    <span
                      key={idx}
                      className="border border-current px-3 py-1 text-xs uppercase tracking-widest"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollShowcase;