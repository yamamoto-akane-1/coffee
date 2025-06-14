import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-coffee-800">
                N coffee
              </Link>
              <div className="space-x-6">
                <Link href="/products" className="text-coffee-800 hover:text-coffee-600">
                  商品一覧
                </Link>
                <Link href="/about" className="text-coffee-800 hover:text-coffee-600">
                  会社概要
                </Link>
                <Link href="/contact" className="text-coffee-800 hover:text-coffee-600">
                  お問い合わせ
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
