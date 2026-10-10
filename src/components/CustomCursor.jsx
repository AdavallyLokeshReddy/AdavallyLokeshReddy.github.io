import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useFinePointer } from '../hooks/useFinePointer'

const INTERACTIVE = 'a, button, [role="button"], summary, [data-cursor]'
const NATIVE = 'input, textarea, select, [contenteditable="true"]'

/** Optional dot + ring cursor. Only for fine pointers, off under reduced motion. */
export default function CustomCursor() {
  const fine = useFinePointer()
  const reduce = useReducedMotion()
  const enabled = fine && !reduce
  const [mode, setMode] = useState('default') // default | hover | hidden

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const ry = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    if (!enabled) return undefined
    const root = document.documentElement
    root.classList.add('has-custom-cursor')

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e) => {
      const t = e.target instanceof Element ? e.target : null
      if (!t) return
      if (t.closest(NATIVE)) setMode('hidden')
      else if (t.closest(INTERACTIVE)) setMode('hover')
      else setMode('default')
    }
    const leave = (e) => {
      if (!e.relatedTarget) setMode('hidden')
    }
    const enter = () => setMode('default')

    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerover', over, { passive: true })
    document.documentElement.addEventListener('pointerleave', leave)
    document.documentElement.addEventListener('pointerenter', enter)
    return () => {
      root.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerover', over)
      document.documentElement.removeEventListener('pointerleave', leave)
      document.documentElement.removeEventListener('pointerenter', enter)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  const hidden = mode === 'hidden'
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      <motion.div
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-accent"
        style={{ x, y, translateX: '-50%', translateY: '-50%', opacity: hidden ? 0 : 1 }}
      />
      <motion.div
        className="absolute left-0 top-0 h-9 w-9 rounded-full border border-accent"
        style={{ x: rx, y: ry, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: mode === 'hover' ? 1.6 : 1, opacity: hidden ? 0 : mode === 'hover' ? 0.9 : 0.5 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  )
}
