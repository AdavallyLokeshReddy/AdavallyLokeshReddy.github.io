import { ArrowUpRight, ShieldAlert } from 'lucide-react'
import { flagship as p } from '../data/projects'
import FadeIn from './motion/FadeIn'
import ProjectArchitecture from './ProjectArchitecture'
import Status from './ui/Status'

function Block({ n, title, children }) {
  return (
    <FadeIn className="border-t border-line pt-6">
      <h3 className="label mb-4 flex gap-3">
        <span className="text-accent">{n}</span>
        {title}
      </h3>
      <div className="space-y-3 text-base leading-relaxed text-fg/90 md:text-lg">{children}</div>
    </FadeIn>
  )
}

export default function FeaturedProject() {
  return (
    <article aria-labelledby="flagship-title">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <FadeIn className="lg:sticky lg:top-28 lg:self-start">
          <p className="label mb-4">Featured case study · {p.category}</p>
          <h3 id="flagship-title" className="text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            {p.title}
          </h3>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Status status="in-progress" />
            <span className="label">CT · MRI · X-ray</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-muted">{p.scope}</p>

          <p className="mt-8 flex gap-3 rounded-lg border border-line p-4 text-sm leading-relaxed text-muted">
            <ShieldAlert size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
            <span>
              <strong className="font-semibold text-fg">Please read: </strong>
              {p.disclaimer}
            </span>
          </p>

          <p className="mt-6">
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View repository
              <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </p>
          <p className="label mt-4 normal-case tracking-normal">
            No public demo. Model weights, datasets and case files are not published.
          </p>
        </FadeIn>

        <div className="space-y-10">
          <Block n="01" title="Overview">
            <p>{p.overview}</p>
          </Block>
          <Block n="02" title="The problem I’m exploring">
            <p>{p.problem}</p>
          </Block>
          <Block n="03" title="Why it matters">
            <p>{p.why}</p>
          </Block>
          <Block n="04" title="Users & workflow (assumptions)">
            {p.users.map((u) => (
              <p key={u}>{u}</p>
            ))}
          </Block>
          <Block n="05" title="Current technical approach">
            <p>{p.approach}</p>
          </Block>
        </div>
      </div>

      <div className="mt-16 border-t border-line pt-8 md:mt-24">
        <h3 className="label mb-3 flex gap-3">
          <span className="text-accent">06</span>Modality status
        </h3>
        <p className="mb-8 max-w-2xl text-muted">{p.modalityNote}</p>
        <ul className="grid gap-4 md:grid-cols-3">
          {p.modalities.map((m) => (
            <li key={m.id} className="flex flex-col gap-3 rounded-lg border border-line p-5">
              <div>
                <p className="text-2xl font-semibold tracking-tight">{m.name}</p>
                <p className="label mt-1">{m.full}</p>
              </div>
              <p className="text-sm leading-relaxed text-muted">{m.note}</p>
              <div className="mt-auto pt-2">
                <Status status={m.status} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 border-t border-line pt-8 md:mt-24">
        <h3 className="label mb-8 flex gap-3">
          <span className="text-accent">07</span>Architecture & inference pipeline (CT)
        </h3>
        <ProjectArchitecture stages={p.stages} />
      </div>

      <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-2 lg:gap-16">
        <FadeIn className="border-t border-line pt-6">
          <h3 className="label mb-5 flex gap-3">
            <span className="text-accent">08</span>Engineering decisions & trade-offs
          </h3>
          <dl className="space-y-5">
            {p.decisions.map((d) => (
              <div key={d.t}>
                <dt className="font-semibold">{d.t}</dt>
                <dd className="mt-1 text-muted">{d.d}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        <FadeIn className="border-t border-line pt-6">
          <h3 className="label mb-5 flex gap-3">
            <span className="text-accent">09</span>Challenges & open questions
          </h3>
          <ul className="space-y-3 text-muted">
            {p.challenges.map((c) => (
              <li key={c} className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-muted" />
                {c}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn className="border-t border-line pt-6 md:col-span-2">
          <h3 className="label mb-5 flex gap-3">
            <span className="text-accent">10</span>Next milestones
          </h3>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.milestones.map((m, i) => (
              <li key={m} className="rounded-lg border border-dashed border-line p-4">
                <span className="label mb-2 block">Next {i + 1}</span>
                {m}
              </li>
            ))}
          </ol>
        </FadeIn>
      </div>
    </article>
  )
}
