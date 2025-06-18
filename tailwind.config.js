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
        // Your specified color palette
        'bg-dark': '#0D0D10',
        'sidebar-bg': '#14141A',
        'card-bg': '#1A1A1F',
        'border-color': '#2A2A2F',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A3A3A8',
        'accent-violet': '#8B5CF6',
        'accent-violet-hover': '#7C3AED',
        'accent-cyan': '#22D3EE',
        'accent-cyan-hover': '#06B6D4',
        'accent-yellow': '#FACC15',
        'accent-green': '#10B981',
        'accent-red': '#EF4444',
        
        // Keep existing colors for compatibility
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#0045cc',
          900: '#002d99',
        },
        accent: {
          500: '#22D3EE',
          600: '#06B6D4',
        },
        success: '#10B981',
        danger: '#EF4444',
        light: {
          bg: '#F8F8FA',
          card: '#FFFFFF',
          text: '#1a1a1a',
          muted: '#666666',
        },
        dark: {
          bg: '#0D0D10',
          card: '#1A1A1F',
          text: '#FFFFFF',
          muted: '#A3A3A8',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
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
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(139, 92, 246, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)' },
        },
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 0 16px rgba(139, 92, 246, 0.6)',
        'glow-violet': '0 0 16px rgba(139, 92, 246, 0.6)',
        'glow-cyan': '0 0 16px rgba(34, 211, 238, 0.6)',
      },
    },
  },
  plugins: [],
};