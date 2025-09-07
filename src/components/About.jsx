import Header from './Header';
import Footer from './Footer';

export default function About({ theme, setTheme }) {
  return (
    <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="flex-grow flex items-center justify-center p-4 max-w-screen-md mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">About Digital Clock</h1>
      </div>
      <Footer />
    </div>
  );
}