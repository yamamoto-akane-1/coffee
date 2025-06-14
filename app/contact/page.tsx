'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここにフォーム送信の処理を追加
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen pt-20 bg-coffee-800">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">お問い合わせ</h1>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                お名前 <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-coffee-700 text-white border border-coffee-600 focus:outline-none focus:border-coffee-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2">
                メールアドレス <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-coffee-700 text-white border border-coffee-600 focus:outline-none focus:border-coffee-400"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-white mb-2">
                お問い合わせ内容 <span className="text-red-400">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-coffee-700 text-white border border-coffee-600 focus:outline-none focus:border-coffee-400"
              >
                <option value="">選択してください</option>
                <option value="product">商品について</option>
                <option value="order">ご注文について</option>
                <option value="shipping">配送について</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-2">
                メッセージ <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 rounded bg-coffee-700 text-white border border-coffee-600 focus:outline-none focus:border-coffee-400"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-coffee-600 text-white rounded hover:bg-coffee-500 transition-colors"
              >
                送信する
              </button>
            </div>
          </form>

          <div className="mt-12 text-white">
            <h2 className="text-xl font-bold mb-4">お問い合わせに関する注意事項</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>お問い合わせの内容によっては、回答までにお時間をいただく場合がございます。</li>
              <li>営業時間外のお問い合わせは、翌営業日以降の対応となります。</li>
              <li>お急ぎの場合は、お電話でのお問い合わせをお願いいたします。</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 