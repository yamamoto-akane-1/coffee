'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const { favorites } = useFavorites();
  const { items } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalFavorites = favorites.length;

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <Link href="/" className="text-2xl font-bold text-coffee-800">
            Coffee Shop
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/products"
              className={`text-lg ${
                isActive('/products')
                  ? 'text-coffee-600 font-medium'
                  : 'text-gray-600 hover:text-coffee-600'
              }`}
            >
              商品一覧
            </Link>
            <Link
              href="/about"
              className={`text-lg ${
                isActive('/about')
                  ? 'text-coffee-600 font-medium'
                  : 'text-gray-600 hover:text-coffee-600'
              }`}
            >
              店舗情報
            </Link>
            <Link
              href="/contact"
              className={`text-lg ${
                isActive('/contact')
                  ? 'text-coffee-600 font-medium'
                  : 'text-gray-600 hover:text-coffee-600'
              }`}
            >
              お問い合わせ
            </Link>
          </nav>

          {/* アイコン */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/favorites" className="relative">
              <Heart className="w-6 h-6 text-gray-600 hover:text-coffee-600" />
              {totalFavorites > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg transform hover:scale-110 transition-transform">
                  {totalFavorites}
                </span>
              )}
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-coffee-600" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg transform hover:scale-110 transition-transform">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden text-gray-600 hover:text-coffee-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/products"
                className={`text-lg ${
                  isActive('/products')
                    ? 'text-coffee-600 font-medium'
                    : 'text-gray-600 hover:text-coffee-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                商品一覧
              </Link>
              <Link
                href="/about"
                className={`text-lg ${
                  isActive('/about')
                    ? 'text-coffee-600 font-medium'
                    : 'text-gray-600 hover:text-coffee-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                店舗情報
              </Link>
              <Link
                href="/contact"
                className={`text-lg ${
                  isActive('/contact')
                    ? 'text-coffee-600 font-medium'
                    : 'text-gray-600 hover:text-coffee-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
              <div className="flex items-center space-x-4 pt-4">
                <Link href="/favorites" className="relative" onClick={() => setIsMenuOpen(false)}>
                  <Heart className="w-6 h-6 text-gray-600 hover:text-coffee-600" />
                  {totalFavorites > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg transform hover:scale-110 transition-transform">
                      {totalFavorites}
                    </span>
                  )}
                </Link>
                <Link href="/cart" className="relative" onClick={() => setIsMenuOpen(false)}>
                  <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-coffee-600" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg transform hover:scale-110 transition-transform">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 