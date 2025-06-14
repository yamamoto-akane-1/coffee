"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import Link from 'next/link';

// 仮の商品データ
const products = {
  "coffee-beans": {
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
    reviews: [
      {
        id: 1,
        user: "田中さん",
        rating: 5,
        comment: "とても香りが良く、酸味と甘みのバランスが絶妙です。",
        date: "2024-03-15"
      },
      {
        id: 2,
        user: "佐藤さん",
        rating: 4,
        comment: "毎朝のコーヒーが楽しみになりました。",
        date: "2024-03-10"
      }
    ],
    averageRating: 4.5,
    totalReviews: 2
  },
  "coffee-beans-2": {
    id: "coffee-beans-2",
    name: "グアテマラ アンティグア",
    description: "チョコレートのような深い甘みと、ナッツの風味が特徴のグアテマラ産コーヒー豆です。",
    price: 2000,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
    details: [
      "産地：グアテマラ アンティグア",
      "品種：ブルボン",
      "精製方法：ウォッシュド",
      "焙煎度：ミディアムダーク",
      "味わい：チョコレート、ナッツ、キャラメル",
    ],
    reviews: [
      {
        id: 1,
        user: "鈴木さん",
        rating: 5,
        comment: "チョコレートのような甘みが最高です。",
        date: "2024-03-14"
      }
    ],
    averageRating: 5,
    totalReviews: 1
  },
  "coffee-beans-3": {
    id: "coffee-beans-3",
    name: "コロンビア スプレモ",
    description: "バランスの取れた味わいと、クリーンな後味が特徴のコロンビア産コーヒー豆です。",
    price: 1900,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    details: [
      "産地：コロンビア スプレモ",
      "品種：カトゥーラ",
      "精製方法：ウォッシュド",
      "焙煎度：ミディアム",
      "味わい：バランスの取れた酸味、ナッツ、キャラメル",
    ],
    reviews: [
      {
        id: 1,
        user: "高橋さん",
        rating: 4,
        comment: "毎日飲んでも飽きない味わいです。",
        date: "2024-03-13"
      }
    ],
    averageRating: 4,
    totalReviews: 1
  },
  "coffee-beans-4": {
    id: "coffee-beans-4",
    name: "ケニア AA",
    description: "ベリーのような甘酸っぱい味わいと、ワインのような複雑な風味が特徴のケニア産コーヒー豆です。",
    price: 2200,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    details: [
      "産地：ケニア AA",
      "品種：SL28, SL34",
      "精製方法：ウォッシュド",
      "焙煎度：ミディアム",
      "味わい：ベリー、ワイン、柑橘系の酸味",
    ],
    reviews: [
      {
        id: 1,
        user: "山田さん",
        rating: 5,
        comment: "複雑な風味が素晴らしいです。",
        date: "2024-03-12"
      }
    ],
    averageRating: 5,
    totalReviews: 1
  },
  "drip-equipment": {
    id: "drip-equipment",
    name: "セラミックドリッパー",
    description: "職人の手作業で作られた、使いやすさと美しさを兼ね備えたセラミックドリッパーです。",
    price: 3500,
    image: "/images/about/doriper.jpg",
    details: [
      "素材：セラミック",
      "サイズ：直径12cm × 高さ8cm",
      "容量：1-2人分",
      "特徴：保温性が高く、コーヒーの風味を引き立てます",
      "手入れ：食器洗い機対応",
    ],
    reviews: [
      {
        id: 1,
        user: "鈴木さん",
        rating: 5,
        comment: "使いやすく、見た目も美しいです。",
        date: "2024-03-12"
      }
    ],
    averageRating: 5,
    totalReviews: 1
  },
  "tumbler": {
    id: "tumbler",
    name: "ステンレスタンブラー",
    description: "保温性が高く、持ち運びに便利なステンレスタンブラーです。",
    price: 2800,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    details: [
      "素材：ステンレススチール",
      "容量：350ml",
      "保温時間：6時間（熱い飲み物）",
      "保冷時間：12時間（冷たい飲み物）",
      "特徴：真空断熱構造、スリップ防止加工",
    ],
    reviews: [
      {
        id: 1,
        user: "高橋さん",
        rating: 5,
        comment: "保温性が素晴らしく、デザインもおしゃれです。",
        date: "2024-03-14"
      },
      {
        id: 2,
        user: "伊藤さん",
        rating: 4,
        comment: "持ち運びやすく、漏れもありません。",
        date: "2024-03-08"
      }
    ],
    averageRating: 4.5,
    totalReviews: 2
  },
  "gift-set": {
    id: "gift-set",
    name: "プレミアムギフトセット",
    description: "特別な日の贈り物に最適な、コーヒー豆とドリップ用品のセットです。",
    price: 5800,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    details: [
      "内容：コーヒー豆（200g）、セラミックドリッパー、フィルター（20枚）",
      "パッケージ：高級感のある木箱入り",
      "ギフトカード付属",
      "ラッピング対応可能",
      "送料無料",
    ],
    reviews: [
      {
        id: 1,
        user: "山田さん",
        rating: 5,
        comment: "贈り物として喜ばれました。パッケージも素敵です。",
        date: "2024-03-13"
      }
    ],
    averageRating: 5,
    totalReviews: 1
  }
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    // ローカルストレージからお気に入り状態を取得
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(params.id));
  }, [params.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const newFavorites = isFavorite
      ? favorites.filter((id: string) => id !== params.id)
      : [...favorites, params.id];
    
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = () => {
    if (!product) return;
    
    setIsAddingToCart(true);
    
    // 選択した数量分だけカートに追加
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }

    // アニメーションのための遅延
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 500);
  };

  const product = products[params.id as keyof typeof products];

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-coffee-800 mb-4">商品が見つかりません</h1>
          <Link 
            href="/products" 
            className="inline-block bg-coffee-600 hover:bg-coffee-700 text-white px-6 py-2 rounded-full transition-colors"
          >
            商品一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 商品画像 */}
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* 商品情報 */}
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold text-coffee-900">{product.name}</h1>
            <button
              onClick={toggleFavorite}
              className={`p-2 rounded-full ${
                isFavorite ? "text-red-500" : "text-gray-400"
              } hover:text-red-500 transition-colors`}
            >
              <FiHeart size={24} className={isFavorite ? "fill-current" : ""} />
            </button>
          </div>

          {/* 評価 */}
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`h-5 w-5 ${
                    star <= Math.round(product.averageRating)
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
            <span className="text-gray-600">
              {product.averageRating} ({product.totalReviews}件のレビュー)
            </span>
          </div>

          <p className="text-gray-600 text-lg">{product.description}</p>
          <div className="text-2xl font-bold text-coffee-800">
            ¥{product.price.toLocaleString()}
          </div>

          {/* 数量選択 */}
          <div className="flex items-center space-x-4">
            <label htmlFor="quantity" className="text-gray-700">数量:</label>
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 text-center border-x py-1"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* 商品詳細 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-coffee-800">商品詳細</h2>
            <ul className="space-y-2">
              {product.details.map((detail, index) => (
                <li key={index} className="text-gray-600">
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          {/* 購入ボタン */}
          <button
            onClick={handleAddToCart}
            disabled={isAddingToCart}
            className={`w-full bg-coffee-600 hover:bg-coffee-700 text-white py-4 rounded-lg text-lg font-bold transition-all duration-300 cursor-pointer transform ${
              isAddingToCart ? 'scale-95 bg-coffee-700' : 'hover:scale-105'
            }`}
          >
            {isAddingToCart ? '追加中...' : 'カートに追加'}
          </button>
        </div>
      </div>

      {/* レビューセクション */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-coffee-800 mb-8">レビュー</h2>
        <div className="space-y-8">
          {product.reviews.map((review) => (
            <div key={review.id} className="border-b pb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="font-bold">{review.user}</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`h-4 w-4 ${
                          star <= review.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 