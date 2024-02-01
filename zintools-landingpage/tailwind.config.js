/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      //* Customize screen sizes for mobile first approach.
      screens: {
        xsm: "300px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      //* Customized color palette
      colors: {
        blue: {
          50: "#1FB6FF",
          100: "#0FAFFF",
          200: "#00A3F5",
          300: "#008FD6",
        },
        white: "#FFFFFF",
        black: "#000000",
        "gray-normal": "#8492a6",
        "gray-dark": "#273444",
        "gray-light": "#d3dce6",
      },
      fill: ({ theme }) => ({
        none: "none",
        ...theme("colors"),
      }),
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      helvetica: ["Helvetica", "mono space"],
    },
    borderRadius: {
      "16px": "1rem",
      "32px": "2rem",
    },
  },
  plugins: [],
};
