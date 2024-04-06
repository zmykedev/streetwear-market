/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export const darkMode = ['class'];
export const content = [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
];
export const prefix = '';
export const theme = {
    container: {
        center: true,
        padding: '2rem',
        screens: {
            sm: '640px',
            md: '724px',
            lg: '1024px',
            xl: '1280px',
        },
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
                foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
                DEFAULT: 'hsl(var(--secondary))',
                foreground: 'hsl(var(--secondary-foreground))',
            },
            destructive: {
                DEFAULT: 'hsl(var(--destructive))',
                foreground: 'hsl(var(--destructive-foreground))',
            },
            muted: {
                DEFAULT: 'hsl(var(--muted))',
                foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
                DEFAULT: 'hsl(var(--accent))',
                foreground: 'hsl(var(--accent-foreground))',
            },
            popover: {
                DEFAULT: 'hsl(var(--popover))',
                foreground: 'hsl(var(--popover-foreground))',
            },
            card: {
                DEFAULT: 'hsl(var(--card))',
                foreground: 'hsl(var(--card-foreground))',
            },
        },
        borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
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
            'text-reveal': {
                '0%': {
                    transform: 'translate(0, 100%)',
                },
                '100%': {
                    transform: 'translate(0, 0)',
                },
            },
        },
        animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
            'text-reveal': 'text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s',
        },
        fontFamily: {
            monse: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
            roboto: [ '"Roboto', ...defaultTheme.fontFamily.sans]
        }
    },
};
export const plugins = [require('tailwindcss-animate')];
