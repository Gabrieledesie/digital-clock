import { useState, useEffect } from 'react'
import { DateTime } from 'luxon'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [timeZones, setTimeZones] = useState([
    { id: 1, zone: 'Africa/Lagos', label: 'Lagos (WAT)' },
    { id: 2, zone: 'America/New_York', label: 'New York (EST)' },
    { id: 3, zone: 'America/Los_Angeles', label: 'Los Angeles (PST)' }
  ])
  const [times, setTimes] = useState({})
  const [newZone, setNewZone] = useState('')

  // Available time zones for dropdown
  const availableZones = [
    { zone: 'Africa/Lagos', label: 'Lagos (WAT)' },
    { zone: 'America/New_York', label: 'New York (EST)' },
    { zone: 'America/Los_Angeles', label: 'Los Angeles (PST)' },
    { zone: 'Europe/London', label: 'London (GMT)' },
    { zone: 'Asia/Tokyo', label: 'Tokyo (JST)' },
    { zone: 'Australia/Sydney', label: 'Sydney (AEDT)' }
  ]

  // Update times every second
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimes = {}
      timeZones.forEach(({ zone }) => {
        updatedTimes[zone] = DateTime.now().setZone(zone).toFormat('HH:mm:ss')
      })
      setTimes(updatedTimes)
    }, 1000)
    return () => clearInterval(interval)
  }, [timeZones])

  // Add new time zone
  const addTimeZone = () => {
    if (newZone && !timeZones.find(tz => tz.zone === newZone)) {
      const zoneData = availableZones.find(z => z.zone === newZone)
      if (zoneData) {
        setTimeZones([...timeZones, { id: Date.now(), zone: zoneData.zone, label: zoneData.label }])
        setNewZone('')
      }
    }
  }

  // Remove time zone
  const removeTimeZone = (id) => {
    setTimeZones(timeZones.filter(tz => tz.id !== id))
  }

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
          {timeZones.map(({ id, zone, label }) => (
            <div key={id} className="bg-lightBg dark:bg-darkBg border border-border rounded-md p-4 text-center relative">
              <h3 className="text-mobile-lg md:text-desktop-lg font-medium mb-2">{label}</h3>
              <p className="text-mobile-xl md:text-desktop-xl font-semibold">{times[zone] || '00:00:00'}</p>
              <button
                className="absolute top-2 right-2 text-gray hover:text-primary"
                onClick={() => removeTimeZone(id)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 max-w-md w-full">
          <select
            className="bg-lightBg dark:bg-darkBg border border-border rounded-md px-4 py-2 text-mobile-base md:text-desktop-base focus:outline-none focus:ring-2 focus:ring-primary"
            value={newZone}
            onChange={(e) => setNewZone(e.target.value)}
          >
            <option value="">Select a time zone</option>
            {availableZones.map(({ zone, label }) => (
              <option key={zone} value={zone}>{label}</option>
            ))}
          </select>
          <button
            className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:shadow-hover"
            onClick={addTimeZone}
          >
            Add Time Zone
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 md:p-6 text-center text-mobile-sm md:text-desktop-sm text-gray">
        &copy; 2025 Digital Clock. All rights reserved.
      </footer>
    </div>
  )
}
export default App