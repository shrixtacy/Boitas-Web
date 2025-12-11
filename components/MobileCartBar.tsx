import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const MobileCartBar: React.FC = () => {
  const { getTotalItems, getTotalPrice, openCart } = useCart();
  const totalItems = getTotalItems();

  // Only show on mobile and when there are items
  if (totalItems === 0) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-maroon text-beige p-4 shadow-2xl border-t-2 border-gold">
      <button
        onClick={openCart}
        className="w-full flex items-center justify-between bg-maroon hover:bg-maroon-dark transition-colors rounded-lg p-4 border border-beige/20"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-gold text-maroon text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems > 99 ? '99+' : totalItems}
            </span>
          </div>
          <div className="text-left">
            <p className="text-sm font-medium">
              {totalItems} item{totalItems > 1 ? 's' : ''} in cart
            </p>
            <p className="text-xs opacity-80">Tap to view cart</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-lg font-bold text-gold">₹{getTotalPrice()}</p>
            <p className="text-xs opacity-80">Total</p>
          </div>
          <ArrowRight className="w-5 h-5" />
        </div>
      </button>
    </div>
  );
};

export default MobileCartBar;