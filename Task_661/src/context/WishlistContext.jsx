import { createContext, useContext, useMemo, useState } from 'react';
import products from '../data/products';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistIds, setWishlistIds] = useState([1, 3, 5]);

  const toggleWishlist = (productId) => {
    setWishlistIds((current) =>
      current.includes(productId) ? current.filter((id) => id !== productId) : [...current, productId]
    );
  };

  const wishlistProducts = useMemo(
    () => products.filter((product) => wishlistIds.includes(product.id)),
    [wishlistIds]
  );

  const value = useMemo(
    () => ({
      wishlistIds,
      wishlistProducts,
      toggleWishlist,
    }),
    [wishlistIds, wishlistProducts]
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }

  return context;
}
