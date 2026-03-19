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
  			navy: '#110B31',
  			cyan: 'rgba(48, 157, 200, 0.92)',
  			blue: 'rgba(8, 48, 94, 0.86)',
  			royal: 'rgba(13, 31, 194, 0.89)',
  			white: '#EEF4ED',
  			gray: 'rgba(238, 244, 237, 0.86)',
  			'white-subtle': 'rgba(238, 244, 237, 0.08)',
  			dark: 'rgba(15, 25, 40, 0.60)',
			'dark-deep': 'rgba(15, 25, 40, 0.80)',
  			'gray-border': 'rgba(238, 244, 237, 0.30)',
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
  			section: '128px'
  		},
  		borderRadius: {
  			card: '12px',
  			'card-lg': '16px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'float-slow': {
  				'0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
  				'33%': { transform: 'translate(30px, -30px) scale(1.05)' },
  				'80%': { transform: 'translate(-20px, 20px) scale(0.95)' }
  			},
  			'float-medium': {
  				'0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
  				'33%': { transform: 'translate(-25px, 25px) scale(1.03)' },
  				'66%': { transform: 'translate(25px, -15px) scale(0.97)' }
  			},
  			'float-fast': {
  				'0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
  				'33%': { transform: 'translate(20px, 30px) scale(1.04)' },
  				'66%': { transform: 'translate(-30px, -20px) scale(0.96)' }
  			}
  		},
  		animation: {
  			'float-slow': 'float-slow 20s ease-in-out infinite',
  			'float-medium': 'float-medium 15s ease-in-out infinite',
  			'float-fast': 'float-fast 25s ease-in-out infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
