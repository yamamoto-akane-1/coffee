'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type FavoritesContextType = {
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  totalFavorites: number;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // ローカルストレージからお気に入りを読み込む
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error('Failed to parse favorites:', error);
        setFavorites([]);
      }
    }
  }, []);

  const addFavorite = (id: string) => {
    if (!isClient) return;
    setFavorites(prev => {
      const newFavorites = [...prev, id];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const removeFavorite = (id: string) => {
    if (!isClient) return;
    setFavorites(prev => {
      const newFavorites = prev.filter(favId => favId !== id);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const isFavorite = (id: string) => {
    return favorites.includes(id);
  };

  const totalFavorites = favorites.length;

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite, totalFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
} 