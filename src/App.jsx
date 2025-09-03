import { DateTime } from 'luxon'
import { useState, useEffect } from 'react'

function App() {
  const [time, setTime] = useState(DateTime.now().setZone('Europe/London').toFormat('HH:mm:ss'))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(DateTime.now().setZone('Europe/London').toFormat('HH:mm:ss'))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-lightBg text-textLight">
      <h1 className="text-center pt-10">{time}</h1>
    </div>
  )
}
export default App