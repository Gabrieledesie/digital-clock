import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={`min-h-screen ${isMenuOpen ? 'dark bg-darkBg text-textDark' : 'bg-lightBg text-textLight'} flex flex-col`}>
      {/* Header with Hamburger Menu */}
      <header className="flex justify-between items-center p-4 md:p-6 bg-lightBg dark:bg-darkBg border-b border-border">
        <h1 className="text-mobile-lg md:text-desktop-lg font-semibold">Digital Clock</h1>
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-4 absolute md:static top-14 left-0 right-0 bg-lightBg dark:bg-darkBg p-4 md:p-0`}>
          <a href="#" className="text-mobile-base md:text-desktop-base hover:text-primary">Home</a>
          <a href="#" className="text-mobile-base md:text-desktop-base hover:text-primary">About</a>
          <a href="#" className="text-mobile-base md:text-desktop-base hover:text-primary">Settings</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-0">
        <h2 className="text-mobile-xl md:text-desktop-xl font-semibold text-center mb-4">Welcome to Digital Clock</h2>
        <p className="text-mobile-base md:text-desktop-base text-center mb-6 max-w-md">
          A modern, responsive clock dashboard to track time across multiple zones with a sleek design.
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:shadow-hover">
          Explore Now
        </button>
      </main>

      {/* Footer */}
      <footer className="p-4 md:p-6 text-center text-mobile-sm md:text-desktop-sm text-gray">
        &copy; 2025 Digital Clock. All rights reserved.
      </footer>
    </div>
  )
}
export default App