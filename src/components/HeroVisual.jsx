import { motion, useReducedMotion } from 'framer-motion'
import { ease } from './motion/FadeIn'

const nodes = [
  [[150, 214], [150, 250], [150, 286]],
  [[240, 196], [240, 232], [240, 268], [240, 304]],
  [[330, 214], [330, 250], [330, 286]],
]
const blocks = [
  { x: 96, w: 90 },
  { x: 204, w: 90 },
  { x: 312, w: 72 },
]

/** Abstract data → model → software stack. Purely decorative, drawn once. */
export default function HeroVisual() {
  const reduce = useReducedMotion()
  const draw = (delay) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 1.1, delay, ease },
        }

  return (
    <svg viewBox="0 0 480 480" role="img" aria-label="Diagram: data signal feeds a model, which feeds software" className="h-auto w-full max-w-[520px]">
      <title>Data to model to software</title>

      {/* Layer labels */}
      <g className="fill-muted font-mono" fontSize="11" letterSpacing="1.6">
        <text x="30" y="70">01 DATA</text>
        <text x="30" y="188">02 MODEL</text>
        <text x="30" y="372">03 SOFTWARE</text>
      </g>

      {/* Layer guides */}
      {[48, 168, 350].map((y) => (
        <line key={y} x1="30" x2="450" y1={y} y2={y} className="stroke-line" strokeDasharray="2 6" />
      ))}

      {/* Signal */}
      <motion.path
        d="M30 112 C60 112 62 82 92 82 S124 126 154 126 S186 78 216 78 S250 118 282 118 S312 90 342 90 S390 112 450 112"
        fill="none"
        className="stroke-fg"
        strokeWidth="1.6"
        strokeLinecap="round"
        {...draw(0.5)}
      />

      {/* Connectors */}
      <motion.path d="M240 126 V196" fill="none" className="stroke-accent" strokeWidth="1.4" strokeDasharray="3 5" {...draw(1.0)} />
      <motion.path d="M240 304 V380" fill="none" className="stroke-accent" strokeWidth="1.4" strokeDasharray="3 5" {...draw(1.3)} />

      {/* Model nodes */}
      <g className="stroke-muted" strokeWidth="0.8" opacity="0.7">
        {nodes[0].flatMap((a, i) => nodes[1].map((b, j) => <line key={`a${i}${j}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />))}
        {nodes[1].flatMap((a, i) => nodes[2].map((b, j) => <line key={`b${i}${j}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />))}
      </g>
      <motion.g
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {nodes.flat().map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" className="fill-bg stroke-fg" strokeWidth="1.4" />
        ))}
      </motion.g>

      {/* Software blocks */}
      <motion.g
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.5, ease }}
      >
        {blocks.map((b) => (
          <rect key={b.x} x={b.x} y="384" width={b.w} height="56" rx="6" className="fill-surface stroke-fg" strokeWidth="1.2" />
        ))}
        <rect x="96" y="384" width="90" height="12" rx="6" className="fill-accent" />
        <g className="stroke-muted" strokeWidth="1.2" strokeLinecap="round">
          <line x1="108" x2="160" y1="414" y2="414" />
          <line x1="108" x2="140" y1="426" y2="426" />
          <line x1="216" x2="268" y1="414" y2="414" />
          <line x1="324" x2="356" y1="414" y2="414" />
        </g>
      </motion.g>
    </svg>
  )
}
