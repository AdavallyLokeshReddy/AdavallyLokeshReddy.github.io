import { ArrowUpRight } from 'lucide-react'
import FadeIn from '../motion/FadeIn'
import IEGallery from '../IEGallery'
import SectionHeading from '../ui/SectionHeading'
import { leadership } from '../../data/leadership'

function EventRow({ e, i }) {
  return (
    <li className="group border-t border-line">
      <FadeIn delay={Math.min(i * 0.04, 0.16)} className="grid gap-3 py-6 md:grid-cols-12 md:gap-8 md:py-8">
        <p className="label md:col-span-3">
          {String(i + 1).padStart(2, '0')} · {e.role}
        </p>
        <div className="md:col-span-5">
          <h4 className={`font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent ${e.featured ? 'text-2xl md:text-4xl' : 'text-xl md:text-2xl'}`}>{e.name}</h4>
          {e.subtitle && <p className="label mt-2 normal-case tracking-normal">{e.subtitle}</p>}
        </div>
        <div className="space-y-4 md:col-span-4">
          <p className="text-muted">{e.description}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {e.links.map((l) => (
              <li key={l.url}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[32px] items-center gap-1.5 text-sm text-accent underline-offset-4 hover:underline"
                >
                  {l.label}
                  <ArrowUpRight size={14} aria-hidden="true" />
                  <span className="sr-only">
                    {` for ${e.name} (opens in a new tab)`}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </li>
  )
}

export default function Leadership() {
  const last = leadership.roles.length - 1
  return (
    <section id="leadership" aria-labelledby="leadership-title" className="border-t border-line py-24 md:py-36">
      <div className="container-x">
        <SectionHeading id="leadership-title" index="04" kicker="Leadership" title="Beyond the build." />
        <p className="-mt-6 mb-12 max-w-2xl text-muted md:mb-16">
          People, initiatives, and moments that shaped how I work.
        </p>

        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <h3 className="label mb-6">Formal roles · {leadership.organisation}</h3>
            <ol className="relative border-l border-line pl-8 md:pl-10">
              {leadership.roles.map((r, i) => (
                <li key={r.title} className="relative pb-10 last:pb-0">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[37px] top-2 h-3 w-3 rounded-full border md:-left-[45px] ${
                      i === last ? 'border-accent bg-accent' : 'border-fg bg-bg'
                    }`}
                  />
                  <FadeIn>
                    <p className="label">
                      {r.period} · {r.length}
                    </p>
                    <h4 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{r.title}</h4>
                    <p className="mt-1 text-muted">
                      {leadership.organisation} · {leadership.institution}
                    </p>
                  </FadeIn>
                </li>
              ))}
            </ol>
          </div>

          <div className="md:col-span-7">
            <h3 className="label mb-6">How I work with people</h3>
            <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {leadership.strengths.map((s, i) => (
                <li key={s.title} className="group border-t border-line pt-4 transition-colors duration-300 hover:border-accent">
                  <FadeIn delay={i * 0.07}>
                    <h4 className="font-semibold">{s.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">{s.text}</p>
                    {s.from && <p className="label mt-3 normal-case tracking-normal">{s.from}</p>}
                  </FadeIn>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <h3 className="label mb-6">Selected events</h3>
          <ol className="border-b border-line">
            {leadership.events.map((e, i) => (
              <EventRow key={e.name} e={e} i={i} />
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-20 md:mt-28">
        <div className="container-x">
          <FadeIn className="mb-8 md:mb-10">
            <p className="label mb-3">Gallery · photos, posts & certificates</p>
            <h3 className="text-3xl font-semibold tracking-tight md:text-5xl">IE Cell, in frames.</h3>
            <p className="mt-4 max-w-xl text-muted">
              Photos from Startup Odyssey, three of my LinkedIn posts and two event certificates. Each post opens on LinkedIn.
            </p>
          </FadeIn>
        </div>
        <IEGallery />
      </div>
    </section>
  )
}
