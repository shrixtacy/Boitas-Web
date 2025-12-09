import { ProductVariant, UpcomingProduct } from './types';

export const CHENNA_VARIANTS: ProductVariant[] = [
  {
    id: 'cp-01',
    name: 'Chocolate Chenna Pie',
    description: 'A decadent fusion of Swiss chocolate and traditional Chenna Poda. Baked to caramelized perfection.',
    ingredients: ['Fresh Chenna', 'Cocoa Solids', 'Sugar', 'Cardamom'],
    image: 'https://picsum.photos/id/431/800/1000' // Coffee/Chocolate tones
  },
  {
    id: 'cp-02',
    name: 'Dry Fruits & Jaggery',
    description: 'Earthy sweetness of organic jaggery combined with the crunch of premium cashews and almonds.',
    ingredients: ['Organic Jaggery', 'Cashews', 'Almonds', 'Ghee'],
    image: 'https://picsum.photos/id/1080/800/1000' // Warm tones
  },
  {
    id: 'cp-03',
    name: 'Almond Chenna Pie',
    description: 'Subtle, nutty, and sophisticated. Infused with almond milk and topped with toasted almond slivers.',
    ingredients: ['Almond Flour', 'Saffron', 'Condensed Milk'],
    image: 'https://picsum.photos/id/292/800/1000' // Light food tones
  }
];

export const KHAJA_VARIANTS: ProductVariant[] = [
  {
    id: 'kb-01',
    name: 'Masala Khaja Bites',
    description: 'The classic layered crispiness with a spicy twist. Perfect for tea-time snacking.',
    ingredients: ['Wheat Flour', 'Cumin', 'Chili Flakes', 'Ghee'],
    image: 'https://picsum.photos/id/225/800/1000' // Savory look
  },
  {
    id: 'kb-02',
    name: 'Salted Khaja Bites',
    description: 'Simple, pure, and lightly salted to highlight the delicate layers of artisan pastry.',
    ingredients: ['Refined Flour', 'Sea Salt', 'Clarified Butter'],
    image: 'https://picsum.photos/id/312/800/1000' // Pastry look
  },
  {
    id: 'kb-03',
    name: 'Sweetened Khaja Bites',
    description: 'Glazed with a thin syrup coating, retaining the crunch while delivering a burst of sweetness.',
    ingredients: ['Sugar Syrup', 'Cardamom', 'Refined Flour'],
    image: 'https://picsum.photos/id/493/800/1000' // Sweet look
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