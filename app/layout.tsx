import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { CartProvider } from "./context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "N coffee",
  description: "最高の一杯を、あなたの日常に",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <CartProvider>
          <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-md">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-white">
                  N coffee
                </Link>
                <div className="flex items-center space-x-6">
                  <Link href="/products" className="text-white hover:text-gray-300">
                    商品一覧
                  </Link>
                  <Link href="/about" className="text-white hover:text-gray-300">
                    会社概要
                  </Link>
                  <Link href="/contact" className="text-white hover:text-gray-300">
                    お問い合わせ
                  </Link>
                  <Link href="/favorites" className="text-white hover:text-gray-300">
                    <FiHeart size={20} />
                  </Link>
                  <Link href="/cart" className="text-white hover:text-gray-300">
                    <FiShoppingCart size={20} />
                  </Link>
                </div>
              </div>
            </nav>
          </header>
          <main className="pt-20">
            {children}
          </main>
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">N coffee</h3>
                <p className="text-gray-400">最高の一杯を、あなたの日常に</p>
                <div className="flex space-x-4 mt-4">
                  {/* 仮のソーシャルアイコン */}
                  <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">ショップ</h3>
                <ul>
                  <li><Link href="/products" className="text-gray-400 hover:text-white">商品一覧</Link></li>
                  <li><Link href="/favorites" className="text-gray-400 hover:text-white">お気に入り</Link></li>
                  <li><Link href="/cart" className="text-gray-400 hover:text-white">カート</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">会社情報</h3>
                <ul>
                  <li><Link href="/about" className="text-gray-400 hover:text-white">ブランドについて</Link></li>
                  <li><Link href="/privacy" className="text-gray-400 hover:text-white">プライバシーポリシー</Link></li>
                  <li><Link href="/terms" className="text-gray-400 hover:text-white">利用規約</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
                <ul>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">お問い合わせフォーム</Link></li>
                  <li><Link href="/faq" className="text-gray-400 hover:text-white">よくある質問</Link></li>
                  <li><Link href="/shipping" className="text-gray-400 hover:text-white">配送について</Link></li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8 text-gray-500">
              &copy; 2025 N coffee. All rights reserved.
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
