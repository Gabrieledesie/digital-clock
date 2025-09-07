import { useState, useEffect } from 'react';
   import { DateTime } from 'luxon';
   import Header from './Header';
   import Footer from './Footer';
   import SettingsModal from './SettingsModal';

   export default function Dashboard({ theme, setTheme }) {
     const [currentTime, setCurrentTime] = useState(DateTime.now());
     const [isSettingsOpen, setIsSettingsOpen] = useState(false);
     const [settings, setSettings] = useState({
       timeFormat: '12-hour',
       theme: 'light',
       timeZone: 'Europe/London',
       showDate: true,
     });

     useEffect(() => {
       const timer = setInterval(() => {
         setCurrentTime(DateTime.now());
       }, 1000);
       return () => clearInterval(timer);
     }, []);

     useEffect(() => {
       setTheme(settings.theme);
     }, [settings.theme, setTheme]);

     const localizedTime = currentTime.setZone(settings.timeZone);
     const formattedTime = localizedTime.toFormat(settings.timeFormat === '12-hour' ? 'hh:mm:ss' : 'HH:mm:ss');
     const formattedPeriod = settings.timeFormat === '12-hour' ? localizedTime.toFormat('a') : '';
     const formattedDate = localizedTime.toFormat('EEEE, MMMM d, yyyy');

     return (
       <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
         <Header theme={theme} setTheme={setTheme} />
         <main className="flex-grow flex flex-col items-center justify-center p-6 max-w-screen-md mx-auto">
           <h1 className="text-lg md:text-xl font-semibold">Digital Clock Dashboard</h1>
           <div className="mt-6 flex flex-col items-center justify-center space-y-4">
             <div className="flex items-center text-6xl md:text-7xl font-mono font-semibold leading-none">
               <span>{formattedTime}</span>
               <span className="text-2xl md:text-3xl ml-2 self-end">{formattedPeriod}</span>
             </div>
             {settings.showDate && (
               <div className="text-xl md:text-2xl text-gray-700">{formattedDate}</div>
             )}
             <button
               onClick={() => setIsSettingsOpen(true)}
               className="mt-6 bg-blue-600 text-white rounded-lg px-8 py-3 font-semibold hover:bg-blue-700"
             >
               Settings
             </button>
           </div>
         </main>
         {isSettingsOpen && (
           <SettingsModal
             currentSettings={settings}
             onSave={setSettings}
             onClose={() => setIsSettingsOpen(false)}
           />
         )}
         <Footer />
       </div>
     );
   }