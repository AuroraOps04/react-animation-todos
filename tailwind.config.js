/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        primary: "hsl(var(--primary))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        secondary: "hsl(var(--secondary))",
        primaryForeground: "hsl(var(--primary-foreground))",
        secondaryForeground: "hsl(var(--secondary-foreground))",
        mutedForeground: "hsl(var(--muted-foreground))"
        
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
}

