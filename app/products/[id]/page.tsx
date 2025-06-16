"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { useCart } from "@/app/context/CartContext";
import Link from 'next/link';
import { useFavorites } from '../../context/FavoritesContext';
import { useRouter } from 'next/navigation';
import { FiShoppingCart } from 'react-icons/fi';

// 商品データ
const products = [
  {
    id: 1,
    name: 'エチオピア イルガチェフェ',
    description: '柑橘系の爽やかな酸味と、はちみつのような甘みが特徴的な、エチオピア産の高品質なコーヒー豆です。',
    price: 1800,
    image: '/images/coffee1.jpg',
    category: 'coffee',
    details: [
      '産地：エチオピア イルガチェフェ',
      '標高：1,800-2,200m',
      '精製方法：ウォッシュド',
      '品種：エチオピアンヘイロー',
      '焙煎度：中煎り',
      '味わい：柑橘系の酸味、はちみつの甘み、フローラルな香り'
    ],
    story: 'イルガチェフェは、エチオピア南部の標高の高い地域で栽培される高品質なコーヒー豆です。この地域の肥沃な土壌と適度な降雨量が、複雑で洗練された味わいを生み出しています。'
  },
  {
    id: 2,
    name: 'グアテマラ アンティグア',
    description: 'チョコレートのような深い甘みと、バランスの取れた酸味が特徴の、グアテマラ産のコーヒー豆です。',
    price: 2000,
    image: '/images/coffee2.jpg',
    category: 'coffee',
    details: [
      '産地：グアテマラ アンティグア',
      '標高：1,500-1,800m',
      '精製方法：ウォッシュド',
      '品種：ブルボン、カツアイ',
      '焙煎度：中深煎り',
      '味わい：チョコレート、キャラメル、ナッツ'
    ],
    story: 'アンティグアは、グアテマラの主要なコーヒー産地の一つです。火山性の肥沃な土壌と、昼夜の寒暖差が、豊かな風味と深いコクを生み出しています。'
  },
  {
    id: 3,
    name: 'コロンビア スプレモ',
    description: 'バランスの取れた味わいと、クリーンな後味が特徴の、コロンビア産の高品質なコーヒー豆です。',
    price: 1900,
    image: '/images/coffee3.jpg',
    category: 'coffee',
    details: [
      '産地：コロンビア スプレモ',
      '標高：1,200-1,800m',
      '精製方法：ウォッシュド',
      '品種：カツアイ',
      '焙煎度：中煎り',
      '味わい：ナッツ、キャラメル、柑橘系の酸味'
    ],
    story: 'コロンビアのスプレモは、最高品質のアラビカ種コーヒー豆として知られています。アンデス山脈の豊かな自然環境で育まれた、バランスの取れた味わいが特徴です。'
  },
  {
    id: 4,
    name: 'ケニア AA',
    description: 'ベリーのような甘みと、ワインのような酸味が特徴の、ケニア産の高品質なコーヒー豆です。',
    price: 2200,
    image: '/images/coffee4.jpg',
    category: 'coffee',
    details: [
      '産地：ケニア AA',
      '標高：1,500-2,100m',
      '精製方法：ウォッシュド',
      '品種：SL28, SL34',
      '焙煎度：中煎り',
      '味わい：ベリー、ワイン、トマト'
    ],
    story: 'ケニアAAは、ケニアで生産される最高品質のコーヒー豆です。独特の精製方法と、標高の高い地域での栽培により、複雑で洗練された味わいを実現しています。'
  }
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { addItem } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const [isAdding, setIsAdding] = useState(false);
  const [isFavoriting, setIsFavoriting] = useState(false);

  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>商品が見つかりませんでした。</p>
        <button
          onClick={() => router.push('/products')}
          className="mt-4 bg-coffee-600 text-white px-6 py-2 rounded hover:bg-coffee-700"
        >
          商品一覧に戻る
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (isAdding) return;
    setIsAdding(true);
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });
    setTimeout(() => setIsAdding(false), 1000);
  };

  const handleToggleFavorite = () => {
    if (isFavoriting) return;
    setIsFavoriting(true);
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
    setTimeout(() => setIsFavoriting(false), 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <p className="text-2xl font-bold mb-6">¥{product.price}</p>
            <div className="flex space-x-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`flex items-center space-x-2 bg-coffee-600 text-white px-6 py-2 rounded hover:bg-coffee-700 transition-colors ${
                  isAdding ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <FiShoppingCart />
                <span>{isAdding ? '追加中...' : 'カートに追加'}</span>
              </button>
              <button
                onClick={handleToggleFavorite}
                disabled={isFavoriting}
                className={`flex items-center space-x-2 border border-coffee-600 text-coffee-600 px-6 py-2 rounded hover:bg-coffee-50 transition-colors ${
                  isFavoriting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <FiHeart className={isFavorite(product.id) ? 'fill-current' : ''} />
                <span>
                  {isFavoriting
                    ? '処理中...'
                    : isFavorite(product.id)
                    ? 'お気に入りから削除'
                    : 'お気に入りに追加'}
                </span>
              </button>
            </div>

            {/* 商品詳細 */}
            <div className="border-t pt-8">
              <h2 className="text-xl font-bold mb-4">商品詳細</h2>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-gray-600">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* ストーリー */}
            <div className="border-t pt-8 mt-8">
              <h2 className="text-xl font-bold mb-4">このコーヒーについて</h2>
              <p className="text-gray-600">{product.story}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 