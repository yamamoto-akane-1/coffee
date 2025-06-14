'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* ヒーローセクション */}
      <section className="hero">
        <div className="hero-image">
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
            alt="コーヒーショップ"
            fill
            priority
            quality={100}
            className="object-cover"
            style={{
              objectPosition: 'center',
            }}
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <h1>最高の一杯を、あなたに</h1>
          <p>厳選された豆から作る、心癒される一杯のコーヒー</p>
          <Link href="/products" className="button">
            商品を見る
          </Link>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="features">
        <div className="container">
          <h2>N coffeeの特徴</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <Image
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e"
                  alt="厳選された豆"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <h3>厳選された豆</h3>
              <p>世界中から厳選した最高品質のコーヒー豆を使用しています。</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Image
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
                  alt="こだわりの焙煎"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <h3>こだわりの焙煎</h3>
              <p>職人が丁寧に焙煎し、豆の個性を最大限に引き出します。</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Image
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd"
                  alt="新鮮な味わい"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <h3>新鮮な味わい</h3>
              <p>注文を受けてから焙煎するため、常に新鮮な味わいをお届けします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ商品セクション */}
      <section className="products">
        <div className="container">
          <h2>おすすめ商品</h2>
          <div className="product-grid">
            <div className="product-card">
              <div className="product-image">
                <Image
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e"
                  alt="エチオピア モカ"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
              <h3>エチオピア モカ</h3>
              <p>フルーティーな香りと甘みが特徴の高級豆</p>
              <Link href="/products/ethiopia-mocha" className="button">
                詳細を見る
              </Link>
            </div>
            <div className="product-card">
              <div className="product-image">
                <Image
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
                  alt="グアテマラ アンティグア"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
              <h3>グアテマラ アンティグア</h3>
              <p>チョコレートのような深い味わいが特徴</p>
              <Link href="/products/guatemala-antigua" className="button">
                詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
