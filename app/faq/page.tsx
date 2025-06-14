'use client';

import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

const faqItems: FAQItem[] = [
  {
    category: '商品について',
    question: 'コーヒー豆の賞味期限はどのくらいですか？',
    answer: '焙煎日から約2週間を賞味期限としております。ただし、未開封の状態で冷暗所に保管した場合、約1ヶ月程度は美味しくお飲みいただけます。'
  },
  {
    category: '商品について',
    question: 'コーヒー豆の保存方法を教えてください。',
    answer: '直射日光を避け、冷暗所で保管してください。また、密閉容器に入れて保存することで、より長く新鮮な状態を保つことができます。'
  },
  {
    category: '注文について',
    question: '注文から発送までどのくらいかかりますか？',
    answer: '通常、ご注文から2-3営業日以内に発送いたします。在庫状況や混雑状況により、発送が遅れる場合がございます。'
  },
  {
    category: '注文について',
    question: '支払い方法は何がありますか？',
    answer: 'クレジットカード決済、コンビニ決済、銀行振込に対応しております。'
  },
  {
    category: '配送について',
    question: '送料はいくらですか？',
    answer: '全国一律800円（税込）です。ただし、5,000円（税込）以上のご注文で送料無料となります。'
  },
  {
    category: '配送について',
    question: '配送業者はどこですか？',
    answer: 'ヤマト運輸にて配送いたします。'
  },
  {
    category: '返品・交換について',
    question: '商品の返品・交換は可能ですか？',
    answer: '商品到着後7日以内にご連絡いただいた場合に限り、返品・交換を承ります。ただし、お客様都合による返品の場合は、送料はお客様負担となります。'
  },
  {
    category: '返品・交換について',
    question: '不良品の場合はどうなりますか？',
    answer: '商品の品質に問題がある場合は、送料当社負担で交換させていただきます。到着後7日以内にご連絡ください。'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(faqItems.map(item => item.category))];

  const filteredItems = selectedCategory === 'all'
    ? faqItems
    : faqItems.filter(item => item.category === selectedCategory);

  return (
    <main className="min-h-screen pt-20 bg-coffee-800">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">よくある質問</h1>

        <div className="max-w-4xl mx-auto">
          {/* カテゴリーフィルター */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded ${
                  selectedCategory === category
                    ? 'bg-coffee-600 text-white'
                    : 'bg-coffee-700 text-white hover:bg-coffee-600'
                }`}
              >
                {category === 'all' ? 'すべて' : category}
              </button>
            ))}
          </div>

          {/* FAQリスト */}
          <div className="space-y-4">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="bg-coffee-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left text-white flex justify-between items-center hover:bg-coffee-600 transition-colors"
                >
                  <span className="font-medium">{item.question}</span>
                  <span className="text-2xl">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-coffee-800 text-white">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* お問い合わせ案内 */}
          <div className="mt-12 text-white text-center">
            <p className="mb-4">
              ご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-coffee-600 text-white rounded hover:bg-coffee-500 transition-colors"
            >
              お問い合わせフォームへ
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 