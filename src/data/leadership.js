/**
 * Leadership content. Only verified facts are published.
 * Roles below come from the owner's brief: IE Cell, Joint Secretary (11 months) then President (3 months).
 * TODO(verify): confirm the official name ("IE Cell" or "IE Club"), start/end dates, and real responsibilities.
 *
 * `events` stays empty until each role is confirmed. An event renders only when it has a `role`
 * (use exactly one of: Organiser, Coordinator, Volunteer, Participant, Presenter) and, optionally, a `note`:
 *   { name: 'Event name', role: 'Participant', detail: '30-hour hackathon · Malla Reddy University', note: 'Genuine takeaway' }
 */
export const leadership = {
  organisation: 'IE Cell',
  roles: [
    { title: 'Joint Secretary', duration: '11 months' },
    { title: 'President', duration: '3 months' },
  ],
  events: [],
}
