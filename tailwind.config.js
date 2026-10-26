/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: "#07070b",
          900: "#07070b",
          800: "#0a0a11",
          700: "#0d0d16",
          600: "#13131f",
        },
        ink: "#e8e8f0",
        muted: "#9aa0b4",
        accent: {
          DEFAULT: "#dc2626",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['Inter', "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(220, 38, 38, 0.40)",
        "glow-sm": "0 0 20px rgba(220, 38, 38, 0.30)",
        card: "0 20px 60px -20px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #991b1b 0%, #dc2626 100%)",
        "accent-soft":
          "linear-gradient(135deg, rgba(185,28,28,0.22), rgba(220,38,38,0.12))",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(220, 38, 38, 0.25)" },
          "50%": { boxShadow: "0 0 45px rgba(220, 38, 38, 0.55)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 5s ease infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease forwards",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
