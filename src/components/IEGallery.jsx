import { useState } from 'react'
import { ArrowUpRight, Pause, Play } from 'lucide-react'
import { gallery } from '../data/leadership'
import { Linkedin } from './ui/BrandIcons'

const base = import.meta.env.BASE_URL
const card =
  'flex h-[300px] w-[240px] shrink-0 flex-col overflow-hidden rounded-lg border border-line bg-surface sm:h-[330px] sm:w-[280px] md:h-[360px] md:w-[320px]'

function Picture({ item, hidden }) {
  return (
    <div className="min-h-0 flex-1 overflow-hidden" style={item.bg ? { backgroundColor: item.bg } : undefined}>
      <img
        src={`${base}${item.file}`}
        alt={hidden ? '' : item.alt}
        width={item.width}
        height={item.height}
        loading="lazy"
        decoding="async"
        draggable="false"
        className={`h-full w-full ${item.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
      />
    </div>
  )
}

function Card({ item, hidden }) {
  if (item.type === 'photo') {
    return (
      <figure className={card}>
        <Picture item={item} hidden={hidden} />
        <figcaption className="label border-t border-line px-4 py-3 normal-case tracking-normal">{item.caption}</figcaption>
      </figure>
    )
  }

  const link = {
    href: item.url,
    target: '_blank',
    rel: 'noopener noreferrer',
    tabIndex: hidden ? -1 : undefined,
  }

  return (
    <a {...link} className={`${card} group transition-colors hover:border-accent`}>
      <Picture item={item} hidden={hidden} />
      <span className="flex items-center justify-between gap-3 border-t border-line px-4 py-3 text-sm">
        <span className="flex min-w-0 items-center gap-2">
          <Linkedin size={14} />
          <span className="truncate">{item.caption}</span>
        </span>
        <ArrowUpRight size={16} aria-hidden="true" className="shrink-0 text-accent" />
        <span className="sr-only">{`(LinkedIn post: ${item.caption}, opens in a new tab)`}</span>
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
        <li key={item.url ?? item.file} className="flex">
          <Card item={item} hidden={hidden} />
        </li>
      ))}
    </ul>
  )
  return (
    <div>
      <div className="container-x mb-6 flex justify-end">
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
