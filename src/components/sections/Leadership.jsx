import FadeIn from '../motion/FadeIn'
import SectionHeading from '../ui/SectionHeading'
import { leadership } from '../../data/leadership'

export default function Leadership() {
  const events = leadership.events.filter((e) => e.name && e.role)
  return (
    <section id="leadership" aria-labelledby="leadership-title" className="border-t border-line py-24 md:py-36">
      <div className="container-x">
        <SectionHeading id="leadership-title" index="02" kicker="Leadership" title="Leadership, initiative & community." />
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <FadeIn className="md:col-span-5">
            <p className="max-w-md text-lg text-muted md:text-xl">
              Building technology matters to me. So does helping people organise, collaborate and turn ideas into action.
            </p>
            <p className="label mt-8 normal-case tracking-normal">
              Taking responsibility in student activities, alongside my technical work.
            </p>
          </FadeIn>

          <div className="md:col-span-7">
            <p className="label mb-6">{leadership.organisation} · progression</p>
            <ol className="relative border-l border-line pl-8 md:pl-10">
              {leadership.roles.map((r, i) => (
                <li key={r.title} className="relative pb-12 last:pb-0">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[37px] top-2 h-3 w-3 rounded-full border md:-left-[45px] ${
                      i === leadership.roles.length - 1 ? 'border-accent bg-accent' : 'border-fg bg-bg'
                    }`}
                  />
                  <FadeIn>
                    <p className="label">{String(i + 1).padStart(2, '0')} · {r.duration}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">{r.title}</h3>
                    <p className="mt-1 text-muted">{leadership.organisation}</p>
                  </FadeIn>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {events.length > 0 && (
          <ul className="mt-16 border-b border-line md:mt-24">
            {events.map((e) => (
              <li key={e.name} className="border-t border-line">
                <FadeIn className="grid gap-2 py-6 md:grid-cols-12 md:gap-8 md:py-8">
                  <h3 className="text-xl font-semibold tracking-tight md:col-span-5 md:text-2xl">{e.name}</h3>
                  <p className="label md:col-span-2">{e.role}</p>
                  <p className="text-muted md:col-span-5">
                    {e.detail}
                    {e.note ? ` ${e.note}` : ''}
                  </p>
                </FadeIn>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
