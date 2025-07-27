import styles from './Contacts.module.css';
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa';

export default function Contacts() {
  return (
    <section id="contacts" className={styles.contactSection}>
      <div className="container">
        <h2 className="secondTitle">Contact Us</h2>

        <div className={styles.socialLinks}>
          <a
            href="https://discord.com/invite/G8eGs7DvYn"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.discord}
          >
            <FaDiscord size={24} />
             Join us on Discord
          </a>

          <a
            href="https://t.me/flyingwithgauss"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.telegram}
          >
            <FaTelegramPlane size={24} />
             Follow in Telegram
          </a>
        </div>

        <div className={styles.iframeWrapper}>
          <iframe
            src="https://discordapp.com/widget?id=355697768582610945&theme=dark"
            width="100%"
            height="400"
            allowTransparency={true}
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            title="Discord Widget"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
