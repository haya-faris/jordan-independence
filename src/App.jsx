// import React from 'react';

// function App() {
//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '700px', margin: '2rem auto', padding: '1rem', textAlign: 'center', backgroundColor: '#f4f4f4', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      
//       {/* Header */}
//       <header style={{ marginBottom: '2rem' }}>
//         <img 
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/320px-Flag_of_Jordan.svg.png" 
//           alt="علم الأردن" 
//           style={{ width: '150px', marginBottom: '1rem', borderRadius: '10px', boxShadow: '0 0 5px rgba(0,0,0,0.3)' }}
//         />
//         <h1 style={{ color: '#1D4E89', fontSize: '2.5rem' }}>عيد الاستقلال الأردني 🇯🇴</h1>
//       </header>

//       {/* معلومات */}
//       <section style={{ fontSize: '1.2rem', color: '#333', lineHeight: '1.6' }}>
//         <p>
//           نحتفل اليوم بذكرى الاستقلال الأردني، الذي يمثل بداية عهد جديد من الحرية والسيادة، 
//           وهو مناسبة نفتخر بها جميعاً ونتذكر فيها تضحيات الأجداد الذين بذلوا الغالي والنفيس من أجل وطننا العزيز.
//         </p>
//       </section>

//     </div>
//   );
// }

// export default App;
// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import History from './pages/History';
import Gallery from './pages/Gallery';
import Messages from './pages/Messages';
import KingsQuotes from './pages/KingsQuotes';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/kings-quotes" element={<KingsQuotes />} /> 
        
      </Routes>
    </Router>
  );
};


export default App;
