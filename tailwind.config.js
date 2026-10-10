const c = (v) => `rgb(var(${v}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: c('--bg'),
        surface: c('--surface'),
        fg: c('--fg'),
        muted: c('--muted'),
        line: c('--line'),
        accent: c('--accent'),
        'accent-ink': c('--accent-ink'),
      },
      fontFamily: {
        sans: ['"Inter Tight Variable"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: ['clamp(2.75rem, 11.5vw, 7.25rem)', { lineHeight: '0.92', letterSpacing: '-0.045em' }],
        h2: ['clamp(2.1rem, 5.5vw, 4.25rem)', { lineHeight: '1', letterSpacing: '-0.035em' }],
      },
    },
  },
  plugins: [],
}
