// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  // *** এইখানেই daisyUI প্লাগইন যোগ করতে হবে ***
  plugins: [
    require('daisyui'), 
  ],
};

export default config;