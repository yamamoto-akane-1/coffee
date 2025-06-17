"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { useFavorites } from "@/app/context/FavoritesContext";
import { Product } from "@/app/types";
import { giftSets } from '@/app/data/products';

export default function GiftSetDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [mounted, setMounted] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    setMounted(true);
    const foundProduct = giftSets.find((p) => p.id === params.id);
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
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">商品が見つかりません</h1>
        <p className="text-gray-600">指定された商品は存在しません。</p>
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
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="text-2xl font-bold mb-6">¥{product.price.toLocaleString()}</div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">商品詳細</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              {Object.entries(product.details).map(([key, value]) => (
                <div key={key} className="mb-2">
                  <span className="font-semibold">{key}: </span>
                  {renderDetailValue(value)}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <button
              onClick={() => handleAddToCart(product)}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              カートに追加
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 