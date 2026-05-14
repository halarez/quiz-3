import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export const Home: React.FC = () => {
  return (
    <div className="home-page">
      <aside className="home-sidebar">
        <div className="sidebar-brand">
          <div className="brand-ring">R</div>
          <div>
            <p className="brand-label">Rymo</p>
            <span className="brand-subtitle">Dashboard</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <Link to="/" className="sidebar-link active">Home</Link>
          <Link to="/shop" className="sidebar-link">Shop</Link>
          <button className="sidebar-link">Cart</button>
          <button className="sidebar-link">About</button>
          <button className="sidebar-link">Account</button>
        </nav>

        <div className="sidebar-footer">
          <p>Logged in as</p>
          <strong>Guest User</strong>
        </div>
      </aside>

      <main className="home-main">
        <section className="home-hero">
          <div>
            <p className="hero-eyebrow">Welcome back</p>
            <h1 className="hero-title">Your store is ready.</h1>
            <p className="hero-copy">
              Browse the latest updates, manage orders, and explore the shop from a single dashboard.
            </p>
            <div className="hero-actions">
              <Link to="/shop" className="hero-button">Go to Shop</Link>
              <button className="hero-secondary">View Cart</button>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-title">Sales Overview</div>
            <div className="hero-card-value">$12,480</div>
            <p className="hero-card-text">Last 7 days performance</p>
          </div>
        </section>

        <section className="home-widgets">
          <div className="widget-card">
            <h2>New orders</h2>
            <p>32 orders placed today</p>
          </div>
          <div className="widget-card">
            <h2>Visitors</h2>
            <p>4.8k visits this week</p>
          </div>
          <div className="widget-card">
            <h2>Revenue</h2>
            <p>Up 18% from last week</p>
          </div>
        </section>

        <section className="home-cards">
          <article className="home-card">
            <h3>Recent Activity</h3>
            <p>New user sign-ups, recent purchases, and latest product updates appear here.</p>
          </article>
          <article className="home-card">
            <h3>Quick Actions</h3>
            <ul>
              <li>Update profile</li>
              <li>Manage orders</li>
              <li>Open shop page</li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
};
