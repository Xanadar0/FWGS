import styles from './Support.module.css';

const developers = [
  {
    name: 'a1batross',
    role: 'Initial Xash3D SDL2/Linux port author, Xash3D FWGS engine maintainer, creator of non-commercial Flying With Gauss organization.',
    image: '/Img/developers/a1batross.png',
    links: [
        { type: 'Github', url: 'https://github.com/a1batross' },
        { type: 'Donate', url: 'https://boosty.to/a1ba' },
    ],
  },
  {
    name: 'nekonomicon',
    role: 'hlsdk-portable, mdldec, opensource-mods.md maintainer and Xash3D FWGS contributor (*BSD/clang port, PNG support, etc).',
    image: '/Img/developers/nekonomicon.png',
    links: [
        { type: 'Github', url: 'https://github.com/nekonomicon' },
        { type: 'Donate', url: 'https://boosty.to/nekonomicon' },
    ],
  },
  {
    name: 'Velaron',
    role: 'cs16-client & tf15-client maintainer and Xash3D FWGS contributor (Android port, voice chat, etc).',
    image: '/Img/developers/Velaron.png',
    links: [
        { type: 'Github', url: 'https://github.com/Velaron' },
        { type: 'Donate', url: 'https://boosty.to/velaron' },
    ],
  },
  {
    name: 'SNMetamorph',
    role: 'PrimeXT & GoldSrc Monitor maintainer and Xash3D FWGS contributor (Windows port, voice chat, etc).',
    image: '/Img/developers/SNMetamorph.png',
    links: [
        { type: 'Github', url: 'https://github.com/SNMetamorph' },
        { type: 'Donate', url: 'https://boosty.to/snmetamorph' },
        { type: 'Donate2', url: 'https://snmetamorph.github.io/donate/'},
    ],
  },
];

export default function Support() {
  return (
    <section id="support" className={styles.supportSection}>
  <div className="container">
    <h2 className="secondTitle">Support Us</h2>
    <div className={styles.cardGrid}>
      {developers.map((dev, idx) => (
        <div key={idx} className={styles.card}>
          <div className={styles.avatarWrapper}>
          <img src={dev.image} alt={dev.name} className={styles.avatar} />
          </div>
          <h3>{dev.name}</h3>
          <p>{dev.role}</p>
          <div className={styles.links}>
            {dev.links.map(({ type, url }) => (
              <a key={type} href={url} target="_blank" rel="noopener noreferrer">
                {type}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}
