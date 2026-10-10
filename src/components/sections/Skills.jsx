import { credentials, education } from '../../data/profile'
import { levelLabel, marqueeItems, skillGroups } from '../../data/skills'
import FadeIn from '../motion/FadeIn'
import SectionHeading from '../ui/SectionHeading'

const dot = {
  used: 'bg-accent',
  developing: 'bg-fg',
  learning: 'border border-muted',
}

function Marquee() {
  const group = (hidden) => (
    <ul className="marquee-group" aria-hidden={hidden || undefined}>
      {marqueeItems.map((m) => (
        <li key={m} className="whitespace-nowrap text-4xl font-semibold tracking-tight text-muted/60 md:text-6xl">
          {m}
        </li>
      ))}
    </ul>
  )
  return (
    <div className="marquee border-y border-line py-6" role="group" aria-label="Technologies I work with">
      {group(false)}
      {group(true)}
    </div>
  )
}

export default function Skills() {
  const verified = credentials.filter((c) => c.verified)
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-line py-24 md:py-36">
      <div className="container-x">
        <SectionHeading id="skills-title" index="05" kicker="Skills & education" title="What I work with, honestly labelled." />

        <FadeIn>
          <ul className="mb-12 flex flex-wrap gap-x-6 gap-y-2" aria-label="Legend">
            {Object.entries(levelLabel).map(([k, v]) => (
              <li key={k} className="label flex items-center gap-2">
                <span aria-hidden="true" className={`h-2 w-2 rounded-full ${dot[k]}`} />
                {v}
              </li>
            ))}
          </ul>
        </FadeIn>

        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {skillGroups.map((g) => (
            <FadeIn key={g.title} className="border-t border-line pt-6">
              <h3 className="mb-5 text-xl font-semibold tracking-tight">{g.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s.name} className="flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-sm">
                    <span aria-hidden="true" className={`h-2 w-2 rounded-full ${dot[s.level]}`} />
                    {s.name}
                    <span className="sr-only"> — {levelLabel[s.level]}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="my-20 md:my-28">
        <Marquee />
      </div>

      <div className="container-x">
        <FadeIn className="grid gap-6 border-t border-line pt-8 md:grid-cols-12">
          <h3 className="label md:col-span-3">Education</h3>
          <div className="md:col-span-9">
            <p className="text-2xl font-semibold tracking-tight md:text-3xl">{education.degree}</p>
            <p className="mt-2 text-muted">
              {education.school} · {education.years} · CGPA {education.cgpa}
            </p>
          </div>
        </FadeIn>

        {verified.length > 0 && (
          <FadeIn className="mt-10 grid gap-6 border-t border-line pt-8 md:grid-cols-12">
            <h3 className="label md:col-span-3">Certifications</h3>
            <ul className="grid gap-4 md:col-span-9 md:grid-cols-3">
              {verified.map((c) => (
                <li key={c.name} className="border border-line p-5">
                  <p className="font-semibold leading-snug">{c.name}</p>
                  <p className="mt-2 text-sm text-muted">{c.issuer}</p>
                  <p className="label mt-4 normal-case tracking-normal">{c.note}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
