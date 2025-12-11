import React from 'react';
import { ArrowRight, Instagram, Facebook, Mail, MapPin, Plus } from 'lucide-react';
import { CHENNA_VARIANTS, KHAJA_VARIANTS, UPCOMING_PRODUCTS } from './constants';
import ScrollShowcase from './components/ScrollShowcase';
import CategoryBanner from './components/CategoryBanner';
import { DividerLine, CornerMotif, IconGrain, IconHand, IconTemple } from './components/Motifs';
import { CartProvider, useCart } from './contexts/CartContext';
import Cart from './components/Cart';
import CartButton from './components/CartButton';
import MobileCartBar from './components/MobileCartBar';

// Menu items data
const MENU_ITEMS = [
  {
    id: 'cp-chocolate',
    name: 'Chocolate Chenna Pie',
    description: 'Rich, decadent chenna pie infused with premium cocoa and dark chocolate. A modern twist on the traditional recipe that melts in your mouth with every bite.',
    image: '/Chenna Pie 2.png',
    originalPrice: 59,
    discountedPrice: 49,
    weight: '100g',
    category: 'chenna' as const
  },
  {
    id: 'cp-fruit-nut',
    name: 'Dry Fruit & Jaggery Chenna Pie',
    description: 'Traditional chenna pie sweetened with organic jaggery and loaded with premium dry fruits including almonds, cashews, and pistachios for a rich, wholesome experience.',
    image: '/Chenna Pie.png',
    originalPrice: 59,
    discountedPrice: 49,
    weight: '100g',
    category: 'chenna' as const
  },
  {
    id: 'kb-salted',
    name: 'Salted Khaja Bites',
    description: 'Crispy, flaky khaja with a hint of sea salt. A unique savory twist on the classic sweet that\'s perfect for tea time and evening snacks.',
    image: '/khaja.png',
    originalPrice: 119,
    discountedPrice: 79,
    weight: '200g',
    category: 'khaja' as const
  },
  {
    id: 'kb-masala',
    name: 'Masala Khaja Bites',
    description: 'Spiced khaja bites with a blend of traditional Indian spices including cumin, coriander, and chaat masala. A bold, flavorful experience that awakens your taste buds.',
    image: '/khaja.png',
    originalPrice: 149,
    discountedPrice: 99,
    weight: '200g',
    category: 'khaja' as const
  },
  {
    id: 'kb-sweet',
    name: 'Sweetened Khaja Bites',
    description: 'Classic khaja bites with extra sweetness from jaggery and cardamom. The traditional favorite that brings back childhood memories and family celebrations.',
    image: '/khaja.png',
    originalPrice: 129,
    discountedPrice: 89,
    weight: '200g',
    category: 'khaja' as const
  }
];

const AppContent: React.FC = () => {
  const [khajaMousePos, setKhajaMousePos] = React.useState({ x: 0, y: 0 });
  const [khajaScrollOffset, setKhajaScrollOffset] = React.useState(0);
  const [chennaMousePos, setChennaMousePos] = React.useState({ x: 0, y: 0 });
  const [chennaScrollOffset, setChennaScrollOffset] = React.useState(0);

  const khajaRef = React.useRef<HTMLDivElement>(null);
  const chennaRef = React.useRef<HTMLDivElement>(null);

  const { addItem } = useCart();

  const handleAddToCart = (item: typeof MENU_ITEMS[0]) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.discountedPrice,
      weight: item.weight,
      category: item.category
    });
  };

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
    <div className="w-full min-h-screen bg-beige selection:bg-maroon selection:text-beige pb-20 md:pb-0">

      {/* 1. HERO SECTION */}
      <section className="h-screen w-full relative flex items-start justify-start overflow-hidden md:overflow-visible bg-beige text-maroon">

        {/* Navigation - Fixed & Sticky */}
        <nav className="fixed top-0 w-full px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center z-50 text-maroon bg-beige/95 backdrop-blur-sm border-b border-maroon/10 shadow-sm">
          <div className="text-xl font-serif tracking-[0.2em] font-bold">BOITAS</div>
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
            <a href="#about" className="hover:text-maroon/70 transition-colors">About</a>
            <a href="#chenna" className="hover:text-maroon/70 transition-colors">Chenna Pie</a>
            <a href="#khaja" className="hover:text-maroon/70 transition-colors">Khaja</a>
            <CartButton />
            <button className="border border-maroon/40 px-5 py-1.5 hover:bg-maroon hover:text-beige transition-all">
              Shop Now
            </button>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <CartButton />
            <button className="text-sm uppercase tracking-widest hover:underline decoration-1 underline-offset-4">
              Menu
            </button>
          </div>
        </nav>

        {/* Left-aligned Hero Content */}
        <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 md:pt-32 animate-slide-up max-w-full">
          <div className="mb-6 flex flex-col items-start gap-2">
            <span className="text-maroon uppercase tracking-[0.3em] text-xs md:text-sm font-bold opacity-80">Est. Odisha, India</span>
            <div className="h-px w-12 bg-maroon/60"></div>
          </div>

          <h1 className="font-serif text-maroon mb-8 max-w-full">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-2">
              Layers of Joy
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
              in <span className="italic font-light">Every Bite</span>
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
        <div className="absolute bottom-16 md:-bottom-32 lg:-bottom-40 left-0 w-full z-20 overflow-hidden">
          <img
            src="/Boita Illustration 1.png"
            alt="Boita Illustration"
            className="w-full h-auto object-cover object-center scale-110 sm:scale-105 md:scale-100"
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
      <section id="about" className="py-24 px-4 sm:px-6 md:px-8 bg-maroon text-beige relative overflow-hidden pt-32 md:pt-40 lg:pt-48 w-full">
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

      {/* 3. MENU SECTION */}
      <section
        id="menu"
        className="py-24 px-4 sm:px-6 md:px-8 bg-beige text-maroon relative overflow-hidden w-full"

      >
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-4">Our Menu</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Discover our handcrafted collection of authentic Odia delicacies, each made with traditional recipes and premium ingredients.
            </p>
          </div>

          <div className="space-y-16 mb-16">
            {MENU_ITEMS.map((item, index) => (
              <div key={item.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                <div className="md:w-1/2 flex justify-center">
                  <img src={item.image} alt={item.name} className="w-48 h-48 md:w-64 md:h-64 object-contain" />
                </div>
                <div className={`md:w-1/2 text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row md:justify-between' : 'md:flex-row-reverse md:justify-between'} md:items-start mb-4`}>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold mb-2 md:mb-0">{item.name}</h3>
                    <div className="flex flex-col items-center md:items-end">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl md:text-3xl font-bold text-gold">₹{item.discountedPrice}</span>
                        <span className="text-lg text-maroon/60 line-through">₹{item.originalPrice}</span>
                      </div>
                      <span className="text-sm text-maroon/70">({item.weight})</span>
                    </div>
                  </div>
                  <p className="text-maroon/80 text-lg leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="group bg-maroon text-beige border border-maroon px-6 py-3 text-sm uppercase tracking-widest font-bold hover:bg-maroon-dark transition-all duration-300 flex items-center gap-2 shadow-lg mx-auto md:mx-0"
                  >
                    <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-maroon text-beige px-10 py-4 text-sm uppercase tracking-widest font-bold hover:bg-maroon-dark transition-all duration-300 shadow-xl">
              View Full Menu
            </button>
          </div>
        </div>


      </section>

      {/* 4. CHENNA PIE CATEGORY */}
      <div
        id="chenna"
        className="relative overflow-hidden md:overflow-visible"
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
        <img src="/Chenna Pie.png" alt="Chenna Pie" className="absolute top-2 left-2 w-20 h-20 md:-top-16 md:-left-16 md:w-96 md:h-96 object-contain opacity-100 z-10 transition-all duration-500 ease-out hover:scale-110" style={{ transform: `translate(${chennaMousePos.x * 70 + chennaScrollOffset * 50}px, ${chennaMousePos.y * 60 + chennaScrollOffset * -30}px) rotate(${-15 + chennaScrollOffset * 10}deg)` }} />

        {/* Left Bottom Corner - BIGGEST & TILTED */}
        <img src="/Chenna Pie 2.png" alt="Chenna Pie" className="absolute bottom-2 left-2 w-20 h-20 md:-bottom-16 md:-left-16 md:w-96 md:h-96 object-contain opacity-100 z-10 transition-all duration-500 ease-out hover:scale-110" style={{ transform: `translate(${chennaMousePos.x * -55 + chennaScrollOffset * -40}px, ${chennaMousePos.y * -65 + chennaScrollOffset * 60}px) rotate(${25 + chennaScrollOffset * -15}deg)` }} />

        {/* Right Top Corner - BIGGEST & TILTED */}
        <img src="/Chenna Pie.png" alt="Chenna Pie" className="absolute top-2 right-2 w-20 h-20 md:-top-16 md:-right-16 md:w-96 md:h-96 object-contain opacity-100 z-10 transition-all duration-500 ease-out hover:scale-110" style={{ transform: `translate(${chennaMousePos.x * -75 + chennaScrollOffset * -50}px, ${chennaMousePos.y * 68 + chennaScrollOffset * -40}px) rotate(${18 + chennaScrollOffset * 12}deg)` }} />

        {/* Right Bottom Corner - BIGGEST & TILTED */}
        <img src="/Chenna Pie 2.png" alt="Chenna Pie" className="absolute bottom-2 right-2 w-24 h-24 md:-bottom-16 md:-right-16 md:w-[28rem] md:h-[28rem] object-contain opacity-100 z-10 transition-all duration-500 ease-out hover:scale-110" style={{ transform: `translate(${chennaMousePos.x * 85 + chennaScrollOffset * 60}px, ${chennaMousePos.y * -72 + chennaScrollOffset * 70}px) rotate(${-22 + chennaScrollOffset * -18}deg)` }} />

        {/* Near "C" in Chenna Pie title - left side */}
        <img src="/Chenna Pie.png" alt="Chenna Pie" className="absolute top-1/3 left-[15%] w-14 h-14 md:w-32 md:h-32 object-contain opacity-100 z-10 hidden sm:block transition-all duration-500 ease-out hover:scale-110" style={{ transform: `translate(${chennaMousePos.x * 50 + chennaScrollOffset * 30}px, ${chennaMousePos.y * 45 + chennaScrollOffset * -20}px) rotate(${chennaScrollOffset * 8}deg)` }} />

        {/* Near "flavors." in subtitle - right bottom of text */}
        <img src="/Chenna Pie 2.png" alt="Chenna Pie" className="absolute top-2/3 right-[15%] w-16 h-16 md:w-36 md:h-36 object-contain opacity-100 z-10 hidden sm:block transition-all duration-500 ease-out hover:scale-110" style={{ transform: `translate(${chennaMousePos.x * -62 + chennaScrollOffset * -35}px, ${chennaMousePos.y * -58 + chennaScrollOffset * 45}px) rotate(${chennaScrollOffset * -10}deg)` }} />
      </div>

      {/* 5. CHENNA PIE SHOWCASE */}
      <ScrollShowcase products={CHENNA_VARIANTS} bgColor="bg-beige" textColor="text-maroon" />

      {/* 6. KHAJA BITES CATEGORY */}
      <div
        id="khaja"
        className="relative overflow-hidden md:overflow-visible"
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
        <img src="/khaja.png" alt="Khaja" className="absolute top-2 left-2 w-20 h-20 md:-top-16 md:-left-16 md:w-96 md:h-96 object-contain opacity-100 z-10 transition-all duration-500 ease-out hover:scale-110" style={{ transform: `translate(${khajaMousePos.x * 70 + khajaScrollOffset * 50}px, ${khajaMousePos.y * 60 + khajaScrollOffset * -30}px) rotate(${-15 + khajaScrollOffset * 10}deg)` }} />

        {/* Left Bottom Corner - BIGGEST & TILTED */}
        <img src="/khaja.png" alt="Khaja" className="absolute bottom-2 left-2 w-20 h-20 md:-bottom-16 md:-left-16 md:w-96 md:h-96 object-contain opacity-100 z-10 transition-all duration-500 ease-out hover:scale-110" style={{ transform: `translate(${khajaMousePos.x * -55 + khajaScrollOffset * -40}px, ${khajaMousePos.y * -65 + khajaScrollOffset * 60}px) rotate(${25 + khajaScrollOffset * -15}deg)` }} />

        {/* Right Top Corner - BIGGEST & TILTED */}
        <img src="/khaja.png" alt="Khaja" className="absolute top-2 right-2 w-20 h-20 md:-top-16 md:-right-16 md:w-96 md:h-96 object-contain opacity-100 z-10 transition-all duration-500 ease-out hover:scale-110" style={{ transform: `translate(${khajaMousePos.x * -75 + khajaScrollOffset * -50}px, ${khajaMousePos.y * 68 + khajaScrollOffset * -40}px) rotate(${18 + khajaScrollOffset * 12}deg)` }} />

        {/* Right Bottom Corner - BIGGEST & TILTED */}
        <img src="/khaja.png" alt="Khaja" className="absolute bottom-2 right-2 w-24 h-24 md:-bottom-16 md:-right-16 md:w-[28rem] md:h-[28rem] object-contain opacity-100 z-10 transition-all duration-500 ease-out hover:scale-110" style={{ transform: `translate(${khajaMousePos.x * 85 + khajaScrollOffset * 60}px, ${khajaMousePos.y * -72 + khajaScrollOffset * 70}px) rotate(${-22 + khajaScrollOffset * -18}deg)` }} />

        {/* Near "K" in Khaja Bites title - left side, moved up */}
        <img src="/khaja.png" alt="Khaja" className="absolute top-1/3 left-[15%] w-14 h-14 md:w-32 md:h-32 object-contain opacity-100 z-10 hidden sm:block transition-all duration-500 ease-out hover:scale-110" style={{ transform: `translate(${khajaMousePos.x * 50 + khajaScrollOffset * 30}px, ${khajaMousePos.y * 45 + khajaScrollOffset * -20}px) rotate(${khajaScrollOffset * 8}deg)` }} />

        {/* Near "Odia." in subtitle - right bottom of text, shifted more right */}
        <img src="/khaja.png" alt="Khaja" className="absolute top-2/3 right-[15%] w-16 h-16 md:w-36 md:h-36 object-contain opacity-100 z-10 hidden sm:block transition-all duration-500 ease-out hover:scale-110" style={{ transform: `translate(${khajaMousePos.x * -62 + khajaScrollOffset * -35}px, ${khajaMousePos.y * -58 + khajaScrollOffset * 45}px) rotate(${khajaScrollOffset * -10}deg)` }} />
      </div>

      {/* 7. KHAJA BITES SHOWCASE */}
      <ScrollShowcase products={KHAJA_VARIANTS} bgColor="bg-beige" textColor="text-maroon" />

      {/* 8. UPCOMING PRODUCTS */}
      <section className="py-32 bg-gold text-maroon px-8 relative overflow-hidden">
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

      {/* 9. FOOTER */}
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
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Bhubaneswar, Odisha</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Component */}
      <Cart />
      
      {/* Mobile Cart Bar */}
      <MobileCartBar />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;
