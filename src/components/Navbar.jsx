// // src/components/Navbar.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav style={styles.nav}>
//       <ul style={styles.ul}>
//         <li><Link style={styles.link} to="/">الرئيسية</Link></li>
//         <li><Link style={styles.link} to="/history">نبذة عن الاستقلال</Link></li>
//         <li><Link style={styles.link} to="/gallery">المعرض</Link></li>
//         <li><Link style={styles.link} to="/messages">رسائل وطنية</Link></li>
//       </ul>
//     </nav>
//   );
// };

// const styles = {
//   nav: {
//     backgroundColor: '#007A3D',
//     padding: '1rem 2rem',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//   },
//   ul: {
//     listStyle: 'none',
//     display: 'flex',
//     gap: '1.5rem',
//     justifyContent: 'center',
//     margin: 0,
//     padding: 0,
//   },
//   link: {
//     color: '#fff',
//     textDecoration: 'none',
//     fontSize: '1.1rem',
//     fontWeight: '600',
//   }
// };

// export default Navbar;

//mui version 
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// استيراد مكونات MUI
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#007A3D', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Toolbar sx={{ justifyContent: 'center', gap: 4 }}>
        <Button
          component={RouterLink}
          to="/"
          sx={{
            color: '#fff',
            fontWeight: 600,
            fontSize: '1.1rem',
            textTransform: 'none',
            '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
          }}
        >
          الرئيسية
        </Button>
        <Button
          component={RouterLink}
          to="/history"
          sx={{
            color: '#fff',
            fontWeight: 600,
            fontSize: '1.1rem',
            textTransform: 'none',
            '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
          }}
        >
          نبذة عن الاستقلال
        </Button>
        <Button
          component={RouterLink}
          to="/gallery"
          sx={{
            color: '#fff',
            fontWeight: 600,
            fontSize: '1.1rem',
            textTransform: 'none',
            '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
          }}
        >
          المعرض
        </Button>
        <Button
          component={RouterLink}
          to="/messages"
          sx={{
            color: '#fff',
            fontWeight: 600,
            fontSize: '1.1rem',
            textTransform: 'none',
            '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
          }}
        >
          رسائل وطنية
        </Button>

        <Button
          component={RouterLink}
          to="/kings-quotes"
          sx={{
              color: '#fff',
              fontWeight: 600,
              fontSize: '1.1rem',
              textTransform: 'none',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
          }}
          >
            اقتباسات الملوك
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

