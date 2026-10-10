import { motion, useReducedMotion } from 'framer-motion'
import { ease } from './motion/FadeIn'
import Status from './ui/Status'

/**
 * Pipeline diagram. One ordered list: vertical on small screens, horizontal from lg up.
 * Reads completely without motion; the connecting rail simply draws in when animation is allowed.
 */
export default function ProjectArchitecture({ stages }) {
  const reduce = useReducedMotion()
  const rail = reduce
    ? {}
    : {
        initial: { scale: 0 },
        whileInView: { scale: 1 },
        viewport: { once: true, margin: '0px 0px -15% 0px' },
        transition: { duration: 1.2, ease },
      }
  const item = (i) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '0px 0px -10% 0px' },
          transition: { duration: 0.5, ease, delay: i * 0.08 },
        }

  return (
    <figure aria-labelledby="arch-caption">
      <div className="relative">
        {/* rail: vertical on mobile, horizontal on lg */}
        <motion.div
          aria-hidden="true"
          className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-line lg:bottom-auto lg:left-0 lg:right-0 lg:top-[7px] lg:h-px lg:w-auto lg:origin-left"
          {...rail}
        />
        <ol className="grid gap-8 lg:grid-cols-6 lg:gap-4">
          {stages.map((s, i) => (
            <motion.li key={s.id} className="relative pl-8 lg:pl-0 lg:pt-8" {...item(i)}>
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2 bg-bg lg:top-0 ${
                  s.status === 'planned' ? 'border-dashed border-muted' : s.status === 'implemented' ? 'border-accent bg-accent' : 'border-fg'
                }`}
              />
              <p className="label mb-2">Stage {String(i + 1).padStart(2, '0')}</p>
              <h4 className="mb-1 text-base font-semibold leading-snug">{s.label}</h4>
              <p className="mb-3 text-sm text-muted">{s.note}</p>
              <Status status={s.status} />
            </motion.li>
          ))}
        </ol>
      </div>
      <figcaption id="arch-caption" className="label mt-8 max-w-2xl normal-case tracking-normal">
        Pipeline overview. Status reflects the current state of the project; nothing here is clinically validated.
      </figcaption>
    </figure>
  )
}
