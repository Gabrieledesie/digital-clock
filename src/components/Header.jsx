import { useState } from 'react';
   import { Link, useLocation } from 'react-router-dom';
   import { DateTime } from 'luxon';
   import Login from './Login';
   import SignUp from './SignUp';

   export default function Header({ theme, setTheme }) {
     const location = useLocation();
     const isDashboard = location.pathname === '/dashboard';
     const now = DateTime.now().setZone('Africa/Lagos').toFormat('HH:mm');
     const [isLoginOpen, setIsLoginOpen] = useState(false);
     const [isSignUpOpen, setIsSignUpOpen] = useState(false);

     return (
       <>
         <header id="main-header" className={`p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} border-b border-gray-200`}>
           <div className="container mx-auto flex justify-between items-center">
             <div>
               <div className="flex items-center space-x-2 text-sm md:text-base">
                 <span>{now}</span>
                 <span>📶 📡 🔋 75% 🔵</span>
               </div>
               <h1 className="text-xl md:text-2xl font-bold">Digital Clock</h1>
             </div>
             <nav className="flex items-center space-x-4 md:space-x-6">
               <Link to="/" className="text-base text-gray-700 hover:text-blue-500">Home</Link>
               <Link to="/about" className="text-base text-gray-700 hover:text-blue-500">About</Link>
               <Link to="/features" className="text-base text-gray-700 hover:text-blue-500">Features</Link>
               {isDashboard ? (
                 <button
                   onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                   className="text-base text-gray-700 hover:text-blue-500"
                 >
                   {theme === 'dark' ? '☀ Light' : '🌙 Dark'}
                 </button>
               ) : (
                 <>
                   <button
                     onClick={() => setIsLoginOpen(true)}
                     className="text-base text-blue-500 hover:text-blue-600"
                   >
                     Login
                   </button>
                   <button
                     onClick={() => setIsSignUpOpen(true)}
                     className="text-base bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
                   >
                     Sign Up
                   </button>
                 </>
               )}
             </nav>
           </div>
         </header>
         {isLoginOpen && <Login onClose={() => setIsLoginOpen(false)} />}
         {isSignUpOpen && <SignUp onClose={() => setIsSignUpOpen(false)} />}
       </>
     );
   }