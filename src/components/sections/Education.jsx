import { credentials, education } from '../../data/profile'
import FadeIn from '../motion/FadeIn'
import SectionHeading from '../ui/SectionHeading'

export default function Education() {
  const verified = credentials.filter((c) => c.verified)
  return (
    <section id="education" aria-labelledby="education-title" className="border-t border-line py-24 md:py-36">
      <div className="container-x">
        <SectionHeading id="education-title" index="06" kicker="Education & certifications" title="Where I’m studying, and what I’ve completed." />

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
          <FadeIn delay={0.08} className="mt-10 grid gap-6 border-t border-line pt-8 md:grid-cols-12">
            <h3 className="label md:col-span-3">Certifications</h3>
            <ul className="grid gap-4 md:col-span-9 md:grid-cols-3">
              {verified.map((c) => (
                <li key={c.name} className="border border-line p-5 transition-colors duration-300 hover:border-accent">
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
