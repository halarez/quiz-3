import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Mainlayout.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="mainlayout-wrapper">
      <nav className="nav">
        <Link to="/" className="logo">
          <div className="logo-ring">R</div>
          <span className="logo-name">Rymo</span>
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/shop" className="nav-link">Shop</Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">Cart</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/account" className="nav-link">Payment</Link>
          </li>
        </ul>

        <div className="nav-right">
          <div className="hamburger" onClick={toggleSidebar}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>

      <div className={`mobile-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link>
        <Link to="/shop" onClick={() => setSidebarOpen(false)}>Shop</Link>
        <Link to="/cart" onClick={() => setSidebarOpen(false)}>Cart</Link>
        <Link to="/about" onClick={() => setSidebarOpen(false)}>About</Link>
        <Link to="/account" onClick={() => setSidebarOpen(false)}>Payment</Link>
      </div>

      <div 
        className={`sidebar-overlay ${sidebarOpen ? 'show' : ''}`} 
        onClick={toggleSidebar} 
      />
      
      <main className="mainlayout-content">{children}</main>
    </div>
  );
};
