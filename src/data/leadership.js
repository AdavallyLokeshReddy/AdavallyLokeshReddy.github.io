/**
 * Leadership content. Only verified facts are published.
 * Roles and dates come from the owner: IE Cell, Joint Secretary (Feb 2025 – Dec 2025), then President (Dec 2025 – Feb 2026).
 * TODO(verify): add real responsibilities for each role when available.
 *
 * `events` stays empty until each role is confirmed. An event renders only when it has a `role`
 * (use exactly one of: Organiser, Coordinator, Volunteer, Participant, Presenter) and, optionally, a `note`:
 *   { name: 'Event name', role: 'Participant', detail: 'Short factual detail.', note: 'Genuine takeaway' }
 */
export const leadership = {
  organisation: 'IE Cell',
  roles: [
    { title: 'Joint Secretary', period: 'Feb 2025 – Dec 2025' },
    { title: 'President', period: 'Dec 2025 – Feb 2026' },
  ],
  events: [],
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
