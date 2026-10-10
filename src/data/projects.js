/**
 * Project content. Statuses and descriptions are deliberately conservative.
 * Update them as soon as you can verify more. `repo` / `demo` stay null until a real URL exists.
 * Stage status values: 'implemented' | 'in-progress' | 'planned'
 */

export const flagship = {
  id: 'medical',
  title: 'Agentic AI for Autonomous Medical Image Analysis and Clinical Workflow Automation',
  category: 'Medical imaging · Agentic AI',
  status: 'Active development',
  scope:
    'An AI-assisted system focused on non-contrast head CT analysis, with a broader goal of supporting structured medical-image processing and clinical workflow automation.',
  disclaimer:
    'This is a research and engineering project in active development. It is not a clinically validated medical device, is not intended to diagnose patients or replace clinicians, and makes no claims about clinical accuracy, safety or regulatory compliance.',
  repo: 'https://github.com/AdavallyLokeshReddy/agentic-medical-image-analysis',
  demo: null,
  docs: null,
  overview:
    'Rather than building a standalone classifier, I am building a governed agentic architecture around medical imaging models: an orchestrator that coordinates tools, verifies their evidence, hands uncertain cases to a human reviewer, and records an audit trail. The primary focus is non-contrast head CT.',
  problem:
    'Head CT triage involves repetitive, time-sensitive steps: preparing images, running analysis, checking the results and routing them. I am exploring how much of that workflow can be structured in software while keeping a person in control of every decision.',
  why: 'A model output is only useful if it is verifiable, traceable and fits an existing workflow. That makes the engineering around the model (verification, uncertainty handling, human review, auditability) as important as the model itself.',
  users: [
    'Intended reader: a clinician or radiology team member reviewing results. This is an assumption, not a validated user study.',
    'Intended workflow: a study comes in, is preprocessed and analysed by registered tools, is verified, and produces a structured report that a human reviews.',
  ],
  approach:
    'A Python backend with an orchestrator, case state, task graph, tool registry and safety contract. Imaging uses DICOM and CT-volume preprocessing with PyTorch and MONAI model workflows, a FastAPI layer, database persistence with audit structures, and Pytest regression and integration tests. Model weights, datasets and case files are kept outside the repository.',
  decisions: [
    {
      t: 'Orchestration around models, not one big model',
      d: 'Each tool has a clear contract, so stages can be tested, swapped and audited independently.',
    },
    {
      t: 'Verification and a safety contract before reporting',
      d: 'Tool outputs become evidence objects that are checked before anything reaches a report.',
    },
    {
      t: 'Human review and audit trail as first-class features',
      d: 'Outputs are decision support for a reviewer, never autonomous diagnosis, and every step is recorded.',
    },
    {
      t: 'Structured reports over free text',
      d: 'Typed, traceable output is easier to audit and to integrate with other systems.',
    },
  ],
  challenges: [
    'No end-to-end evaluation or clinical validation yet. Reliability of the full workflow is still being evaluated.',
    'Model-runtime integration and uncertainty handling are still being improved.',
    'Deciding how far autonomous tool execution can go under safety constraints.',
    'Weights, datasets and case files are not published, so a public demo is not possible without proper authorisation and safeguards.',
  ],
  milestones: [
    'Strengthen the non-contrast head CT workflow',
    'Improve model-runtime integration, evidence verification and uncertainty handling',
    'Expand tool execution under safety constraints',
    'Evaluate end-to-end workflow reliability',
  ],
  // Statuses follow the repository README ("implemented / under active testing" vs "in progress").
  stages: [
    { id: 'input', label: 'CT input & preprocessing', note: 'DICOM / CT-volume preprocessing. Under active testing', status: 'implemented' },
    { id: 'orchestrate', label: 'Agent orchestration', note: 'Case state, task graph, tool registry. Under active testing', status: 'implemented' },
    { id: 'infer', label: 'Tool & model inference', note: 'MONAI workflows; runtime integration being improved', status: 'in-progress' },
    { id: 'verify', label: 'Verification & safety', note: 'Evidence objects, safety contract. Uncertainty handling in progress', status: 'in-progress' },
    { id: 'results', label: 'Structured report', note: 'Implemented, being expanded', status: 'implemented' },
    { id: 'review', label: 'Human review & audit', note: 'Review lifecycle and audit trail; workflows being expanded', status: 'in-progress' },
  ],
}

export const projects = [
  {
    id: 'rag',
    title: 'RAG Question-Answering Bot',
    category: 'GenAI · Retrieval',
    summary: 'A retrieval-based question-answering application that answers questions from a document collection.',
    tags: ['OpenAI', 'Pinecone', 'RAG'],
    status: 'Built',
    // TODO(verify): confirm the document source (e.g. a university handbook) and whether LangChain was used.
    detail:
      'A retrieval-augmented question-answering bot built around a notebook in the repository, using OpenAI and Pinecone. Confirm the source documents and add LangChain here only if it was used.',
    repo: 'https://github.com/AdavallyLokeshReddy/RAG',
    demo: null,
  },
  {
    id: 'bill',
    title: 'Fake Bill Detection',
    category: 'Classical ML',
    summary: 'A Flask app that classifies a banknote as genuine or fake from six physical measurements.',
    tags: ['Python', 'scikit-learn', 'Flask'],
    status: 'Built',
    detail:
      'A trained classifier is saved with joblib and loaded by a small Flask app. A form takes six numeric measurements (diagonal, left and right height, lower and upper margin, length), validates them, and returns "Genuine" or "Fake". The repository includes the training notebook. I have not published evaluation figures, so none are claimed here.',
    repo: 'https://github.com/AdavallyLokeshReddy/Fake_bill',
    demo: null,
  },
]
