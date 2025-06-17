export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  averageRating: number;
  totalReviews: number;
  category?: string;
  details: {
    [key: string]: string | number | string[] | { [key: string]: number } | undefined;
  };
  story?: string;
}; 