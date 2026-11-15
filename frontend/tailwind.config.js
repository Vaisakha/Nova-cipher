/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-alt': 'var(--surface-alt)',
        'pastel-blue': 'var(--pastel-blue)',
        'pastel-blue-2': 'var(--pastel-blue-2)',
        'blue-dark': 'var(--blue-dark)',
        'blue-deep': 'var(--blue-deep)',
        text: 'var(--text)',
        'text-muted': 'var(--text-muted)',
        'status-green': 'var(--status-green)',
        'status-green-tint': 'var(--status-green-tint)',
        'status-amber': 'var(--status-amber)',
        'status-amber-tint': 'var(--status-amber-tint)',
        'status-red': 'var(--status-red)',
        'status-red-tint': 'var(--status-red-tint)',
      },
      borderRadius: {
        'card': '16px',
        'btn': '12px',
      },
      minHeight: {
        'touch': '56px',
        'touch-lg': '64px',
      },
      minWidth: {
        'touch': '56px',
        'touch-lg': '64px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(47, 75, 124, 0.08)',
        'soft-lg': '0 8px 30px -4px rgba(47, 75, 124, 0.12)',
        'glow-red': '0 0 15px rgba(192, 57, 43, 0.4)',
      }
    },
  },
  plugins: [],
}
