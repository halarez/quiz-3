import React, { useState } from 'react';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div style={{ minHeight: '100vh', width: '100%', backgroundColor: '#F7F5F2', color: '#0e0e0e' }}>
      {/* ─── NAV ─── */}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <div className={styles.logoRing}>R</div>
          <span className={styles.logoName}>Rymo</span>
        </div>

        <ul className={styles.navLinks}>
          <li>
            <button className={styles.active}>Dashboard</button>
          </li>
        </ul>

        <div className={styles.navRight}>
          <div className={styles.hamburger} onClick={toggleSidebar}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>

      {/* ─── MOBILE SIDEBAR ─── */}
      <div className={`${styles.mobileSidebar} ${sidebarOpen ? styles.open : ''}`}>
        <button onClick={toggleSidebar}>Dashboard</button>
      </div>

      <div className={`${styles.sidebarOverlay} ${sidebarOpen ? styles.show : ''}`} onClick={toggleSidebar} />
      <main style={{ paddingTop: '70px' }}>{children}</main>
    </div>
  );
};
