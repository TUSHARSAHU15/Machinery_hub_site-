/** @type {import('tailwindcss').Config} */

const colorWithAlpha = (varName) =>
  `color-mix(in oklch, var(${varName}) calc(<alpha-value> * 100%), transparent)`;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: colorWithAlpha('--background'),
        foreground: colorWithAlpha('--foreground'),
        card: {
          DEFAULT: colorWithAlpha('--card'),
          foreground: colorWithAlpha('--card-foreground'),
        },
        popover: {
          DEFAULT: colorWithAlpha('--popover'),
          foreground: colorWithAlpha('--popover-foreground'),
        },
        primary: {
          DEFAULT: colorWithAlpha('--primary'),
          foreground: colorWithAlpha('--primary-foreground'),
        },
        secondary: {
          DEFAULT: colorWithAlpha('--secondary'),
          foreground: colorWithAlpha('--secondary-foreground'),
        },
        muted: {
          DEFAULT: colorWithAlpha('--muted'),
          foreground: colorWithAlpha('--muted-foreground'),
        },
        accent: {
          DEFAULT: colorWithAlpha('--accent'),
          foreground: colorWithAlpha('--accent-foreground'),
        },
        destructive: {
          DEFAULT: colorWithAlpha('--destructive'),
          foreground: colorWithAlpha('--destructive-foreground'),
        },
        border: colorWithAlpha('--border'),
        input: colorWithAlpha('--input'),
        ring: colorWithAlpha('--ring'),
        steel: {
          DEFAULT: colorWithAlpha('--steel'),
          foreground: colorWithAlpha('--steel-foreground'),
          muted: colorWithAlpha('--steel-muted'),
        },
        whatsapp: colorWithAlpha('--whatsapp'),
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        glow: 'var(--shadow-glow)',
      },
      backgroundImage: {
        'hero-overlay': 'var(--gradient-hero)',
        'steel-gradient': 'var(--gradient-steel)',
        'amber-gradient': 'var(--gradient-amber)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
