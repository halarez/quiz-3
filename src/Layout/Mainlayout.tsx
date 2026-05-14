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
            <Link to="/" className="nav-link">Dashboard</Link>
          </li>
          <li>
            <Link to="/shop" className="nav-link">Shop</Link>
          </li>
        </ul>

        <div className="nav-right">
          <div className="hamburger" onClick={toggleSidebar}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>

      <div className={`mobile-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setSidebarOpen(false)}>Dashboard</Link>
        <Link to="/shop" onClick={() => setSidebarOpen(false)}>Shop</Link>
      </div>

      <div 
        className={`sidebar-overlay ${sidebarOpen ? 'show' : ''}`} 
        onClick={toggleSidebar} 
      />
      
      <main className="mainlayout-content">{children}</main>
    </div>
  );
};
