import Header from './Header';
   import Footer from './Footer';

   export default function Features({ theme, setTheme }) {
     return (
       <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
         <Header theme={theme} setTheme={setTheme} />
         <main className="flex-grow flex flex-col items-center justify-center p-4 max-w-screen-md mx-auto">
           <h1 className="text-3xl md:text-4xl font-bold mb-4">Features</h1>
           <ul className="text-base md:text-lg text-gray-700 list-disc text-left">
             <li>Real-time clock with customizable time formats (12-hour/24-hour).</li>
             <li>Support for multiple time zones, adjustable via settings.</li>
             <li>Dark and light theme options for comfortable viewing.</li>
             <li>Responsive design for seamless use on mobile and desktop devices.</li>
             <li>Login and Sign-up modals for future user authentication.</li>
           </ul>
         </main>
         <Footer />
       </div>
     );
   }