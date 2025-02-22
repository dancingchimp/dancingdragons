module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: "#e17055",
          600: "#d63031",
        },
      },
      fontSize: {
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.25rem' }],
        '6xl': ['3.75rem', { lineHeight: '4rem' }],
        '7xl': ['4.5rem', { lineHeight: '4.75rem' }],
      },
      height: {
        'screen-safe': '100vh',
        'screen-dynamic': '100dvh',
      },
      minHeight: {
        'screen-safe': '100vh',
        'screen-dynamic': '100dvh',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      padding: {
        'screen-top': 'env(safe-area-inset-top)',
        'screen-bottom': 'env(safe-area-inset-bottom)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}