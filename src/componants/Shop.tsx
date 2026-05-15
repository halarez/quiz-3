import React from 'react';
import './Shop.css';

export const Shop: React.FC = () => {
  const scrollSec = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const noop = () => {
    // placeholder for button interactions
  };

  return (
    <div className="shop-page">
      <div className="banner">
        <div>
          <div className="banner-eyebrow">New Season 2025</div>
          <h1 className="banner-h1">
            Curated Style<br />For Every Mood
          </h1>
          <p className="banner-sub">Explore our full collection — premium quality, unbeatable prices.</p>
        </div>
        <div className="banner-stat">
          <div>
            <div className="stat-num">500+</div>
            <div className="stat-label">Products</div>
          </div>
          <div>
            <div className="stat-num">40%</div>
            <div className="stat-label">Max Discount</div>
          </div>
          <div>
            <div className="stat-num">4.9★</div>
            <div className="stat-label">Avg Rating</div>
          </div>
        </div>
      </div>

      <div className="shop-body">
        <aside className="sidebar">
          <div className="sidebar-section">
            <div className="sidebar-title">Categories</div>
            <ul className="sidebar-links">
              <li className="active">
                <button type="button" onClick={() => scrollSec('shoes')}>
                  <span>👟 Shoes</span>
                  <span className="sidebar-count">16</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollSec('clothes')}>
                  <span>👔 Clothes</span>
                  <span className="sidebar-count">16</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollSec('dresses')}>
                  <span>👗 Dresses</span>
                  <span className="sidebar-count">8</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollSec('backpacks')}>
                  <span>🎒 Backpacks</span>
                  <span className="sidebar-count">16</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollSec('hats')}>
                  <span>🧢 Hats</span>
                  <span className="sidebar-count">16</span>
                </button>
              </li>
            </ul>
          </div>
        </aside>

        <main className="main">
          {/* SHOES SECTION */}
          <section id="shoes">
            <div className="sec-divider">
              <h2>👟 <em>Shoes</em></h2>
              <div className="div-line"></div>
              <div className="div-count">16 items</div>
            </div>

            {/* Men's Shoes */}
            <div className="subsection-title">👨 Men's Shoes</div>
            <div className="grid">
              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Red Nike sport running boot */}
                  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" alt="Sport Boots Pro" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Sport Boots Pro</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>8</button>
                    <button type="button" className="size-btn" onClick={noop}>9</button>
                    <button type="button" className="size-btn" onClick={noop}>10</button>
                    <button type="button" className="size-btn" onClick={noop}>11</button>
                    <button type="button" className="size-btn" onClick={noop}>12</button>
                    <button type="button" className="size-btn out-of-stock">13</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$92.00 <span className="price-old">$120</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* White urban sneaker side view */}
                  <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80" alt="Urban Sneaker" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☆</div>
                  <div className="card-name">Urban Sneaker</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>7</button>
                    <button type="button" className="size-btn" onClick={noop}>8</button>
                    <button type="button" className="size-btn out-of-stock">9</button>
                    <button type="button" className="size-btn" onClick={noop}>10</button>
                    <button type="button" className="size-btn" onClick={noop}>11</button>
                    <button type="button" className="size-btn" onClick={noop}>12</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$75.00 <span className="price-old">$110</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Men's running shoe flat lay */}
                  <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80" alt="Runner X Elite" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Runner X Elite</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>8</button>
                    <button type="button" className="size-btn" onClick={noop}>9</button>
                    <button type="button" className="size-btn" onClick={noop}>10</button>
                    <button type="button" className="size-btn" onClick={noop}>11</button>
                    <button type="button" className="size-btn out-of-stock">12</button>
                    <button type="button" className="size-btn" onClick={noop}>13</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$115.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Men's classic white comfort sneaker */}
                  <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&q=80" alt="Classic Comfort" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Classic Comfort</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>7</button>
                    <button type="button" className="size-btn" onClick={noop}>8</button>
                    <button type="button" className="size-btn" onClick={noop}>9</button>
                    <button type="button" className="size-btn" onClick={noop}>10</button>
                    <button type="button" className="size-btn" onClick={noop}>11</button>
                    <button type="button" className="size-btn" onClick={noop}>12</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$68.00 <span className="price-old">$85</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Brown leather oxford dress shoe */}
                  <img src="https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=500&q=80" alt="Leather Oxford" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☆</div>
                  <div className="card-name">Leather Oxford</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>8</button>
                    <button type="button" className="size-btn" onClick={noop}>9</button>
                    <button type="button" className="size-btn" onClick={noop}>10</button>
                    <button type="button" className="size-btn out-of-stock">11</button>
                    <button type="button" className="size-btn" onClick={noop}>12</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$125.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* White high top canvas converse-style */}
                  <img src="https://images.unsplash.com/photo-1542286991-b9634048aff4?w=500&q=80" alt="High Top Canvas" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">High Top Canvas</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>7</button>
                    <button type="button" className="size-btn" onClick={noop}>8</button>
                    <button type="button" className="size-btn out-of-stock">9</button>
                    <button type="button" className="size-btn" onClick={noop}>10</button>
                    <button type="button" className="size-btn" onClick={noop}>11</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$65.00 <span className="price-old">$90</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Brown men's lace-up hiking boots */}
                  <img src="https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&q=80" alt="Hiking Boots" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☆</div>
                  <div className="card-name">Hiking Boots</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>8</button>
                    <button type="button" className="size-btn" onClick={noop}>9</button>
                    <button type="button" className="size-btn" onClick={noop}>10</button>
                    <button type="button" className="size-btn" onClick={noop}>11</button>
                    <button type="button" className="size-btn" onClick={noop}>12</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$145.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Brown suede slip-on loafer */}
                  <img src="https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500&q=80" alt="Slip-On Loafer" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Slip-On Loafer</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>8</button>
                    <button type="button" className="size-btn" onClick={noop}>9</button>
                    <button type="button" className="size-btn" onClick={noop}>10</button>
                    <button type="button" className="size-btn out-of-stock">11</button>
                    <button type="button" className="size-btn" onClick={noop}>12</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$85.00 <span className="price-old">$110</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Women's Shoes */}
            <div className="subsection-title">👩 Women's Shoes</div>
            <div className="grid">
              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Black stiletto high heels */}
                  <img src="https://images.unsplash.com/photo-1543163521-9145f931fca5?w=500&q=80" alt="Stiletto Heels" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Stiletto Heels</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>5</button>
                    <button type="button" className="size-btn" onClick={noop}>6</button>
                    <button type="button" className="size-btn" onClick={noop}>7</button>
                    <button type="button" className="size-btn" onClick={noop}>8</button>
                    <button type="button" className="size-btn" onClick={noop}>9</button>
                    <button type="button" className="size-btn out-of-stock">10</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$95.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Nude/blush women's ballet flat shoes */}
                  <img src="https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=500&q=80" alt="Ballet Flats" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☆</div>
                  <div className="card-name">Ballet Flats</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>5</button>
                    <button type="button" className="size-btn" onClick={noop}>6</button>
                    <button type="button" className="size-btn out-of-stock">7</button>
                    <button type="button" className="size-btn" onClick={noop}>8</button>
                    <button type="button" className="size-btn" onClick={noop}>9</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$52.00 <span className="price-old">$75</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's black leather ankle boots */}
                  <img src="https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&q=80" alt="Ankle Boots" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Ankle Boots</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>5</button>
                    <button type="button" className="size-btn" onClick={noop}>6</button>
                    <button type="button" className="size-btn" onClick={noop}>7</button>
                    <button type="button" className="size-btn" onClick={noop}>8</button>
                    <button type="button" className="size-btn out-of-stock">9</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$108.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women’s sneaker from provided image */}
                  <img src="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?w=500&q=80" alt="Platform Sneakers" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Platform Sneakers</div>
                  <div className="size-label">Choose EU Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>37</button>
                    <button type="button" className="size-btn" onClick={noop}>38</button>
                    <button type="button" className="size-btn" onClick={noop}>39</button>
                    <button type="button" className="size-btn" onClick={noop}>40</button>
                    <button type="button" className="size-btn" onClick={noop}>41</button>
                    <button type="button" className="size-btn" onClick={noop}>42</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$78.00 <span className="price-old">$105</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's sandal slide shoes on white background */}
                  <img src="https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&q=80" alt="Sandal Slides" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Sandal Slides</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>5</button>
                    <button type="button" className="size-btn" onClick={noop}>6</button>
                    <button type="button" className="size-btn" onClick={noop}>7</button>
                    <button type="button" className="size-btn" onClick={noop}>8</button>
                    <button type="button" className="size-btn out-of-stock">9</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$42.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's tall thigh-high black boots */}
                  <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80" alt="Thigh High Boots" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Thigh High Boots</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>5</button>
                    <button type="button" className="size-btn" onClick={noop}>6</button>
                    <button type="button" className="size-btn out-of-stock">7</button>
                    <button type="button" className="size-btn" onClick={noop}>8</button>
                    <button type="button" className="size-btn" onClick={noop}>9</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$135.00 <span className="price-old">$185</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's slip-on mule loafer */}
                  <img src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80" alt="Loafer Mules" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☆</div>
                  <div className="card-name">Loafer Mules</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>5</button>
                    <button type="button" className="size-btn" onClick={noop}>6</button>
                    <button type="button" className="size-btn" onClick={noop}>7</button>
                    <button type="button" className="size-btn" onClick={noop}>8</button>
                    <button type="button" className="size-btn" onClick={noop}>9</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$72.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's espadrille wedge sandal */}
                  <img src="https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=500&q=80" alt="Wedge Sandals" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Wedge Sandals</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>5</button>
                    <button type="button" className="size-btn" onClick={noop}>6</button>
                    <button type="button" className="size-btn" onClick={noop}>7</button>
                    <button type="button" className="size-btn out-of-stock">8</button>
                    <button type="button" className="size-btn" onClick={noop}>9</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$65.00 <span className="price-old">$88</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CLOTHES SECTION */}
          <section id="clothes">
            <div className="sec-divider">
              <h2>👔 <em>Clothes</em></h2>
              <div className="div-line"></div>
              <div className="div-count">16 items</div>
            </div>

            {/* Men's Clothes */}
            <div className="subsection-title">👨 Men's Clothes</div>
            <div className="grid">
              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Plain white men's essential t-shirt */}
                  <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80" alt="Essential Tee" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Essential Tee</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                    <button type="button" className="size-btn" onClick={noop}>XL</button>
                    <button type="button" className="size-btn" onClick={noop}>XXL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$29.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Men's slim fit blue denim jeans */}
                  <img src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80" alt="Slim Fit Jeans" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☆</div>
                  <div className="card-name">Slim Fit Jeans</div>
                  <div className="size-label">Choose Size (Waist)</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>28</button>
                    <button type="button" className="size-btn" onClick={noop}>30</button>
                    <button type="button" className="size-btn" onClick={noop}>32</button>
                    <button type="button" className="size-btn out-of-stock">34</button>
                    <button type="button" className="size-btn" onClick={noop}>36</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$72.00 <span className="price-old">$95</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Men's olive/khaki utility field jacket */}
                  <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80" alt="Field Jacket" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Field Jacket</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                    <button type="button" className="size-btn out-of-stock">XL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$145.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Men's grey oversized pullover hoodie */}
                  <img src="https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&q=80" alt="Oversized Hoodie" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Oversized Hoodie</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                    <button type="button" className="size-btn" onClick={noop}>XL</button>
                    <button type="button" className="size-btn" onClick={noop}>XXL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$65.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Men's light blue oxford button-down shirt */}
                  <img src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80" alt="Oxford Shirt" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☆</div>
                  <div className="card-name">Oxford Shirt</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                    <button type="button" className="size-btn out-of-stock">XL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$55.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Men's beige/khaki chino trousers */}
                  <img src="https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&q=80" alt="Chinos Pants" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☆</div>
                  <div className="card-name">Chinos Pants</div>
                  <div className="size-label">Choose Size (Waist)</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>28</button>
                    <button type="button" className="size-btn" onClick={noop}>30</button>
                    <button type="button" className="size-btn" onClick={noop}>32</button>
                    <button type="button" className="size-btn" onClick={noop}>34</button>
                    <button type="button" className="size-btn" onClick={noop}>36</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$62.00 <span className="price-old">$85</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Men's black bomber jacket */}
                  <img src="https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&q=80" alt="Bomber Jacket" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Bomber Jacket</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                    <button type="button" className="size-btn" onClick={noop}>XL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$118.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Men's navy v-neck knit sweater */}
                  <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80" alt="V-Neck Sweater" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">V-Neck Sweater</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn out-of-stock">L</button>
                    <button type="button" className="size-btn" onClick={noop}>XL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$58.00 <span className="price-old">$78</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Women's Clothes */}
            <div className="subsection-title">👩 Women's Clothes</div>
            <div className="grid">
              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's white fitted button-up blouse */}
                  <img src="https://images.unsplash.com/photo-1563630423918-b58f07336ac5?w=500&q=80" alt="Fitted Blouse" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Fitted Blouse</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                    <button type="button" className="size-btn out-of-stock">XL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$48.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's dark wash skinny jeans */}
                  <img src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80" alt="Skinny Jeans" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Skinny Jeans</div>
                  <div className="size-label">Choose Size (Waist)</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>24</button>
                    <button type="button" className="size-btn" onClick={noop}>26</button>
                    <button type="button" className="size-btn out-of-stock">28</button>
                    <button type="button" className="size-btn" onClick={noop}>30</button>
                    <button type="button" className="size-btn" onClick={noop}>32</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$58.00 <span className="price-old">$80</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's classic blue denim jacket */}
                  <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&q=80" alt="Denim Jacket" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Denim Jacket</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$85.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's crop top knit sweater */}
                  <img src="https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=500&q=80" alt="Crop Top Sweater" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Crop Top Sweater</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn out-of-stock">L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$42.00 <span className="price-old">$60</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's cargo pants with pockets */}
                  <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80" alt="Cargo Pants" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Cargo Pants</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$68.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's beige open-front knit cardigan */}
                  <img src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500&q=80" alt="Knit Cardigan" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Knit Cardigan</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn out-of-stock">S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$68.00 <span className="price-old">$95</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's black genuine leather biker jacket */}
                  <img src="https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&q=80" alt="Leather Jacket" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Leather Jacket</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn out-of-stock">L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$165.00 <span className="price-old">$225</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DRESSES SECTION */}
          <section id="dresses">
            <div className="sec-divider">
              <h2>👗 <em>Dresses</em></h2>
              <div className="div-line"></div>
              <div className="div-count">8 items</div>
            </div>
            <div className="grid">
              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's elegant black cocktail dress */}
                  <img src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&q=80" alt="Cocktail Dress" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Cocktail Dress</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                    <button type="button" className="size-btn" onClick={noop}>XL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$125.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's long boho maxi dress */}
                  <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80" alt="Maxi Dress" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Maxi Dress</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn out-of-stock">M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                    <button type="button" className="size-btn" onClick={noop}>XL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$95.00 <span className="price-old">$140</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's bodycon form-fitting dress */}
                  <img src="https://images.unsplash.com/photo-1536243298747-ea8874136d64?w=500&q=80" alt="Bodycon Dress" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Bodycon Dress</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$65.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's floral summer sundress */}
                  <img src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80" alt="Floral Sundress" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Floral Sundress</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn out-of-stock">L</button>
                    <button type="button" className="size-btn" onClick={noop}>XL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$58.00 <span className="price-old">$80</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's floral wrap dress v-neck */}
                  <img src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&q=80" alt="Wrap Dress" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Wrap Dress</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$72.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's A-line knee-length dress */}
                  <img src="https://images.unsplash.com/photo-1539008588435-666cafdc884d?w=500&q=80" alt="A-Line Dress" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">A-Line Dress</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn out-of-stock">S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                    <button type="button" className="size-btn" onClick={noop}>XL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$85.00 <span className="price-old">$125</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's simple shift dress */}
                  <img src="https://images.unsplash.com/photo-1551854838-212c50b4c184?w=500&q=80" alt="Shift Dress" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Shift Dress</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$58.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's glamorous ball gown / formal dress */}
                  <img src="https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=500&q=80" alt="Ball Gown" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Ball Gown</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn out-of-stock">M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                    <button type="button" className="size-btn" onClick={noop}>XL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$185.00 <span className="price-old">$260</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BACKPACKS SECTION */}
          <section id="backpacks">
            <div className="sec-divider">
              <h2>🎒 <em>Backpacks</em></h2>
              <div className="div-line"></div>
              <div className="div-count">16 items</div>
            </div>

            {/* Men's Backpacks */}
            <div className="subsection-title">👨 Men's Backpacks</div>
            <div className="grid">
              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Black urban city backpack */}
                  <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80" alt="Urban Pack 20L" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Urban Pack 20L</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Black</button>
                    <button type="button" className="size-btn" onClick={noop}>Navy</button>
                    <button type="button" className="size-btn out-of-stock">Grey</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$92.00 <span className="price-old">$115</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Large hiking trail backpack green/orange */}
                  <img src="https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?w=500&q=80" alt="Trail Pack 40L" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Trail Pack 40L</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Green</button>
                    <button type="button" className="size-btn" onClick={noop}>Orange</button>
                    <button type="button" className="size-btn" onClick={noop}>Black</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$155.00 <span className="price-old">$200</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Brown leather men's messenger/satchel bag */}
                  <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80" alt="Leather Satchel" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Leather Satchel</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Cognac</button>
                    <button type="button" className="size-btn" onClick={noop}>Black</button>
                    <button type="button" className="size-btn out-of-stock">Tan</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$220.00 <span className="price-old">$280</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Men's canvas weekend duffel bag */}
                  <img src="https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=500&q=80" alt="Weekend Duffel" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Weekend Duffel</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Navy</button>
                    <button type="button" className="size-btn out-of-stock">Black</button>
                    <button type="button" className="size-btn" onClick={noop}>Grey</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$125.00 <span className="price-old">$160</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Men's sleek laptop commuter backpack */}
                  <img src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=500&q=80" alt="Laptop Commuter" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Laptop Commuter</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Charcoal</button>
                    <button type="button" className="size-btn" onClick={noop}>Black</button>
                    <button type="button" className="size-btn out-of-stock">Tan</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$98.00 <span className="price-old">$130</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Men's olive canvas crossbody shoulder bag */}
                  <img src="https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=500&q=80" alt="Crossbody Bag" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Crossbody Bag</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Olive</button>
                    <button type="button" className="size-btn" onClick={noop}>Black</button>
                    <button type="button" className="size-btn" onClick={noop}>Brown</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$58.00 <span className="price-old">$78</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Natural canvas tote bag */}
                  <img src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500&q=80" alt="Canvas Tote" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Canvas Tote</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Natural</button>
                    <button type="button" className="size-btn" onClick={noop}>Black</button>
                    <button type="button" className="size-btn out-of-stock">Olive</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$38.00 <span className="price-old">$55</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Black tech backpack with USB port */}
                  <img src="https://images.unsplash.com/photo-1548946526-f69e7b3ad552?w=500&q=80" alt="Tech Backpack" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Tech Backpack</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Black</button>
                    <button type="button" className="size-btn" onClick={noop}>Grey</button>
                    <button type="button" className="size-btn" onClick={noop}>Blue</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$138.00 <span className="price-old">$180</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Women's Backpacks */}
            <div className="subsection-title">👩 Women's Backpacks</div>
            <div className="grid">
              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Small blush/pink women's mini backpack */}
                  <img src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&q=80" alt="Mini Backpack" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Mini Backpack</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Blush</button>
                    <button type="button" className="size-btn" onClick={noop}>Cream</button>
                    <button type="button" className="size-btn out-of-stock">Sage</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$68.00 <span className="price-old">$85</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's stylish shoulder bag/backpack */}
                  <img src="https://images.unsplash.com/photo-1575844611398-1f4dc8d1e7e7?w=500&q=80" alt="Shoulder Backpack" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Shoulder Backpack</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Pink</button>
                    <button type="button" className="size-btn" onClick={noop}>White</button>
                    <button type="button" className="size-btn" onClick={noop}>Black</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$65.00 <span className="price-old">$95</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's fashion daypack colorful */}
                  <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80" alt="Fashion Daypack" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Fashion Daypack</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Rose</button>
                    <button type="button" className="size-btn" onClick={noop}>Lavender</button>
                    <button type="button" className="size-btn" onClick={noop}>Black</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$75.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's tan leather hobo shoulder bag */}
                  <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80" alt="Leather Hobo" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Leather Hobo</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Tan</button>
                    <button type="button" className="size-btn" onClick={noop}>Brown</button>
                    <button type="button" className="size-btn out-of-stock">Black</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$128.00 <span className="price-old">$170</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's quilted gold/metallic backpack */}
                  <img src="https://images.unsplash.com/photo-1548946526-f69e7b3ad552?w=500&q=80" alt="Quilted Backpack" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Quilted Backpack</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Gold</button>
                    <button type="button" className="size-btn" onClick={noop}>Silver</button>
                    <button type="button" className="size-btn" onClick={noop}>Black</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$85.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's burgundy vintage-style backpack */}
                  <img src="https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=500&q=80" alt="Vintage Backpack" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Vintage Backpack</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Burgundy</button>
                    <button type="button" className="size-btn out-of-stock">Navy</button>
                    <button type="button" className="size-btn" onClick={noop}>Black</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$92.00 <span className="price-old">$125</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's structured leather satchel handbag */}
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80" alt="Structured Satchel" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Structured Satchel</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Camel</button>
                    <button type="button" className="size-btn" onClick={noop}>Red</button>
                    <button type="button" className="size-btn" onClick={noop}>Black</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$78.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's lightweight nylon backpack pink/blue */}
                  <img src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500&q=80" alt="Nylon Daypack" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Nylon Daypack</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Pink</button>
                    <button type="button" className="size-btn" onClick={noop}>Blue</button>
                    <button type="button" className="size-btn out-of-stock">Green</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$62.00 <span className="price-old">$85</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* HATS SECTION */}
          <section id="hats">
            <div className="sec-divider">
              <h2>🧢 <em>Hats</em></h2>
              <div className="div-line"></div>
              <div className="div-count">16 items</div>
            </div>

            {/* Men's Hats */}
            <div className="subsection-title">👨 Men's Hats</div>
            <div className="grid">
              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Black classic snapback cap */}
                  <img src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&q=80" alt="Classic Snapback" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Classic Snapback</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S/M</button>
                    <button type="button" className="size-btn" onClick={noop}>M/L</button>
                    <button type="button" className="size-btn" onClick={noop}>L/XL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$32.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Men's bucket hat outdoor */}
                  <img src="https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&q=80" alt="Bucket Hat" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Bucket Hat</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$28.00 <span className="price-old">$42</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Men's brown felt fedora hat */}
                  <img src="https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=500&q=80" alt="Felt Fedora" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Felt Fedora</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn out-of-stock">L</button>
                    <button type="button" className="size-btn" onClick={noop}>XL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$65.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Men's ribbed knit winter beanie */}
                  <img src="https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&q=80" alt="Ribbed Beanie" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Ribbed Beanie</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S/M</button>
                    <button type="button" className="size-btn" onClick={noop}>M/L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$22.00 <span className="price-old">$32</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Men's classic baseball cap */}
                  <img src="https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=500&q=80" alt="Baseball Cap" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Baseball Cap</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S/M</button>
                    <button type="button" className="size-btn" onClick={noop}>M/L</button>
                    <button type="button" className="size-btn" onClick={noop}>L/XL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$30.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Men's mesh trucker hat */}
                  <img src="https://images.unsplash.com/photo-1530745342582-6cc4b1246ef9?w=500&q=80" alt="Trucker Mesh Cap" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Trucker Mesh Cap</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S/M</button>
                    <button type="button" className="size-btn" onClick={noop}>M/L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$26.00 <span className="price-old">$38</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Black wool beret hat French style */}
                  <img src="https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?w=500&q=80" alt="Wool Beret" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Wool Beret</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S/M</button>
                    <button type="button" className="size-btn" onClick={noop}>M/L</button>
                    <button type="button" className="size-btn out-of-stock">L/XL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$35.00 <span className="price-old">$48</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Sports sun visor hat */}
                  <img src="https://images.unsplash.com/photo-1565947666747-338eadc00d72?w=500&q=80" alt="Sun Visor" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Sun Visor</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S/M</button>
                    <button type="button" className="size-btn" onClick={noop}>M/L</button>
                    <button type="button" className="size-btn" onClick={noop}>L/XL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$24.00 <span className="price-old">$35</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Women's Hats */}
            <div className="subsection-title">👩 Women's Hats</div>
            <div className="grid">
              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's floppy wide brim sun hat */}
                  <img src="https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=500&q=80" alt="Wide Brim Sun Hat" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Wide Brim Sun Hat</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S/M</button>
                    <button type="button" className="size-btn" onClick={noop}>M/L</button>
                    <button type="button" className="size-btn" onClick={noop}>L/XL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$38.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's boho gold headband hair accessory */}
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&q=80" alt="Boho Headband" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Boho Headband</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Gold</button>
                    <button type="button" className="size-btn" onClick={noop}>Silver</button>
                    <button type="button" className="size-btn out-of-stock">Rose Gold</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$18.00 <span className="price-old">$28</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's pink knit winter beanie */}
                  <img src="https://images.unsplash.com/photo-1511915198658-b5a9b4ad7f40?w=500&q=80" alt="Pink Beanie" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Pink Beanie</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S/M</button>
                    <button type="button" className="size-btn" onClick={noop}>M/L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$25.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's vintage retro baseball cap */}
                  <img src="https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=500&q=80" alt="Vintage Cap" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Vintage Cap</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S/M</button>
                    <button type="button" className="size-btn" onClick={noop}>M/L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$35.00 <span className="price-old">$48</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's woven straw summer hat */}
                  <img src="https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?w=500&q=80" alt="Straw Hat" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Straw Hat</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S/M</button>
                    <button type="button" className="size-btn" onClick={noop}>M/L</button>
                    <button type="button" className="size-btn" onClick={noop}>L/XL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$32.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Elegant women's fascinator hair clip */}
                  <img src="https://images.unsplash.com/photo-1529778873920-4da0926926d5?w=500&q=80" alt="Fascinator Clip" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Fascinator Clip</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Black</button>
                    <button type="button" className="size-btn out-of-stock">White</button>
                    <button type="button" className="size-btn" onClick={noop}>Navy</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$42.00 <span className="price-old">$60</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's floral flower crown headpiece */}
                  <img src="https://images.unsplash.com/photo-1490349438856-39dcc2a4f87b?w=500&q=80" alt="Flower Crown" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Flower Crown</div>
                  <div className="size-label">Choose Style</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Roses</button>
                    <button type="button" className="size-btn" onClick={noop}>Daisies</button>
                    <button type="button" className="size-btn" onClick={noop}>Mixed</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$28.00</div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's knit pom pom winter hat */}
                  <img src="https://images.unsplash.com/photo-1583391733981-21eae3b827fa?w=500&q=80" alt="Knit Pom Pom" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Knit Pom Pom Hat</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S/M</button>
                    <button type="button" className="size-btn" onClick={noop}>M/L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$32.00 <span className="price-old">$45</span></div>
                    <button type="button" className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};