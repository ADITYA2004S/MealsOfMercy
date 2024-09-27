// Use `import` instead of `require`
import withMT from "@material-tailwind/react/utils/withMT";
import textShadow from "tailwindcss-textshadow";

// Export the configuration using `export default`
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "0px 10px 10px #00000050",
        xl: "4px 4px 8px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        Poppins: ["Poppins", "system-ui"],
      },
      colors: {
        green: "#016d6c",
      },
    },
  },
  plugins: [textShadow],
});
