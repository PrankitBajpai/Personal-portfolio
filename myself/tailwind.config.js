module.exports = {
    theme: {
      extend: {
        keyframes: {
          drop: {
            '0%': { opacity: '0', transform: 'translateY(-30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
        animation: {
          drop: 'drop 0.6s ease-out forwards',
        },
      },
    },
  }
  
  