
// import React, { useState } from 'react';
// import png  from '../assets/gallery/1.png';

// const Gallery = () => {
//   const [lightboxSrc, setLightboxSrc] = useState(null);

//   const openLightbox = (src) => {
//     setLightboxSrc(src);
//   };

//   const closeLightbox = () => {
//     setLightboxSrc(null);
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>📸 صور من احتفالات الاستقلال</h2>

//       {/* top photo first row */}
//       <div style={styles.topImageWrapper}>
//         <img
//           src="/gallery/1.png"
//           alt="Top"
//           style={styles.topImage}
//           onClick={() => openLightbox('/gallery/1.png')}
//         />
//       </div>

//       {/* 2nd row */}
//       <div style={styles.row}>
//         <img
//           src="/gallery/2.png"
//           alt="3"
//           style={styles.image}
//           onClick={() => openLightbox('/gallery/2.png')}
//         />
//         <img
//           src="/gallery/3.png"
//           alt="4"
//           style={styles.image}
//           onClick={() => openLightbox('/gallery/3.png')}
//         />
//       </div>

//       {/* 3ed row */}
//       <div style={styles.row}>
//         <img
//           src="/gallery/4.png"
//           alt="4"
//           style={styles.image}
//           onClick={() => openLightbox('/gallery/4.png')}
//         />
//         <img
//           src="/gallery/5.png"
//           alt="5"
//           style={styles.image}
//           onClick={() => openLightbox('/gallery/5.png')}
//         />
//       </div>

//       {/* Lightbox */}
//       {lightboxSrc && (
//         <div style={styles.lightbox} onClick={closeLightbox}>
//           <img src={lightboxSrc} alt="Enlarged" style={styles.lightboxImage} />
//           <div style={styles.closeBtn} onClick={closeLightbox}>&times;</div>
//         </div>
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: '2rem',
//     textAlign: 'center',
//     backgroundColor: '#f9f9f9',
//     minHeight: '100vh',
//     fontFamily: "'Cairo', sans-serif",
//   },
//   title: {
//     fontSize: '2rem',
//     marginBottom: '1.5rem',
//   },
//   topImageWrapper: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginBottom: '2rem',
//   },
//   topImage: {
//     width: '80%', // more width
//     //maxWidth: '600px',
//     borderRadius: '10px',
//     cursor: 'pointer',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
//     transition: 'transform 0.3s ease',
//   },
//   row: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '1.5rem',
//     marginBottom: '1.5rem',
//     flexWrap: 'wrap',
//   },
//   image: {
//     width: '30%',
//     //maxWidth: '300px',
//     borderRadius: '10px',
//     cursor: 'pointer',
//     transition: 'transform 0.3s ease',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
//   },
//   // (hover)
//   imageHover: {
//     transform: 'scale(1.05)',
//   },

//   // Lightbox (zoom in when you click)
//   lightbox: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100vw',
//     height: '100vh',
//     backgroundColor: 'rgba(0,0,0,0.8)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   lightboxImage: {
//     maxWidth: '90%',
//     maxHeight: '90%',
//     borderRadius: '10px',
//   },
//   closeBtn: {
//     position: 'fixed',
//     top: 20,
//     right: 30,
//     fontSize: '3rem',
//     color: '#fff',
//     cursor: 'pointer',
//     userSelect: 'none',
//   },
// };

// export default Gallery;

// git version
import React, { useState } from 'react';
import img1 from '../assets/gallery/1.png';
import img2 from '../assets/gallery/2.png';
import img3 from '../assets/gallery/3.png';
import img4 from '../assets/gallery/4.png';
import img5 from '../assets/gallery/5.png';

const Gallery = () => {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const openLightbox = (src) => {
    setLightboxSrc(src);
  };

  const closeLightbox = () => {
    setLightboxSrc(null);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📸 صور من احتفالات الاستقلال</h2>

      {/* الصورة الرئيسية */}
      <div style={styles.topImageWrapper}>
        <img
          src={img1}
          alt="Top"
          style={styles.topImage}
          onClick={() => openLightbox(img1)}
        />
      </div>

      {/* الصف الثاني */}
      <div style={styles.row}>
        <img
          src={img2}
          alt="2"
          style={styles.image}
          onClick={() => openLightbox(img2)}
        />
        <img
          src={img3}
          alt="3"
          style={styles.image}
          onClick={() => openLightbox(img3)}
        />
      </div>

      {/* الصف الثالث */}
      <div style={styles.row}>
        <img
          src={img4}
          alt="4"
          style={styles.image}
          onClick={() => openLightbox(img4)}
        />
        <img
          src={img5}
          alt="5"
          style={styles.image}
          onClick={() => openLightbox(img5)}
        />
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div style={styles.lightbox} onClick={closeLightbox}>
          <img src={lightboxSrc} alt="Enlarged" style={styles.lightboxImage} />
          <div style={styles.closeBtn} onClick={closeLightbox}>&times;</div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    fontFamily: "'Cairo', sans-serif",
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
  topImageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  topImage: {
    width: '80%',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s ease',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
  },
  image: {
    width: '30%',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  },
  lightbox: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  lightboxImage: {
    maxWidth: '90%',
    maxHeight: '90%',
    borderRadius: '10px',
  },
  closeBtn: {
    position: 'fixed',
    top: 20,
    right: 30,
    fontSize: '3rem',
    color: '#fff',
    cursor: 'pointer',
    userSelect: 'none',
  },
};

export default Gallery;
