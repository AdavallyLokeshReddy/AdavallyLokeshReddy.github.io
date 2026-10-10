const styles = {
  implemented: { label: 'Implemented', cls: 'border-accent text-accent', dot: 'bg-accent' },
  'in-progress': { label: 'In development', cls: 'border-fg/50 text-fg', dot: 'bg-fg pulse-dot' },
  planned: { label: 'Planned', cls: 'border-dashed border-muted text-muted', dot: 'border border-muted' },
}

/** Status is carried by text and shape, never colour alone. */
export default function Status({ status }) {
  const s = styles[status]
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] ${s.cls}`}>
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  )
}
