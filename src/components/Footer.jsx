import { useReducedMotion } from 'framer-motion'
import { ArrowUp, Mail } from 'lucide-react'
import { Github, Linkedin } from './ui/BrandIcons'
import { profile } from '../data/profile'

export default function Footer() {
  const reduce = useReducedMotion()
  const links = [
    [Github, 'GitHub', profile.github, true],
    [Linkedin, 'LinkedIn', profile.linkedin, true],
    [Mail, 'Email', `mailto:${profile.email}`, false],
  ]
  return (
    <footer className="border-t border-line py-10">
      <div className="container-x flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="label mt-1 normal-case tracking-normal">© {new Date().getFullYear()} · Built with React and Framer Motion</p>
        </div>
        <ul className="flex flex-wrap items-center gap-5">
          {links.map(([Icon, label, href, ext]) => (
            <li key={label}>
              <a
                href={href}
                {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex min-h-[44px] items-center gap-2 text-sm text-muted hover:text-fg"
              >
                <Icon size={16} />
                {label}
                {ext && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-line px-4 text-sm hover:border-fg"
            >
              <ArrowUp size={16} aria-hidden="true" />
              Back to top
            </button>
          </li>
        </ul>
      </div>
    </footer>
  )
}
