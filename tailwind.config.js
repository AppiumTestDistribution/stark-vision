/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  variants: {
    extend: {
      animation: ["responsive", "motion-safe", "motion-reduce"],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "text-blue-400",
    "text-cyan-300",
    "text-yellow-300",
    "text-orange-300",
    "text-green-400",
    "text-pink-400",
    "text-purple-400",
    "bg-gray-900",
    "bg-gray-800",
    "bg-blue-600",
    "hover:bg-blue-700",
  ],
};
