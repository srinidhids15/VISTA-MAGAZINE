'use client';

import styles from './MagazineViewer.module.css';

export default function MagazineViewer() {
  return (
    <div className={styles.root}>
      {/* Animated background blobs */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />
      <div className={styles.blob3} aria-hidden="true" />

      {/* ── Navbar ──────────────────────────────────────────────────────────── */}
      <nav className={styles.navbar}>
        <div className={styles.navBrand}>
          <div className={styles.navLogoWrap}>
            <img src="/logo.png" alt="Utkrsta '26" className={styles.navLogoImg} />
          </div>
        </div>

        <div className={styles.navPills}>
          <a href="#magazine" className={styles.navPill + ' ' + styles.navPillActive}>Magazine</a>
        </div>

        <div className={styles.navActions}>
          <button
            id="btn-fullscreen"
            className={styles.navBtn}
            onClick={() => {
              if (!document.fullscreenElement) document.documentElement.requestFullscreen();
              else document.exitFullscreen();
            }}
            title="Fullscreen (F)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Magazine Area ────────────────────────────────────────────────────── */}
      <main className={styles.main} id="magazine">
        <div className={styles.iframeContainer}>
          <iframe 
            src="https://player.flipsnack.com?hash=NTdGQ0M2RUQ3NUUrMTlhejhsanh1Mw==" 
            width="100%" 
            height="100%" 
            seamless="seamless" 
            scrolling="no" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-read; clipboard-write">
          </iframe>
        </div>
      </main>
    </div>
  );
}
