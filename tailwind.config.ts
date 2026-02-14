import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        muted: '#6B7280',
        accent: '#1F2937',
        surface: '#F9FAFB'
      }
    }
  },
  plugins: []
};

export default config;
