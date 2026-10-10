import { useState } from 'react'
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { useFinePointer } from '../hooks/useFinePointer'
import { ease } from './motion/FadeIn'
import { profile } from '../data/profile'

const VIEW = { once: true, margin: '0px 0px -12% 0px' }

/** Viewfinder corner: two bars that draw out from the corner point. */
function Corner({ pos, delay, reduce }) {
  const [v, h] = [pos.includes('t') ? 'top' : 'bottom', pos.includes('l') ? 'left' : 'right']
  const origin = { l: 'left', r: 'right', t: 'top', b: 'bottom' }
  const bar = (axis) => ({
    initial: reduce ? false : { [axis]: 0 },
    whileInView: { [axis]: 1 },
    viewport: VIEW,
    transition: { duration: 0.5, ease, delay },
  })
  return (
    <span aria-hidden="true" className="pointer-events-none absolute h-6 w-6" style={{ [v]: -8, [h]: -8 }}>
      <motion.span
        className="absolute h-[2px] w-full bg-accent"
        style={{ [v]: 0, [h]: 0, transformOrigin: origin[pos[1]] }}
        {...bar('scaleX')}
      />
      <motion.span
        className="absolute h-full w-[2px] bg-accent"
        style={{ [v]: 0, [h]: 0, transformOrigin: origin[pos[0]] }}
        {...bar('scaleY')}
      />
    </span>
  )
}

/**
 * Portrait with a viewfinder / scan motif that nods to computer vision.
 * Sequence: mask wipe + zoom settle → corners draw → one scan sweep → label.
 * Fine pointers also get a gentle 3D tilt with an accent glare. Everything is static under reduced motion.
 */
export default function Portrait({ src = '/me.jpg' }) {
  const reduce = useReducedMotion()
  const fine = useFinePointer()
  const tilt = fine && !reduce
  const [failed, setFailed] = useState(false)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 180, damping: 22, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 180, damping: 22, mass: 0.6 })
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8])
  const rotateX = useTransform(sy, [-0.5, 0.5], [7, -7])
  const gx = useTransform(sx, [-0.5, 0.5], ['15%', '85%'])
  const gy = useTransform(sy, [-0.5, 0.5], ['15%', '85%'])
  const glare = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, rgb(var(--accent) / 0.28), transparent 55%)`

  const onMove = (e) => {
    if (!tilt) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <div
      className="relative w-full max-w-[340px] lg:max-w-[380px]"
      style={{ perspective: 900 }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <motion.figure
        className="relative m-0"
        style={tilt ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : undefined}
      >
        {/* clipped frame: wipe reveal */}
        <motion.div
          className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-surface"
          initial={reduce ? false : { clipPath: 'inset(100% 0% 0% 0%)' }}
          whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          viewport={VIEW}
          transition={{ duration: 1.1, ease }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduce ? false : { scale: 1.3 }}
            whileInView={{ scale: 1 }}
            viewport={VIEW}
            transition={{ duration: 1.6, ease }}
          >
            {failed ? (
              <div className="grid h-full w-full place-items-center">
                <div className="grid-bg absolute inset-0 opacity-70" />
                <span className="relative text-8xl font-semibold tracking-tighter">
                  {profile.monogram}
                  <span className="text-accent">.</span>
                </span>
              </div>
            ) : (
              <img
                src={src}
                alt={`Portrait of ${profile.name}`}
                width="800"
                height="1000"
                loading="lazy"
                decoding="async"
                onError={() => setFailed(true)}
                className="h-full w-full object-cover"
              />
            )}
          </motion.div>

          {/* colour comes in as a dark veil lifts */}
          {!reduce && (
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-bg"
              initial={{ opacity: 0.7 }}
              whileInView={{ opacity: 0 }}
              viewport={VIEW}
              transition={{ duration: 1.4, ease, delay: 0.3 }}
            />
          )}

          {/* one scan sweep */}
          {!reduce && (
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute inset-x-0 top-0 h-[28%] border-b border-accent"
                style={{ background: 'linear-gradient(to bottom, transparent, rgb(var(--accent) / 0.22))' }}
                initial={{ y: '-100%', opacity: 1 }}
                whileInView={{ y: '360%', opacity: [1, 1, 0] }}
                viewport={VIEW}
                transition={{ duration: 1.5, ease: 'easeInOut', delay: 1.0 }}
              />
            </div>
          )}

          {/* pointer glare */}
          {tilt && <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 mix-blend-soft-light" style={{ background: glare }} />}

          {/* caption tag */}
          <motion.figcaption
            className="absolute bottom-3 left-3 bg-accent px-2 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.12em] text-accent-ink"
            initial={reduce ? false : { opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.5, ease, delay: 1.5 }}
          >
            Lokesh · building systems
          </motion.figcaption>
        </motion.div>

        {/* viewfinder corners sit outside the clipped frame */}
        <Corner pos="tl" delay={0.9} reduce={reduce} />
        <Corner pos="tr" delay={1.0} reduce={reduce} />
        <Corner pos="bl" delay={1.1} reduce={reduce} />
        <Corner pos="br" delay={1.2} reduce={reduce} />
      </motion.figure>
    </div>
  )
}
