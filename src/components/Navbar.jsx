import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems, profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'
import ThemeToggle from './ThemeToggle'
import Roll from './ui/Roll'

const sectionIds = navItems.map((n) => n.id)

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const reduce = useReducedMotion()
  const active = useActiveSection(sectionIds)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const buttonRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = useCallback((returnFocus = true) => {
    setOpen(false)
    if (returnFocus) buttonRef.current?.focus()
  }, [])

  // Scroll lock, Escape to close, simple focus trap while the mobile menu is open
  useEffect(() => {
    if (!open) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector('a')?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key !== 'Tab') return
      const f = [buttonRef.current, ...panelRef.current.querySelectorAll('a')].filter(Boolean)
      const first = f[0]
      const last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open, close])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    // Wait a frame so the scroll lock is released before scrolling
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
      history.replaceState(null, '', `#${id}`)
    })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open ? 'border-b border-line bg-bg/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            setOpen(false)
            window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
          }}
          aria-label={`${profile.name}, back to top`}
          className="font-mono text-sm font-semibold tracking-tight"
        >
          {profile.monogram}
          <span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-2 md:gap-8">
          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={(e) => go(e, n.id)}
                  aria-current={active === n.id ? 'true' : undefined}
                  className={`text-sm transition-colors hover:text-fg ${active === n.id ? 'text-fg' : 'text-muted'}`}
                >
                  <Roll>{n.label}</Roll>
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle theme={theme} onToggle={toggle} />
          <button
            ref={buttonRef}
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => (open ? close(false) : setOpen(true))}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" ref={panelRef} className="container-x pb-8 pt-4 md:hidden">
          <ul className="flex flex-col">
            {navItems.map((n, i) => (
              <li key={n.id} className="border-t border-line">
                <a
                  href={`#${n.id}`}
                  onClick={(e) => go(e, n.id)}
                  aria-current={active === n.id ? 'true' : undefined}
                  className="flex items-baseline justify-between py-4 text-3xl font-semibold tracking-tight"
                >
                  {n.label}
                  <span className="label">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
