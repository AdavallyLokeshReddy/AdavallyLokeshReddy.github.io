import { credentialGroups, education } from '../../data/profile'
import FadeIn from '../motion/FadeIn'
import SectionHeading from '../ui/SectionHeading'

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="border-t border-line py-24 md:py-36">
      <div className="container-x">
        <SectionHeading id="education-title" index="06" kicker="Education & certifications" title="Where I’m studying, and what I’ve completed." />
        <p className="-mt-6 mb-12 max-w-2xl text-muted md:mb-16">
          Courses I have finished, and recognition from events I helped run or took part in.
        </p>

        <FadeIn className="grid gap-6 border-t border-line pt-8 md:grid-cols-12">
          <h3 className="label md:col-span-3">Degree</h3>
          <div className="md:col-span-9">
            <p className="text-2xl font-semibold tracking-tight md:text-3xl">{education.degree}</p>
            <p className="mt-2 text-muted">
              {education.school} · {education.years} · CGPA {education.cgpa}
            </p>
          </div>
        </FadeIn>

        {credentialGroups.map((g) => (
          <FadeIn key={g.title} className="mt-10 grid gap-6 border-t border-line pt-8 md:grid-cols-12">
            <h3 className="label md:col-span-3">{g.title}</h3>
            <ul className="md:col-span-9">
              {g.items.map((c, i) => (
                <li
                  key={c.name}
                  className={`group grid gap-1 py-5 transition-colors duration-300 md:grid-cols-12 md:gap-6 ${i > 0 ? 'border-t border-line' : 'pt-0'}`}
                >
                  <p className="label md:col-span-3 md:pt-1.5">{c.date || 'Qualification'}</p>
                  <div className="md:col-span-9">
                    <p className="text-lg font-semibold leading-snug tracking-tight transition-colors duration-300 group-hover:text-accent md:text-xl">
                      {c.name}
                    </p>
                    <p className="mt-1 text-sm text-fg/80">{c.issuer}</p>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{c.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
