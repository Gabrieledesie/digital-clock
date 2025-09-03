import { useState } from 'react'

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-darkBg text-textDark' : 'bg-lightBg text-textLight'}`}>
      <h1 className="text-mobile-xl md:text-desktop-xl font-semibold text-center pt-10">Test Tailwind</h1>
      <p className="text-mobile-base md:text-desktop-base text-center">This should use Inter font and custom colors</p>
      <button className="bg-primary text-white px-6 py-3 rounded-md mx-auto block mt-4">Click Me</button>
      <button
        className="bg-gray text-textLight px-4 py-2 rounded-md mx-auto block mt-4"
        onClick={() => setIsDark(!isDark)}
      >
        Toggle Dark Mode
      </button>
    </div>
  )
}
export default App