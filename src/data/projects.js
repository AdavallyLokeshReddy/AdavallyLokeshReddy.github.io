/**
 * Project content. Statuses and descriptions are deliberately conservative.
 * Update them as soon as you can verify more. `repo` / `demo` stay null until a real URL exists.
 * Stage status values: 'implemented' | 'in-progress' | 'planned'
 */

export const flagship = {
  id: 'medical',
  title: 'Agentic AI for Multimodal Medical Image Analysis & Clinical Workflow Automation',
  shortTitle: 'Agentic Medical Image Analysis',
  category: 'Medical imaging · Agentic AI',
  brief:
    'An agentic system that coordinates tools, verifies evidence and keeps a human reviewer in control. Current focus: non-contrast head CT, with MRI and X-ray in development.',
  tags: ['Python', 'PyTorch', 'MONAI', 'FastAPI'],
  status: 'Active development',
  scope:
    'An AI-assisted system for medical image analysis and clinical workflow automation. The current focus is non-contrast head CT, with MRI and X-ray support started and in development.',
  disclaimer:
    'This is a research and engineering project in active development. It is not a clinically validated medical device, is not intended to diagnose patients or replace clinicians, and makes no claims about clinical accuracy, safety or regulatory compliance.',
  repo: 'https://github.com/AdavallyLokeshReddy/agentic-medical-image-analysis',
  demo: null,
  docs: null,
  overview:
    'I am not building a standalone classifier. I am building a governed, agentic architecture around medical imaging models: an orchestrator that coordinates tools, checks their evidence, passes uncertain cases to a human reviewer and keeps an audit trail. The longer-term aim is to cover CT, MRI and X-ray through separate, modality-specific pipelines. For now the focus is non-contrast head CT; MRI and X-ray work has started and is in development.',
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
    'Handling different modalities: CT, MRI and X-ray differ in format, preprocessing and evaluation, so the CT pipeline cannot simply be reused.',
    'Weights, datasets and case files are not published, so a public demo is not possible without proper authorisation and safeguards.',
  ],
  milestones: [
    'Strengthen the non-contrast head CT workflow',
    'Improve model-runtime integration, evidence verification and uncertainty handling',
    'Continue developing MRI- and X-ray-specific processing',
    'Evaluate each modality workflow independently, then end-to-end reliability',
  ],
  // Owner-confirmed: CT is the current focus; MRI and X-ray are started and in development (no validated pipelines yet).
  modalities: [
    { id: 'ct', name: 'CT', full: 'Computed Tomography', status: 'in-progress', note: 'Current focus: non-contrast head CT. Preprocessing and orchestration are under active testing; model-runtime integration is still being improved.' },
    { id: 'mri', name: 'MRI', full: 'Magnetic Resonance Imaging', status: 'in-progress', note: 'Started and in development. No validated MRI pipeline or evaluation yet.' },
    { id: 'xray', name: 'X-ray', full: 'Radiography', status: 'in-progress', note: 'Started and in development. No validated X-ray pipeline or evaluation yet.' },
  ],
  modalityNote:
    'Each modality has its own formats, preprocessing, models and evaluation needs, so they are developed as separate pipelines rather than one shared model.',
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
    summary: 'A question-answering bot that finds the relevant passages in a set of documents and uses them to write its answer.',
    tags: ['OpenAI', 'Pinecone', 'RAG'],
    status: 'Built',
    flowTitle: 'How it answers',
    flow: [{ t: 'A question comes in' }, { t: 'Relevant passages are retrieved (Pinecone)' }, { t: 'An OpenAI model writes the answer' }],
    flowNote: 'Built around a notebook in the repository.',
    // TODO(verify): add the document source (e.g. a university handbook) and whether LangChain was used.
    detail:
      'A retrieval-augmented question-answering bot built around a notebook in the repository, using OpenAI and Pinecone.',
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
    flowTitle: 'How it decides',
    flow: [{ t: 'Six measurements entered in a form' }, { t: 'Inputs validated' }, { t: 'Saved model predicts' }, { t: 'Shows Genuine or Fake' }],
    flowNote: 'No accuracy figures are claimed.',
    detail:
      'A trained classifier is saved with joblib and loaded by a small Flask app. A form takes six numeric measurements (diagonal, left and right height, lower and upper margin, length), validates them, and returns "Genuine" or "Fake". The repository includes the training notebook. I have not published evaluation figures, so none are claimed here.',
    repo: 'https://github.com/AdavallyLokeshReddy/Fake_bill',
    demo: null,
  },
  {
    id: 'hawkeye',
    title: 'Hawk’Eye',
    category: 'Computer vision',
    summary: 'A computer-vision project on object detection and tracking.',
    tags: ['Python', 'OpenCV', 'YOLO'],
    status: 'Built',
    flowTitle: 'What it does',
    flow: [{ t: 'Takes images or video' }, { t: 'Detects objects (YOLO)' }, { t: 'Tracks them' }],
    flowNote: 'No public repository or demo.',
    detail:
      'A computer-vision project using Python, OpenCV and YOLO for object detection and tracking. There is no public repository or demo for it, so none is linked here and no results are claimed.',
    repo: null,
    demo: null,
  },
]
