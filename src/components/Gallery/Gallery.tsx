import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import styles from "./Gallery.module.css";
import images from '/src/data/imagesData.js';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default function Gallery() {
    const onInit = () => {
    };
  return (
        <section data-aos="fade-up">
         <div className="container">
      <h2  id="gallery" className="secondTitle">Gallery</h2>

      <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames={styles.galleryGrid}
            > 
        {images.map(({ src, alt }, idx) => (
          <a key={idx} href={src} data-sub-html={alt}>
            <img alt={alt} src={src}/>
          </a>
        ))}
      </LightGallery>
      </div>
    </section>
    );
}