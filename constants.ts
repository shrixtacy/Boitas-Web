import { ProductVariant, UpcomingProduct } from './types';

export const CHENNA_VARIANTS: ProductVariant[] = [
  {
    id: 'cp-01',
    name: 'Chocolate Chenna Pie',
    description: 'A decadent fusion of Swiss chocolate and traditional Chenna Poda. Baked to caramelized perfection.',
    ingredients: ['Fresh Chenna', 'Cocoa Solids', 'Sugar', 'Cardamom'],
    image: '/Chocolate Chenna Pie.png',
    originalPrice: 59,
    discountedPrice: 49,
    weight: '100g',
    category: 'chenna'
  },
  {
    id: 'cp-02',
    name: 'Dry Fruits & Jaggery Chenna Pie',
    description: 'Earthy sweetness of organic jaggery combined with the crunch of premium cashews and almonds.',
    ingredients: ['Organic Jaggery', 'Cashews', 'Almonds', 'Ghee'],
    image: '/Fruit & Nut chenna pie.png',
    originalPrice: 59,
    discountedPrice: 49,
    weight: '100g',
    category: 'chenna'
  },
  {
    id: 'cp-03',
    name: 'Classic Chenna Pie',
    description: 'Traditional chenna pie with the authentic taste of Odisha. Pure, simple, and delicious.',
    ingredients: ['Fresh Chenna', 'Sugar', 'Cardamom', 'Ghee'],
    image: '/Chenna Pie.png',
    originalPrice: 59,
    discountedPrice: 49,
    weight: '100g',
    category: 'chenna'
  }
];

export const KHAJA_VARIANTS: ProductVariant[] = [
  {
    id: 'kb-01',
    name: 'Masala Khaja Bites',
    description: 'The classic layered crispiness with a spicy twist. Perfect for tea-time snacking.',
    ingredients: ['Wheat Flour', 'Cumin', 'Chili Flakes', 'Ghee'],
    image: '/khaja.png',
    originalPrice: 149,
    discountedPrice: 99,
    weight: '200g',
    category: 'khaja'
  },
  {
    id: 'kb-02',
    name: 'Salted Khaja Bites',
    description: 'Simple, pure, and lightly salted to highlight the delicate layers of artisan pastry.',
    ingredients: ['Refined Flour', 'Sea Salt', 'Clarified Butter'],
    image: '/Salted Khaja.png',
    originalPrice: 119,
    discountedPrice: 79,
    weight: '200g',
    category: 'khaja'
  },
  {
    id: 'kb-03',
    name: 'Sweetened Khaja Bites',
    description: 'Glazed with a thin syrup coating, retaining the crunch while delivering a burst of sweetness.',
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