import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import Header from "./components/Header";

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
          <FavoritesProvider>
            <Header />
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
                    <li><a href="/products" className="text-gray-400 hover:text-white">商品一覧</a></li>
                    <li><a href="/favorites" className="text-gray-400 hover:text-white">お気に入り</a></li>
                    <li><a href="/cart" className="text-gray-400 hover:text-white">カート</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">会社情報</h3>
                  <ul>
                    <li><a href="/about" className="text-gray-400 hover:text-white">ブランドについて</a></li>
                    <li><a href="/privacy" className="text-gray-400 hover:text-white">プライバシーポリシー</a></li>
                    <li><a href="/terms" className="text-gray-400 hover:text-white">利用規約</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
                  <ul>
                    <li><a href="/contact" className="text-gray-400 hover:text-white">お問い合わせフォーム</a></li>
                    <li><a href="/faq" className="text-gray-400 hover:text-white">よくある質問</a></li>
                    <li><a href="/shipping" className="text-gray-400 hover:text-white">配送について</a></li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-8 text-gray-500">
                &copy; 2025 N coffee. All rights reserved.
              </div>
            </footer>
          </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  );
}
