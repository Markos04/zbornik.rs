/** @type {import('tailwindcss').Config} */ 
module.exports = { 
  darkMode: ["class"],
  content: [ 
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
  ], 
  theme: { 
    extend: { 
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        heading: ['Anton', 'sans-serif'],
        body: ['Work Sans', 'sans-serif'],
      },
      colors: { 
        border: "hsl(var(--border))", 
        input: "hsl(var(--input))", 
        ring: "hsl(var(--ring))", 
        background: "hsl(var(--background))", 
        foreground: "hsl(var(--foreground))", 
        primary: { 
          DEFAULT: "hsl(var(--primary))", 
          foreground: "hsl(var(--primary-foreground))", 
        }, 
        secondary: { 
          DEFAULT: "hsl(var(--secondary))", 
          foreground: "hsl(var(--secondary-foreground))", 
        }, 
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gf: {
          red: '#e63946',
          black: '#1d3557',
          yellow: '#ffb703',
          blue: '#457b9d',
        },
        red: {
          700: "#b71c1c",
        },
      }, 
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    }, 
  }, 
  plugins: [require("tailwindcss-animate")], 
} 
