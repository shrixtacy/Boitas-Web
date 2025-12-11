import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartButton: React.FC = () => {
  const { toggleCart, getTotalItems } = useCart();
  const totalItems = getTotalItems();

  // Only show cart button if there are items
  if (totalItems === 0) return null;

  return (
    <button
      onClick={toggleCart}
      className="relative p-2 md:p-2 hover:bg-maroon/10 rounded-full transition-colors group md:bg-transparent bg-maroon/10 md:border-0 border border-maroon/20"
    >
      <ShoppingBag className="w-6 h-6 text-maroon group-hover:text-maroon/80" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-maroon text-beige text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse md:animate-none">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </button>
  );
};

export default CartButton;