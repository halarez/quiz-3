import React from 'react';
import './about.css';

export const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-copy">
          <span className="eyebrow">About Us</span>
          <h1>Curated style for every season, every story.</h1>
          <p>
            We bring modern fashion and everyday essentials together in one place.
            From sleek streetwear to carry-everywhere accessories, our shop is built
            to make shopping effortless, inspiring and always on trend.
          </p>
          <div className="hero-actions">
            <a href="/shop" className="btn primary-btn">Shop New Arrivals</a>
            <a href="#mission" className="btn secondary-btn">Our Mission</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&q=80"
              alt="Fashion lifestyle"
            />
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="stat-card">
          <span>500+</span>
          <p>Products curated for modern wardrobes</p>
        </div>
        <div className="stat-card">
          <span>120k</span>
          <p>Happy customers worldwide</p>
        </div>
        <div className="stat-card">
          <span>4.9★</span>
          <p>Average satisfaction score</p>
        </div>
      </section>

      <section className="about-story" id="mission">
        <div className="story-copy">
          <span className="eyebrow">Our Mission</span>
          <h2>Fashion that feels effortless and personal.</h2>
          <p>
            We believe a great outfit starts with the right essentials. That’s why we
            hand-select pieces that combine quality, comfort, and style. Every item in
            our collection is chosen to help you look confident, feel comfortable, and
            express your own taste.
          </p>
        </div>
        <div className="story-cards">
          <div className="story-card">
            <h3>Authentic Curation</h3>
            <p>
              Each collection is thoughtfully curated to reflect the latest trends,
              timeless staples, and wearable everyday looks.
            </p>
          </div>
          <div className="story-card">
            <h3>Quality First</h3>
            <p>
              We choose brands and products that deliver great value and lasting style.
            </p>
          </div>
          <div className="story-card">
            <h3>Customer Care</h3>
            <p>
              Your satisfaction is our top priority, from browsing to delivery and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="team-copy">
          <span className="eyebrow">Meet the Team</span>
          <h2>A small team with big ideas.</h2>
          <p>
            We are designers, shoppers, and storytellers who love fashion and functional
            design. Together we create a seamless shopping experience for every look.
          </p>
        </div>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">A</div>
            <h4>Amy Carter</h4>
            <p>Creative Director</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">M</div>
            <h4>Marcus Lee</h4>
            <p>Product Curator</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">S</div>
            <h4>Sophia Chen</h4>
            <p>Customer Experience</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">R</div>
            <h4>Riya Singh</h4>
            <p>Operations Lead</p>
          </div>
        </div>
      </section>
    </div>
  );
};
