/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	screens: {
  		sm: {
  			max: '639px'
  		},
  		md: {
  			min: '640px',
  			max: '1024px'
  		},
  		lg: {
  			min: '1025px'
  		},
  		xl: '1280px',
  		'2xl': '1536px',
  		wide: '1440px'
  	},
  	fontSize: {
  		xs: ["12px", "16px"],
  		sm: ["14px", "20px"],
  		base: ["16px", "19.5px"],
  		lg: ["18px", "27px"],
  		xl: ["20px", "24.38px"],
  		'2xl': ["24px", "29.26px"],
  		'3xl': ["28px", "50px"],
  		'4xl': ["48px", "58px"],
  		'8xl': ["96px", "106px"]
  	},
  	extend: {
  		fontFamily: {
  			palanquin: ["Palanquin", "sans-serif"],
  			montserrat: ["Montserrat", "sans-serif"]
  		},
  		spacing: {
  			'1': '8px',
  			'2': '12px',
  			'3': '16px',
  			'4': '24px',
  			'5': '32px',
  			'6': '48px',
  			'7': '64px',
  			'8': '80px'
  		},
  		borderRadius: {
  			'4xl': '2rem',
  			'5xl': '3rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			'coral-red': '#FF6452',
  			'slate-gray': '#6D6D6D',
  			'pale-blue': '#F5F6FF',
  			'white-400': 'rgba(255, 255, 255, 0.80)',
  			blue: '#1fb6ff',
  			purple: '#7e5bef',
  			pink: '#ff49db',
  			orange: '#ff7849',
  			green: '#13ce66',
  			yellow: '#ffc82c',
  			'gray-dark': '#273444',
  			gray: '#8492a6',
  			'gray-light': '#d3dce6',
  			'gray-20': '#F8F4EB',
  			'gray-50': '#888888',
  			'gray-100': '#DFCCCC',
  			'gray-500': '#5E0000',
  			'primary-100': '#FFE1E0',
  			'primary-300': '#FFA6A3',
  			'primary-500': '#FF6B66',
  			'secondary-400': '#FFCD5B',
  			'secondary-500': '#FFC132',
  			'btn-500': '#543ee0',
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
  		boxShadow: {
  			'3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
  			'4xl': '0 12px 50px rgba(0, 0, 0, 0.15)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
