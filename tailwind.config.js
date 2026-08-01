/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk,md}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Georgia", "serif"],
      },
      keyframes: {
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "rise-in": "rise-in 0.7s ease-out both",
        "fade-in": "fade-in 0.9s ease-out both",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        zzs: {
          "primary": "#1A5C4A",
          "primary-content": "#F4F7F5",
          "secondary": "#2C3540",
          "secondary-content": "#E8EDF0",
          "accent": "#C9B896",
          "accent-content": "#1A1F26",
          "neutral": "#1A1F26",
          "neutral-content": "#E8EDF0",
          "base-100": "#FFFFFF",
          "base-200": "#F2F4F6",
          "base-300": "#E2E6EA",
          "base-content": "#1A1F26",
          "info": "#8BA3B5",
          "success": "#6B9B7A",
          "warning": "#C4A35A",
          "error": "#B86B6B",
          "--rounded-box": "0.75rem",
          "--rounded-btn": "0.625rem",
          "--rounded-badge": "0.375rem",
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
};
