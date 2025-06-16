'use client';

import Image from 'next/image';
import Link from 'next/link';

// コーヒー豆の商品データ
const coffeeBeans = [
  {
    id: "coffee-beans",
    name: "エチオピア イルガチェフェ",
    description: "柑橘系の爽やかな酸味と、はちみつのような甘みが特徴のエチオピア産コーヒー豆です。",
    price: 1800,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
    details: [
      "産地：エチオピア イルガチェフェ",
      "品種：エチオピアンヘイロー",
      "精製方法：ウォッシュド",
      "焙煎度：ミディアム",
      "味わい：柑橘系の酸味、はちみつの甘み",
    ],
    averageRating: 4.5,
    totalReviews: 2
  },
  {
    id: "coffee-beans-2",
    name: "グアテマラ アンティグア",
    description: "チョコレートのような深い甘みと、ナッツの風味が特徴のグアテマラ産コーヒー豆です。",
    price: 2000,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
    details: [
      "産地：グアテマラ アンティグア",
      "品種：ブルボン",
      "精製方法：ウォッシュド",
      "焙煎度：ミディアムダーク",
      "味わい：チョコレート、ナッツ、キャラメル",
    ],
    averageRating: 5,
    totalReviews: 1
  },
  {
    id: "coffee-beans-3",
    name: "コロンビア スプレモ",
    description: "バランスの取れた味わいと、クリーンな後味が特徴のコロンビア産コーヒー豆です。",
    price: 1900,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
    details: [
      "産地：コロンビア スプレモ",
      "品種：カトゥーラ",
      "精製方法：ウォッシュド",
      "焙煎度：ミディアム",
      "味わい：バランスの取れた酸味、ナッツ、キャラメル",
    ],
    averageRating: 4,
    totalReviews: 1
  },
  {
    id: "coffee-beans-4",
    name: "ケニア AA",
    description: "ベリーのような甘酸っぱい味わいと、ワインのような複雑な風味が特徴のケニア産コーヒー豆です。",
    price: 2200,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
    details: [
      "産地：ケニア AA",
      "品種：SL28, SL34",
      "精製方法：ウォッシュド",
      "焙煎度：ミディアム",
      "味わい：ベリー、ワイン、柑橘系の酸味",
    ],
    averageRating: 5,
    totalReviews: 1
  }
];

export default function CoffeeBeansPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-coffee-800 mb-8 text-center">コーヒー豆一覧</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {coffeeBeans.map((bean) => (
          <div key={bean.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src={bean.image}
                alt={bean.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <Link href={`/products/coffee-beans/${bean.id}`} className="block">
                <h3 className="text-xl font-bold text-black mb-2 hover:text-blue-600 transition-colors">
                  {bean.name}
                </h3>
              </Link>
              <p className="text-gray-600 mb-4">{bean.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`h-4 w-4 ${
                          star <= Math.round(bean.averageRating)
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
                  <span className="text-gray-600 text-sm">
                    {bean.averageRating} ({bean.totalReviews}件)
                  </span>
                </div>
                <div className="text-xl font-bold text-black">
                  ¥{bean.price.toLocaleString()}
                </div>
              </div>
              <Link
                href={`/products/coffee-beans/${bean.id}`}
                className="mt-4 inline-block w-full bg-coffee-600 hover:bg-coffee-700 text-white text-center py-2 rounded-lg transition-colors"
              >
                商品詳細を見る
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 