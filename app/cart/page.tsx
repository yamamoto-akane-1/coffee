'use client';

import { useCart } from '../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-coffee-800 mb-8">ショッピングカート</h1>
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">カートに商品がありません</p>
          <Link
            href="/products"
            className="inline-block bg-coffee-600 hover:bg-coffee-700 text-white px-6 py-2 rounded-full transition-colors"
          >
            商品を見る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-coffee-800 mb-8">ショッピングカート</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* カート内の商品一覧 */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
                <div className="relative w-24 h-24">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-grow">
                  <Link href={`/products/${item.id}`}>
                    <h3 className="font-bold text-black hover:text-blue-600 transition-colors">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-gray-600">¥{item.price.toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 border rounded hover:bg-gray-100 text-black"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-black">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 border rounded hover:bg-gray-100 text-black"
                  >
                    +
                  </button>
                </div>
                <div className="text-right">
                  <p className="font-bold text-black">
                    ¥{(item.price * item.quantity).toLocaleString()}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 text-sm"
                  >
                    削除
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 注文サマリー */}
        <div className="bg-white p-6 rounded-lg shadow h-fit">
          <h2 className="text-xl font-bold text-black mb-4">注文サマリー</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-black">
              <span>小計</span>
              <span>¥{totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-black">
              <span>送料</span>
              <span>¥0</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-bold text-black">
                <span>合計</span>
                <span>¥{totalPrice.toLocaleString()}</span>
              </div>
            </div>
            <button className="w-full bg-coffee-600 hover:bg-coffee-700 text-white py-3 rounded-full transition-colors">
              レジに進む
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 