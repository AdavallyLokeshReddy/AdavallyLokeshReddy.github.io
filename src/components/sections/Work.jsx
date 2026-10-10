import FeaturedProject from '../FeaturedProject'
import Projects from '../Projects'
import SectionHeading from '../ui/SectionHeading'

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="py-24 md:py-36">
      <div className="container-x">
        <SectionHeading id="work-title" index="01" kicker="Selected work" title="Systems I’m building and have built." />
        <FeaturedProject />
        <div className="mt-24 md:mt-36">
          <h3 className="label mb-8">More projects</h3>
          <Projects />
        </div>
      </div>
    </section>
  )
}
