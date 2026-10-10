import FadeIn from '../motion/FadeIn'

export default function SectionHeading({ index, kicker, title, id }) {
  return (
    <FadeIn className="mb-12 flex flex-col gap-4 md:mb-16">
      <p className="label flex items-center gap-3">
        <span className="text-accent">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-line" />
        {kicker}
      </p>
      <h2 id={id} className="max-w-4xl text-h2 font-semibold">
        {title}
      </h2>
    </FadeIn>
  )
}
