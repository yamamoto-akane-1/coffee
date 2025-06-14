'use client';

import Link from 'next/link';

export default function Shipping() {
  return (
    <main className="min-h-screen pt-20 bg-coffee-800">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">配送について</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* 配送料金 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">配送料金</h2>
              <div className="bg-coffee-700 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-coffee-600 pb-4">
                    <span className="text-white">全国一律</span>
                    <span className="text-white font-bold">800円（税込）</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">5,000円（税込）以上のご注文</span>
                    <span className="text-white font-bold">送料無料</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 配送方法 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">配送方法</h2>
              <div className="bg-coffee-700 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-coffee-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-2">ヤマト運輸での配送</h3>
                      <p className="text-white">
                        商品はヤマト運輸にて配送いたします。商品の特性を考慮し、適切な梱包を行います。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-coffee-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-2">配送日時の指定</h3>
                      <p className="text-white">
                        ご注文時に配送日時の指定が可能です。ただし、指定可能な日時は配送業者の営業時間内となります。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-coffee-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-2">不在時の対応</h3>
                      <p className="text-white">
                        ご不在の場合は、不在票が投函されます。再配達のご依頼は、不在票に記載の方法でお願いいたします。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 配送期間 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">配送期間</h2>
              <div className="bg-coffee-700 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="border-b border-coffee-600 pb-4">
                    <h3 className="text-white font-bold mb-2">通常配送</h3>
                    <p className="text-white">
                      ご注文から2-3営業日以内に発送いたします。在庫状況や混雑状況により、発送が遅れる場合がございます。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">お急ぎ配送</h3>
                    <p className="text-white">
                      お急ぎの場合は、お問い合わせフォームよりご連絡ください。可能な限り対応させていただきます。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 配送エリア */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">配送エリア</h2>
              <div className="bg-coffee-700 rounded-lg p-6">
                <p className="text-white mb-4">
                  日本国内全域に配送いたします。ただし、以下の地域は配送に時間がかかる場合がございます：
                </p>
                <ul className="list-disc pl-6 text-white space-y-2">
                  <li>離島</li>
                  <li>山間部</li>
                  <li>一部の寒冷地</li>
                </ul>
              </div>
            </section>

            {/* 注意事項 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">注意事項</h2>
              <div className="bg-coffee-700 rounded-lg p-6">
                <ul className="list-disc pl-6 text-white space-y-2">
                  <li>天候や交通状況により、配送が遅れる場合がございます。</li>
                  <li>商品の特性上、高温多湿の環境での長時間の放置は避けてください。</li>
                  <li>配送中の商品の破損や紛失の場合は、当社が責任を持って対応いたします。</li>
                </ul>
              </div>
            </section>

            {/* お問い合わせ案内 */}
            <div className="text-center">
              <p className="text-white mb-4">
                配送に関するご不明な点がございましたら、お気軽にお問い合わせください。
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-coffee-600 text-white rounded hover:bg-coffee-500 transition-colors"
              >
                お問い合わせフォームへ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 