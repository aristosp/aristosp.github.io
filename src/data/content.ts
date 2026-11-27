export const researchAreas = [
  {
    number: "01",
    title: "Audio-visual speech recognition",
    description: "Investigating how visual speech information complements audio and how audiovisual models use articulatory cues to recognise speech.",
    tags: ["AVSR", "Speech", "Multimodal learning"]
  },
  {
    number: "02",
    title: "Viseme representations",
    description: "Analysing how audiovisual speech models encode visemes, the visual equivalents of phonemes, and how audio refines visually ambiguous representations.",
    tags: ["Visemes", "Representation analysis", "Probing"]
  },
  {
    number: "03",
    title: "Robust speech recognition",
    description: "Exploring viseme-guided learning and audiovisual representations to improve recognition under challenging acoustic conditions.",
    tags: ["Noise robustness", "AV-HuBERT", "Deep learning"]
  }
];

export const publications = [
  {
    slug: "icpr-2026",
    legacy: "/publication/icpr_2026",
    year: "2026",
    type: "Conference paper",
    title: "VisG AV-HuBERT: Viseme Guided AV-HuBERT",
    authors: "Aristeidis Papadopoulos, R. Jain and N. Harte",
    venue: "International Conference on Pattern Recognition Proceedings",
    date: "18 August 2026",
    summary: "Introduces Viseme-Guided AV-HuBERT, a multi-task fine-tuning framework with auxiliary viseme classification. The supplied abstract reports comparable or improved performance on LRS3, including a word error rate reduction from 13.59% to 6.60% at −10 dB speech noise, and generalisation evaluation on LRS2.",
    paper: "/files/Visg AV-HuBERT.pdf",
    localPaper: "/files/Visg AV-HuBERT.pdf",
    citation: "Papadopoulos A., Jain R. and Harte N. (2026). VisG AV-HuBERT: Viseme Guided AV-HuBERT."
  },
  {
    slug: "slt-2026",
    legacy: "/publication/slt_2026",
    year: "2026",
    type: "Conference paper",
    title: "Candor-LR: A Dyadic Conversational Dataset for Audio-Visual Speech Recognition",
    authors: "Rishabh Jain, Aristeidis Papadopoulos, Zhaofeng Lin and Naomi Harte",
    venue: "IEEE Spoken Language Technology Workshop (SLT) 2026",
    date: "2026",
    summary: "Introduces Candor-LR, a large-scale conversational audio-visual speech recognition benchmark derived from natural dyadic videoconferences. Its 713.5-hour training set, 10.1-hour validation set and 60.1-hour test set support evaluation and training under realistic conversational conditions; experiments show visual cues contribute more than on scripted benchmarks and Candor-LR training improves cross-domain robustness.",
    paper: "/files/CANDOR_LR.pdf",
    localPaper: "/files/CANDOR_LR.pdf",
    citation: "Jain R., Papadopoulos A., Lin Z. and Harte N. (2026). Candor-LR: A Dyadic Conversational Dataset for Audio-Visual Speech Recognition."
  },
  {
    slug: "asru-2025",
    legacy: "/publication/2024-02-17-paper-title-number-4",
    year: "2025",
    type: "Conference paper",
    title: "Interpreting the Role of Visemes in Audio-Visual Speech Recognition",
    authors: "Aristeidis Papadopoulos and N. Harte",
    venue: "Automatic Speech Recognition & Understanding (ASRU) 2025 Proceedings",
    date: "6 December 2025",
    summary: "Applies t-SNE visualisation and probing to examine how visemes are encoded in AV-HuBERT. The analysis finds natural clustering driven by visual cues, refined by audio, and investigates how audio contributes particularly for visually ambiguous or under-represented visemes.",
    paper: null,
    localPaper: null,
    citation: "Papadopoulos A. and Harte N. (2025). Interpreting the Role of Visemes in Audio-Visual Speech Recognition."
  },
  {
    slug: "ukis-2025",
    legacy: "/publication/ukis_2025",
    year: "2025",
    type: "Workshop abstract",
    title: "What does an Audio-Visual Speech Recognition Model know about Visemes?",
    authors: "Aristeidis Papadopoulos",
    venue: "UK & Ireland Speech Workshop 2025 Book of Abstracts",
    date: "17 June 2025",
    summary: "Studies what AV-HuBERT learns about visemes by applying interpretability methods developed for audio-only speech recognition, including probing and similarity-based analysis.",
    paper: "/files/UKIS_2025_Aristeidis_Papadopoulos_v2.pdf",
    localPaper: "/files/UKIS_2025_Aristeidis_Papadopoulos_v2.pdf",
    citation: "Papadopoulos, Aristeidis. (2025). What does an Audio-Visual Speech Recognition Model know about Visemes?"
  }
];

export const projects = [
  {
    title: "Indoor Sound Classification",
    category: "Integrated MEng thesis project",
    description: "Classification of nine domestic activities using the DCASE Task 5 dataset. The project explored 1D and 2D convolutional models, an ensemble and a Vision Transformer. Audio was preprocessed and represented as MFCCs or spectrograms for modelling.",
    tags: ["Audio classification", "MFCC", "Spectrograms", "Vision Transformer"],
    github: "https://github.com/aristosp/Indoor-Sound-Classification",
    image: "/images/thesis_1.png",
    featured: true
  },
  {
    title: "Color Reduction using Self-Organizing Maps",
    category: "Digital Image Processing course project",
    description: "Image colour reduction using Kohonen Self-Organizing Maps, with the aim of reducing the memory requirements of saved images.",
    tags: ["Self-Organizing Maps", "Kohonen", "Image processing"],
    github: "https://github.com/aristosp/Kohonen_Color_Reduction",
    image: "/images/kohonen.png",
    featured: true
  }
];

export const teaching = [
  {
    period: "2025-2026",
    course: "3C1 — Signals and Systems",
    role: "Teaching Assistant · Undergraduate course",
    institution: "Trinity College, Department of Electrical and Electronic Engineering",
    description: "Lab sessions in MATLAB and grading.",
    url: "https://www.tcd.ie/media/tcd/engineering/pdfs/resources/EEU33C01---Signals-and-Systems---25.26.pdf"
  },
  {
    period: "2026",
    course: "5C35 — Advanced Audio Technologies",
    role: "Teaching Assistant · Undergraduate/Postgraduate course",
    institution: "Trinity College, Department of Electrical and Electronic Engineering",
    description: "Content generation for lab sessions and grading of assignments.",
    url: "https://www.tcd.ie/media/tcd/engineering/pdfs/resources/EEP55C35-Advanced-Audio-Technologies.pdf"
  },
  {
    period: "2025-2026",
    course: "2E12 — Computational Science & Engineering",
    role: "Teaching Assistant · Undergraduate course",
    institution: "Trinity College, Department of Electrical and Electronic Engineering",
    description: "Lab sessions in MATLAB and grading of assignments.",
    url: "https://www.tcd.ie/media/tcd/engineering/pdfs/current-students/EEU22E12-2025.26.pdf"
  },
  {
    period: "2025-2026",
    course: "4C16/5C16 — Deep Learning and Its Applications",
    role: "Teaching Assistant · Undergraduate/Postgraduate course",
    institution: "Trinity College, Department of Electrical and Electronic Engineering",
    description: "Lab sessions in Python and Google Colab, along with grading of assignments.",
    url: "https://www.tcd.ie/media/tcd/engineering/pdfs/resources/EE5C16.EEU44C16---Deep-Learning---25.26.pdf"
  },
  {
    period: "2025-2026",
    course: "1E6 — Electrical Engineering",
    role: "Teaching Assistant · Undergraduate course",
    institution: "Trinity College, Department of Electrical and Electronic Engineering",
    description: "Tutorials, lab sessions with circuits and grading of assignments.",
    url: "https://www.tcd.ie/media/tcd/engineering/pdfs/current-students/EEU11E06---Electrical-Engineering-24.25.pdf"
  },
  {
    period: "2024–2025",
    course: "4C5 — Digital Signal Processing",
    role: "Teaching Assistant · Undergraduate/Postgraduate course",
    institution: "Trinity College, Department of Electrical and Electronic Engineering",
    description: "Lab sessions in MATLAB and grading of assignments.",
    url: "https://www.tcd.ie/media/tcd/elecengineering/pdfs/Digital-Signal-Processing.pdf"
  }
];

export const cvSections = [
  {
    title: "Education",
    items: [
      { period: "2024–2028 (expected)", title: "PhD in Neural Architectures for Multi-modal Speech Recognition", organisation: "Trinity College Dublin, Ireland" },
      { period: "2017–2022", title: "Integrated MEng in Electrical & Computer Engineering", organisation: "Democritus University of Thrace, Greece" }
    ]
  },
  {
    title: "Work experience",
    items: [
      { period: "November 2022 – August 2023", title: "Private", organisation: "Research & Informatics Corp. · 23rd Armored Brigade, Alexandroupolis, Greece", description: "Technical support services, website administration, network setup, and hardware and software management." }
    ]
  }
];

export const skills = {
  soft: ["Adaptability", "Quick learner", "Teamwork", "Communication", "Analytical thinking", "Problem-solving"],
  programming: ["Python", "MATLAB", "C", "Bash", "LaTeX"],
  technologies: ["TensorFlow", "PyTorch", "Keras", "Weights & Biases", "Microsoft Office", "Git"]
};
