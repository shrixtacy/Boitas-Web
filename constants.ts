import { ProductVariant, UpcomingProduct } from './types';

export const CHENNA_VARIANTS: ProductVariant[] = [
  {
    id: 'cp-chocolate',
    name: 'Chocolate Chenna Pie',
    description: 'Rich, decadent chenna pie infused with premium cocoa and dark chocolate. A modern twist on the traditional recipe that melts in your mouth with every bite.',
    ingredients: ['Fresh Chenna', 'Cocoa Solids', 'Sugar', 'Cardamom'],
    image: '/Chocolate Chenna Pie.png',
    originalPrice: 59,
    discountedPrice: 49,
    weight: '100g',
    category: 'chenna'
  },
  {
    id: 'cp-fruit-nut',
    name: 'Dry Fruit & Jaggery Chenna Pie',
    description: 'Traditional chenna pie sweetened with organic jaggery and loaded with premium dry fruits including almonds, cashews, and pistachios for a rich, wholesome experience.',
    ingredients: ['Organic Jaggery', 'Cashews', 'Almonds', 'Ghee'],
    image: '/Fruit & Nut chenna pie.png',
    originalPrice: 59,
    discountedPrice: 49,
    weight: '100g',
    category: 'chenna'
  }
];

export const KHAJA_VARIANTS: ProductVariant[] = [
  {
    id: 'kb-masala',
    name: 'Masala Khaja Bites',
    description: 'Spiced khaja bites with a blend of traditional Indian spices including cumin, coriander, and chaat masala. A bold, flavorful experience that awakens your taste buds.',
    ingredients: ['Wheat Flour', 'Cumin', 'Chili Flakes', 'Ghee'],
    image: '/khaja.png',
    originalPrice: 149,
    discountedPrice: 99,
    weight: '200g',
    category: 'khaja'
  },
  {
    id: 'kb-salted',
    name: 'Salted Khaja Bites',
    description: 'Crispy, flaky khaja with a hint of sea salt. A unique savory twist on the classic sweet that\'s perfect for tea time and evening snacks.',
    ingredients: ['Refined Flour', 'Sea Salt', 'Clarified Butter'],
    image: '/Salted Khaja.png',
    originalPrice: 119,
    discountedPrice: 79,
    weight: '200g',
    category: 'khaja'
  },
  {
    id: 'kb-sweet',
    name: 'Sweetened Khaja Bites',
    description: 'Classic khaja bites with extra sweetness from jaggery and cardamom. The traditional favorite that brings back childhood memories and family celebrations.',
    ingredients: ['Sugar Syrup', 'Cardamom', 'Refined Flour'],
    image: '/khaja.png',
    originalPrice: 129,
    discountedPrice: 89,
    weight: '200g',
    category: 'khaja'
  }
];

export const UPCOMING_PRODUCTS: UpcomingProduct[] = [
  {
    name: 'Moa Snack Bar',
    type: 'Energy Bar'
  },
  {
    name: 'Arisa Chews',
    type: 'Soft Candy'
  }
];

// Combined menu items for the main menu section
export const MENU_ITEMS = [
  ...CHENNA_VARIANTS,
  ...KHAJA_VARIANTS
];