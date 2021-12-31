module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  enabled: process.env.NODE_ENV === 'production',
  theme: {
    screens: {
      xs: '534px',
      md: '1024px',
      mobile: '375px',
      desktop: '1024px',
    },
    extend: {
      colors: {
        'dark-green': '#00474b',
        'light-green': '#26c2ae',
        'lightest-green': '#f3f9fa',
        'medium-green': '#547878',
        gray: '#5e7a7d',
      },
      boxShadow: {
        card: '0px 40px 40px -20px rgba(13, 48, 189, 0.15)',
        button: '0px 20px 20px rgba(56, 42, 225, 0.19)',
      },
      fontSize: {
        xl: ['48px', '-1px'],
        lg: '24px',
        md: '16px',
        sm: '13px',
      },
      fontFamily: {
        space: ['Space Mono', 'sans-serif'],
      },
      spacing: {},
    },
  },
  plugins: [],
}
