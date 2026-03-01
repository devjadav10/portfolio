/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          // Your Defined Color Palette
          background: "#000000",
          foreground: "#FFFFFF",
          accent: "#e1ff00", // Your signature neon-yellow
          muted: "#71717a",  // zinc-400 for sub-descriptions
          border: "#27272a", // zinc-800 for capsules/separators
        },
        fontFamily: {
          // Use standard system fonts for now, or your local variables
          serif: ["Georgia", "serif"], 
          sans: ["Inter", "sans-serif"],
          mono: ["JetBrains Mono", "monospace"],
        },
      },
    },
    plugins: [],
  };