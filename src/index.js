// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// استيراد من MUI
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  // تقدر تعدل الثيم هنا لو حبيت
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
