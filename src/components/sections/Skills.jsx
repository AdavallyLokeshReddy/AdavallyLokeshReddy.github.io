import { useState } from 'react'
import { Pause, Play } from 'lucide-react'
import { levelLabel, marqueeItems, skillGroups } from '../../data/skills'
import FadeIn from '../motion/FadeIn'
import SectionHeading from '../ui/SectionHeading'

const dot = {
  used: 'bg-accent',
  developing: 'bg-fg',
  learning: 'border border-muted',
}

function Marquee() {
  const [paused, setPaused] = useState(false)
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
    <div>
      <div className="container-x mb-4 flex justify-end">
        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((p) => !p)}
          className="btn btn-ghost !min-h-[44px] !px-5 motion-reduce:hidden"
        >
          {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
          {paused ? 'Play technology strip' : 'Pause technology strip'}
        </button>
      </div>
      <div className={`marquee border-y border-line py-6 ${paused ? 'is-paused' : ''}`} role="group" aria-label="Technologies I work with">
        {group(false)}
        {group(true)}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-line py-24 md:py-36">
      <div className="container-x">
        <SectionHeading id="skills-title" index="05" kicker="Skills" title="What I work with, honestly labelled." />

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
          {skillGroups.map((g, gi) => (
            <FadeIn key={g.title} delay={(gi % 2) * 0.08} className="border-t border-line pt-6">
              <h3 className="mb-5 text-xl font-semibold tracking-tight">{g.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s.name} className="flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-sm transition-colors duration-200 hover:border-fg">
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
    </section>
  )
}
