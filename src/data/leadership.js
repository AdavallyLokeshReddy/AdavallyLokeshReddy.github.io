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
 * Gallery shown as a scrolling strip. Photos are the owner's own. Posts link to the owner's LinkedIn posts;
 * their text is not copied here because LinkedIn blocks automated reading. Add `title` to a post to show it on its card.
 */
export const gallery = [
  {
    type: 'photo',
    file: 'ie/startup-odyssey-1.jpg',
    width: 1200,
    height: 755,
    alt: 'A group of student organisers and guests standing in front of the Startup Odyssey entrance arch at Malla Reddy University',
    caption: 'Startup Odyssey · 13 Oct 2025',
  },
  { type: 'post', n: 1, url: 'https://lnkd.in/p/d-hCNp2u' },
  { type: 'post', n: 2, url: 'https://lnkd.in/p/dmC4zYPN' },
  {
    type: 'photo',
    file: 'ie/startup-odyssey-2.jpg',
    width: 1200,
    height: 675,
    alt: 'A smaller team of organisers and a guest posing in front of the Startup Odyssey banner listing patrons and coordinators',
    caption: 'Startup Odyssey · Malla Reddy University',
  },
  { type: 'post', n: 3, url: 'https://lnkd.in/p/dz49MpgB' },
  { type: 'post', n: 4, url: 'https://lnkd.in/p/dASfDcig' },
]
