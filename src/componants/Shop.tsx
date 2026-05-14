import React from 'react';
import styles from './Shop.module.css';

export const Shop: React.FC = () => {
  return (
    <>
      {/* ─── BANNER ─── */}
      <section className={styles.banner}>
        <div>
          <div className={styles.bannerEyebrow}>Summer Collection</div>
          <h1 className={styles.bannerH1}>Functional Minimalist Design</h1>
          <p className={styles.bannerSub}>
            Discover handcrafted furniture items matching utility with warm architectural aesthetics.
          </p>
          <div className={styles.bannerPills}>
            <button className={`${styles.pill} ${styles.active}`}>All Items</button>
            <button className={styles.pill}>New Arrivals</button>
            <button className={styles.pill}>Trending</button>
          </div>
        </div>
        <div className={styles.bannerStat}>
          <div>
            <div className={styles.statNum}>12k+</div>
            <div className={styles.statLabel}>Products Sold</div>
          </div>
          <div>
            <div className={styles.statNum}>4.9</div>
            <div className={styles.statLabel}>Customer Review</div>
          </div>
        </div>
      </section>

      {/* ─── LAYOUT BODY ─── */}
      <div className={styles.shopBody}>
        {/* SIDEBAR FILTER */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarSection}>
            <div className={styles.sidebarTitle}>Categories</div>
            <ul className={styles.sidebarLinks}>
              <li className={styles.active}>
                <button>All Products <span className={styles.sidebarCount}>48</span></button>
              </li>
              <li>
                <button>Chairs <span className={styles.sidebarCount}>12</span></button>
              </li>
              <li>
                <button>Tables <span className={styles.sidebarCount}>8</span></button>
              </li>
              <li>
                <button>Lighting <span className={styles.sidebarCount}>14</span></button>
              </li>
            </ul>
          </div>

          <div className={styles.sidebarSection}>
            <div className={styles.sidebarTitle}>Filter Price</div>
            <div className={styles.priceRange}>
              <input type="range" min="0" max="1000" defaultValue="500" />
              <div className={styles.priceLabels}>
                <span>$0</span>
                <span>$1000</span>
              </div>
            </div>
          </div>
        </aside>

        {/* PRODUCT GRID */}
        <main className={styles.main}>
          <div className={styles.secDivider}>
            <h2>Catalog / <em>All Items</em></h2>
            <div className={styles.divLine}></div>
            <div className={styles.divCount}>48 Items Available</div>
          </div>

          <div className={styles.grid}>
            {/* Example Card 1 */}
            <div className={styles.card}>
              <span className={`${styles.badge} ${styles.badgeNew}`}>New</span>
              <div className={styles.cardImgWrap}>
                <img src="unsplash.com" alt="Product" />
              </div>
              <div style={{ padding: '16px' }}>
                <h4 style={{ fontWeight: 500, fontSize: '15px' }}>Minimalist Lounge Chair</h4>
                <p style={{ color: '#888', fontSize: '13px', marginTop: '4px' }}>$340.00</p>
              </div>
            </div>

            {/* Example Card 2 */}
            <div className={styles.card}>
              <span className={`${styles.badge} ${styles.badgeSale}`}>Sale</span>
              <div className={styles.cardImgWrap}>
                <img src="unsplash.com" alt="Product" />
              </div>
              <div style={{ padding: '16px' }}>
                <h4 style={{ fontWeight: 500, fontSize: '15px' }}>Pendant Geometry Lamp</h4>
                <p style={{ color: '#888', fontSize: '13px', marginTop: '4px' }}>$180.00</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
