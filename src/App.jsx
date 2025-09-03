import { useState, useEffect } from 'react'
import { DateTime } from 'luxon'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [times, setTimes] = useState({
    wat: DateTime.now().setZone('Africa/Lagos').toFormat('HH:mm:ss'),
    est: DateTime.now().setZone('America/New_York').toFormat('HH:mm:ss'),
    pst: DateTime.now().setZone('America/Los_Angeles').toFormat('HH:mm:ss')
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setTimes({
        wat: DateTime.now().setZone('Africa/Lagos').toFormat('HH:mm:ss'),
        est: DateTime.now().setZone('America/New_York').toFormat('HH:mm:ss'),
        pst: DateTime.now().setZone('America/Los_Angeles').toFormat('HH:mm:ss')
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`min-h-screen ${isMenuOpen ? 'dark bg-darkBg text-textDark' : 'bg-lightBg text-textLight'} flex flex-col`}>
      {/* Header with Hamburger Menu */}
      <header className="flex justify-between items-center p-4 md:p-6 bg-lightBg dark:bg-darkBg border-b border-border">
        <h1 className="text-mobile-lg md:text-desktop-lg font-semibold">Clock Dashboard</h1>
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
        <h2 className="text-mobile-xl md:text-desktop-xl font-semibold text-center mb-6">Global Time Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl w-full">
          <div className="bg-lightBg dark:bg-darkBg border border-border rounded-md p-4 text-center">
            <h3 className="text-mobile-lg md:text-desktop-lg font-medium mb-2">Lagos (WAT)</h3>
            <p className="text-mobile-xl md:text-desktop-xl font-semibold">{times.wat}</p>
          </div>
          <div className="bg-lightBg dark:bg-darkBg border border-border rounded-md p-4 text-center">
            <h3 className="text-mobile-lg md:text-desktop-lg font-medium mb-2">New York (EST)</h3>
            <p className="text-mobile-xl md:text-desktop-xl font-semibold">{times.est}</p>
          </div>
          <div className="bg-lightBg dark:bg-darkBg border border-border rounded-md p-4 text-center">
            <h3 className="text-mobile-lg md:text-desktop-lg font-medium mb-2">Los Angeles (PST)</h3>
            <p className="text-mobile-xl md:text-desktop-xl font-semibold">{times.pst}</p>
          </div>
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:shadow-hover mt-6">
          Add Time Zone
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