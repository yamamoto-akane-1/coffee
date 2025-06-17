'use client';

import { useRouter } from 'next/navigation';
import { useCart } from '@/app/context/CartContext';
import { useEffect } from 'react';

export default function CheckoutSuccess() {
  const router = useRouter();
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  const handleProductsClick = () => {
    router.push('/#products');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">ご注文ありがとうございます！</h1>
        <p className="text-gray-600 mb-8">
          ご注文が正常に処理されました。商品の準備が整い次第、発送いたします。
        </p>
        <button
          onClick={handleProductsClick}
          className="bg-coffee-600 text-white px-6 py-3 rounded-lg hover:bg-coffee-700 transition-colors"
        >
          商品一覧に戻る
        </button>
      </div>
    </div>
  );
} 