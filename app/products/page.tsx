'use client';

import { useCart } from '../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

const products: Product[] = [
  {
    id: '1',
    name: 'エチオピア イルガチェフェ',
    description: '柑橘系の爽やかな酸味と、はちみつのような甘みが特徴的なエチオピア産のコーヒーです。',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd',
    category: 'coffee-beans',
  },
  {
    id: '2',
    name: 'グアテマラ アンティグア',
    description: 'チョコレートのような深い甘みと、スパイシーな香りが特徴的なグアテマラ産のコーヒーです。',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd',
    category: 'coffee-beans',
  },
  {
    id: '3',
    name: 'コロンビア スプレモ',
    description: 'バランスの取れた味わいと、キャラメルのような甘みが特徴的なコロンビア産のコーヒーです。',
    price: 1600,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd',
    category: 'coffee-beans',
  },
];

export default function ProductsPage() {
  const { addItem } = useCart();
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1;
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
    });
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, newQuantity)
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">商品一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold mb-4">¥{product.price.toLocaleString()}</p>
              <div className="flex items-center gap-4 mb-4">
                <button
                  onClick={() => updateQuantity(product.id, (quantities[product.id] || 1) - 1)}
                  className="px-2 py-1 border rounded"
                >
                  -
                </button>
                <span>{quantities[product.id] || 1}</span>
                <button
                  onClick={() => updateQuantity(product.id, (quantities[product.id] || 1) + 1)}
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/products/${product.category}/${product.id}`}
                  className="flex-1 text-center bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
                >
                  詳細を見る
                </Link>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
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