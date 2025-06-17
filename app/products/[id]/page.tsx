"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { useCart } from "@/app/context/CartContext";
import Link from 'next/link';
import { useFavorites } from '../../context/FavoritesContext';
import { useRouter } from 'next/navigation';
import { FiShoppingCart } from 'react-icons/fi';
import { Product } from "@/app/types";

// 商品データ
const products = [
  {
    id: "ethiopia",
    name: "エチオピア イルガチェフェ",
    price: 1800,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    description: "柑橘系の爽やかな酸味と花のような香りが特徴のエチオピア産コーヒー。",
    averageRating: 4.8,
    totalReviews: 128,
    category: "coffee-beans",
    details: "産地：エチオピア イルガチェフェ\n精製方法：ウォッシュド\n焙煎度：中煎り\n豆の種類：アラビカ種",
    story: "エチオピアの高地で栽培されるイルガチェフェは、その独特な風味から「コーヒーのシャンパン」とも呼ばれています。"
  },
  {
    id: "colombia",
    name: "コロンビア スプレモ",
    price: 1600,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    description: "バランスの取れた味わいとナッツのような香りが特徴のコロンビア産コーヒー。",
    averageRating: 4.5,
    totalReviews: 95,
    category: "coffee-beans",
    details: "産地：コロンビア スプレモ\n精製方法：ウォッシュド\n焙煎度：中煎り\n豆の種類：アラビカ種",
    story: "コロンビアの標高1,200m以上の高地で栽培されるスプレモは、その品質の高さから特別な等級として扱われています。"
  },
  {
    id: "brazil",
    name: "ブラジル サントス",
    price: 1400,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    description: "まろやかな甘みとチョコレートのような風味が特徴のブラジル産コーヒー。",
    averageRating: 4.3,
    totalReviews: 87,
    category: "coffee-beans",
    details: "産地：ブラジル サントス\n精製方法：ナチュラル\n焙煎度：中深煎り\n豆の種類：アラビカ種",
    story: "ブラジルの主要な輸出港であるサントス港から出荷される高品質なコーヒー豆です。"
  },
  {
    id: "guatemala",
    name: "グアテマラ アンティグア",
    price: 1700,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    description: "チョコレートのような深い味わいとスパイシーな香りが特徴のグアテマラ産コーヒー。",
    averageRating: 4.6,
    totalReviews: 76,
    category: "coffee-beans",
    details: "産地：グアテマラ アンティグア\n精製方法：ウォッシュド\n焙煎度：中深煎り\n豆の種類：アラビカ種",
    story: "グアテマラのアンティグア地方は、火山性の肥沃な土壌と適度な降雨量により、高品質なコーヒー豆の産地として知られています。"
  },
  {
    id: "ceramic-dripper",
    name: "セラミックドリッパー",
    price: 3500,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    description: "熱伝導性が良く、安定した抽出が可能なセラミック製のドリッパー。",
    averageRating: 4.7,
    totalReviews: 156,
    category: "drip-equipment",
    details: "素材：セラミック\nサイズ：直径12cm\n重量：350g\n耐熱温度：120℃",
    story: "職人の手作業で一つ一つ丁寧に作られるセラミックドリッパーは、その美しさと機能性から多くのコーヒー愛好家に愛されています。"
  },
  {
    id: "paper-filter",
    name: "ペーパーフィルター",
    price: 500,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    description: "微細な粒子を除去し、クリーンな味わいを実現する高品質なペーパーフィルター。",
    averageRating: 4.5,
    totalReviews: 289,
    category: "drip-equipment",
    details: "サイズ：2号\n枚数：100枚入り\n素材：漂白なしパルプ\n適合ドリッパー：2号サイズ",
    story: "環境に配慮した無漂白のパルプを使用し、コーヒーの風味を最大限に引き出します。"
  },
  {
    id: "coffee-scoop",
    name: "コーヒースプーン",
    price: 800,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    description: "正確な計量が可能なステンレス製のコーヒースプーン。",
    averageRating: 4.3,
    totalReviews: 178,
    category: "drip-equipment",
    details: "素材：ステンレススチール\n容量：10g\n全長：20cm\n重量：50g",
    story: "使いやすさと耐久性を兼ね備えた、プロフェッショナル仕様のコーヒースプーンです。"
  },
  {
    id: "coffee-scale",
    name: "コーヒースケール",
    price: 4500,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    description: "0.1g単位での正確な計量が可能なデジタルスケール。",
    averageRating: 4.8,
    totalReviews: 245,
    category: "drip-equipment",
    details: "最大計量：2kg\n最小表示：0.1g\n電源：単3形乾電池2本\nサイズ：15×15×3cm",
    story: "コーヒー抽出の再現性を高めるために開発された、高精度なデジタルスケールです。"
  },
  {
    id: "stainless-tumbler",
    name: "ステンレスタンブラー",
    price: 2800,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    description: "保温・保冷効果が高く、持ち運びに便利なステンレスタンブラー。",
    averageRating: 4.6,
    totalReviews: 234,
    category: "tumblers",
    details: "容量：350ml\n素材：ステンレススチール\n保温時間：6時間\n保冷時間：12時間",
    story: "職人の手作業で一つ一つ丁寧に作られるステンレスタンブラーは、その美しさと機能性から多くのコーヒー愛好家に愛されています。"
  },
  {
    id: "ceramic-tumbler",
    name: "セラミックタンブラー",
    price: 3200,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    description: "コーヒーの風味を最大限に引き出すセラミックタンブラー。",
    averageRating: 4.4,
    totalReviews: 189,
    category: "tumblers",
    details: "容量：300ml\n素材：セラミック\n耐熱温度：120℃\n重量：350g",
    story: "職人の手作業で一つ一つ丁寧に作られるセラミックタンブラーは、その美しさと機能性から多くのコーヒー愛好家に愛されています。"
  },
  {
    id: "glass-tumbler",
    name: "ガラスタンブラー",
    price: 1800,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    description: "コーヒーの色と香りを楽しめる透明なガラスタンブラー。",
    averageRating: 4.2,
    totalReviews: 156,
    category: "tumblers",
    details: "容量：250ml\n素材：耐熱ガラス\n耐熱温度：100℃\n重量：200g",
    story: "職人の手作業で一つ一つ丁寧に作られるガラスタンブラーは、その美しさと機能性から多くのコーヒー愛好家に愛されています。"
  },
  {
    id: "bamboo-tumbler",
    name: "竹製タンブラー",
    price: 2500,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    description: "環境に優しい竹素材を使用したタンブラー。",
    averageRating: 4.5,
    totalReviews: 167,
    category: "tumblers",
    details: "容量：280ml\n素材：竹\n耐熱温度：80℃\n重量：180g",
    story: "職人の手作業で一つ一つ丁寧に作られる竹製タンブラーは、その美しさと機能性から多くのコーヒー愛好家に愛されています。"
  },
  {
    id: "beginner-set",
    name: "コーヒー初心者セット",
    price: 5800,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    description: "コーヒーを始める方に最適な、必要な道具が揃ったセット。",
    averageRating: 4.7,
    totalReviews: 189,
    category: "gift-sets",
    details: "内容：\n・セラミックドリッパー\n・ペーパーフィルター（100枚）\n・コーヒースプーン\n・コーヒー豆（200g）",
    story: "コーヒーを始める方のために、必要な道具を厳選してセットにしました。"
  },
  {
    id: "premium-set",
    name: "プレミアムギフトセット",
    price: 9800,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    description: "高品質なコーヒー器具と豆が揃った、特別なギフトセット。",
    averageRating: 4.9,
    totalReviews: 156,
    category: "gift-sets",
    details: "内容：\n・セラミックドリッパー\n・ステンレスタンブラー\n・コーヒースケール\n・プレミアムコーヒー豆（300g）",
    story: "特別な方への贈り物として、高品質なコーヒー器具と豆をセットにしました。"
  },
  {
    id: "enthusiast-set",
    name: "コーヒー愛好家セット",
    price: 7800,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    description: "コーヒーをより深く楽しむための、本格的なセット。",
    averageRating: 4.8,
    totalReviews: 167,
    category: "gift-sets",
    details: "内容：\n・セラミックドリッパー\n・コーヒーミル\n・コーヒースケール\n・スペシャルティコーヒー豆（250g）",
    story: "コーヒーをより深く楽しむために、本格的な器具をセットにしました。"
  },
  {
    id: "office-set",
    name: "オフィスギフトセット",
    price: 6800,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    description: "オフィスでのコーヒー時間をより楽しむためのセット。",
    averageRating: 4.6,
    totalReviews: 145,
    category: "gift-sets",
    details: "内容：\n・セラミックドリッパー\n・ステンレスタンブラー\n・ペーパーフィルター（50枚）\n・オフィスブレンドコーヒー豆（300g）",
    story: "オフィスでのコーヒー時間をより楽しむために、必要な道具をセットにしました。"
  }
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [mounted, setMounted] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    setMounted(true);
    const foundProduct = products.find((p) => p.id === params.id);
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
        <p>商品が見つかりませんでした。</p>
        <Link
          href="/products"
          className="mt-4 inline-block bg-coffee-600 text-white px-6 py-2 rounded hover:bg-coffee-700"
        >
          商品一覧に戻る
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 pt-24 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              onClick={() => handleToggleFavorite(product.id)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  isFavorite(product.id)
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
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < product.averageRating
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
              <span className="text-gray-600 ml-2">
                ({product.totalReviews}件のレビュー)
              </span>
            </div>
            <div className="mb-8">
              <span className="text-3xl font-bold">
                ¥{product.price.toLocaleString()}
              </span>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                カートに追加
              </button>
              <Link
                href="/products"
                className="block w-full text-center bg-gray-100 text-gray-800 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                商品一覧に戻る
              </Link>
            </div>
            {product.details && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">商品詳細</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="whitespace-pre-wrap text-gray-600">
                    {product.details}
                  </pre>
                </div>
              </div>
            )}
            {product.story && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">商品ストーリー</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">{product.story}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 