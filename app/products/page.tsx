'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { useFavorites } from '../context/FavoritesContext';

// 商品データ
const products = [
  {
    id: 1,
    name: 'エチオピア イルガチェフェ',
    description: 'フルーティーな香りと柑橘系の酸味が特徴のエチオピア産コーヒーです。',
    price: 1200,
    image: '/images/coffee1.jpg',
    category: 'coffee'
  },
  {
    id: 2,
    name: 'グアテマラ アンティグア',
    description: 'チョコレートのような甘みとバランスの取れた味わいのグアテマラ産コーヒーです。',
    price: 1300,
    image: '/images/coffee2.jpg',
    category: 'coffee'
  },
  {
    id: 3,
    name: 'コロンビア スプレモ',
    description: 'ナッツのような香りとまろやかな味わいのコロンビア産コーヒーです。',
    price: 1100,
    image: '/images/coffee3.jpg',
    category: 'coffee'
  },
  {
    id: 4,
    name: 'ドリップセット',
    description: 'コーヒーを美味しく淹れるための基本セットです。',
    price: 3500,
    image: '/images/coffee4.jpg',
    category: 'equipment'
  },
  {
    id: 5,
    name: 'タンブラー',
    description: '保温性の高いステンレスタンブラーです。',
    price: 2800,
    image: '/images/coffee5.jpg',
    category: 'tumbler'
  },
  {
    id: 6,
    name: 'ギフトセット',
    description: 'コーヒー豆とドリッパーのセットです。',
    price: 4500,
    image: '/images/coffee6.jpg',
    category: 'gift'
  }
];

const categories = [
  { id: 'all', name: 'すべて' },
  { id: 'coffee', name: 'コーヒー豆' },
  { id: 'equipment', name: '器具' },
  { id: 'tumbler', name: 'タンブラー' },
  { id: 'gift', name: 'ギフト' }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">商品一覧</h1>

      {/* カテゴリーフィルター */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category.id
                ? 'bg-coffee-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* 商品グリッド */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold">¥{product.price}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      if (isFavorite(product.id)) {
                        removeFromFavorites(product.id);
                      } else {
                        addToFavorites(product);
                      }
                    }}
                    className="text-coffee-600 hover:text-coffee-700"
                  >
                    <FiHeart className={isFavorite(product.id) ? 'fill-current' : ''} />
                  </button>
                  <Link
                    href={`/products/${product.id}`}
                    className="bg-coffee-600 text-white px-4 py-2 rounded hover:bg-coffee-700"
                  >
                    詳細を見る
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 