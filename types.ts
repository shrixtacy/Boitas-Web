export interface ProductVariant {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  image: string;
  originalPrice: number;
  discountedPrice: number;
  weight: string;
  category: 'khaja' | 'chenna';
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  weight: string;
  category: 'khaja' | 'chenna';
}

export interface ProductShowcaseProps {
  products: ProductVariant[];
  categoryName: string;
}

export interface UpcomingProduct {
  name: string;
  type: string;
}