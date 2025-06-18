"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { useFavorites } from "@/app/context/FavoritesContext";
import { Product } from "@/app/types";
import { coffeeBeans } from '@/app/data/products';

export default function CoffeeBeanDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [mounted, setMounted] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    setMounted(true);
    const foundProduct = coffeeBeans.find((p) => p.id === params.id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [params.id]);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  const handleToggleFavorite = (id: string) => {
    toggleFavorite(id);
  };

  if (!mounted || !product) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            商品が見つかりません
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            指定された商品は存在しません。
          </p>
        </div>
      </div>
    );
  }

  const renderDetailValue = (value: string | number | string[] | { [key: string]: number } | undefined) => {
    if (value === undefined) return '';
    if (Array.isArray(value)) return value.join(', ');
    if (typeof value === 'object') return JSON.stringify(value);
    return String(value);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            商品詳細
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              <button
                onClick={() => handleToggleFavorite(product.id)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-200"
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
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <div className="text-2xl font-bold text-gray-900 mb-6">
                ¥{product.price.toLocaleString()}
              </div>
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-gray-900">商品詳細</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  {Object.entries(product.details).map(([key, value]) => (
                    <div key={key} className="mb-2">
                      <span className="font-semibold text-gray-900">{key}: </span>
                      <span className="text-gray-600">{renderDetailValue(value)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                カートに追加
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 