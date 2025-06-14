'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
            alt="コーヒーショップ"
            fill
            priority
            quality={100}
            className="object-cover"
            style={{
              objectPosition: 'center',
              width: '100%',
              height: '100%'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              N coffee
            </h1>
            <p className="text-2xl md:text-3xl mb-10 font-light">
              最高の一杯を、あなたの日常に
            </p>
            <Link
              href="/products"
              className="inline-block bg-white text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-coffee-100 transition-all duration-300 transform hover:scale-105"
            >
              商品を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-12">N coffeeの特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-coffee-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">厳選された豆</h3>
              <p className="text-gray-600">世界中の農園から厳選された最高品質の豆を使用</p>
            </div>
            <div className="text-center">
              <div className="bg-coffee-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">丁寧な焙煎</h3>
              <p className="text-gray-600">熟練した焙煎職人による丁寧な焙煎</p>
            </div>
            <div className="text-center">
              <div className="bg-coffee-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">環境への配慮</h3>
              <p className="text-gray-600">持続可能な農業と環境に配慮した包装</p>
            </div>
          </div>
        </div>
      </section>

      {/* 商品一覧セクション */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-12">商品一覧</h2>
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
      </section>

      {/* ブランドストーリーセクション */}
      <section className="py-20 bg-coffee-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-coffee-800 mb-6">ブランドストーリー</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                N coffeeは、2020年に小さな焙煎所から始まりました。私たちの使命は、最高品質のコーヒーを、より多くの人々の日常に届けることです。
              </p>
              <Link
                href="/about"
                className="inline-block bg-coffee-800 text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-coffee-700 transition-colors"
              >
                詳しく見る
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1541167760496-1628856ab772"
                alt="焙煎の様子"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* フッターはlayout.tsxで定義されているため、ここでは含めない */}
    </main>
  );
}
