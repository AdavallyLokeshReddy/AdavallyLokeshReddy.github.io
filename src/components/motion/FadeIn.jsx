import { motion, useReducedMotion } from 'framer-motion'

export const ease = [0.22, 1, 0.36, 1]

const variants = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, ease, delay } }),
}

const still = { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }

/** Fade + rise, once, when scrolled into view. Static under reduced motion. */
export default function FadeIn({ children, delay = 0, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  const Tag = motion[as] ?? motion.div
  return (
    <Tag
      className={className}
      variants={reduce ? still : variants}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
    >
      {children}
    </Tag>
  )
}
