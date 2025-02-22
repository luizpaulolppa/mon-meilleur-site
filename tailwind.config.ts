import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        corben: ["var(--corben-font)", "ui-serif", "serif"],
        sans: ["var(--poppins-font)", "var(--corben-font)", "ui-sans-serif", "system-ui"],
      }
    },
  },
  plugins: [],
} satisfies Config;
