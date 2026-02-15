/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'Instrument Sans',
  				'sans-serif'
  			]
  		},
  		colors: {
  			'bg-base': '#110B31',
  			'gradient-1': 'rgba(48, 157, 200, 0.92)',
  			'gradient-2': 'rgba(8, 48, 94, 0.86)',
  			'gradient-3': 'rgba(13, 31, 194, 0.89)',
  			'text-primary': '#EEF4ED',
  			'text-secondary': 'rgba(238, 244, 237, 0.86)',
  			'card-light': 'rgba(238, 244, 237, 0.08)',
  			'card-dark': 'rgba(15, 25, 40, 0.40)',
  			'stroke-default': 'rgba(238, 244, 237, 0.30)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		spacing: {
  			xs: '4px',
  			sm: '8px',
  			md: '16px',
  			lg: '24px',
  			xl: '32px',
  			'2xl': '48px',
  			'3xl': '64px',
  			section: '96px'
  		},
  		borderRadius: {
  			card: '12px',
  			'card-lg': '16px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
