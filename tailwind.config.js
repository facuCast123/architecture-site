/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'project-1': "url('/assets/images/project-1.jpg')",
        'project-2': "url('/assets/images/project-2.jpg')",
        'project-3': "url('/assets/images/project-3.jpg')",
        'project-4': "url('/assets/images/project-4.jpg')",
        'project-5': "url('/assets/images/project-5.jpg')",
      },
      keyframes: {
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animations: {
        'fade-in-left': 'fade-in-left 1s ease-in-out',
      }
    },
  },
  plugins: [],
}

