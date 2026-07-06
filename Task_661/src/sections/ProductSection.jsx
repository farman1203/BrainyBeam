import { useMemo, useState,useNavigate } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import { toast } from 'react-toastify';


function ProductSection() {
  const [cartCount, setCartCount] = useState(0);


  const featuredProducts = useMemo(() => products.slice(0, 10 ), []);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <section className="product-section container">
      <div className="section-header">
        <div>
          <p className="eyebrow">Featured Products</p>
          <h2>Discover a compact product showcase with cards, ratings, and wishlist support.</h2>
        </div>
        {/* <div className="product-section__counter">
          <FiShoppingCart />
          <span>{cartCount} added</span>
        </div> */}
      </div>

      <div className="product-grid">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
