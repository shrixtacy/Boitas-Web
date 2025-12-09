export interface ProductVariant {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  image: string;
}

export interface ProductShowcaseProps {
  products: ProductVariant[];
  categoryName: string;
}

export interface UpcomingProduct {
  name: string;
  type: string;
}