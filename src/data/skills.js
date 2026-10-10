/**
 * level: 'used' (appears in a finished project) | 'developing' (in my current project) | 'learning'
 * Review each entry; downgrade anything you cannot point to in real work.
 */
export const skillGroups = [
  {
    title: 'Programming',
    items: [
      { name: 'Python', level: 'used' },
      { name: 'Java', level: 'learning' },
      { name: 'SQL', level: 'learning' },
    ],
  },
  {
    title: 'ML & computer vision',
    items: [
      { name: 'ML fundamentals', level: 'used' },
      { name: 'Model evaluation', level: 'learning' },
      { name: 'scikit-learn', level: 'used' },
      { name: 'OpenCV', level: 'learning' },
      { name: 'YOLO', level: 'learning' },
      { name: 'Reinforcement learning', level: 'learning' },
    ],
  },
  {
    title: 'AI systems',
    items: [
      { name: 'RAG', level: 'used' },
      { name: 'LLM applications', level: 'used' },
      { name: 'Agentic AI concepts', level: 'developing' },
    ],
  },
  {
    title: 'Tools & engineering',
    items: [
      { name: 'Git', level: 'used' },
      { name: 'Flask', level: 'used' },
      { name: 'PyTorch', level: 'developing' },
      { name: 'MONAI', level: 'developing' },
      { name: 'DICOM workflows', level: 'developing' },
      { name: 'FastAPI', level: 'developing' },
      { name: 'PostgreSQL', level: 'developing' },
    ],
  },
]

export const levelLabel = {
  used: 'Used in projects',
  developing: 'Developing now',
  learning: 'Learning',
}

export const marqueeItems = [
  'Python', 'scikit-learn', 'RAG', 'PyTorch', 'MONAI', 'DICOM', 'Flask', 'Git', 'LLM apps', 'Pinecone',
]
