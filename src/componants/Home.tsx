import React from 'react';

import './Home.css';

export const Home: React.FC = () => {
  return (
    <div className="home-page">
      <main className="home-main">
        <section className="home-hero">
          <div className="hero-left">
            <div className="hero-content">
              <h4>NEW ARRIVALS</h4>
              <h1><span>Best Price</span> This Year</h1>
              <p>Comfortable fashion for your daily life.</p>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop"
                alt="New arrivals"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
