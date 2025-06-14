'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// 仮のお気に入り商品データ
const favoriteProducts = [
  {
    id: "coffee-beans",
    name: "エチオピア イルガチェフェ",
    price: 1800,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
  },
  {
    id: "drip-equipment",
    name: "セラミックドリッパー",
    price: 3500,
    image: "/images/about/doriper.jpg",
  }
];

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(favoriteProducts);

  const removeFavorite = (productId: string) => {
    setFavorites(favorites.filter(product => product.id !== productId));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-coffee-800 mb-8 text-center">お気に入り商品</h1>
      
      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">お気に入り商品はまだありません</p>
          <Link 
            href="/products" 
            className="inline-block bg-coffee-600 hover:bg-coffee-700 text-white px-6 py-2 rounded-full transition-colors"
          >
            商品を見る
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-xl font-bold text-black hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <button
                    onClick={() => removeFavorite(product.id)}
                    className="text-red-500 hover:text-red-600 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="text-xl font-bold text-black">
                  ¥{product.price.toLocaleString()}
                </div>
                <Link
                  href={`/products/${product.id}`}
                  className="inline-block bg-coffee-600 hover:bg-coffee-700 text-white px-6 py-2 rounded-full transition-colors"
                >
                  商品詳細を見る
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 