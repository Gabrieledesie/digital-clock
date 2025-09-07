import { Link } from 'react-router-dom';
   import Header from './Header';
   import Footer from './Footer';

   export default function Landing({ theme, setTheme }) {
     return (
       <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
         <Header theme={theme} setTheme={setTheme} />
         <main className="flex-grow flex flex-col items-center justify-center p-6 max-w-screen-md mx-auto">
           <h1 className="text-4xl md:text-5xl font-semibold">Digital Clock</h1>
           <p className="mt-1 text-lg md:text-xl text-gray-600">Track Your Time Easily</p>
           <div className="mt-6 flex flex-col items-center justify-center space-y-6">
             <div className="w-96 h-48 border-4 border-blue-300 bg-gray-200 rounded-lg flex items-center justify-center text-8xl md:text-9xl font-mono">
               10:30
             </div>
             <Link to="/dashboard">
               <button className="bg-blue-600 text-white rounded-lg px-8 py-3 font-semibold hover:bg-blue-700">
                 View Clock
               </button>
             </Link>
           </div>
         </main>
         <Footer />
       </div>
     );
   }