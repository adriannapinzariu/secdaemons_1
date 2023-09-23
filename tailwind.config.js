/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        reveal: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        reveal: 'reveal 2s infinite',
      },
      maxWidth: {
        '543px': '543px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'blue-demon-blue': '#104DB4',
        'blue-demon-red': '#D4000A',
        'inactive-txt': '#A3A3A3'
      }
    }
  },
  plugins: [],
}
