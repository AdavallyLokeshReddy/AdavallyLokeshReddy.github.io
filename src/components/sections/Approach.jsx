import FadeIn from '../motion/FadeIn'
import SectionHeading from '../ui/SectionHeading'

const principles = [
  ['Understand the problem first.', 'The model comes after I know what decision it supports and who reviews it.'],
  ['Build modular pipelines.', 'Small stages with clear inputs and outputs are easier to test, swap and debug.'],
  ['Keep outputs traceable.', 'Every result should be explainable back to its input and the steps that produced it.'],
  ['Study failure, not just success.', 'Edge cases and wrong answers tell me more than a good demo does.'],
  ['Ship it as software.', 'A model people cannot use or trust is unfinished work.'],
  ['Treat reliability and oversight as requirements.', 'Security, privacy and human review are part of the design from the start.'],
]

export default function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="border-t border-line py-24 md:py-36">
      <div className="container-x">
        <SectionHeading id="approach-title" index="04" kicker="Approach" title="How I like to work." />
        <p className="-mt-6 mb-12 max-w-2xl text-muted md:mb-16">
          These are the principles I’m building towards. Not every project of mine applies all of them yet.
        </p>
        <ol className="border-b border-line">
          {principles.map(([t, d], i) => (
            <li key={t} className="border-t border-line">
              <FadeIn className="grid gap-2 py-6 md:grid-cols-12 md:gap-8 md:py-8">
                <span className="label md:col-span-1">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-xl font-semibold tracking-tight md:col-span-6 md:text-3xl">{t}</h3>
                <p className="text-muted md:col-span-5 md:text-lg">{d}</p>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
