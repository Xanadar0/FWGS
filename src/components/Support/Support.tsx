import styles from './Support.module.css';

const developers = [
  {
    name: 'a1batross',
    role: 'Initial Xash3D SDL2/Linux port author, Xash3D FWGS engine maintainer, creator of non-commercial Flying With Gauss organization.',
    image: '/Img/developers/a1batross.png',
    links: [
        { type: 'Github', url: 'https://github.com/a1batross' },
        { type: 'Boosty', url: 'https://boosty.to/a1ba' },
    ],
  },
  {
    name: 'nekonomicon',
    role: [
      { text: 'hlsdk-portable', url: 'https://github.com/FWGS/hlsdk-portable' },
      ', ',
      { text: 'mdldec', url: 'https://raw.githubusercontent.com/FWGS/xash3d-fwgs/master/utils/mdldec' },
      ', ',
      { text: 'opensource-mods.md', url: 'https://raw.githubusercontent.com/FWGS/xash3d-fwgs/master/Documentation/opensource-mods.md' },
      ' maintainer and Xash3D FWGS ',
      { text: 'contributor', url: 'https://github.com/FWGS/xash3d-fwgs/commits?author=nekonomicon' },
      ' (*BSD/clang port, PNG support, etc).'
    ],
    image: '/Img/developers/nekonomicon.png',
    links: [
        { type: 'Github', url: 'https://github.com/nekonomicon' },
        { type: 'Boosty', url: 'https://boosty.to/nekonomicon' },
    ],
  },
  {
    name: 'Velaron',
    role: [
    { text: 'cs16-client', url: 'https://github.com/Velaron/cs16-client' },
    ' & ',
    { text: 'tf15-client', url: 'https://github.com/Velaron/tf15-client' },
    ' maintainer and Xash3D FWGS ',
    { text: 'contributor', url: 'https://github.com/FWGS/xash3d-fwgs/commits?author=Velaron' },
    ' (Android port, voice chat, etc).'
  ],
    image: '/Img/developers/Velaron.png',
    links: [
        { type: 'Github', url: 'https://github.com/Velaron' },
        { type: 'Boosty', url: 'https://boosty.to/velaron' },
    ],
  },
  {
    name: 'SNMetamorph',
    role: [
    { text: 'PrimeXT', url: 'https://github.com/SNMetamorph/PrimeXT' },
    ' & ',
    { text: 'GoldSrc Monitor', url: 'https://github.com/SNMetamorph/goldsrc-monitor' },
    ' maintainer and Xash3D FWGS ',
    { text: 'contributor', url: 'https://github.com/FWGS/xash3d-fwgs/commits?author=SNMetamorph' },
    ' (Windows port, voice chat, etc).'
  ],
    image: '/Img/developers/SNMetamorph.png',
    links: [
        { type: 'Github', url: 'https://github.com/SNMetamorph' },
        { type: 'Boosty', url: 'https://boosty.to/snmetamorph' },
        { type: 'Donate', url: 'https://snmetamorph.github.io/donate/'},
    ],
  },
];

export default function Support() {
  return (
    <section data-aos="fade-up" className={styles.supportSection}>
      <div className="container">
        <h2 id="support" className="secondTitle">Support Us</h2>
        <div className={styles.cardGrid}>
          {developers.map((dev, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.avatarWrapper}>
                <img src={dev.image} alt={dev.name} className={styles.avatar} />
              </div>
              <h3>{dev.name}</h3>
              <p>
                {Array.isArray(dev.role)
                  ? dev.role.map((part, i) =>
                      typeof part === 'string' ? (
                        <span key={i}>{part}</span>
                      ) : (
                        <a
                          key={i}
                          href={part.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.roleLink}
                        >
                          {part.text}
                        </a>
                      )
                    )
                  : dev.role
                }
              </p>
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
