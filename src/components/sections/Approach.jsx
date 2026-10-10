import FadeIn from '../motion/FadeIn'
import SectionHeading from '../ui/SectionHeading'

const principles = [
  ['Understand before I build.', 'I want to know what problem I’m solving, who it helps, and what a useful result looks like before I pick the technology.'],
  ['Make complexity manageable.', 'I split problems into smaller parts with clear jobs. That makes a system easier to understand, test, debug and improve.'],
  ['Know where the output comes from.', 'A result is only useful if I can explain how the system got there: what information it used and where it could have gone wrong.'],
  ['Be honest about what works.', 'A working demo is a starting point, not proof. I test edge cases, dig into failures, and say plainly what I’ve built, tested and still need to improve.'],
  ['Build beyond the demo.', 'Getting something to run is only part of the job. I try to make projects usable, maintainable, and easy for someone else to run.'],
  ['Take responsibility for the details.', 'Reliability, privacy, security and human oversight matter, especially with AI. I try to think about them throughout, not after the main work is done.'],
]

export default function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="border-t border-line py-24 md:py-36">
      <div className="container-x">
        <SectionHeading id="approach-title" index="03" kicker="Approach" title="How I like to work." />
        <p className="-mt-6 mb-12 max-w-2xl text-muted md:mb-16">
          I want to understand the problem, build with intention, and be honest about what the result can actually do.
          These are standards I’m working towards, not a claim that every project already meets them.
        </p>
        <ol className="border-b border-line">
          {principles.map(([t, d], i) => (
            <li key={t} className="group border-t border-line">
              <FadeIn delay={Math.min(i * 0.03, 0.12)} className="grid gap-2 py-6 md:grid-cols-12 md:gap-8 md:py-8">
                <span className="label transition-colors duration-300 group-hover:text-accent md:col-span-1">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-xl font-semibold tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-1.5 motion-reduce:transform-none md:col-span-6 md:text-3xl">{t}</h3>
                <p className="text-muted md:col-span-5 md:text-lg">{d}</p>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
