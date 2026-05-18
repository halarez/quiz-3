import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Shop.css';

export const Shop: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const scrollSec = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const noop = () => {
    // placeholder for button interactions
  };

  const toId = (name: string) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  const getCardPrice = (card: HTMLElement) => {
    const priceElement = card.querySelector('.price');
    const rawText = priceElement?.childNodes[0]?.textContent || priceElement?.textContent || '';
    const cleaned = rawText.replace(/[^0-9.]/g, '');
    return parseFloat(cleaned) || 0;
  };

  const buyNow = (button: HTMLButtonElement) => {
    const card = button.closest('.card') as HTMLElement | null;
    if (!card) return;

    const name = card.querySelector('.card-name')?.textContent?.trim() || 'Product';
    const image = card.querySelector('img')?.getAttribute('src') || '';
    const price = getCardPrice(card);
    const id = toId(name);

    if (!price) return;

    addToCart({ id, name, price, image });
    navigate('/cart');
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
                    <button type="button" className="size-btn" onClick={noop}>38</button>
                    <button type="button" className="size-btn" onClick={noop}>39</button>
                    <button type="button" className="size-btn" onClick={noop}>40</button>
                    <button type="button" className="size-btn" onClick={noop}>41</button>
                    <button type="button" className="size-btn" onClick={noop}>42</button>
                    <button type="button" className="size-btn out-of-stock">43</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$92.00 <span className="price-old">$120</span></div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* White urban sneaker side view */}
                  <img src="https://images.unsplash.com/photo-1520219306100-ec4afeeefe58?w=500&q=80 " alt="Urban Sneaker" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☆</div>
                  <div className="card-name">Ranger</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>38</button>
                    <button type="button" className="size-btn" onClick={noop}>39</button>
                    <button type="button" className="size-btn out-of-stock">40</button>
                    <button type="button" className="size-btn" onClick={noop}>41</button>
                    <button type="button" className="size-btn" onClick={noop}>42</button>
                    <button type="button" className="size-btn" onClick={noop}>43</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$75.00 <span className="price-old">$110</span></div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="size-btn" onClick={noop}>38</button>
                    <button type="button" className="size-btn" onClick={noop}>39</button>
                    <button type="button" className="size-btn" onClick={noop}>40</button>
                    <button type="button" className="size-btn" onClick={noop}>41</button>
                    <button type="button" className="size-btn out-of-stock">42</button>
                    <button type="button" className="size-btn" onClick={noop}>43</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$115.00</div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="size-btn" onClick={noop}>38</button>
                    <button type="button" className="size-btn" onClick={noop}>39</button>
                    <button type="button" className="size-btn" onClick={noop}>40</button>
                    <button type="button" className="size-btn" onClick={noop}>41</button>
                    <button type="button" className="size-btn" onClick={noop}>42</button>
                    <button type="button" className="size-btn" onClick={noop}>43</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$68.00 <span className="price-old">$85</span></div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Brown leather oxford dress shoe */}
                  <img src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&q=80" alt="Leather Oxford" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☆</div>
                  <div className="card-name">White Nike Air Max</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>38</button>
                    <button type="button" className="size-btn" onClick={noop}>39</button>
                    <button type="button" className="size-btn" onClick={noop}>40</button>
                    <button type="button" className="size-btn out-of-stock">41</button>
                    <button type="button" className="size-btn" onClick={noop}>42</button>
                    <button type="button" className="size-btn" onClick={noop}>43</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$125.00</div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* White high top canvas converse-style */}
                  <img src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80" alt="High Top Canvas" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Authentic red </div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>38</button>
                    <button type="button" className="size-btn" onClick={noop}>39</button>
                    <button type="button" className="size-btn out-of-stock">40</button>
                    <button type="button" className="size-btn" onClick={noop}>41</button>
                    <button type="button" className="size-btn" onClick={noop}>42</button>
                    <button type="button" className="size-btn" onClick={noop}>43</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$65.00 <span className="price-old">$90</span></div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Brown men's lace-up hiking boots */}
                  <img src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?w=500&q=80" alt="Hiking Boots" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☆</div>
                  <div className="card-name">Air jordan Multi-color</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>38</button>
                    <button type="button" className="size-btn" onClick={noop}>39</button>
                    <button type="button" className="size-btn" onClick={noop}>40</button>
                    <button type="button" className="size-btn" onClick={noop}>41</button>
                    <button type="button" className="size-btn" onClick={noop}>42</button>
                    <button type="button" className="size-btn out-of-stock">43</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$145.00</div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Brown suede slip-on loafer */}
                  <img src="https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80" alt="Slip-On Loafer" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">New balance</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>38</button>
                    <button type="button" className="size-btn" onClick={noop}>39</button>
                    <button type="button" className="size-btn" onClick={noop}>40</button>
                    <button type="button" className="size-btn out-of-stock">41</button>
                    <button type="button" className="size-btn" onClick={noop}>42</button>
                    <button type="button" className="size-btn" onClick={noop}>43</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$85.00 <span className="price-old">$110</span></div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                  <img src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=500&q=80" alt="Stiletto Heels" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Louis Vuitton</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>37</button>
                    <button type="button" className="size-btn" onClick={noop}>38</button>
                    <button type="button" className="size-btn" onClick={noop}>39</button>
                    <button type="button" className="size-btn" onClick={noop}>40</button>
                    <button type="button" className="size-btn" onClick={noop}>41</button>
                    <button type="button" className="size-btn out-of-stock">42</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$95.00</div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Nude/blush women's ballet flat shoes */}
                  <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80" alt="Ballet Flats" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☆</div>
                  <div className="card-name">Air Nike Multi-color</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>37</button>
                    <button type="button" className="size-btn" onClick={noop}>38</button>
                    <button type="button" className="size-btn out-of-stock">39</button>
                    <button type="button" className="size-btn" onClick={noop}>40</button>
                    <button type="button" className="size-btn" onClick={noop}>41</button>
                    <button type="button" className="size-btn" onClick={noop}>42</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$52.00 <span className="price-old">$75</span></div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's black leather ankle boots */}
                  <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80" alt="Ankle Boots" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Puma White</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>37</button>
                    <button type="button" className="size-btn" onClick={noop}>38</button>
                    <button type="button" className="size-btn" onClick={noop}>39</button>
                    <button type="button" className="size-btn" onClick={noop}>40</button>
                    <button type="button" className="size-btn out-of-stock">41</button>
                    <button type="button" className="size-btn" onClick={noop}>42</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$108.00</div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women’s sneaker from provided image */}
                  <img src="https://images.unsplash.com/photo-1739138053555-13321c306033?q=80&w=1198&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Platform Sneakers" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">The Nike ZoomX Vaporfly</div>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's sandal slide shoes on white background */}
                  <img src="https://images.unsplash.com/photo-1625178483412-1c1ae52f8069?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sandal Slides" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">White Nike Athletic Shoe</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>37</button>
                    <button type="button" className="size-btn" onClick={noop}>38</button>
                    <button type="button" className="size-btn" onClick={noop}>39</button>
                    <button type="button" className="size-btn" onClick={noop}>40</button>
                    <button type="button" className="size-btn out-of-stock">41</button>
                    <button type="button" className="size-btn" onClick={noop}>42</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$42.00</div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's tall thigh-high black boots */}
                  <img src="https://images.unsplash.com/photo-1650320079970-b4ee8f0dae33?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Thigh High Boots" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Red Convers</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>37</button>
                    <button type="button" className="size-btn" onClick={noop}>38</button>
                    <button type="button" className="size-btn out-of-stock">39</button>
                    <button type="button" className="size-btn" onClick={noop}>40</button>
                    <button type="button" className="size-btn" onClick={noop}>41</button>
                    <button type="button" className="size-btn" onClick={noop}>42</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$135.00 <span className="price-old">$185</span></div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="size-btn" onClick={noop}>37</button>
                    <button type="button" className="size-btn" onClick={noop}>38</button>
                    <button type="button" className="size-btn" onClick={noop}>39</button>
                    <button type="button" className="size-btn" onClick={noop}>40</button>
                    <button type="button" className="size-btn" onClick={noop}>41</button>
                    <button type="button" className="size-btn" onClick={noop}>42</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$72.00</div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's espadrille wedge sandal */}
                  <img src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800" alt="Wedge Sandals" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">New balance</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>37</button>
               
                    <button type="button" className="size-btn" onClick={noop}>38</button>
                    <button type="button" className="size-btn" onClick={noop}>39</button>
                    <button type="button" className="size-btn" onClick={noop}>40</button>
                    <button type="button" className="size-btn out-of-stock">41</button>
                    <button type="button" className="size-btn" onClick={noop}>42</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$65.00 <span className="price-old">$88</span></div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Men's grey oversized pullover hoodie */}
                  <img src="https://images.unsplash.com/photo-1642886512785-b5fee9faad7f?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Oversized Hoodie" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">red-sweater-and-black-pants</div>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Men's black bomber jacket */}
                  <img src="https://images.unsplash.com/photo-1611312449297-a69dc9c3987b?q=80&w=698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bomber Jacket" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">black-sweate</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                    <button type="button" className="size-btn" onClick={noop}>XL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$118.00</div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Men's navy v-neck knit sweater */}
                  <img src="https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="V-Neck Sweater" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Black-and-Gray Checkered Sweater</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn out-of-stock">L</button>
                    <button type="button" className="size-btn" onClick={noop}>XL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$58.00 <span className="price-old">$78</span></div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                  <img src="https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Fitted Blouse" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">red-jacket</div>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's dark wash skinny jeans */}
                  <img src="https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Skinny Jeans" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Navy bleu crop top and pants</div>
                  <div className="size-label">Choose Size (Waist)</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn out-of-stock">M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                    <button type="button" className="size-btn" onClick={noop}>XL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$58.00 <span className="price-old">$80</span></div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's classic blue denim jacket */}
                  <img src="https://plus.unsplash.com/premium_photo-1698339571476-4f7d18d6be5b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Denim Jacket" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">-gray-jacket-and-red-pants</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$85.00</div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's crop top knit sweater */}
                  <img src="https://plus.unsplash.com/premium_photo-1691622500885-0f616b3f72f4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Crop Top Sweater" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">green-jacket-and-jeans</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn out-of-stock">L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$42.00 <span className="price-old">$60</span></div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's cargo pants with pockets */}
                  <img src="https://plus.unsplash.com/premium_photo-1689371953420-b6981e43fa38?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cargo Pants" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">black-top-and-jeans=</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$68.00</div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's beige open-front knit cardigan */}
                  <img src="https://plus.unsplash.com/premium_photo-1706520001443-e099ad30b807?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Knit Cardigan" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">pink-sweater</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn out-of-stock">S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$68.00 <span className="price-old">$95</span></div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's black genuine leather biker jacket */}
                  <img src="https://plus.unsplash.com/premium_photo-1689371956352-f420feb61e53?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Leather Jacket" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">white-turtle-neck-sweater</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn out-of-stock">L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$165.00 <span className="price-old">$225</span></div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's bodycon form-fitting dress */}
                  <img src="https://images.unsplash.com/photo-1616313253719-c46514cddee1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bodycon Dress" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">black-and-white-floral-long-sleeve</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$65.00</div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's A-line knee-length dress */}
                  <img src="https://plus.unsplash.com/premium_photo-1674327105316-1264a6429e18?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A-Line Dress" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">brown-dress</div>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's simple shift dress */}
                  <img src="https://images.unsplash.com/photo-1731052420958-4c58b28f53e8?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shift Dress" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">red-dress</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>XS</button>
                    <button type="button" className="size-btn" onClick={noop}>S</button>
                    <button type="button" className="size-btn" onClick={noop}>M</button>
                    <button type="button" className="size-btn" onClick={noop}>L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$58.00</div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's glamorous ball gown / formal dress */}
                  <img src="https://images.unsplash.com/photo-1761164920835-799164348e9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ball Gown" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">black-dress</div>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Large hiking trail backpack green/orange */}
                  <img src="https://images.unsplash.com/photo-1622560481979-f5b0174242a0?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Trail Pack 40L" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">nike-backpack</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Green</button>
                    <button type="button" className="size-btn" onClick={noop}>Orange</button>
                    <button type="button" className="size-btn" onClick={noop}>Black</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$155.00 <span className="price-old">$200</span></div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Brown leather men's messenger/satchel bag */}
                  <img src="https://images.unsplash.com/photo-1591534577302-1696205bb2bc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Leather Satchel" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Black Backpack on White Textile</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    
                  </div>
                  <div className="card-footer">
                    <div className="price">$220.00 <span className="price-old">$280</span></div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Black tech backpack with USB port */}
                  <img src="https://images.unsplash.com/photo-1542461957-5df5b644ccd6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tech Backpack" loading="lazy" />
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's stylish shoulder bag/backpack */}
                  <img src="https://images.unsplash.com/photo-1680039211156-66c721b87625?q=80&w=690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoulder Backpack" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Leather Backpacks</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Pink</button>
                    <button type="button" className="size-btn" onClick={noop}>White</button>
                    <button type="button" className="size-btn" onClick={noop}>Black</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$65.00 <span className="price-old">$95</span></div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's quilted gold/metallic backpack */}
                  <img src="https://images.unsplash.com/photo-1604321496933-0f50567428df?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Quilted Backpack" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Vans of the wall</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Bleu</button>
                    <button type="button" className="size-btn" onClick={noop}>Pink</button>
                    <button type="button" className="size-btn" onClick={noop}>Black</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$85.00</div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's burgundy vintage-style backpack */}
                  <img src="https://images.unsplash.com/photo-1754560396023-1994f0b7df47?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vintage Backpack" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Burgundy Vintage Backpack</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Burgundy</button>
                    <button type="button" className="size-btn out-of-stock">Navy</button>
                    <button type="button" className="size-btn" onClick={noop}>Yellow</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$92.00 <span className="price-old">$125</span></div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's structured leather satchel handbag */}
                  <img src="https://images.unsplash.com/photo-1543325692-6b03e28e7e99?q=80&w=1124&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Structured Satchel" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Leather Backpack</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Camel</button>
                    <button type="button" className="size-btn" onClick={noop}>Red</button>
                    <button type="button" className="size-btn" onClick={noop}>Black</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$78.00</div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's lightweight nylon backpack pink/blue */}
                  <img src="https://plus.unsplash.com/premium_photo-1676660359861-aab2485c08b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nylon Daypack" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">Hiking Daypack</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Black</button>
                    <button type="button" className="size-btn" onClick={noop}>Pink</button>
                    <button type="button" className="size-btn out-of-stock">Yellow</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$62.00 <span className="price-old">$85</span></div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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

            {/* Women's Hats */}
            <div className="subsection-title">� Women's Hats</div>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Men's mesh trucker hat */}
                  <img src="https://images.unsplash.com/photo-1593476087123-36d1de271f08?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Trucker Mesh Cap" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Red Hat</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S/M</button>
                    <button type="button" className="size-btn" onClick={noop}>M/L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$26.00 <span className="price-old">$38</span></div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Sports sun visor hat */}
                  <img src="https://images.unsplash.com/photo-1633451960561-7fc4fcdfbbc0?q=80&w=738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sun Visor" loading="lazy" />
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Women's Hats */}
            <div className="subsection-title">👩 Men's Hats</div>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's boho gold headband hair accessory */}
                  <img src="https://images.unsplash.com/photo-1695252458755-abb9459cacd9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Boho Headband" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">green-hat-with-a-white-brim</div>
                  <div className="size-label">Choose Color</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>Gold</button>
                    <button type="button" className="size-btn" onClick={noop}>Silver</button>
                    <button type="button" className="size-btn out-of-stock">Rose Gold</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$18.00 <span className="price-old">$28</span></div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's pink knit winter beanie */}
                  <img src="https://images.unsplash.com/photo-1638295058811-1ad95c7c8c73?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pink Beanie" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">beard-wearing</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S/M</button>
                    <button type="button" className="size-btn" onClick={noop}>M/L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$25.00</div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-new">New</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's woven straw summer hat */}
                  <img src="https://images.unsplash.com/photo-1625697501175-a4e46bc3315a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Straw Hat" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">orange-and-black-fitted-cap</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S/M</button>
                    <button type="button" className="size-btn" onClick={noop}>M/L</button>
                    <button type="button" className="size-btn" onClick={noop}>L/XL</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$32.00</div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-sale">Sale</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Elegant women's fascinator hair clip */}
                  <img src="https://plus.unsplash.com/premium_photo-1664910607776-c28c0a059f51?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Fascinator Clip" loading="lazy" />
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
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's floral flower crown headpiece */}
                  <img src="https://images.unsplash.com/photo-1646978124942-1314dd597473?q=80&w=673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Flower Crown" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★☀</div>
                  <div className="card-name">Black hat</div>
                  <div className="size-label">Choose Style</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S/M</button>
                    <button type="button" className="size-btn" onClick={noop}>M/L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$28.00</div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-img-wrap">
                  <span className="badge badge-hot">Hot</span>
                  <button type="button" className="wish-btn" onClick={noop}>🤍</button>
                  {/* Women's knit pom pom winter hat */}
                  <img src="https://images.unsplash.com/photo-1525740615880-50bb88fe0b1f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Knit Pom Pom" loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="stars">★★★★★</div>
                  <div className="card-name">black-cap</div>
                  <div className="size-label">Choose Size</div>
                  <div className="size-options">
                    <button type="button" className="size-btn" onClick={noop}>S/M</button>
                    <button type="button" className="size-btn" onClick={noop}>M/L</button>
                  </div>
                  <div className="card-footer">
                    <div className="price">$32.00 <span className="price-old">$45</span></div>
                    <button type="button" className="btn-buy" onClick={(event) => buyNow(event.currentTarget)}>Buy Now</button>
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

