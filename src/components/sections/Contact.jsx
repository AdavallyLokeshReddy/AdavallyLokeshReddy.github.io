import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { Github, Linkedin } from '../ui/BrandIcons'
import { profile } from '../../data/profile'
import FadeIn from '../motion/FadeIn'
import SectionHeading from '../ui/SectionHeading'

// Web3Forms access keys are public by design (they appear in every page that uses the service) and can only send to the
// email address they were created for. Lock this key to your site's domain in the Web3Forms dashboard.
// A VITE_WEB3FORMS_KEY build variable, if set, takes priority.
const KEY = import.meta.env.VITE_WEB3FORMS_KEY || 'c40ea592-cffc-4637-8726-481d695cea58'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your name.'
  if (!v.email.trim()) e.email = 'Please enter your email.'
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'That email address doesn’t look right.'
  if (v.message.trim().length < 10) e.message = 'Please write at least a sentence (10+ characters).'
  return e
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="label mb-2 block">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} className="mt-2 text-sm text-fg">
          <span aria-hidden="true" className="mr-2 text-accent">
            ✕
          </span>
          {error}
        </p>
      )}
    </div>
  )
}

const input =
  'w-full rounded-lg border border-line bg-transparent px-4 py-3 text-base text-fg placeholder:text-muted/60 transition-colors hover:border-muted focus:border-accent focus:outline-none focus-visible:outline-none focus:ring-1 focus:ring-accent aria-[invalid=true]:border-fg'

export default function Contact() {
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const formRef = useRef(null)
  const abortRef = useRef(null)

  useEffect(() => () => abortRef.current?.abort(), [])

  async function onSubmit(ev) {
    ev.preventDefault()
    if (status === 'sending') return // guards against double submits
    const fd = new FormData(formRef.current)
    const values = { name: fd.get('name') ?? '', email: fd.get('email') ?? '', message: fd.get('message') ?? '' }
    if (fd.get('botcheck')) return // honeypot filled: silently drop

    const found = validate(values)
    setErrors(found)
    const firstBad = Object.keys(found)[0]
    if (firstBad) {
      formRef.current.elements[firstBad]?.focus()
      return
    }

    setStatus('sending')
    abortRef.current?.abort()
    const ctrl = new AbortController()
    abortRef.current = ctrl
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: KEY,
          subject: `Portfolio message from ${values.name.trim()}`,
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
        }),
        signal: ctrl.signal,
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.success) {
        setStatus('success')
        formRef.current.reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      if (err.name !== 'AbortError') setStatus('error')
    }
  }

  const sending = status === 'sending'

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-24 md:py-36">
      <div className="container-x grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <div>
          <SectionHeading id="contact-title" index="07" kicker="Contact" title="Have a meaningful problem to solve?" />
          <FadeIn className="-mt-4 space-y-8">
            <p className="max-w-md text-lg text-muted">
              I’m looking for AI/ML and software internships or entry-level roles, and I’m glad to talk about projects,
              collaboration or feedback on my work.
            </p>
            <ul className="space-y-3">
              {[
                [Mail, profile.email, `mailto:${profile.email}`],
                [Linkedin, 'LinkedIn', profile.linkedin],
                [Github, 'GitHub', profile.github],
              ].map(([Icon, label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group inline-flex items-center gap-3 text-lg hover:text-accent"
                  >
                    <Icon size={20} />
                    {label}
                    {href.startsWith('http') && (
                      <>
                        <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-6" aria-describedby="form-status">
            <Field id="name" label="Name" error={errors.name}>
              <input id="name" name="name" type="text" autoComplete="name" required aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} className={input} />
            </Field>
            <Field id="email" label="Email" error={errors.email}>
              <input id="email" name="email" type="email" inputMode="email" autoComplete="email" required aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined} className={input} />
            </Field>
            <Field id="message" label="Message" error={errors.message}>
              <textarea id="message" name="message" rows={5} required aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} className={`${input} resize-y`} />
            </Field>

            {/* Honeypot: hidden from people and assistive tech */}
            <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

            <button type="submit" disabled={sending} aria-disabled={sending} className="btn btn-primary w-full disabled:opacity-60 sm:w-auto">
              {sending ? 'Sending…' : 'Send message'}
            </button>

            <p id="form-status" role="status" aria-live="polite" className="min-h-[1.5rem] text-sm">
              {status === 'success' && 'Thanks, your message was sent. I’ll reply by email.'}
              {status === 'error' && (
                <span>
                  Something went wrong and your message was <strong>not</strong> sent. Please try again, or email{' '}
                  <a className="text-accent underline underline-offset-4" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                  .
                </span>
              )}
            </p>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
