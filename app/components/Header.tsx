'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiShoppingCart, FiHeart, FiMenu, FiX } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { totalFavorites } = useFavorites();

  return (
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
            <Link href="/favorites" className="text-white hover:text-gray-300 relative">
              <FiHeart size={20} />
              {totalFavorites > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                  {totalFavorites}
                </span>
              )}
            </Link>
            <Link href="/cart" className="text-white hover:text-gray-300 relative">
              <FiShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 