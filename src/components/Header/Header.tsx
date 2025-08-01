import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

 const handleNavClick = (id: string) => {
  setOpen(false);
  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerContainer}`}>
        <div className={styles.headerLogo}>
          <span className={styles.headerText}><button onClick={() => handleNavClick("hero")} className={styles.headerNavLink}>
            <img src="/Img/Logo/logo.png" alt="Logo" width={48} height={48} /></button></span>
        </div>
        <nav className={`${styles.headerNav} ${isOpen ? styles.active : ""}`}>
          <ul className={styles.headerNavList}>
            <li className={styles.headerNavItem}>
              <button onClick={() => handleNavClick("gallery")} className={styles.headerNavLink}>GALLERY</button>
            </li>
            <li className={styles.headerNavItem}>
              <button onClick={() => handleNavClick("projects")} className={styles.headerNavLink}>OUR PROJECT</button>
            </li>
            <li className={styles.headerNavItem}>
              <button onClick={() => handleNavClick("contacts")} className={styles.headerNavLink}>CONTACT US</button>
            </li>
            <li className={styles.headerNavItem}>
              <button onClick={() => handleNavClick("support")} className={styles.headerNavLink}>SUPPORT US</button>
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
