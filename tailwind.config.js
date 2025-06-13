/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#005EFF',
          600: '#0052e6',
          700: '#0045cc',
          900: '#002d99',
        },
        accent: {
          500: '#FFD600',
          600: '#e6c100',
        },
        success: '#22C55E',
        danger: '#FF4C4C',
        light: {
          bg: '#F8F8FA',
          card: '#FFFFFF',
          text: '#1a1a1a',
          muted: '#666666',
        },
        dark: {
          bg: '#111113',
          card: '#1a1a1c',
          text: '#ffffff',
          muted: '#999999',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};