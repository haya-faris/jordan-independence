// // src/components/JordanFlag.jsx
// import React from 'react';

// const JordanFlag = () => {
//   return (
//     <div style={styles.flag}>
//       <div style={styles.blackStripe}></div>
//       <div style={styles.whiteStripe}></div>
//       <div style={styles.greenStripe}></div>
//       <div style={styles.redTriangle}>
//         <div style={styles.star}>★</div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   flag: {
//     position: 'relative',
//     width: '320px',
//     height: '200px',
//     display: 'flex',
//     flexDirection: 'column',
//     borderRadius: '12px',
//     overflow: 'hidden',
//     boxShadow: '0 0 15px rgba(0,0,0,0.3)',
//   },
//   blackStripe: {
//     backgroundColor: '#000000',
//     flex: 1,
//   },
//   whiteStripe: {
//     backgroundColor: '#FFFFFF',
//     flex: 1,
//   },
//   greenStripe: {
//     backgroundColor: '#007A3D',
//     flex: 1,
//   },
//   redTriangle: {
//     position: 'absolute',
//     top: 0,
//     left: 200,
//     width: 0,
//     height: 0,
//     borderTop: '100px solid transparent',
//     borderBottom: '100px solid transparent',
//     borderRight: '140px solid #CE1126',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   star: {
//     position: 'absolute',
//     color: '#fff',
//     fontSize: '40px',
//     top: '50%',
//     left: '70px',
//     transform: 'translateY(-50%)',
//     fontWeight: '900',
//     filter: 'drop-shadow(0 0 1px black)',
//   },
// };

// export default JordanFlag;

import React from 'react';

const JordanFlag = () => {
  return (
    <div style={styles.container}>
      <img src="/JORDAN.jpg" alt="Jordan Left" style={styles.leftImage} />
      {/* <img src="/jo.jpg" alt="Jordan Right" style={styles.rightImage} /> */}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    flexWrap: 'wrap', //Let it go to a new line on small screens
  },
  leftImage: {
    width: '45%',
    maxWidth: '400px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  },
  rightImage: {
    width: '45%',
    maxWidth: '400px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  },
};

export default JordanFlag;
