'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/about/roasting.jpg"
            alt="焙煎の様子"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            quality={100}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">N coffeeについて</h1>
            <p className="text-lg md:text-xl">最高の一杯を、あなたの日常に</p>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 py-16">
        {/* ブランドストーリー */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-8">ブランドストーリー</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                N coffeeは、2020年に小さな焙煎所から始まりました。私たちの使命は、最高品質のコーヒーを、より多くの人々の日常に届けることです。
              </p>
              <p className="text-gray-700 leading-relaxed">
                世界中の厳選された農園から直接仕入れた豆を、熟練した焙煎職人が丁寧に焙煎。その香りと味わいを最大限に引き出すことで、特別な一杯をお届けしています。
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/about/roasting.jpg"
                alt="焙煎の様子"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* こだわり */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-8">私たちのこだわり</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-coffee-50 p-6 rounded-lg">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">厳選された豆</h3>
              <p className="text-gray-700">
                世界中の農園を直接訪問し、品質と持続可能性を重視した豆のみを厳選しています。
              </p>
            </div>
            <div className="bg-coffee-50 p-6 rounded-lg">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">丁寧な焙煎</h3>
              <p className="text-gray-700">
                豆の特性を最大限に引き出すため、一つ一つ丁寧に焙煎を行っています。
              </p>
            </div>
            <div className="bg-coffee-50 p-6 rounded-lg">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">環境への配慮</h3>
              <p className="text-gray-700">
                持続可能な農業を支援し、環境に配慮した包装材を使用しています。
              </p>
            </div>
          </div>
        </section>

        {/* メッセージ */}
        <section>
          <div className="bg-coffee-800 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">私たちの想い</h2>
            <p className="text-lg leading-relaxed">
              一杯のコーヒーには、農園での栽培から焙煎、抽出まで、多くの人々の想いが込められています。
              私たちは、その想いを大切にしながら、最高の一杯をあなたの日常に届け続けます。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 