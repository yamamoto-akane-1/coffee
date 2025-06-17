'use client';

import Link from 'next/link';
import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();

  const handleProductsClick = () => {
    router.push('/#products');
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">N coffee</h3>
          <p className="text-gray-400">最高の一杯を、あなたの日常に</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FiInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FiFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FiTwitter size={24} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">ショップ</h3>
          <ul>
            <li>
              <button
                onClick={handleProductsClick}
                className="text-gray-400 hover:text-white"
              >
                商品一覧
              </button>
            </li>
            <li>
              <Link href="/favorites" className="text-gray-400 hover:text-white">
                お気に入り
              </Link>
            </li>
            <li>
              <Link href="/cart" className="text-gray-400 hover:text-white">
                カート
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">会社情報</h3>
          <ul>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white">
                ブランドについて
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-gray-400 hover:text-white">
                利用規約
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
          <ul>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                お問い合わせフォーム
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-gray-400 hover:text-white">
                よくある質問
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="text-gray-400 hover:text-white">
                配送について
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500">
        &copy; 2025 N coffee. All rights reserved.
      </div>
    </footer>
  );
} 