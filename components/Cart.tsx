import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { state, removeItem, updateQuantity, closeCart, getTotalItems, getTotalPrice } = useCart();

  const generateWhatsAppMessage = () => {
    const items = state.items.map(item => 
      `${item.name} (${item.weight}) - Qty: ${item.quantity} - ₹${item.price * item.quantity}`
    ).join('\n');
    
    const total = getTotalPrice();
    const message = `Hello! I'd like to order the following items from Boitas:\n\n${items}\n\nTotal: ₹${total}\n\nPlease let me know the delivery details and payment process.`;
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/919778708100?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!state.isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={closeCart}
      />
      
      {/* Cart Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-beige shadow-2xl z-50 transform transition-transform md:max-w-md">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-maroon/20 pt-20 md:pt-6">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-maroon" />
              <h2 className="text-xl font-serif font-bold text-maroon">Your Cart</h2>
              {getTotalItems() > 0 && (
                <span className="bg-maroon text-beige text-xs px-2 py-1 rounded-full">
                  {getTotalItems()}
                </span>
              )}
            </div>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-maroon/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-maroon" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-maroon/30 mx-auto mb-4" />
                <p className="text-maroon/60 text-lg">Your cart is empty</p>
                <p className="text-maroon/40 text-sm mt-2">Add some delicious items to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm border border-maroon/10">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="font-serif font-bold text-maroon text-lg">{item.name}</h3>
                        <p className="text-maroon/60 text-sm">{item.weight}</p>
                        <p className="text-gold font-bold text-lg">₹{item.price}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 hover:bg-red-100 rounded-full transition-colors"
                      >
                        <X className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-maroon/10 rounded-full transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4 text-maroon" />
                        </button>
                        <span className="font-bold text-maroon min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-maroon/10 rounded-full transition-colors"
                        >
                          <Plus className="w-4 h-4 text-maroon" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-maroon">₹{item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t border-maroon/20 p-6 bg-white">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-serif font-bold text-maroon">Total:</span>
                <span className="text-2xl font-bold text-gold">₹{getTotalPrice()}</span>
              </div>
              
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382z"/>
                </svg>
                Order via WhatsApp
              </button>
              
              <p className="text-xs text-maroon/60 text-center mt-2">
                You'll be redirected to WhatsApp to complete your order
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;