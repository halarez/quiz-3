import React, { useState } from 'react';
import './Shop.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  badge?: string;
  rating: number;
}

export const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products: Product[] = [
    { id: 1, name: 'Premium Leather Bag', price: 149.99, image: 'https://via.placeholder.com/250?text=Bag+1', badge: 'new', rating: 5 },
    { id: 2, name: 'Classic Watch', price: 199.99, image: 'https://via.placeholder.com/250?text=Watch+1', badge: 'sale', rating: 5 },
    { id: 3, name: 'Designer Sunglasses', price: 129.99, image: 'https://via.placeholder.com/250?text=Sunglasses+1', rating: 4 },
    { id: 4, name: 'Elegant Scarf', price: 79.99, image: 'https://via.placeholder.com/250?text=Scarf+1', rating: 4 },
    { id: 5, name: 'Premium Shoes', price: 189.99, image: 'https://via.placeholder.com/250?text=Shoes+1', badge: 'hot', rating: 5 },
    { id: 6, name: 'Luxury Belt', price: 99.99, image: 'https://via.placeholder.com/250?text=Belt+1', rating: 4 },
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: 6 },
    { id: 'bags', name: 'Bags', count: 2 },
    { id: 'accessories', name: 'Accessories', count: 4 },
  ];

  return (
    <div className="shop-container">
      <div className="shop-banner">
        <div className="banner-content">
          <p className="banner-eyebrow">New Collection</p>
          <h1 className="banner-title">Shop Our Latest <em>Products</em></h1>
          <p className="banner-description">Discover our curated collection of premium items</p>
        </div>
      </div>

      <div className="shop-body">
        {/* Sidebar */}
        <aside className="shop-sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">Categories</h3>
            <ul className="sidebar-links">
              {categories.map((cat) => (
                <li key={cat.id} className={selectedCategory === cat.id ? 'active' : ''}>
                  <button onClick={() => setSelectedCategory(cat.id)}>
                    <span>{cat.name}</span>
                    <span className="sidebar-count">{cat.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="shop-main">
          <div className="sec-divider">
            <h2>Featured <em>Products</em></h2>
            <div className="div-line"></div>
            <span className="div-count">{products.length} items</span>
          </div>

          <div className="shop-grid">
            {products.map((product) => (
              <div key={product.id} className="shop-card">
                <div className="card-img-wrap">
                  {product.badge && (
                    <span className={`badge badge-${product.badge}`}>
                      {product.badge}
                    </span>
                  )}
                  <button className="wish-btn">♡</button>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="card-body">
                  <div className="stars">{'★'.repeat(product.rating)}</div>
                  <h3 className="card-name">{product.name}</h3>
                  <div className="card-price">${product.price}</div>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
