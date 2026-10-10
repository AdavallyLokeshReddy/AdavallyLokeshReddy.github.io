import { education, profile } from '../../data/profile'
import FadeIn from '../motion/FadeIn'
import Portrait from '../Portrait'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-24 md:py-36">
      <div className="container-x">
        <SectionHeading id="about-title" index="02" kicker="About" title="The person behind the systems." />

        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Portrait />
          </div>

          <FadeIn delay={0.1} className="space-y-6 text-lg leading-relaxed md:text-xl">
            <p>
              I’m Lokesh, a B.Tech student in Artificial Intelligence and Machine Learning at {education.school}, graduating
              in 2027 and based in {profile.location.split(',')[0]}.
            </p>
            <p className="text-muted">
              I’m most interested in the gap between a model that works in a notebook and a system someone can actually
              use. That means medical imaging, retrieval-based GenAI, classical ML and the application code around them: data handling,
              interfaces, and the checks that make outputs trustworthy.
            </p>
            <p className="text-muted">
              Right now I’m working on a head CT analysis pipeline, learning PyTorch and MONAI properly, and getting more
              disciplined about evaluation. I’m looking for an internship or entry-level role where I can contribute to a
              real engineering team and learn from people who ship.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
