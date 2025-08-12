/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        tertiary: "var(--color-tertiary)",
        "tertiary-hover": "var(--color-tertiary-hover)",
      },
      fontFamily: {
        primary: ["var(--font-primary)", "monospace"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
