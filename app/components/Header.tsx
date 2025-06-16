'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiShoppingCart, FiHeart, FiMenu, FiX } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-coffee-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-white">
            N coffee
          </Link>

          {/* デスクトップメニュー */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#products" className="text-white hover:text-coffee-200 transition-colors">
              商品一覧
            </Link>
            <Link href="/about" className="text-white hover:text-coffee-200 transition-colors">
              会社概要
            </Link>
            <Link href="/contact" className="text-white hover:text-coffee-200 transition-colors">
              お問い合わせ
            </Link>
          </nav>

          {/* デスクトップのお気に入りとカート */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/favorites" className="text-white hover:text-coffee-200 transition-colors">
              <FiHeart className="w-6 h-6" />
            </Link>
            <Link href="/cart" className="relative text-white hover:text-coffee-200 transition-colors">
              <FiShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg transform scale-100 hover:scale-110 transition-transform">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link href="/favorites" className="text-white">
              <FiHeart className="w-6 h-6" />
            </Link>
            <Link href="/cart" className="relative text-white">
              <FiShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg transform scale-100 hover:scale-110 transition-transform">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/#products"
                className="text-white hover:text-coffee-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                商品一覧
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-coffee-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                会社概要
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-coffee-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
} 