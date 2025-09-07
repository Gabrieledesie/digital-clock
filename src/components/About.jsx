import Header from './Header';
   import Footer from './Footer';

   export default function About({ theme, setTheme }) {
     return (
       <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
         <Header theme={theme} setTheme={setTheme} />
         <main className="flex-grow flex flex-col items-center justify-center p-4 max-w-screen-md mx-auto">
           <h1 className="text-3xl md:text-4xl font-bold mb-4">About Digital Clock</h1>
           <p className="text-base md:text-lg text-center text-gray-700">
             Digital Clock is a user-friendly timekeeping application designed to help you track time effortlessly. Built with modern web technologies, it offers a sleek interface, customizable settings, and reliable performance across devices.
           </p>
         </main>
         <Footer />
       </div>
     );
   }