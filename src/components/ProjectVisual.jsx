/** Original SVG artwork per project. Inline, so it can never 404. Not representations of real results. */
export default function ProjectVisual({ id, className = '' }) {
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true" focusable="false" className={`block w-full ${className}`}>
      <rect width="320" height="200" className="fill-surface" />
      <g className="stroke-line" strokeWidth="1">
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="0" x2="320" y1={y} y2={y} />
        ))}
        {[64, 128, 192, 256].map((x) => (
          <line key={x} y1="0" y2="200" x1={x} x2={x} />
        ))}
      </g>

      {id === 'medical' && (
        <g fill="none" strokeWidth="1.5">
          <rect x="24" y="48" width="56" height="26" rx="4" className="stroke-fg" />
          <rect x="24" y="87" width="56" height="26" rx="4" className="stroke-fg" />
          <rect x="24" y="126" width="56" height="26" rx="4" className="stroke-muted" strokeDasharray="4 4" />
          <path d="M80 61 H118 M80 100 H118 M80 139 H118" className="stroke-muted" />
          <circle cx="146" cy="100" r="28" className="stroke-accent" />
          <circle cx="146" cy="100" r="6" className="fill-accent stroke-none" />
          <path d="M174 100 H206" className="stroke-muted" />
          <rect x="206" y="72" width="46" height="56" rx="4" className="stroke-fg" />
          <path d="M216 90 h26 M216 100 h26 M216 110 h14" className="stroke-muted" />
          <path d="M252 100 H272" className="stroke-muted" />
          <circle cx="290" cy="100" r="14" className="stroke-accent" />
          <path d="M283 100 l5 5 l9 -10" className="stroke-accent" />
        </g>
      )}

      {id === 'rag' && (
        <g fill="none" strokeWidth="1.5">
          <rect x="30" y="40" width="70" height="26" rx="4" className="stroke-fg" />
          <rect x="30" y="80" width="70" height="26" rx="4" className="stroke-fg" />
          <rect x="30" y="120" width="70" height="26" rx="4" className="stroke-fg" />
          <path d="M100 53 H160 M100 93 H160 M100 133 H160" className="stroke-muted" />
          <circle cx="186" cy="93" r="26" className="stroke-accent" />
          <circle cx="186" cy="93" r="5" className="fill-accent stroke-none" />
          <path d="M212 93 H250" className="stroke-muted" />
          <rect x="250" y="70" width="46" height="46" rx="6" className="stroke-fg" />
          <path d="M260 86 h26 M260 96 h26 M260 106 h16" className="stroke-muted" />
        </g>
      )}

      {id === 'bill' && (
        <g fill="none" strokeWidth="1.5">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect
              key={i}
              x={40 + i * 40}
              y={150 - [30, 52, 38, 78, 60, 92][i]}
              width="24"
              height={[30, 52, 38, 78, 60, 92][i]}
              className={i === 3 || i === 5 ? 'fill-accent stroke-accent' : 'stroke-fg'}
              fillOpacity={i === 3 || i === 5 ? 0.9 : 0}
            />
          ))}
          <line x1="30" x2="290" y1="150" y2="150" className="stroke-fg" />
          <path d="M30 108 H290" className="stroke-muted" strokeDasharray="4 4" />
        </g>
      )}

      {id === 'hawkeye' && (
        <g fill="none" strokeWidth="1.5">
          <rect x="52" y="52" width="86" height="64" rx="3" className="stroke-fg" />
          <rect x="176" y="84" width="90" height="70" rx="3" className="stroke-accent" />
          <path d="M138 84 C158 84 160 112 176 116" className="stroke-muted" strokeDasharray="4 4" />
          <path d="M52 52 h14 M52 52 v14 M138 116 h-14 M138 116 v-14" className="stroke-accent" />
          <circle cx="221" cy="119" r="4" className="fill-accent stroke-none" />
          <path d="M221 104 v10 M221 124 v10 M206 119 h10 M226 119 h10" className="stroke-fg" />
        </g>
      )}
    </svg>
  )
}
