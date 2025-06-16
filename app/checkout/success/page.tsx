'use client';

import { useRouter } from 'next/navigation';
import { FiCheckCircle } from 'react-icons/fi';

export default function CheckoutSuccessPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <FiCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-4">ご注文ありがとうございます</h1>
        <p className="text-gray-600 mb-8">
          ご注文が正常に完了しました。確認メールを送信しましたので、ご確認ください。
        </p>
        <button
          onClick={() => router.push('/products')}
          className="bg-coffee-600 text-white px-6 py-2 rounded hover:bg-coffee-700"
        >
          商品一覧に戻る
        </button>
      </div>
    </div>
  );
} 