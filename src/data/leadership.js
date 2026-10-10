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

  // How I work with people. First person and tied to roles and events stated above.
  // `from` shows where each one comes from. Edit the wording freely; keep claims to things you actually did.
  strengths: [
    {
      title: 'Planning and follow-through',
      text: 'I planned entrepreneurship events and stayed with them until the day itself, including the small details that keep a schedule from slipping.',
      from: 'Startup Odyssey · Illuminate',
    },
    {
      title: 'Working with a team',
      text: 'As Joint Secretary and then President of IE Cell, and as main student coordinator for Navnirman 3.0, I helped split the work between student teams and keep everyone on the same plan.',
      from: 'IE Cell · Navnirman 3.0',
    },
    {
      title: 'Talking to people',
      text: 'I dealt with participants and other teams directly, and I was part of the team that represented my university at NEC 2025 at IIT Bombay. Public speaking is something I am still improving.',
      from: 'NEC 2025 · Agentic AI Hackathon',
    },
    {
      title: 'Starting things',
      text: 'I like helping an idea for a startup or entrepreneurship activity become something that actually happens, not just something we talked about.',
      from: 'IE Cell initiatives',
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
        'I was a student coordinator for the hackathon run by Google Developer Groups Hyderabad at Malla Reddy University. The event set a Guinness World Record for the most participants in an agentic AI hackathon (2,089). The record belongs to the event as a whole; my part was coordinating on the student side.',
      links: [
        { label: 'LinkedIn post', url: 'https://lnkd.in/p/dHh_mEj6' },
        { label: 'Guinness World Records entry', url: 'https://www.guinnessworldrecords.com/world-records/778051-most-participants-in-an-agentic-ai-hackathon' },
      ],
    },
    {
      name: 'Navnirman 3.0',
      role: 'Main Student Coordinator',
      description: 'I was the main student coordinator for Navnirman 3.0.',
      links: [{ label: 'LinkedIn post', url: 'https://lnkd.in/p/d-hCNp2u' }],
    },
    {
      name: 'Illuminate',
      subtitle: 'Entrepreneurship Bootcamp · 4 Sep 2025 · with E-Cell, IIT Bombay',
      role: 'Event Lead',
      description: 'I led the Illuminate Entrepreneurship Bootcamp at Malla Reddy University, run with E-Cell, IIT Bombay. I received a Certificate of Appreciation for organising and conducting it.',
      links: [{ label: 'LinkedIn post', url: 'https://lnkd.in/p/dmC4zYPN' }],
    },
    {
      name: 'Startup Odyssey',
      subtitle: '13 Oct 2025 · Malla Reddy University',
      role: 'Event Lead',
      description: 'I led Startup Odyssey, an entrepreneurship event at Malla Reddy University run as an IE Club initiative.',
      links: [{ label: 'LinkedIn post', url: 'https://lnkd.in/p/d5i7x4RX' }],
    },
    {
      name: 'NEC 2025 · IIT Bombay',
      subtitle: 'National Entrepreneurship Challenge · organised by E-Cell, IIT Bombay',
      role: 'University team · Finalist',
      description: 'I represented my university’s team at the National Entrepreneurship Challenge 2025. Our team secured Rank 47 in the Advanced Track.',
      links: [{ label: 'LinkedIn post', url: 'https://lnkd.in/p/dz49MpgB' }],
    },
  ],
}

/**
 * Gallery shown as a scrolling strip.
 * - `photo`: the owner's own photo or certificate, not linked.
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
    file: 'ie/nec-certificate.webp',
    width: 1100,
    height: 850,
    fit: 'contain',
    bg: '#090d2b',
    alt: 'Certificate from E-Cell, IIT Bombay for the National Entrepreneurship Challenge 2025, congratulating the team on securing Rank 47 in the Advanced Track',
    caption: 'NEC 2025 · Advanced Track · Rank 47',
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
  {
    type: 'photo',
    file: 'ie/illuminate-certificate.webp',
    width: 1100,
    height: 779,
    fit: 'contain',
    bg: '#ffffff',
    alt: 'Illuminate Certificate of Appreciation from E-Cell, IIT Bombay for organising and conducting the Illuminate Entrepreneurship Bootcamp at Malla Reddy University on 4 September 2025',
    caption: 'Illuminate · Certificate of Appreciation',
  },
]
