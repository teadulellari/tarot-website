// tailwind.config.js

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        display: ['"Cinzel Decorative"', "serif"],
        body: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        customColor1: "#0d0b1a",
        customColor2: "#CAC8ED",
        midnight: "#0d0b1a",
        "deep-purple": "#1a1535",
        "mystic-purple": "#2d2558",
        "soft-lavender": "#CAC8ED",
        "pale-lavender": "#e8e7f5",
        gold: "#e1be8a",
        "gold-light": "#f0d9a8",
        "gold-dark": "#c4a06a",
        "rose-glow": "#EF94CA",
        "celestial-blue": "#7B8CDE",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "glass-gradient":
          "linear-gradient(135deg, rgba(202,200,237,0.08) 0%, rgba(202,200,237,0.02) 100%)",
        "card-gradient":
          "linear-gradient(180deg, rgba(45,37,88,0.6) 0%, rgba(13,11,26,0.8) 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #e1be8a 0%, #f0d9a8 50%, #e1be8a 100%)",
        "hero-gradient":
          "linear-gradient(180deg, transparent 0%, rgba(13,11,26,0.4) 40%, rgba(13,11,26,0.95) 100%)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(202,200,237,0.15)",
        "glow-gold": "0 0 25px rgba(225,190,138,0.2)",
        "glow-lg": "0 0 40px rgba(202,200,237,0.1)",
        glass: "0 8px 32px rgba(0,0,0,0.3)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(202,200,237,0.1)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "-200% center" },
          "50%": { backgroundPosition: "200% center" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(225,190,138,0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(225,190,138,0.25)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
