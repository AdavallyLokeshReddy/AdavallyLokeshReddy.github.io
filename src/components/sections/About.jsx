import { education, profile } from '../../data/profile'
import FadeIn from '../motion/FadeIn'
import Portrait from '../Portrait'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-20 md:py-28">
      <div className="container-x">
        <SectionHeading id="about-title" index="01" kicker="About" title="The person behind the systems." />

        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <Portrait />
          </div>

          <FadeIn delay={0.1} className="space-y-6 text-lg leading-relaxed md:text-xl">
            <p className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              I’m Lokesh, an AI/ML undergraduate at {education.school} in {profile.location.split(',')[0]}.
            </p>
            <p className="text-muted">
              I’m most interested in the gap between a model that works in a notebook and a system people can actually
              rely on.
            </p>
            <p className="text-muted">
              So I like to understand the problem first, build in small pieces I can test, and keep an eye on the details.
              I’m working towards an AI/ML or GenAI internship where I can learn how dependable software is built and
              shipped, from people who do it well.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
