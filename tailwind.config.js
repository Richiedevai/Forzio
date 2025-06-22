/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        // Forzio Public Website Colors (Futuristic Founder Flow)
        'public-bg': {
          DEFAULT: '#F8FAFC',
          dark: '#181A20',
        },
        'public-card': {
          DEFAULT: '#FFFFFF',
          dark: '#23262F',
        },
        'public-border': {
          DEFAULT: '#E5E7EB',
          dark: '#2A2D3A',
        },
        'public-text': {
          DEFAULT: '#111827',
          dark: '#FFFFFF',
        },
        'electric-blue': '#2563EB',
        'electric-purple': '#A259FF',
        
        // Forzio Dashboard Colors (Neo AI Pro)
        'dashboard-bg': '#0F172A',
        'dashboard-text': '#F8FAFC',
        'dashboard-secondary': '#94A3B8',
        'emerald-green': '#10B981',
        'vibrant-red': '#F43F5E',
        
        // Gradients and Effects
        'gradient-start': '#3A9FFF',
        'gradient-end': '#A855F7',
        'glow-blue': 'rgba(58,159,255,0.15)',
        
        // Legacy compatibility colors
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3A9FFF',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        accent: {
          500: '#7A7AFF',
          600: '#6366f1',
        },
        success: '#10B981',
        danger: '#F43F5E',
        light: {
          bg: '#F8F8FA',
          card: '#FFFFFF',
          text: '#1a1a1a',
          muted: '#666666',
        },
        dark: {
          bg: '#0F172A',
          card: '#1e293b',
          text: '#F8FAFC',
          muted: '#94A3B8',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
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
          '0%': { boxShadow: '0 0 5px rgba(58, 159, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(58, 159, 255, 0.8)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(58, 159, 255, 0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(58, 159, 255, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'neon-blue': '0 4px 24px 0 rgba(37,99,235,0.15)',
        'neon-violet': '0 0 20px rgba(122, 122, 255, 0.5)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glow-intense': '0 0 30px rgba(58, 159, 255, 0.8)',
      },
      backgroundImage: {
        'gradient-electric': 'linear-gradient(135deg, #3A9FFF 0%, #7A7AFF 100%)',
        'gradient-dashboard': 'linear-gradient(135deg, #3A9FFF 0%, #A855F7 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};