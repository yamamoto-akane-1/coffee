"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';
import { useFavorites } from '@/app/context/FavoritesContext';
import { Product } from "@/app/types";

export const products: Product[] = [
  {
    id: "beginner-set",
    name: "コーヒー初心者セット",
    description: "コーヒーを始める方に最適な、必要な道具が揃ったセットです。",
    price: 5800,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    category: "gift-set",
    details: [
      "セラミックドリッパー",
      "ペーパーフィルター（100枚）",
      "コーヒースプーン",
      "コーヒー豆（200g）",
      "取扱説明書付き"
    ],
    story: "コーヒーを始める方のために、必要な道具を厳選してセットにしました。初心者でも簡単に美味しいコーヒーを淹れることができます。",
    averageRating: 4.9,
    totalReviews: 234
  },
  {
    id: "premium-set",
    name: "プレミアムコーヒーセット",
    description: "本格的なコーヒーを楽しむための、高品質な道具が揃ったセットです。",
    price: 12800,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    category: "gift-set",
    details: [
      "セラミックドリッパー",
      "ステンレスフィルター",
      "コーヒースケール",
      "コーヒーミル",
      "プレミアムコーヒー豆（500g）"
    ],
    story: "本格的なコーヒーを楽しむための、高品質な道具をセットにしました。プロのバリスタも使用する道具で、最高の一杯を淹れることができます。",
    averageRating: 4.8,
    totalReviews: 189
  },
  {
    id: "travel-set",
    name: "トラベルコーヒーセット",
    description: "旅先でも美味しいコーヒーを楽しめる、コンパクトなセットです。",
    price: 7800,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    category: "gift-set",
    details: [
      "折りたたみドリッパー",
      "ステンレスタンブラー",
      "コーヒースプーン",
      "コーヒー豆（100g）",
      "収納ポーチ付き"
    ],
    story: "旅先でも美味しいコーヒーを楽しめるように、コンパクトにまとめたセットです。持ち運びに便利なサイズで、どこでも本格的なコーヒーを淹れることができます。",
    averageRating: 4.7,
    totalReviews: 156
  }
];

export default function GiftSetsPage() {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-3xl font-bold text-center mb-8">ギフトセット</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
              <button
                onClick={() => toggleFavorite(item.id)}
                className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${
                    isFavorite(item.id)
                      ? "text-red-500 fill-current"
                      : "text-gray-400"
                  }`}
                  fill="none"
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
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`h-4 w-4 ${
                        star <= Math.round(item.averageRating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {item.averageRating} ({item.totalReviews}件のレビュー)
                </span>
              </div>
              <div className="text-xl font-bold mb-4">¥{item.price.toLocaleString()}</div>
              <div className="space-y-2">
                <Link
                  href={`/products/gift-sets/${item.id}`}
                  className="block w-full bg-coffee-600 hover:bg-coffee-700 text-white text-center py-2 rounded-lg transition-colors"
                >
                  商品詳細を見る
                </Link>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg transition-colors"
                >
                  カートに追加
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 