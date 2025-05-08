
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for ATTENTION ERA
				'cyber': {
					'black': '#0A0A0F',
					'dark': '#1A1F2C',
					'purple': '#9b87f5',
					'blue': '#1EAEDB',
					'bright-purple': '#8B5CF6',
					'red': '#ea384c',
					'green': '#00FF41',
					'gray': '#403E43',
					'light': '#F1F0FB',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'glitch-horizontal': {
					'0%': { transform: 'translateX(-2px)' },
					'25%': { transform: 'translateX(2px)' },
					'50%': { transform: 'translateX(-1px)' },
					'75%': { transform: 'translateX(1px)' },
					'100%': { transform: 'translateX(0)' }
				},
				'glitch-vertical': {
					'0%': { transform: 'translateY(2px)' },
					'25%': { transform: 'translateY(-2px)' },
					'50%': { transform: 'translateY(1px)' },
					'75%': { transform: 'translateY(-1px)' },
					'100%': { transform: 'translateY(0)' }
				},
				'flicker': {
					'0%': { opacity: '0.8' },
					'10%': { opacity: '0.4' },
					'20%': { opacity: '0.8' },
					'30%': { opacity: '0.4' },
					'40%': { opacity: '0.8' },
					'50%': { opacity: '0.8' },
					'60%': { opacity: '0.4' },
					'70%': { opacity: '0.8' },
					'80%': { opacity: '0.4' },
					'90%': { opacity: '0.8' },
					'100%': { opacity: '0.8' }
				},
				'text-glitch': {
					'0%': { 
						textShadow: '0.05em 0 0 #ea384c, -0.05em -0.025em 0 #9b87f5, -0.025em 0.05em 0 #1EAEDB',
						transform: 'translate(0, 0)',
						clipPath: 'inset(0 0 0 0)'
					},
					'14%': { 
						textShadow: '0.05em 0 0 #ea384c, -0.05em -0.025em 0 #9b87f5, -0.025em 0.05em 0 #1EAEDB',
						transform: 'translate(-0.025em, 0.015em)',
					},
					'20%': { 
						textShadow: '-0.05em -0.025em 0 #ea384c, 0.025em -0.015em 0 #9b87f5, -0.05em -0.05em 0 #1EAEDB',
						transform: 'translate(-0.015em, 0.025em)',
						clipPath: 'inset(15% 0 10% 0)'
					},
					'45%': { 
						textShadow: '-0.05em -0.025em 0 #ea384c, 0.025em -0.015em 0 #9b87f5, -0.05em -0.05em 0 #1EAEDB',
						transform: 'translate(-0.035em, 0.015em)',
					},
					'50%': { 
						textShadow: '0.05em 0.035em 0 #ea384c, 0.03em 0 0 #9b87f5, 0 -0.04em 0 #1EAEDB',
						transform: 'translate(0.035em, -0.01em)',
						clipPath: 'inset(0 0 85% 0)'
					},
					'60%': { 
						textShadow: '0.05em 0.035em 0 #ea384c, 0.03em 0 0 #9b87f5, 0 -0.04em 0 #1EAEDB',
						transform: 'translate(0.025em, 0.015em)',
						clipPath: 'inset(50% 0 35% 0)'
					},
					'75%': { 
						textShadow: '-0.025em -0.015em 0 #ea384c, 0.015em 0.025em 0 #9b87f5, 0.05em 0.015em 0 #1EAEDB',
						transform: 'translate(-0.015em, -0.025em)',
					},
					'80%': { 
						textShadow: '-0.025em -0.015em 0 #ea384c, 0.015em 0.025em 0 #9b87f5, 0.05em 0.015em 0 #1EAEDB',
						transform: 'translate(0, 0)',
						clipPath: 'inset(0 0 0 0)'
					},
					'100%': { 
						textShadow: '-0.025em 0 0 #ea384c, -0.015em -0.02em 0 #9b87f5, -0.025em -0.05em 0 #1EAEDB',
						transform: 'translate(0, 0)',
					},
				},
				'scan': {
					'0%': { transform: 'translateY(-30%)' },
					'100%': { transform: 'translateY(100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glitch-h': 'glitch-horizontal 0.3s ease-in-out infinite',
				'glitch-v': 'glitch-vertical 0.3s ease-in-out infinite',
				'flicker': 'flicker 0.5s linear infinite',
				'text-glitch': 'text-glitch 3s linear infinite',
				'scan': 'scan 4s linear infinite'
			},
			fontFamily: {
				'mono': ['VT323', 'JetBrains Mono', 'monospace'],
				'glitch': ['Courier New', 'monospace'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
