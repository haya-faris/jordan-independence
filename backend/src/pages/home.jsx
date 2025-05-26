// import React from 'react';
// import JordanFlag from '../components/jordanFlag';

// const Home = () => {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}> كل عام والأردن بخير </h1>
//       <p style={styles.subtitle}>نحتفل اليوم بعيد الاستقلال الأردني بكل فخر ومحبة!</p>
//       <JordanFlag />
//       {/* <button style={styles.button} onClick={() => alert('لنضيف المزيد من الصفحات قريباً!')}>
//         تعرف على المزيد
//       </button> */}
//       <button
//         style={styles.button}
//         onClick={() => window.open('https://ar.wikipedia.org/wiki/%D8%A7%D8%B3%D8%AA%D9%82%D9%84%D8%A7%D9%84_%D8%A7%D9%84%D8%A3%D8%B1%D8%AF%D9%86', '_blank')}
//       >
//         تعرف على المزيد
//       </button>

//     </div>
//   );
// };

// const styles = {
//   container: {
//     background: 'linear-gradient(135deg, #007A3D 0%, #fff 50%, #CE1126 100%)',
//     color: '#000',
//     textAlign: 'center',
//     //padding: '1rem',
//     fontFamily: "'Cairo', sans-serif",
//     minHeight: '90vh',
//   },
//   title: {
//     fontSize: '2rem',
//     // marginBottom: '1rem',
//   },
//   subtitle: {
//     fontSize: '1.5rem',
//     //marginBottom: '2rem',
//   },
// button: {
//   backgroundColor: '#000',
//   color: '#fff',
//   border: 'none',
//   padding: '1rem 2rem',
//   fontSize: '1.2rem',
//   borderRadius: '8px',
//   cursor: 'pointer',
//   transition: 'all 0.3s ease-in-out',
//   marginTop: '1rem',
// },
// buttonHover: {
//   backgroundColor: '#444',
// },
// };

// export default Home;

import React from 'react';
import JordanFlag from '../components/jordanFlag';

// MUI
import { Box, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #007A3D 0%, #fff 50%, #CE1126 100%)',
        color: '#000',
        textAlign: 'center',
        fontFamily: "'Cairo', sans-serif",
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 0, // padding x 
        py: 0, // padding y 
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        كل عام والأردن بخير
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        نحتفل اليوم بعيد الاستقلال الأردني بكل فخر ومحبة!
      </Typography>

      <JordanFlag />

      <Button
        variant="contained"
        color="primary"
        sx={{
          mt: 3,
          px: 4,
          py: 1.5,
          fontSize: '1.2rem',
          borderRadius: 2,
          backgroundColor: '#000',
          '&:hover': {
            backgroundColor: '#444',
          },
        }}
        onClick={() =>
          window.open(
            'https://ar.wikipedia.org/wiki/%D8%A7%D8%B3%D8%AA%D9%82%D9%84%D8%A7%D9%84_%D8%A7%D9%84%D8%A3%D8%B1%D8%AF%D9%86',
            '_blank'
          )
        }
      >
        تعرف على المزيد
      </Button>
    </Box>
  );
};

export default Home;

