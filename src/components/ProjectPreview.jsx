const marker = {
  implemented: 'border-accent bg-accent',
  'in-progress': 'border-fg bg-bg',
  planned: 'border-dashed border-muted bg-bg',
}
const markerText = { implemented: 'implemented', 'in-progress': 'in development', planned: 'planned' }

/**
 * A small "how it works" card for one project. Everything shown comes from the project data,
 * so it says something real instead of decorating. Used as the hover card on desktop and inline on touch devices.
 */
export default function ProjectPreview({ item, inline = false }) {
  const steps = item.flow ?? []
  const hasStatus = steps.some((s) => s.s)
  return (
    <div
      className={`flex flex-col bg-surface p-4 ${inline ? 'rounded-lg border border-line' : 'h-full'}`}
    >
      <p className="label mb-3 flex items-center justify-between gap-3">
        <span>{item.flowTitle}</span>
        <span className="text-accent">{String(steps.length).padStart(2, '0')} steps</span>
      </p>

      <ol className="relative flex-1 space-y-2">
        <span aria-hidden="true" className="absolute bottom-1.5 left-[5px] top-1.5 w-px bg-line" />
        {steps.map((s, i) => (
          <li key={s.t} className="relative flex items-start gap-3 text-[0.8rem] leading-snug">
            <span
              aria-hidden="true"
              className={`relative mt-[3px] h-[11px] w-[11px] shrink-0 rounded-full border ${
                s.s ? marker[s.s] : i === steps.length - 1 ? 'border-accent bg-accent' : 'border-fg bg-bg'
              }`}
            />
            <span className="text-fg">
              {s.t}
              {s.s && <span className="sr-only"> ({markerText[s.s]})</span>}
            </span>
          </li>
        ))}
      </ol>

      <p className="mt-3 border-t border-line pt-3 text-xs leading-snug text-muted">
        {item.flowNote}
        {hasStatus && (
          <span className="mt-1 block font-mono text-[0.65rem] uppercase tracking-[0.1em]">
            ● implemented · ○ in development
          </span>
        )}
      </p>
    </div>
  )
}
