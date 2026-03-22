import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "asd-bg": "#000008",
        "asd-pink": "#FF006E",
        "wake": "#00FFE0",
        "slipstream": "#FFE600",
        "quantum": "#BF00FF",
        "muted": "#888888",
      },
    },
  },
  plugins: [],
};
export default config;
