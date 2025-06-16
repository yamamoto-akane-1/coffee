'use client';

import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: '1',
    name: 'エチオピア イルガチェフェ',
    description: '柑橘系の爽やかな酸味と、はちみつのような甘みが特徴的な、エチオピア産の高品質なコーヒー豆です。',
    price: 1500,
    image: '/images/ethiopia.jpg',
    category: 'coffee'
  },
  {
    id: '2',
    name: 'グアテマラ アンティグア',
    description: 'チョコレートのような深いコクと、バランスの取れた酸味が特徴の、グアテマラ産のコーヒー豆です。',
    price: 1600,
    image: '/images/guatemala.jpg',
    category: 'coffee'
  },
  {
    id: '3',
    name: 'コロンビア スプレモ',
    description: 'ナッツのような香りと、まろやかな甘みが特徴の、コロンビア産の高品質なコーヒー豆です。',
    price: 1400,
    image: '/images/colombia.jpg',
    category: 'coffee'
  },
  {
    id: '4',
    name: 'ドリップセット',
    description: '初心者でも美味しいコーヒーが淹れられる、必要な道具が揃ったセットです。',
    price: 5000,
    image: '/images/drip-set.jpg',
    category: 'equipment'
  },
  {
    id: '5',
    name: 'タンブラー',
    description: '保温性の高いステンレスタンブラー。持ち運びに便利なサイズです。',
    price: 3000,
    image: '/images/tumbler.jpg',
    category: 'tumbler'
  },
  {
    id: '6',
    name: 'ギフトセット',
    description: 'コーヒー豆とドリップセットがセットになった、贈り物にぴったりのギフトボックスです。',
    price: 8000,
    image: '/images/gift-set.jpg',
    category: 'gift'
  }
];

export default function ProductsPage() {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">商品一覧</h1>

      {/* カテゴリーフィルター */}
      <div className="mb-8">
        <div className="flex space-x-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded ${
              selectedCategory === 'all'
                ? 'bg-coffee-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            すべて
          </button>
          <button
            onClick={() => setSelectedCategory('coffee')}
            className={`px-4 py-2 rounded ${
              selectedCategory === 'coffee'
                ? 'bg-coffee-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            コーヒー豆
          </button>
          <button
            onClick={() => setSelectedCategory('equipment')}
            className={`px-4 py-2 rounded ${
              selectedCategory === 'equipment'
                ? 'bg-coffee-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            ドリップ用品
          </button>
          <button
            onClick={() => setSelectedCategory('tumbler')}
            className={`px-4 py-2 rounded ${
              selectedCategory === 'tumbler'
                ? 'bg-coffee-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            タンブラー
          </button>
          <button
            onClick={() => setSelectedCategory('gift')}
            className={`px-4 py-2 rounded ${
              selectedCategory === 'gift'
                ? 'bg-coffee-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            ギフトセット
          </button>
        </div>
      </div>

      {/* 商品グリッド */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold">¥{product.price}</p>
                <Link
                  href={`/products/${product.id}`}
                  className="bg-coffee-600 text-white px-4 py-2 rounded hover:bg-coffee-700"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 