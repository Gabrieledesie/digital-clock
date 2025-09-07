import { useState } from 'react';
   import { BrowserRouter, Routes, Route } from 'react-router-dom';
   import Landing from './components/Landing';
   import Dashboard from './components/Dashboard';
   import About from './components/About';
   import Features from './components/Features';

   export default function App() {
     const [theme, setTheme] = useState('light');

     return (
       <BrowserRouter>
         <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
           <Routes>
             <Route path="/" element={<Landing theme={theme} setTheme={setTheme} />} />
             <Route path="/dashboard" element={<Dashboard theme={theme} setTheme={setTheme} />} />
             <Route path="/about" element={<About theme={theme} setTheme={setTheme} />} />
             <Route path="/features" element={<Features theme={theme} setTheme={setTheme} />} />
           </Routes>
         </div>
       </BrowserRouter>
     );
   }