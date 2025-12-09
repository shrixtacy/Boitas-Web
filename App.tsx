import React from 'react';
import { ArrowRight, Instagram, Facebook, Mail, MapPin } from 'lucide-react';
import { CHENNA_VARIANTS, KHAJA_VARIANTS, UPCOMING_PRODUCTS } from './constants';
import ScrollShowcase from './components/ScrollShowcase';
import CategoryBanner from './components/CategoryBanner';
import { DividerLine, CornerMotif, IconGrain, IconHand, IconTemple } from './components/Motifs';

const App: React.FC = () => {
  const [khajaMousePos, setKhajaMousePos] = React.useState({ x: 0, y: 0 });
  const [khajaScrollOffset, setKhajaScrollOffset] = React.useState(0);
  const [chennaMousePos, setChennaMousePos] = React.useState({ x: 0, y: 0 });
  const [chennaScrollOffset, setChennaScrollOffset] = React.useState(0);
  const khajaRef = React.useRef<HTMLDivElement>(null);
  const chennaRef = React.useRef<HTMLDivElement>(null);

  const handleKhajaMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (khajaRef.current) {
      const rect = khajaRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setKhajaMousePos({ x, y });
    }
  };

  const handleKhajaMouseLeave = () => {
    setKhajaMousePos({ x: 0, y: 0 });
  };

  const handleChennaMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (chennaRef.current) {
      const rect = chennaRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setChennaMousePos({ x, y });
    }
  };

  const handleChennaMouseLeave = () => {
    setChennaMousePos({ x: 0, y: 0 });
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (khajaRef.current) {
        const rect = khajaRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setKhajaScrollOffset(scrollProgress);
      }
      if (chennaRef.current) {
        const rect = chennaRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setChennaScrollOffset(scrollProgress);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <div className="absolute bottom-16 md:-bottom-32 lg:-bottom-40 left-0 w-full z-20">
          <img 
            src="/Boita Illustration 1.png" 
            alt="Boita Illustration" 
            className="w-full h-auto object-cover scale-125 md:scale-100"
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
             "Boitas celebrates Odisha's culinary roots with a modern twist. Every bite carries the purity of local ingredients and the warmth of our heritage."
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
      <div 
        id="chenna" 
        className="relative" 
        ref={chennaRef}
        onMouseMove={handleChennaMouseMove}
        onMouseLeave={handleChennaMouseLeave}
      >
        <CategoryBanner 
          title="Chenna Pie" 
          subtitle="Odisha's Classic, Redesigned. Soft, rich, handcrafted. Available in three flavors."
          bgColor="bg-gold"
          textColor="text-maroon"
        />
        
        {/* Extended Description */}
        <div className="bg-gold text-maroon pb-16 px-8 relative z-10 -mt-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-lg md:text-xl font-light leading-relaxed opacity-90">
              Chenna Pie is a beloved treasure from Odisha's rich culinary heritage, where soft, melt-in-your-mouth chenna meets 
              the delicate sweetness of tradition. This iconic dessert has graced celebrations and festivals for generations, 
              symbolizing joy, prosperity, and the warmth of Odia hospitality.
            </p>
            <p className="text-lg md:text-xl font-light leading-relaxed opacity-90">
              Each piece is crafted with fresh chenna, infused with aromatic cardamom and a hint of saffron, creating a texture 
              that's both rich and light. Our Chenna Pie reimagines this classic with modern elegance—perfect for weddings, 
              special occasions, or simply indulging in a moment of pure bliss.
            </p>
            <p className="text-base md:text-lg font-light italic opacity-80 pt-4">
              "A celebration of tradition, crafted with love and served with pride."
            </p>
          </div>
        </div>
        
        {/* Chenna Pie Images - With Random Mouse Hover & Scroll Parallax Effect */}
        {/* Left Top Corner - BIGGEST & TILTED */}
        <img src="/Chenna Pie.png" alt="Chenna Pie" className="absolute -top-16 -left-16 w-32 h-32 md:w-96 md:h-96 object-contain opacity-100 z-10 transition-all duration-500 ease-out hover:scale-110" style={{transform: `translate(${chennaMousePos.x * 70 + chennaScrollOffset * 50}px, ${chennaMousePos.y * 60 + chennaScrollOffset * -30}px) rotate(${-15 + chennaScrollOffset * 10}deg)`}} />
        
        {/* Left Bottom Corner - BIGGEST & TILTED */}
        <img src="/Chenna Pie 2.png" alt="Chenna Pie" className="absolute -bottom-16 -left-16 w-32 h-32 md:w-96 md:h-96 object-contain opacity-100 z-10 transition-all duration-500 ease-out hover:scale-110" style={{transform: `translate(${chennaMousePos.x * -55 + chennaScrollOffset * -40}px, ${chennaMousePos.y * -65 + chennaScrollOffset * 60}px) rotate(${25 + chennaScrollOffset * -15}deg)`}} />
        
        {/* Right Top Corner - BIGGEST & TILTED */}
        <img src="/Chenna Pie.png" alt="Chenna Pie" className="absolute -top-16 -right-16 w-32 h-32 md:w-96 md:h-96 object-contain opacity-100 z-10 transition-all duration-500 ease-out hover:scale-110" style={{transform: `translate(${chennaMousePos.x * -75 + chennaScrollOffset * -50}px, ${chennaMousePos.y * 68 + chennaScrollOffset * -40}px) rotate(${18 + chennaScrollOffset * 12}deg)`}} />
        
        {/* Right Bottom Corner - BIGGEST & TILTED */}
        <img src="/Chenna Pie 2.png" alt="Chenna Pie" className="absolute -bottom-16 -right-16 w-40 h-40 md:w-[28rem] md:h-[28rem] object-contain opacity-100 z-10 transition-all duration-500 ease-out hover:scale-110" style={{transform: `translate(${chennaMousePos.x * 85 + chennaScrollOffset * 60}px, ${chennaMousePos.y * -72 + chennaScrollOffset * 70}px) rotate(${-22 + chennaScrollOffset * -18}deg)`}} />
        
        {/* Near "C" in Chenna Pie title - left side */}
        <img src="/Chenna Pie.png" alt="Chenna Pie" className="absolute top-1/3 left-[15%] w-32 h-32 object-contain opacity-100 z-10 hidden md:block transition-all duration-500 ease-out hover:scale-110" style={{transform: `translate(${chennaMousePos.x * 50 + chennaScrollOffset * 30}px, ${chennaMousePos.y * 45 + chennaScrollOffset * -20}px) rotate(${chennaScrollOffset * 8}deg)`}} />
        
        {/* Near "flavors." in subtitle - right bottom of text */}
        <img src="/Chenna Pie 2.png" alt="Chenna Pie" className="absolute top-2/3 right-[15%] w-36 h-36 object-contain opacity-100 z-10 hidden md:block transition-all duration-500 ease-out hover:scale-110" style={{transform: `translate(${chennaMousePos.x * -62 + chennaScrollOffset * -35}px, ${chennaMousePos.y * -58 + chennaScrollOffset * 45}px) rotate(${chennaScrollOffset * -10}deg)`}} />
      </div>

      {/* 4. CHENNA PIE SHOWCASE */}
      <ScrollShowcase products={CHENNA_VARIANTS} bgColor="bg-beige" textColor="text-maroon" />

      {/* 5. KHAJA BITES CATEGORY */}
      <div 
        id="khaja" 
        className="relative" 
        ref={khajaRef}
        onMouseMove={handleKhajaMouseMove}
        onMouseLeave={handleKhajaMouseLeave}
      >
        <CategoryBanner 
          title="Khaja Bites" 
          subtitle="The heritage sweet of Odisha, reimagined in bite-sized form. Crispy. Light. Perfectly Odia."
          bgColor="bg-maroon"
          textColor="text-beige"
        />
        
        {/* Extended Description */}
        <div className="bg-maroon text-beige pb-16 px-8 relative z-10 -mt-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-lg md:text-xl font-light leading-relaxed opacity-90">
              Khaja is a timeless delicacy from the temples of Odisha, where layers of flaky pastry meet the perfect balance of sweetness. 
              Traditionally offered to Lord Jagannath, this sacred sweet has been cherished for centuries as a symbol of devotion and celebration.
            </p>
            <p className="text-lg md:text-xl font-light leading-relaxed opacity-90">
              Each bite reveals delicate, crispy layers that melt in your mouth, infused with the essence of pure ghee and cardamom. 
              Our Khaja Bites honor this ancient recipe while bringing you the convenience of modern indulgence—perfect for gifting, 
              festive occasions, or simply savoring a piece of Odia heritage.
            </p>
            <p className="text-base md:text-lg font-light italic opacity-80 pt-4">
              "A taste that transcends time, connecting you to the rich culinary traditions of the East."
            </p>
          </div>
        </div>
        
        {/* Khaja Images - With Random Mouse Hover & Scroll Parallax Effect */}
        {/* Left Top Corner - BIGGEST & TILTED */}
        <img src="/khaja.png" alt="Khaja" className="absolute -top-16 -left-16 w-32 h-32 md:w-96 md:h-96 object-contain opacity-100 z-10 transition-all duration-500 ease-out hover:scale-110" style={{transform: `translate(${khajaMousePos.x * 70 + khajaScrollOffset * 50}px, ${khajaMousePos.y * 60 + khajaScrollOffset * -30}px) rotate(${-15 + khajaScrollOffset * 10}deg)`}} />
        
        {/* Left Bottom Corner - BIGGEST & TILTED */}
        <img src="/khaja.png" alt="Khaja" className="absolute -bottom-16 -left-16 w-32 h-32 md:w-96 md:h-96 object-contain opacity-100 z-10 transition-all duration-500 ease-out hover:scale-110" style={{transform: `translate(${khajaMousePos.x * -55 + khajaScrollOffset * -40}px, ${khajaMousePos.y * -65 + khajaScrollOffset * 60}px) rotate(${25 + khajaScrollOffset * -15}deg)`}} />
        
        {/* Right Top Corner - BIGGEST & TILTED */}
        <img src="/khaja.png" alt="Khaja" className="absolute -top-16 -right-16 w-32 h-32 md:w-96 md:h-96 object-contain opacity-100 z-10 transition-all duration-500 ease-out hover:scale-110" style={{transform: `translate(${khajaMousePos.x * -75 + khajaScrollOffset * -50}px, ${khajaMousePos.y * 68 + khajaScrollOffset * -40}px) rotate(${18 + khajaScrollOffset * 12}deg)`}} />
        
        {/* Right Bottom Corner - BIGGEST & TILTED */}
        <img src="/khaja.png" alt="Khaja" className="absolute -bottom-16 -right-16 w-40 h-40 md:w-[28rem] md:h-[28rem] object-contain opacity-100 z-10 transition-all duration-500 ease-out hover:scale-110" style={{transform: `translate(${khajaMousePos.x * 85 + khajaScrollOffset * 60}px, ${khajaMousePos.y * -72 + khajaScrollOffset * 70}px) rotate(${-22 + khajaScrollOffset * -18}deg)`}} />
        
        {/* Near "K" in Khaja Bites title - left side, moved up */}
        <img src="/khaja.png" alt="Khaja" className="absolute top-1/3 left-[15%] w-32 h-32 object-contain opacity-100 z-10 hidden md:block transition-all duration-500 ease-out hover:scale-110" style={{transform: `translate(${khajaMousePos.x * 50 + khajaScrollOffset * 30}px, ${khajaMousePos.y * 45 + khajaScrollOffset * -20}px) rotate(${khajaScrollOffset * 8}deg)`}} />
        
        {/* Near "Odia." in subtitle - right bottom of text, shifted more right */}
        <img src="/khaja.png" alt="Khaja" className="absolute top-2/3 right-[15%] w-36 h-36 object-contain opacity-100 z-10 hidden md:block transition-all duration-500 ease-out hover:scale-110" style={{transform: `translate(${khajaMousePos.x * -62 + khajaScrollOffset * -35}px, ${khajaMousePos.y * -58 + khajaScrollOffset * 45}px) rotate(${khajaScrollOffset * -10}deg)`}} />
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
