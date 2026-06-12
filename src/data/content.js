export const profile = {
  name: 'Lorenzo Locker',
  fullName: 'Lorenzo Cespedes Locker',
  title: 'Data Scientist & ML Engineer',
  location: 'São Paulo, Brazil',
  email: 'lo.locker1202@gmail.com',
  linkedin: 'https://linkedin.com/in/lorenzo-locker',
  github: 'https://github.com/LorenzoLocker12',
  cvFile: './Lorenzo_Locker_CV.pdf',
  tagline:
    'Lorenzo Locker, data scientist. I architect predictive models, customer-value signals and GenAI systems across fintech, automotive and agribusiness.',
  headline: 'Models that move real business metrics.',
  stats: [
    { value: 'USP', label: 'MBA in Data Science · 2026-27' },
    { value: 'THD', label: 'B.Sc. AI Exchange · Germany' },
    { value: 'CERN', label: "School of Computing · selected '26" },
    { value: 'XP Inc.', label: 'Data Scientist · current' },
  ],
};

export const about = {
  paragraphs: [
    'I’m a Data Scientist who likes the whole journey: from a messy business question, through the math, to a model running in production and a metric moving on a dashboard. I’ve shipped ML in three sectors and two continents: fintech in São Paulo, automotive banking in Munich, agribusiness across Brazil.',
    'My current obsessions live at the edges of the field: quantum machine learning (my MBA thesis benchmarks variational quantum circuits against classical models) and production-grade GenAI. In 2026 I was selected for the CERN School of Computing, where data meets physics at scale.',
  ],
  pillars: [
    {
      icon: 'model',
      title: 'Predictive Modeling & MLOps',
      text: 'Forecasting, segmentation and lead scoring, deployed with Airflow, Databricks and MLflow.',
    },
    {
      icon: 'genai',
      title: 'Generative AI & RAG',
      text: 'Knowledge retrieval systems with LangChain, LangGraph and FastAPI that actually answer the question.',
    },
    {
      icon: 'vision',
      title: 'Computer Vision',
      text: 'From ViT crack detection in industrial piping to MRI classification and quality-control anomaly detection.',
    },
    {
      icon: 'quantum',
      title: 'Quantum ML',
      text: 'Variational quantum circuits and Adam vs SPSA optimization, researching what comes after classical ML.',
    },
  ],
  facts: [
    { label: 'Currently', value: 'Data Scientist @ XP Inc.' },
    { label: 'Based in', value: 'São Paulo, Brazil' },
    { label: 'Studying', value: 'MBA Data Science @ USP' },
    { label: 'Speaks', value: 'PT · EN · ES · DE' },
  ],
};

export const experience = [
  {
    company: 'XP Inc.',
    role: 'Data Scientist',
    period: 'Oct 2025 - Present',
    location: 'São Paulo, Brazil',
    highlight: 'Customer value signals',
    bullets: [
      'Built customer value-prediction models that score every new account the instant it is created, streaming signals to media platforms.',
      'Conducted causal and deep-dive descriptive analyses on complex business problems.',
      'Designed B2B segmentation, financial profiling and lead scoring frameworks for commercial and advisory teams.',
      'Orchestrated deployment with Airflow DAGs and Databricks Jobs, with MLflown.',
    ],
    tags: ['Python', 'Databricks', 'Airflow', 'MLflow', 'LTV', 'Causal Analysis'],
  },
  {
    company: 'BMW Group · BMW Bank',
    role: 'Data Scientist',
    period: 'Feb 2025 - Jul 2025',
    location: 'Munich, Germany',
    highlight: 'Risk & forecasting',
    bullets: [
      'Designed predictive models supporting risk analysis, customer behavior forecasting and operational decision-making.',
      'Optimized MLOps pipelines and automated data processes across multiple business units.',
      'Aligned technical data solutions with automotive and financial strategy in cross-functional teams.',
    ],
    tags: ['MLOps', 'Risk Modeling', 'Forecasting', 'Python'],
  },
  {
    company: 'Edata Tecnologia',
    role: 'Data Scientist',
    period: 'Sep 2024 - Feb 2025',
    location: 'Brazil',
    highlight: 'End-to-end ML',
    bullets: [
      'Owned the end-to-end data pipeline, leading predictive logistics optimization that cut operational costs.',
      'Shipped ML weight estimation for agribusiness, reducing estimation deviations and replacing manual processes.',
      'Built a computer vision system for sanitary anomaly detection, raising the effectiveness of quality control.',
      'Prototyped GenAI knowledge retrieval with RAG, LangChain/LangGraph and FastAPI.',
    ],
    tags: ['Computer Vision', 'RAG', 'FastAPI', 'Forecasting'],
  },
  {
    company: 'CNPq',
    role: 'Undergraduate Research Fellow',
    period: 'Oct 2023 - Oct 2024',
    location: 'São Paulo, Brazil',
    highlight: 'Research',
    bullets: [
      'Developed an interactive Java application for teaching core computer science algorithms, applying rigorous software engineering and architectural design.',
    ],
    tags: ['Java', 'Algorithms', 'Education'],
  },
];

export const projects = [
  {
    icon: 'recsys',
    title: 'Predictive Value Signals for Paid Media',
    context: 'XP Inc. · Fintech',
    impact: 'Revenue growth',
    text: 'A model that predicts how much value a customer will bring to the bank the instant the account is created, streamed as signals to media platforms so ad optimization targets high-value users. Also designed B2B segmentation, financial profiling and lead scoring frameworks for commercial and advisory teams.',
    tags: ['LTV Prediction', 'B2B Segmentation', 'Databricks'],
  },
  {
    icon: 'quantum',
    title: 'Variational Quantum Circuits vs Classical ML',
    context: 'MBA Thesis · USP',
    impact: 'Quantum ML',
    text: 'Benchmarking VQC optimization with Adam and SPSA optimizers against traditional machine learning, mapping where quantum methods actually pay off.',
    tags: ['Quantum', 'Optimization', 'Research'],
  },
  {
    icon: 'vision',
    title: 'ViT Crack Detection in Industrial Piping',
    context: 'B.Sc. Thesis · THD Germany',
    impact: 'Industrial CV',
    text: 'Vision Transformer architecture for automated crack detection in industrial piping, with transfer learning applied to real inspection imagery.',
    tags: ['ViT', 'PyTorch', 'Transfer Learning'],
  },
  {
    icon: 'medical',
    title: 'Spine MRI Classifier',
    context: 'B.Sc. Thesis · USC',
    impact: 'Medical AI',
    text: 'Deep learning classification of spine conditions from MRI scans using EfficientNet and ResNet transfer learning.',
    tags: ['EfficientNet', 'ResNet', 'Keras'],
  },
  {
    icon: 'genai',
    title: 'GenAI Knowledge Retrieval',
    context: 'Edata Tecnologia',
    impact: 'RAG / LLMs',
    text: 'Intelligent enterprise knowledge systems on RAG architectures, with LangChain and LangGraph orchestration served through robust FastAPI interfaces.',
    tags: ['LangChain', 'LangGraph', 'FastAPI'],
  },
  {
    icon: 'logistics',
    title: 'Smart Logistics Forecasting',
    context: 'Edata Tecnologia · Agribusiness',
    impact: 'Cost reduction',
    text: 'Predictive distribution optimization: demand forecasts steering logistics, plus ML weight estimation replacing manual processes.',
    tags: ['Forecasting', 'Spark', 'Python'],
  },
];

export const skills = [
  {
    group: 'Machine Learning',
    items: [
      'Predictive Modeling',
      'Customer LTV',
      'Lead Scoring',
      'Anomaly Detection',
      'Computer Vision',
      'Generative AI',
      'Graph Analysis',
      'Quantum ML',
      'MLOps',
    ],
  },
  {
    group: 'Languages & Frameworks',
    items: [
      'Python',
      'SQL',
      'Java',
      'scikit-learn',
      'Pandas',
      'NumPy',
      'TensorFlow',
      'Keras',
      'PyTorch',
      'Hugging Face',
      'FastAPI',
    ],
  },
  {
    group: 'Big Data & Cloud',
    items: [
      'AWS · S3 / EC2 / SageMaker / Lambda / Glue',
      'Apache Spark',
      'PySpark',
      'Hadoop',
      'Databricks',
      'Airflow',
      'MLflow',
    ],
  },
  {
    group: 'Tools & Databases',
    items: ['Neo4j', 'Tableau', 'Docker', 'Git / GitHub', 'LangChain', 'LangGraph'],
  },
];

export const languages = [
  { name: 'Portuguese', level: 'Native', pct: 100 },
  { name: 'English', level: 'Fluent', pct: 90 },
  { name: 'Spanish', level: 'Intermediate', pct: 60 },
  { name: 'German', level: 'Beginner', pct: 30 },
];

export const education = [
  {
    school: 'CERN School of Computing',
    degree: 'CSC 2026 · Advanced HPC & Data Science',
    period: '2026',
    location: 'Liverpool, UK',
    badge: 'Selected Participant',
    text: 'Selected for CERN’s advanced school on high-performance computing and data science methodologies.',
  },
  {
    school: 'USP · Universidade de São Paulo',
    degree: 'MBA, Data Science',
    period: '2026 - 2027',
    location: 'São Paulo, Brazil',
    text: 'Thesis: Optimization of Variational Quantum Circuits vs traditional ML using Adam and SPSA optimizers.',
  },
  {
    school: 'Deggendorf Institute of Technology (THD)',
    degree: 'B.Sc. Exchange Program, Artificial Intelligence',
    period: '2025',
    location: 'Deggendorf, Germany',
    text: 'Thesis: Vision Transformer architecture for automated crack detection in industrial piping.',
  },
  {
    school: 'USC',
    degree: 'B.Sc. Computer Science',
    period: '2022 - 2025',
    location: 'Bauru, Brazil',
    text: 'Thesis: Deep learning classification of spine conditions from MRI using EfficientNet and ResNet transfer learning.',
  },
];

export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
