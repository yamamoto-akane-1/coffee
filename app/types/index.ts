export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  averageRating: number;
  totalReviews: number;
  category?: string;
  details: string[];
  story?: string;
}; 