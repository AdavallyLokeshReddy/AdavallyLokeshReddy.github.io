/**
 * Leadership content. Only information the owner stated or that a public source confirms is published.
 *
 * Roles and dates (owner): IE Cell, Joint Secretary Feb 2025 – Dec 2025 (~11 months), then President Dec 2025 – Feb 2026 (~3 months).
 * Event roles are the owner's own statements. Public checks: the Guinness World Records entry and NEC 2025 (E-Cell, IIT Bombay).
 * Not independently verifiable (LinkedIn blocks automated reading): Navnirman 3.0 and Illuminate details, and every LinkedIn link.
 * Startup Odyssey details come from the owner's own event photo (banner: 13.10.2025, "An IE Club Initiative").
 * TODO(verify): confirm the organisation name (banners say "IE Club" / "Innovation and Entrepreneurship Club"; the owner says "IE Cell").
 */
export const leadership = {
  organisation: 'IE Cell',
  institution: 'Malla Reddy University',
  roles: [
    { title: 'Joint Secretary', period: 'Feb 2025 – Dec 2025', length: '~11 months' },
    { title: 'President', period: 'Dec 2025 – Feb 2026', length: '~3 months' },
  ],

  // How I work with people. Wording is careful: "experience in", "contributed to", "developing".
  strengths: [
    {
      title: 'Planning & execution',
      text: 'Experience planning events and following them through, from the first idea to the day itself, including the details that keep a plan on schedule.',
    },
    {
      title: 'Team coordination',
      text: 'Contributed to coordinating student teams: sharing out responsibilities and keeping everyone working towards the same plan.',
    },
    {
      title: 'Communication & representation',
      text: 'Communicating with participants and stakeholders, representing my university in external competition, and developing my public speaking.',
    },
    {
      title: 'Initiative & creative strategy',
      text: 'Supporting entrepreneurship and startup-related initiatives, and helping turn ideas into completed activities.',
    },
  ],

  // `featured` gets larger type. `links` open in a new tab.
  events: [
    {
      name: 'Agentic AI Hackathon · GDG Hyderabad',
      subtitle: '21 Dec 2025 · Malla Reddy University',
      role: 'Student Coordinator',
      featured: true,
      description:
        'Student coordinator for the hackathon run by Google Developer Groups Hyderabad. The event set a Guinness World Records title for the most participants in an agentic AI hackathon (2,089 participants). The record belongs to the event; my part was student coordination.',
      links: [
        { label: 'LinkedIn post', url: 'https://lnkd.in/p/dHh_mEj6' },
        { label: 'Guinness World Records entry', url: 'https://www.guinnessworldrecords.com/world-records/778051-most-participants-in-an-agentic-ai-hackathon' },
      ],
    },
    {
      name: 'Navnirman 3.0',
      role: 'Main Student Coordinator',
      description: 'Took the main student coordinator role for the event.',
      links: [{ label: 'LinkedIn post', url: 'https://lnkd.in/p/d-hCNp2u' }],
    },
    {
      name: 'Illuminate',
      subtitle: 'Workshop on Entrepreneurship',
      role: 'Event Lead',
      description: 'Event lead for a workshop on entrepreneurship.',
      links: [{ label: 'LinkedIn post', url: 'https://lnkd.in/p/dmC4zYPN' }],
    },
    {
      name: 'Startup Odyssey',
      subtitle: '13 Oct 2025 · Malla Reddy University',
      role: 'Event Lead',
      description: 'Event lead for an entrepreneurship event at Malla Reddy University, run as an IE Club initiative.',
      links: [{ label: 'LinkedIn post', url: 'https://lnkd.in/p/d5i7x4RX' }],
    },
    {
      name: 'NEC 2025 · IIT Bombay',
      subtitle: 'National Entrepreneurship Challenge · organised by E-Cell, IIT Bombay',
      role: 'University team · Finalist',
      description: 'Represented my university’s team at IIT Bombay as part of the NEC 2025 finalist experience.',
      links: [{ label: 'LinkedIn post', url: 'https://lnkd.in/p/dz49MpgB' }],
    },
  ],
}

/**
 * Gallery shown as a scrolling strip.
 * - `photo`: the owner's own photo, not linked.
 * - `post` with a `file`: an image card that links to the owner's LinkedIn post.
 * `fit: 'contain'` keeps posters whole (their text is part of the image) on a matching `bg`.
 * Every card needs an image `file` in public/ie/ (with its real width and height).
 *
 * Earlier text-only post cards were removed because they had no image. Their links, if you want to bring them back
 * with a picture: https://lnkd.in/p/d-hCNp2u, https://lnkd.in/p/dmC4zYPN, https://lnkd.in/p/dz49MpgB, https://lnkd.in/p/dASfDcig
 */
export const gallery = [
  {
    type: 'photo',
    file: 'ie/startup-odyssey-1.webp',
    width: 1100,
    height: 692,
    alt: 'A group of student organisers and guests standing in front of the Startup Odyssey entrance arch at Malla Reddy University',
    caption: 'Startup Odyssey · 13 Oct 2025',
  },
  {
    type: 'post',
    url: 'https://lnkd.in/p/dEHiaXmE',
    file: 'ie/startup-party.webp',
    width: 1000,
    height: 983,
    fit: 'contain',
    bg: '#0c0b10',
    alt: 'Startup Cypher poster for Startup Party in Hyderabad, with a large group photo of attendees holding signs',
    caption: 'Startup Cypher · Startup Party, Hyderabad',
  },
  {
    type: 'post',
    url: 'https://lnkd.in/p/dzsk4jSZ',
    file: 'ie/nec-finalists.webp',
    width: 1000,
    height: 1243,
    fit: 'contain',
    bg: '#0d134d',
    alt: 'NEC 2025 finalists poster for the Innovation and Entrepreneurship Club, with a team photo outside the university building',
    caption: 'NEC 2025 · Finalists',
  },
  {
    type: 'photo',
    file: 'ie/startup-odyssey-2.webp',
    width: 1100,
    height: 619,
    alt: 'A smaller team of organisers and a guest posing in front of the Startup Odyssey banner listing patrons and coordinators',
    caption: 'Startup Odyssey · Malla Reddy University',
  },
  {
    type: 'post',
    url: 'https://lnkd.in/p/dz6FG8pc',
    file: 'ie/illuminate.webp',
    width: 1000,
    height: 750,
    alt: 'A group of students in matching dark blazers standing in front of a Malla Reddy University backdrop',
    caption: 'Illuminate',
  },
]
