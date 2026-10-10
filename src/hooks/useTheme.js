import { useCallback, useEffect, useRef, useState } from 'react'

const read = () =>
  typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'light'
    ? 'light'
    : 'dark'

export function useTheme() {
  const [theme, setTheme] = useState(read)
  const timer = useRef()

  useEffect(() => () => clearTimeout(timer.current), [])

  const apply = useCallback((next) => {
    const root = document.documentElement
    root.classList.add('theme-switching')
    root.setAttribute('data-theme', next)
    document.getElementById('theme-color')?.setAttribute('content', next === 'light' ? '#f7f6f2' : '#0a0a0b')
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* storage unavailable: the choice just won't persist */
    }
    setTheme(next)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => root.classList.remove('theme-switching'), 300)
  }, [])

  const toggle = useCallback(() => apply(read() === 'dark' ? 'light' : 'dark'), [apply])

  return { theme, toggle }
}
