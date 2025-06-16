'use client';

import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CartPage() {
  const router = useRouter();
  const { items, removeItem, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">カートが空です</h1>
        <button
          onClick={() => router.push('/products')}
          className="bg-coffee-600 text-white px-6 py-2 rounded hover:bg-coffee-700"
        >
          商品一覧に戻る
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">ショッピングカート</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* カートアイテム */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            {items.map(item => (
              <div key={item.id} className="flex items-center py-4 border-b last:border-b-0">
                <div className="w-24 h-24 relative flex-shrink-0">
                  <Image
                    src={item.image || '/images/placeholder.jpg'}
                    alt={item.name}
                    fill
                    className="object-cover rounded"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-600">¥{item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  削除
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 注文サマリー */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">注文サマリー</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>小計</span>
                <span>¥{total}</span>
              </div>
              <div className="flex justify-between">
                <span>送料</span>
                <span>¥0</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold">
                  <span>合計</span>
                  <span>¥{total}</span>
                </div>
              </div>
              <button
                onClick={() => router.push('/checkout')}
                className="w-full bg-coffee-600 text-white py-2 px-4 rounded-md hover:bg-coffee-700 transition-colors"
              >
                レジに進む
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 