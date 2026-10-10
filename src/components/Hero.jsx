import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { ease } from './motion/FadeIn'
import HeroVisual from './HeroVisual'
import Roll from './ui/Roll'

function go(e, id, reduce) {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
  history.replaceState(null, '', `#${id}`)
}

export default function Hero() {
  const reduce = useReducedMotion()
  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease, delay },
        }
  const line = (delay) =>
    reduce
      ? {}
      : {
          initial: { y: '110%' },
          animate: { y: 0 },
          transition: { duration: 0.85, ease, delay },
        }

  return (
    <section id="top" aria-labelledby="hero-title" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <motion.p className="label mb-8 flex flex-wrap items-center gap-x-3 gap-y-2" {...rise(0.05)}>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            AI/ML engineering student · Hyderabad
          </motion.p>

          <h1 id="hero-title" className="text-display font-semibold lg:text-[clamp(4rem,8.2vw,7.25rem)]">
            <span className="block overflow-hidden whitespace-nowrap pb-[0.08em]">
              <motion.span className="block" {...line(0.15)}>
                Beyond models.
              </motion.span>
            </span>
            <span className="block overflow-hidden whitespace-nowrap pb-[0.08em]">
              <motion.span className="block text-accent" {...line(0.27)}>
                Into systems.
              </motion.span>
            </span>
          </h1>

          <motion.p className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl" {...rise(0.5)}>
            I build intelligent systems that connect machine learning, computer vision, and practical software.
          </motion.p>

          <motion.div className="mt-10 flex flex-col gap-3 sm:flex-row" {...rise(0.62)}>
            <a href="#work" onClick={(e) => go(e, 'work', reduce)} className="btn btn-primary">
              <Roll>Explore my work</Roll>
              <ArrowDownRight size={16} aria-hidden="true" />
            </a>
            <a href="#contact" onClick={(e) => go(e, 'contact', reduce)} className="btn btn-ghost">
              <Roll>Get in touch</Roll>
            </a>
          </motion.div>

          <motion.p className="label mt-8" {...rise(0.72)}>
            Open to AI/ML internships · B.Tech 2027
          </motion.p>
        </div>

        <motion.div className="mx-auto w-full max-w-[420px] lg:max-w-none lg:justify-self-end" {...(reduce ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6, delay: 0.4 } })}>
          <HeroVisual />
        </motion.div>
      </div>

      <motion.a
        href="#work"
        onClick={(e) => go(e, 'work', reduce)}
        aria-label="Scroll to work"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        {...(reduce ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 1.1, duration: 0.5 } })}
      >
        <span className="label">Scroll</span>
        <span aria-hidden="true" className="relative block h-10 w-px overflow-hidden bg-line">
          <span className="scroll-cue-line absolute inset-0 bg-accent" style={{ animation: 'scroll-cue 1.8s ease-in-out infinite' }} />
        </span>
      </motion.a>
    </section>
  )
}
