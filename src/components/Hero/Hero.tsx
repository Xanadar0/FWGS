import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <img src="/Img/Logo/logo.png" alt="Logo" className={styles.heroLogo} />
        <h1 className={styles.heroSubtitle}>All old is crossplatform again</h1>
      </div>
    </section>
  );
}
