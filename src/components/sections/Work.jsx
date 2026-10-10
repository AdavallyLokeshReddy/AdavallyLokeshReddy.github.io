import Projects from '../Projects'
import SectionHeading from '../ui/SectionHeading'

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-t border-line py-24 md:py-36">
      <div className="container-x">
        <SectionHeading id="work-title" index="02" kicker="Selected work" title="Systems I’m building and have built." />
        <Projects />
      </div>
    </section>
  )
}
