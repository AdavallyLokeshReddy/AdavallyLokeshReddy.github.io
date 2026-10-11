export const profile = {
  name: 'Adavally Lokesh Reddy',
  shortName: 'Lokesh Reddy',
  monogram: 'LR',
  location: 'Hyderabad, India',
  email: 'adavallylokeshreddy@gmail.com',
  github: 'https://github.com/AdavallyLokeshReddy',
  linkedin: 'https://www.linkedin.com/in/lokeshreddyadavalli/',
}

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'approach', label: 'Approach' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const education = {
  degree: 'B.Tech in Artificial Intelligence and Machine Learning',
  school: 'Malla Reddy University',
  years: '2023 – 2027',
  // From the resume supplied in the brief. Confirm against the latest academic record.
  cgpa: '8.90 / 10',
}

/**
 * Every entry below is taken from a certificate the owner supplied.
 * Wording follows the certificate itself: a completion certificate is not described as an exam pass,
 * and a participation certificate is not described as a title. Scores are deliberately not shown.
 */
export const credentialGroups = [
  {
    title: 'Research',
    items: [
      {
        name: 'Agentic AI for Autonomous Medical Image Analysis and Clinical Workflow Management',
        issuer: 'IEEE ICCSAI 2026 · Galgotias University, Greater Noida',
        date: 'Accepted · 28–30 Nov 2026',
        note: 'Co-authored with G. Hariharan, Bachu Sai Jitesh and Ailneni Anirudh. A design proposal for a governed agentic imaging workflow, not a clinical trial. Accepted for in-person presentation. The camera-ready version has been submitted; the paper is not yet published.',
      },
      {
        name: 'Hawk’Eye',
        issuer: 'International Journal of Progressive Research in Engineering Management and Science (IJPREMS)',
        date: 'Nov 2024',
        note: 'Short paper describing the design of an assistive object and face recognition application. Co-authored; published in Vol. 4, Issue 11, pp. 1014–1016. DOI 10.58257/IJPREMS36558.',
      },
    ],
  },
  {
    title: 'Technical courses',
    items: [
      {
        name: 'AWS Cloud Practitioner Essentials',
        issuer: 'AWS Training & Certification',
        date: 'Mar 2026',
        note: 'Course completion certificate. An introduction to AWS cloud fundamentals.',
      },
      {
        name: 'Reinforcement Learning',
        issuer: 'NPTEL · IIT Madras',
        date: 'Jul – Oct 2025',
        note: 'Twelve-week course, successfully completed.',
      },
      {
        name: 'Data Structures and Algorithms Using Java',
        issuer: 'NPTEL · IIT Kharagpur',
        date: 'Jul – Oct 2024',
        note: 'Twelve-week course, successfully completed.',
      },
    ],
  },
  {
    title: 'Competitions and programmes',
    items: [
      {
        name: 'Google Student Ambassador Program',
        issuer: 'Google Student Ambassador Program',
        date: 'Dec 2025',
        note: 'Certificate of Participation, for active participation and collaboration in the programme.',
      },
      {
        name: 'Illuminate Entrepreneurship Bootcamp',
        issuer: 'E-Cell, IIT Bombay',
        date: 'Sep 2025',
        note: 'Certificate of Appreciation for organising and conducting the bootcamp at Malla Reddy University.',
      },
      {
        name: 'National Entrepreneurship Challenge 2025',
        issuer: 'E-Cell, IIT Bombay',
        date: '2025',
        note: 'Advanced Track. My team secured Rank 47.',
      },
    ],
  },
  {
    title: 'Language',
    items: [
      {
        name: 'Cambridge English · B2',
        issuer: 'Cambridge English',
        date: '',
        note: 'English language qualification.',
      },
    ],
  },
]
