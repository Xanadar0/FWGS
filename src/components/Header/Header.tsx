import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navRefs = {
    hero: useRef<HTMLButtonElement>(null),
    gallery: useRef<HTMLButtonElement>(null),
    projects: useRef<HTMLButtonElement>(null),
    contacts: useRef<HTMLButtonElement>(null),
    support: useRef<HTMLButtonElement>(null),
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "gallery", "projects", "contacts", "support"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target && (e.target as HTMLElement).tagName === "INPUT") return; // щоб не конфліктувати з input
      switch (e.key.toLowerCase()) {
        case "g":
          scrollToSection("gallery");
          break;
        case "o":
          scrollToSection("projects");
          break;
        case "c":
          scrollToSection("contacts");
          break;
        case "s":
          scrollToSection("support");
          break;
        case "f":
          scrollToSection("hero");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerContainer}`}>
        <div className={styles.headerLogo}>
          <span className={styles.headerText}>
            <button onClick={() => handleNavClick("hero")} className={styles.headerNavLink}>
              <img src="/Img/Logo/logo.png" alt="Logo" width={48} height={48} />
            </button>
          </span>
        </div>

        <nav className={`${styles.headerNav} ${isOpen ? styles.active : ""}`}>
          <ul className={styles.headerNavList}>
            <li>
              <button
                ref={navRefs.gallery}
                onClick={() => handleNavClick("gallery")}
                className={`${styles.headerNavLink} ${activeSection === "gallery" ? styles.active : ""}`}
              >
                GALLERY
              </button>
            </li>
            <li>
              <button
                ref={navRefs.projects}
                onClick={() => handleNavClick("projects")}
                className={`${styles.headerNavLink} ${activeSection === "projects" ? styles.active : ""}`}
              >
                OUR PROJECT
              </button>
            </li>
            <li>
              <button
                ref={navRefs.contacts}
                onClick={() => handleNavClick("contacts")}
                className={`${styles.headerNavLink} ${activeSection === "contacts" ? styles.active : ""}`}
              >
                CONTACT US
              </button>
            </li>
            <li>
              <button
                ref={navRefs.support}
                onClick={() => handleNavClick("support")}
                className={`${styles.headerNavLink} ${activeSection === "support" ? styles.active : ""}`}
              >
                SUPPORT US
              </button>
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
