import styles from './Footer.module.css';
import {
  FaMastodon,
  FaTelegram,
  FaGithub,
  FaVk,
  FaEnvelope,
  FaWrench,
  FaGit,
  FaBug 
} from 'react-icons/fa';
import { SiGitea } from "react-icons/si";
import { IoLogoOctocat, IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.footerContainer}>Email: <a href="mailto:contact@fwgs.ru">contact@fwgs.ru</a></p>
        <div className={styles.socialLinks}>
          <a href="https://masturbated.one/explore" target="_blank" rel="noopener noreferrer" title="Mastodon">
            <FaMastodon />
          </a>
          <a href="https://suya.place/about" target="_blank" rel="noopener noreferrer" title="Akkoma">
            <IoLogoOctocat />
          </a>
          <a href="https://www.moddb.com/company/fwg" target="_blank" rel="noopener noreferrer" title="ModDB">
            <FaWrench  />
          </a>
          <a href="https://vk.com/fwgs.testing" target="_blank" rel="noopener noreferrer" title="VK">
            <FaVk />
          </a>
          <a href="https://t.me/flyingwithgauss" target="_blank" rel="noopener noreferrer" title="Telegram">
            <FaTelegram />
          </a>
          <a href="https://github.com/FWGS" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://git.mentality.rip/FWGS" target="_blank" rel="noopener noreferrer" title="Gitea">
            <SiGitea />
          </a>
          <a href="https://git.sr.ht/~a1batross" target="_blank" rel="noopener noreferrer" title="SourceHut Git">
           <FaGit />
          </a>
          <a href="https://todo.sr.ht/~a1batross" target="_blank" rel="noopener noreferrer" title="SourceHut Issue Tracker">
            <FaBug />
          </a>
          <a href="https://lists.sr.ht/~a1batross" target="_blank" rel="noopener noreferrer" title="SourceHut Mailing List">
            <IoMdMail />
          </a>
        </div>
      </div>
    </footer>
  );
}
