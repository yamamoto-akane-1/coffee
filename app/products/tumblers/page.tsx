"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';
import { useFavorites } from '@/app/context/FavoritesContext';
import { Product } from "@/app/types";
import { tumblers } from '@/app/data/products';

export default function TumblersPage() {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  const handleToggleFavorite = (id: string) => {
    toggleFavorite(id);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">タンブラー</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tumblers.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg relative group">
            <div className="relative">
              <Link href={`/products/tumblers/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <button
                onClick={() => handleToggleFavorite(product.id)}
                className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-200"
              >
                <svg
                  className={`h-6 w-6 ${
                    isFavorite(product.id) ? "text-red-500" : "text-gray-400"
                  }`}
                  fill={isFavorite(product.id) ? "currentColor" : "none"}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
            <div className="p-4">
              <Link href={`/products/tumblers/${product.id}`}>
                <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors duration-200">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
              </Link>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">¥{product.price.toLocaleString()}</span>
                <div className="flex gap-2">
                  <Link
                    href={`/products/tumblers/${product.id}`}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-200"
                  >
                    詳細を見る
                  </Link>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                  >
                    カートに追加
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 