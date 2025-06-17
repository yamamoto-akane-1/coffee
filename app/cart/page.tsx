'use client';

import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import Image from 'next/image';

export default function Cart() {
  const { items, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();

  const handleProductsClick = () => {
    router.push('/#products');
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">ショッピングカート</h1>
      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">カートに商品がありません</p>
          <button
            onClick={handleProductsClick}
            className="bg-coffee-600 text-white px-6 py-2 rounded-lg hover:bg-coffee-700 transition-colors"
          >
            商品一覧に戻る
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 py-4 border-b">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={item.image || '/images/placeholder.jpg'}
                    alt={item.name}
                    fill
                    className="object-cover rounded-lg"
                    sizes="96px"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-gray-600">¥{item.price.toLocaleString()}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 border rounded"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  削除
                </button>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h2 className="text-xl font-bold mb-4">注文概要</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>小計</span>
                <span>¥{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>送料</span>
                <span>¥0</span>
              </div>
              <div className="border-t pt-2 font-bold">
                <div className="flex justify-between">
                  <span>合計</span>
                  <span>¥{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => router.push('/checkout')}
              className="w-full bg-coffee-600 text-white py-3 rounded-lg hover:bg-coffee-700 transition-colors"
            >
              レジに進む
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 