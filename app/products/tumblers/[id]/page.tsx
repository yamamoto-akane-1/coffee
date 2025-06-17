"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/app/context/CartContext";
import { useFavorites } from "@/app/context/FavoritesContext";
import { Product } from "@/app/types";
import { products } from "../page";

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [mounted, setMounted] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    setMounted(true);
    const foundProduct = products.find((p) => p.id === params.id);
    setProduct(foundProduct || null);
  }, [params.id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (!mounted || !product) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">商品が見つかりませんでした</h2>
            <p className="mt-4 text-gray-600">
              <Link href="/products/tumblers" className="text-blue-600 hover:text-blue-500">
                商品一覧に戻る
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* 商品画像 */}
          <div className="lg:max-w-lg lg:self-end">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* 商品情報 */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>
              <button
                onClick={() => toggleFavorite(product.id)}
                className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <svg
                  className={`h-6 w-6 ${isFavorite(product.id) ? "text-red-500" : "text-gray-400"}`}
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

            <div className="mt-3">
              <h2 className="sr-only">商品情報</h2>
              <p className="text-3xl text-gray-900">{product.price.toLocaleString()}円</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">商品説明</h3>
              <div className="text-base text-gray-700 space-y-6">
                <p>{product.description}</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <svg
                      key={rating}
                      className={`h-5 w-5 flex-shrink-0 ${
                        product.averageRating > rating ? "text-yellow-400" : "text-gray-200"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="ml-3 text-sm text-gray-700">
                  {product.averageRating.toFixed(1)} ({product.totalReviews}件のレビュー)
                </p>
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                カートに追加
              </button>
            </div>

            {/* 商品詳細 */}
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">商品詳細</h3>
              <div className="mt-4 prose prose-sm text-gray-500">
                <ul className="list-disc pl-5 space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 商品ストーリー */}
            {product.story && (
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">商品ストーリー</h3>
                <div className="mt-4 prose prose-sm text-gray-500">
                  <p>{product.story}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 