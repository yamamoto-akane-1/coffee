'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-coffee-800 mb-8 text-center">商品一覧</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64">
            <Image
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e"
              alt="コーヒー豆"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <Link href="/products/coffee-beans" className="block">
              <h3 className="text-xl font-bold text-black mb-2 hover:text-blue-600 transition-colors">コーヒー豆</h3>
            </Link>
            <p className="text-gray-600">厳選された最高品質のコーヒー豆</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64">
            <Image
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd"
              alt="ドリップ用品"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <Link href="/products/drip-equipment" className="block">
              <h3 className="text-xl font-bold text-black mb-2 hover:text-blue-600 transition-colors">ドリップ用品</h3>
            </Link>
            <p className="text-gray-600">職人による手作りのドリップ用品</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64">
            <Image
              src="https://images.unsplash.com/photo-1602143407151-7111542de6e8"
              alt="タンブラー"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <Link href="/products/tumbler" className="block">
              <h3 className="text-xl font-bold text-black mb-2 hover:text-blue-600 transition-colors">タンブラー</h3>
            </Link>
            <p className="text-gray-600">保温性の高いステンレスタンブラー</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64">
            <Image
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
              alt="ギフトセット"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <Link href="/products/gift-set" className="block">
              <h3 className="text-xl font-bold text-black mb-2 hover:text-blue-600 transition-colors">ギフトセット</h3>
            </Link>
            <p className="text-gray-600">特別な日の贈り物に最適なセット</p>
          </div>
        </div>
      </div>
    </div>
  );
} 