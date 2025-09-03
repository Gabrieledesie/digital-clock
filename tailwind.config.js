module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '1E1E1E',
        lightBg: 'FFFFFF',
        primary: '3B82F6',
        textDark: 'FFFFFF',
        textLight: '000000',
        border: 'D9D9D9',
        gray: 'D9D9D9',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
      },
      fontSize: {
        'mobile-sm': '14px',
        'mobile-base': '16px',
        'mobile-lg': '20px',
        'mobile-xl': '28px',
        'desktop-sm': '16px',
        'desktop-base': '18px',
        'desktop-lg': '24px',
        'desktop-xl': '36px',
      },
      fontWeight: {
        light: 300,
        medium: 500,
        semibold: 600,
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '23px',
      },
      boxShadow: {
        hover: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}