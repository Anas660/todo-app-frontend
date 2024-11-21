/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: {
          DEFAULT: "rgb(38,38,38)",
          foreground: "hsl(var(--primary-foreground))",
          dark: "rgba(94, 96, 206, 1)",
          light: "rgba(250, 250, 250, 1)",
        },
        secondary: {
          DEFAULT: "rgb(78, 168, 222,1)",
          dark: "rgba(30, 111, 159, 1)",
          light: "rgba(30, 111, 159, 1)",
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
