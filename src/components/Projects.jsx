import { useRef, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { ArrowUpRight, Minus, Plus } from 'lucide-react'
import { flagship, projects } from '../data/projects'
import FlagshipDetails from './FeaturedProject'
import { useFinePointer } from '../hooks/useFinePointer'
import FadeIn from './motion/FadeIn'
import ProjectPreview from './ProjectPreview'
import Status from './ui/Status'

// The flagship appears in the same list as every other project; its full case study opens under "View details".
const items = [
  {
    id: flagship.id,
    title: flagship.shortTitle,
    category: flagship.category,
    summary: flagship.brief,
    tags: flagship.tags,
    state: 'in-progress',
    flowTitle: 'CT pipeline',
    flow: flagship.stages.map((st) => ({ t: st.label, s: st.status })),
    flowNote: 'Status of each stage today. Not clinically validated.',
  },
  ...projects,
]

const PW = 320 // preview width
const PH = 268 // preview height
const GAP = 28
const EDGE = 16

function clampPos(px, py, flipFrom) {
  let x = px + GAP
  if (x + PW > window.innerWidth - EDGE) x = (flipFrom ?? px) - PW - GAP
  x = Math.max(EDGE, x)
  const y = Math.min(Math.max(py - PH / 2, EDGE), window.innerHeight - PH - EDGE)
  return [x, y]
}

export default function Projects() {
  const fine = useFinePointer()
  const reduce = useReducedMotion()
  const previewOn = fine && !reduce
  const [active, setActive] = useState(null)
  const [last, setLast] = useState(items[0].id)
  const [open, setOpen] = useState(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 380, damping: 38, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 380, damping: 38, mass: 0.5 })
  const shown = useRef(false)

  const place = (px, py, flip) => {
    const [nx, ny] = clampPos(px, py, flip)
    x.set(nx)
    y.set(ny)
    if (!shown.current) {
      sx.jump(nx)
      sy.jump(ny)
      shown.current = true
    }
  }

  const show = (id) => {
    setActive(id)
    setLast(id)
  }
  const hide = () => {
    shown.current = false
    setActive(null)
  }

  const onMove = (e) => {
    if (previewOn && active) place(e.clientX, e.clientY)
  }
  const onFocus = (id, el) => {
    if (!previewOn) return
    const r = el.getBoundingClientRect()
    show(id)
    place(r.right - PW - GAP * 2, r.top + r.height / 2, r.left)
  }

  return (
    <div onPointerMove={onMove}>
      <div>
        <ul className="border-b border-line">
          {items.map((pr, i) => {
            const expanded = open === pr.id
            return (
              <li
                key={pr.id}
                className="group relative border-t border-line"
                onPointerEnter={(e) => {
                  if (previewOn && e.pointerType === 'mouse') {
                    show(pr.id)
                    place(e.clientX, e.clientY)
                  }
                }}
                onPointerLeave={hide}
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-4 top-0 h-full w-[2px] origin-top scale-y-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-y-100 group-focus-within:scale-y-100 motion-reduce:transition-none"
                />
                <FadeIn delay={i * 0.08}>
                <article className="grid gap-6 py-8 md:grid-cols-12 md:gap-8 md:py-10" aria-labelledby={`p-${pr.id}`}>
                  <p className="label transition-colors duration-300 group-hover:text-accent md:col-span-1">{String(i + 1).padStart(2, '0')}</p>

                  <div className={`md:col-span-7 ${i % 2 === 1 ? 'lg:col-span-6 lg:col-start-3' : 'lg:col-span-6'}`}>
                    <p className="label mb-3">{pr.category}</p>
                    <h3 id={`p-${pr.id}`} className="text-3xl font-semibold tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-2 motion-reduce:transform-none md:text-5xl">
                      {pr.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-lg text-muted">{pr.summary}</p>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                      {pr.tags.map((t) => (
                        <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted transition-colors duration-300 group-hover:border-fg/60">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col items-start gap-5 md:col-span-4 md:items-end lg:col-span-3">
                    <Status status={pr.state ?? 'implemented'} />
                    <button
                      type="button"
                      aria-expanded={expanded}
                      aria-label={`${expanded ? 'Hide' : 'View'} details: ${pr.title}`}
                      aria-controls={`d-${pr.id}`}
                      onClick={() => setOpen(expanded ? null : pr.id)}
                      onFocus={(e) => onFocus(pr.id, e.currentTarget.closest('article'))}
                      onBlur={hide}
                      className="btn btn-ghost !min-h-[44px] !px-5"
                    >
                      {expanded ? <Minus size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}
                      {expanded ? 'Hide details' : 'View details'}
                    </button>
                  </div>

                  {/* Same card, inline, for devices without a hover preview */}
                  {!previewOn && (
                    <div className="md:col-span-12">
                      <ProjectPreview item={pr} inline />
                    </div>
                  )}

                  {expanded && pr.id === flagship.id && (
                    <div id={`d-${pr.id}`} className="md:col-span-12">
                      <FlagshipDetails />
                    </div>
                  )}

                  {expanded && pr.id !== flagship.id && (
                    <div id={`d-${pr.id}`} className="md:col-span-11 md:col-start-2">
                      <p className="max-w-2xl text-base leading-relaxed md:text-lg">{pr.detail}</p>
                      <p className="mt-5">
                        {pr.repo ? (
                          <a
                            href={pr.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-accent underline-offset-4 hover:underline"
                          >
                            View repository
                            <ArrowUpRight size={14} aria-hidden="true" />
                            <span className="sr-only">(opens in a new tab)</span>
                          </a>
                        ) : (
                          <span className="label normal-case tracking-normal">No public repository or demo.</span>
                        )}
                      </p>
                    </div>
                  )}
                </article>
                </FadeIn>
              </li>
            )
          })}
        </ul>
      </div>

      {previewOn && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-[60] overflow-hidden rounded-lg border border-line shadow-2xl"
          style={{ x: sx, y: sy, width: PW, height: PH }}
          animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.94 }}
          transition={{ duration: 0.2 }}
        >
          <ProjectPreview item={items.find((it) => it.id === last)} />
        </motion.div>
      )}
    </div>
  )
}
