module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  prefix: "",
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lofi"],
  },

};
