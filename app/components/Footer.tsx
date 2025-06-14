'use client';

import Link from 'next/link';
import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-coffee-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* ブランド情報 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">N coffee</h3>
            <p className="text-gray-300 mb-4">最高の一杯を、あなたの日常に</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FiInstagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FiTwitter className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FiFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* ショップ情報 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-coffee-50">ショップ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#products" className="text-coffee-200 hover:text-coffee-50 transition-colors">
                  商品一覧
                </Link>
              </li>
            </ul>
          </div>

          {/* 会社情報 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-coffee-50">会社情報</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-coffee-200 hover:text-coffee-50 transition-colors">
                  ブランドについて
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-coffee-200 hover:text-coffee-50 transition-colors">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-coffee-200 hover:text-coffee-50 transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
          
          {/* お問い合わせ */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-coffee-50">お問い合わせ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-coffee-200 hover:text-coffee-50 transition-colors">
                  お問い合わせフォーム
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-coffee-200 hover:text-coffee-50 transition-colors">
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-coffee-200 hover:text-coffee-50 transition-colors">
                  配送について
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* コピーライト */}
        <div className="border-t border-coffee-700 mt-8 pt-8 text-center text-coffee-200">
          <p>&copy; {new Date().getFullYear()} N coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 