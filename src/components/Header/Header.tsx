import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setOpen] = useState();

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerContainer}`}>
        <div className={styles.headerLogo}>
          <span className={styles.headerText}>FWGS</span>
        </div>

        <nav className={`${styles.headerNav} ${isOpen ? styles.active : ""}`}>
          <ul className={styles.headerNavList}>
            <li className={styles.headerNavItem}>
              <a href="#gallery" className={styles.headerNavLink}>GALLERY</a>
            </li>
            <li className={styles.headerNavItem}>
              <a href="#project" className={styles.headerNavLink}>OUR PROJECT</a>
            </li>
            <li className={styles.headerNavItem}>
              <a href="#contacts" className={styles.headerNavLink}>CONTACT US</a>
            </li>
            <li className={styles.headerNavItem}>
              <a href="#support" className={styles.headerNavLink}>SUPPORT US</a>
            </li>
          </ul>
        </nav>

        <button
          className={`${styles.burgerButton} ${isOpen ? styles.open : ""}`}
          onClick={() => setOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
