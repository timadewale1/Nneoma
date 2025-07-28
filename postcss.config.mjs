// postcss.config.mjs
import tailwind from "tailwindcss";
import scrollbar from "tailwind-scrollbar";

const config = {
  plugins: [tailwind(), scrollbar()],
};

export default config;
