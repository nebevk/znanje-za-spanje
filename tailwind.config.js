/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk,md}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        zzs: {
          "primary": "#DFAEA3",
          "primary-content": "#2E2A28",
          "secondary": "#C9B6D8",
          "secondary-content": "#2E2A28",
          "accent": "#F3E6E0",
          "accent-content": "#2E2A28",
          "neutral": "#2E2A28",
          "neutral-content": "#F7EFE8",
          "base-100": "#FFFFFF",
          "base-200": "#F7EFE8",
          "base-300": "#F3E6E0",
          "base-content": "#2E2A28",
          "info": "#A4C7E1",
          "success": "#9BC9A0",
          "warning": "#E5C07B",
          "error": "#D88C8C",
          "--rounded-box": "1rem",
          "--rounded-btn": "9999px",
          "--rounded-badge": "9999px",
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
};
