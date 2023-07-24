/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
  theme: {
    extend: {
      animation: {
        'slide-in': 'slide-in 0.5s ease-out',
      },
      '@layer keyframes': {
        'slide-in': {
          from: {
            transform: 'translateX(100%)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        investGray: {
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
        },
        investBlue: {
          50: '#EEF4FF',
          700: '#3538CD',
        },
        investPink: {
          50: '#FDF2FA',
          700: '#C11574',
        },
        primary: {
          50: '#E6F6EB',
          100: '#C1E8C9',
          200: '#9ADAA8',
          400: '#47C16C',
          500: '#13B550',
          600: '#00A648',
          700: '#00943C',
          800: '#008330',
          900: '#00631B',
        },
        error: {
          500: '#F04438',
        },
      },
      boxShadow: {
        investXs: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        investSm: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);',
        investMd: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
        investLg: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
        investXl: '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
      },
      backgroundImage: {
        investGradient: 'linear-gradient(26.57deg, #008330 8.33%, #00943C 91.67%)',
        investGradientRegister: 'linear-gradient(255.13deg, #00631B 39.19%, #00A648 100%)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
