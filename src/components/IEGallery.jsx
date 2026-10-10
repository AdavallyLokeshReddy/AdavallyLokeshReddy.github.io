import { useState } from 'react'
import { ArrowUpRight, Pause, Play } from 'lucide-react'
import { gallery } from '../data/leadership'
import { Linkedin } from './ui/BrandIcons'

const base = import.meta.env.BASE_URL
const card = 'flex h-[270px] w-[280px] shrink-0 flex-col overflow-hidden rounded-lg border border-line bg-surface sm:h-[300px] sm:w-[340px] md:h-[330px] md:w-[400px]'

function Card({ item, hidden }) {
  if (item.type === 'photo') {
    return (
      <figure className={card}>
        <div className="min-h-0 flex-1 overflow-hidden">
          <img
            src={`${base}${item.file}`}
            alt={hidden ? '' : item.alt}
            width={item.width}
            height={item.height}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <figcaption className="label border-t border-line px-4 py-3 normal-case tracking-normal">{item.caption}</figcaption>
      </figure>
    )
  }
  const n = String(item.n).padStart(2, '0')
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={hidden ? -1 : undefined}
      className={`${card} group justify-between p-5 transition-colors hover:border-accent md:p-6`}
    >
      <span className="label flex items-center gap-2">
        <Linkedin size={14} />
        LinkedIn post
      </span>
      <span aria-hidden="true" className="text-[5.5rem] font-semibold leading-none tracking-tighter text-muted/40 transition-colors group-hover:text-accent md:text-[7rem]">
        {n}
      </span>
      <span className="flex items-center justify-between border-t border-line pt-4 text-sm">
        {item.title ?? 'Read the post'}
        <ArrowUpRight size={16} aria-hidden="true" className="text-accent" />
        <span className="sr-only">{`(LinkedIn post ${n}, opens in a new tab)`}</span>
      </span>
    </a>
  )
}

/** Horizontal, seamless scrolling strip: two identical groups, each shifted exactly one group width. */
export default function IEGallery() {
  const [paused, setPaused] = useState(false)
  const group = (hidden) => (
    <ul className="marquee-group" aria-hidden={hidden || undefined}>
      {gallery.map((item) => (
        <li key={item.file ?? item.url} className="flex">
          <Card item={item} hidden={hidden} />
        </li>
      ))}
    </ul>
  )
  return (
    <div>
      <div className="mb-6 flex justify-end">
        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((p) => !p)}
          className="btn btn-ghost !min-h-[44px] !px-5 motion-reduce:hidden"
        >
          {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
          {paused ? 'Play gallery' : 'Pause gallery'}
        </button>
      </div>
      <div className={`marquee marquee-cards ${paused ? 'is-paused' : ''}`} role="group" aria-label="IE Cell photos and LinkedIn posts">
        {group(false)}
        {group(true)}
      </div>
    </div>
  )
}
