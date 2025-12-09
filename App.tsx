import React from 'react';
import { ArrowRight, Instagram, Facebook, Mail, MapPin } from 'lucide-react';
import { CHENNA_VARIANTS, KHAJA_VARIANTS, UPCOMING_PRODUCTS } from './constants';
import ScrollShowcase from './components/ScrollShowcase';
import CategoryBanner from './components/CategoryBanner';
import { DividerLine, CornerMotif, IconGrain, IconHand, IconTemple } from './components/Motifs';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-beige selection:bg-maroon selection:text-beige">
      
      {/* 1. HERO SECTION */}
      <section className="h-screen w-full relative flex items-start justify-start overflow-visible bg-beige text-maroon">
         
         {/* Navigation - Absolute & Transparent */}
        <nav className="absolute top-0 w-full px-8 py-4 flex justify-between items-center z-50 text-maroon border-b border-maroon/10">
          <div className="text-xl font-serif tracking-[0.2em] font-bold">BOITAS</div>
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
             <a href="#about" className="hover:text-maroon/70 transition-colors">About</a>
             <a href="#chenna" className="hover:text-maroon/70 transition-colors">Chenna Pie</a>
             <a href="#khaja" className="hover:text-maroon/70 transition-colors">Khaja</a>
             <button className="border border-maroon/40 px-5 py-1.5 hover:bg-maroon hover:text-beige transition-all">
               Shop Now
             </button>
          </div>
          <button className="md:hidden text-sm uppercase tracking-widest hover:underline decoration-1 underline-offset-4">
            Menu
          </button>
        </nav>

        {/* Left-aligned Hero Content */}
        <div className="relative z-10 px-8 md:px-16 lg:px-24 pt-32 md:pt-40 animate-slide-up">
            <div className="mb-6 flex flex-col items-start gap-2">
               <span className="text-maroon uppercase tracking-[0.3em] text-xs md:text-sm font-bold opacity-80">Est. Odisha, India</span>
               <div className="h-px w-12 bg-maroon/60"></div>
            </div>
            
            <h1 className="font-serif text-maroon mb-8 whitespace-nowrap">
              <div className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-2">
                Authentic Odia
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl leading-tight">
                Delicacies, <span className="italic font-light">Reimagined.</span>
              </div>
            </h1>
            
            <p className="text-lg md:text-xl text-maroon/80 font-light max-w-lg leading-relaxed mb-10">
              Crafted with heritage. Served with love. Experience the royal flavors of the East brought to your doorstep.
            </p>
            
            <button className="group bg-maroon text-beige border border-maroon px-10 py-4 text-sm uppercase tracking-widest font-bold hover:bg-maroon-dark transition-all duration-300 flex items-center gap-3 shadow-xl">
              Explore Delicacies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

        {/* Illustration at bottom - Full width, overflowing into next section */}
        <div className="absolute -bottom-20 md:-bottom-32 lg:-bottom-40 left-0 w-full z-20">
          <img 
            src="/Boita Illustration 1.png" 
            alt="Boita Illustration" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-maroon/40 animate-bounce z-30">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
             <path d="M12 5v14M19 12l-7 7-7-7" />
           </svg>
        </div>
      </section>

      {/* 2. ABOUT BOITAS */}
      <section id="about" className="py-24 px-8 bg-maroon text-beige relative overflow-hidden pt-32 md:pt-40 lg:pt-48">
        <CornerMotif className="top-8 left-8 text-gold opacity-20" />
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
           <DividerLine className="opacity-40" />
           <p className="text-2xl md:text-4xl font-serif leading-relaxed">
             “Boitas celebrates Odisha’s culinary roots with a modern twist. Every bite carries the purity of local ingredients and the warmth of our heritage.”
           </p>
           
           <div className="flex flex-wrap justify-center gap-12 md:gap-16 pt-8 opacity-90">
             <div className="flex flex-col items-center gap-4">
               <div className="w-16 h-16 rounded-full border border-beige/30 flex items-center justify-center hover:scale-105 transition-transform">
                 <IconGrain className="w-8 h-8" />
               </div>
               <span className="text-xs uppercase tracking-widest">Locally Sourced</span>
             </div>
             <div className="flex flex-col items-center gap-4">
               <div className="w-16 h-16 rounded-full border border-beige/30 flex items-center justify-center hover:scale-105 transition-transform">
                 <IconHand className="w-8 h-8" />
               </div>
               <span className="text-xs uppercase tracking-widest">Handcrafted</span>
             </div>
             <div className="flex flex-col items-center gap-4">
               <div className="w-16 h-16 rounded-full border border-beige/30 flex items-center justify-center hover:scale-105 transition-transform">
                 <IconTemple className="w-8 h-8" />
               </div>
               <span className="text-xs uppercase tracking-widest">Heritage Recipe</span>
             </div>
           </div>
           <DividerLine className="opacity-40" />
        </div>
      </section>

      {/* 3. CHENNA PIE CATEGORY */}
      <div id="chenna">
        <CategoryBanner 
          title="Chenna Pie" 
          subtitle="Odisha’s Classic, Redesigned. Soft, rich, handcrafted. Available in three flavors."
          bgColor="bg-gold"
          textColor="text-maroon"
        />
      </div>

      {/* 4. CHENNA PIE SHOWCASE */}
      <ScrollShowcase products={CHENNA_VARIANTS} bgColor="bg-beige" textColor="text-maroon" />

      {/* 5. KHAJA BITES CATEGORY */}
      <div id="khaja">
        <CategoryBanner 
          title="Khaja Bites" 
          subtitle="The heritage sweet of Odisha, reimagined in bite-sized form. Crispy. Light. Perfectly Odia."
          bgColor="bg-maroon"
          textColor="text-beige"
        />
      </div>

      {/* 6. KHAJA BITES SHOWCASE */}
      <ScrollShowcase products={KHAJA_VARIANTS} bgColor="bg-beige" textColor="text-maroon" />

      {/* 7. UPCOMING PRODUCTS */}
      <section className="py-32 bg-gold text-maroon px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
             <h2 className="text-5xl font-serif mb-4">Coming Soon...</h2>
             <p className="text-lg opacity-80">The journey continues with new textures.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {UPCOMING_PRODUCTS.map((item, idx) => (
              <div key={idx} className="aspect-[4/3] bg-beige border-2 border-maroon relative p-8 flex flex-col items-center justify-center group hover:bg-white transition-colors cursor-default">
                 {/* Decorative corners */}
                 <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-maroon"></div>
                 <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-maroon"></div>
                 <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-maroon"></div>
                 <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-maroon"></div>

                 <div className="text-8xl font-serif opacity-10 mb-6 group-hover:scale-110 transition-transform duration-500">?</div>
                 
                 <h3 className="text-2xl font-serif font-bold mb-2">{item.name}</h3>
                 <span className="text-sm uppercase tracking-widest border border-maroon px-3 py-1 rounded-full">
                    {item.type}
                 </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-maroon text-beige pt-20 pb-10 px-8 border-t-[8px] border-gold">
         <div className="max-w-6xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
             <div className="space-y-6">
               <h2 className="text-4xl font-serif tracking-widest font-bold">BOITAS</h2>
               <p className="max-w-xs text-sm opacity-70 leading-relaxed">
                 Celebrating the culinary artistry of Odisha. 
                 Taking local flavors to the global stage.
               </p>
             </div>
             
             <div className="flex flex-wrap gap-12">
               <div>
                 <h4 className="font-bold uppercase tracking-widest mb-4 text-xs opacity-60">Explore</h4>
                 <ul className="space-y-2 text-sm">
                   <li><a href="#" className="hover:text-gold transition-colors">Chenna Pie</a></li>
                   <li><a href="#" className="hover:text-gold transition-colors">Khaja Bites</a></li>
                   <li><a href="#" className="hover:text-gold transition-colors">Gifting</a></li>
                 </ul>
               </div>
               <div>
                 <h4 className="font-bold uppercase tracking-widest mb-4 text-xs opacity-60">Company</h4>
                 <ul className="space-y-2 text-sm">
                   <li><a href="#" className="hover:text-gold transition-colors">Our Story</a></li>
                   <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
                   <li><a href="#" className="hover:text-gold transition-colors">Wholesale</a></li>
                 </ul>
               </div>
               <div>
                 <h4 className="font-bold uppercase tracking-widest mb-4 text-xs opacity-60">Connect</h4>
                 <div className="flex gap-4">
                   <Instagram className="w-5 h-5 hover:text-gold cursor-pointer" />
                   <Facebook className="w-5 h-5 hover:text-gold cursor-pointer" />
                   <Mail className="w-5 h-5 hover:text-gold cursor-pointer" />
                 </div>
               </div>
             </div>
           </div>
           
           <DividerLine className="mb-8 opacity-20" />
           
           <div className="flex flex-col md:flex-row justify-between items-center text-xs opacity-50 font-light">
              <p>&copy; {new Date().getFullYear()} Boitas Foods Pvt Ltd. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3"/> Bhubaneswar, Odisha</span>
              </div>
           </div>
         </div>
      </footer>
    </div>
  );
};

export default App;