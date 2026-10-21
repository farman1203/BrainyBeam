// ============================================================
// SITE DATA – Edit this file to customize your website content
// ============================================================

export const siteConfig = {
  name: 'TechNova',
  tagline: 'Emerald Future Technology',
  description: 'We craft premium digital solutions that push boundaries — from intelligent web applications to AI-powered platforms.',
  email: 'hello@technova.io',
  phone: '+1 (555) 123-4567',
  address: '500 Technology Park, San Francisco, CA 94105',
  social: {
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    dribbble: 'https://dribbble.com',
  },
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Technologies', path: '/technologies' },
  { label: 'Contact', path: '/contact' },
]

export const services = [
  {
    id: 1,
    icon: 'Globe',
    title: 'Web Development',
    short: 'Pixel-perfect, high-performance web experiences.',
    description: 'We architect and build scalable web applications using cutting-edge React, Next.js, and Node.js stacks. From complex SPAs to enterprise portals — engineered for speed, accessibility, and longevity.',
    features: ['React / Next.js Applications', 'REST & GraphQL APIs', 'Performance Optimization', 'Progressive Web Apps'],
  },
  {
    id: 2,
    icon: 'Smartphone',
    title: 'Mobile Development',
    short: 'Cross-platform apps that feel native everywhere.',
    description: 'Delivering polished iOS and Android experiences through React Native and Flutter — combining business logic efficiency with platform-native UI patterns that users love.',
    features: ['React Native & Flutter', 'iOS & Android', 'Offline-First Architecture', 'Push Notifications'],
  },
  {
    id: 3,
    icon: 'Brain',
    title: 'AI & Machine Learning',
    short: 'Intelligent systems that learn and adapt.',
    description: 'Integrating advanced AI capabilities into your products — NLP pipelines, recommendation engines, computer vision, and custom LLM-powered workflows that create real competitive advantages.',
    features: ['LLM Integration (OpenAI, Gemini)', 'Custom ML Models', 'Computer Vision', 'Data Pipelines'],
  },
  {
    id: 4,
    icon: 'Cloud',
    title: 'Cloud & DevOps',
    short: 'Infrastructure that scales effortlessly.',
    description: 'Designing and operating reliable cloud architectures on AWS, GCP, and Azure. Automated CI/CD pipelines, infrastructure-as-code, container orchestration, and 24/7 monitoring.',
    features: ['AWS / GCP / Azure', 'Kubernetes & Docker', 'CI/CD Pipelines', 'Infrastructure as Code'],
  },
  {
    id: 5,
    icon: 'Shield',
    title: 'Cybersecurity',
    short: 'Robust security built in from the start.',
    description: 'Security consulting, penetration testing, compliance auditing, and secure architecture reviews. Protecting your systems, data, and reputation with industry-leading standards.',
    features: ['Penetration Testing', 'Compliance (SOC2, GDPR)', 'Security Audits', 'Zero-Trust Architecture'],
  },
  {
    id: 6,
    icon: 'BarChart3',
    title: 'Data & Analytics',
    short: 'Transform raw data into strategic insights.',
    description: 'Building data warehouses, real-time dashboards, and BI platforms that surface the insights your organization needs to make faster, smarter decisions.',
    features: ['Data Warehousing', 'Real-Time Dashboards', 'Business Intelligence', 'ETL Pipelines'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'QuantumLedger Platform',
    category: 'FinTech',
    description: 'A next-generation financial analytics platform with real-time market data processing and AI-powered portfolio optimization for institutional investors.',
    tags: ['React', 'Python', 'PostgreSQL', 'AWS'],
    color: '#15803D',
    year: '2024',
  },
  {
    id: 2,
    title: 'Helios Health AI',
    category: 'Healthcare',
    description: 'HIPAA-compliant AI diagnostic assistant integrating computer vision for medical imaging analysis and NLP for clinical note generation.',
    tags: ['Next.js', 'TensorFlow', 'FHIR API', 'Azure'],
    color: '#0D9488',
    year: '2024',
  },
  {
    id: 3,
    title: 'Orbis Commerce Suite',
    category: 'E-Commerce',
    description: 'Headless commerce infrastructure serving 2M+ daily transactions with sub-100ms response times and a personalization engine powered by collaborative filtering.',
    tags: ['Vue.js', 'Node.js', 'Redis', 'GCP'],
    color: '#7C3AED',
    year: '2023',
  },
  {
    id: 4,
    title: 'Meridian IoT Dashboard',
    category: 'IoT / SaaS',
    description: 'Industrial IoT management platform aggregating telemetry from 50,000+ connected devices with predictive maintenance alerts and real-time anomaly detection.',
    tags: ['React', 'MQTT', 'InfluxDB', 'Kubernetes'],
    color: '#0369A1',
    year: '2023',
  },
  {
    id: 5,
    title: 'Nova Learning Hub',
    category: 'EdTech',
    description: 'Adaptive e-learning platform using spaced repetition algorithms and AI tutoring to personalize curriculum paths for 300,000+ learners worldwide.',
    tags: ['React Native', 'Django', 'Elasticsearch', 'AWS'],
    color: '#B45309',
    year: '2024',
  },
  {
    id: 6,
    title: 'ClearPath Logistics',
    category: 'Logistics',
    description: 'End-to-end supply chain visibility platform with ML-based ETA predictions, dynamic route optimization, and carrier performance analytics.',
    tags: ['Angular', 'Java Spring', 'MongoDB', 'GCP'],
    color: '#0F766E',
    year: '2023',
  },
]

export const technologies = {
  frontend: [
    { name: 'React', level: 'Expert' },
    { name: 'Next.js', level: 'Expert' },
    { name: 'Vue.js', level: 'Advanced' },
    { name: 'TypeScript', level: 'Expert' },
    { name: 'Tailwind CSS', level: 'Expert' },
    { name: 'Three.js', level: 'Advanced' },
    { name: 'Angular', level: 'Advanced' },
    { name: 'Svelte', level: 'Intermediate' },
  ],
  backend: [
    { name: 'Node.js', level: 'Expert' },
    { name: 'Python', level: 'Expert' },
    { name: 'Go', level: 'Advanced' },
    { name: 'Java Spring', level: 'Advanced' },
    { name: 'Django', level: 'Advanced' },
    { name: 'FastAPI', level: 'Expert' },
    { name: 'GraphQL', level: 'Expert' },
    { name: 'Rust', level: 'Intermediate' },
  ],
  databases: [
    { name: 'PostgreSQL', level: 'Expert' },
    { name: 'MongoDB', level: 'Expert' },
    { name: 'Redis', level: 'Expert' },
    { name: 'MySQL', level: 'Expert' },
    { name: 'Elasticsearch', level: 'Advanced' },
    { name: 'InfluxDB', level: 'Advanced' },
    { name: 'Cassandra', level: 'Advanced' },
    { name: 'Supabase', level: 'Expert' },
  ],
  ai: [
    { name: 'OpenAI API', level: 'Expert' },
    { name: 'Google Gemini', level: 'Expert' },
    { name: 'TensorFlow', level: 'Advanced' },
    { name: 'PyTorch', level: 'Advanced' },
    { name: 'LangChain', level: 'Expert' },
    { name: 'HuggingFace', level: 'Advanced' },
    { name: 'Pinecone', level: 'Advanced' },
    { name: 'Computer Vision', level: 'Advanced' },
  ],
  cloud: [
    { name: 'AWS', level: 'Expert' },
    { name: 'Google Cloud', level: 'Expert' },
    { name: 'Azure', level: 'Advanced' },
    { name: 'Kubernetes', level: 'Expert' },
    { name: 'Docker', level: 'Expert' },
    { name: 'Terraform', level: 'Advanced' },
    { name: 'GitHub Actions', level: 'Expert' },
    { name: 'Datadog', level: 'Advanced' },
  ],
  mobile: [
    { name: 'React Native', level: 'Expert' },
    { name: 'Flutter', level: 'Advanced' },
    { name: 'Expo', level: 'Expert' },
    { name: 'Swift / SwiftUI', level: 'Advanced' },
    { name: 'Kotlin', level: 'Advanced' },
    { name: 'Firebase', level: 'Expert' },
  ],
}

export const process = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'Deep-dive workshops to understand your vision, users, and technical landscape. We define success metrics and craft a strategic roadmap.',
  },
  {
    step: '02',
    title: 'Architecture & Design',
    description: 'System architecture, database modeling, and UI/UX design in parallel. Prototypes validated with real users before a single line of production code.',
  },
  {
    step: '03',
    title: 'Agile Development',
    description: 'Two-week sprints with continuous delivery. You have full visibility into progress through daily standups and a live staging environment.',
  },
  {
    step: '04',
    title: 'Testing & QA',
    description: 'Automated testing at unit, integration, and E2E levels. Accessibility audits, security scans, and performance benchmarking before release.',
  },
  {
    step: '05',
    title: 'Launch & Scale',
    description: 'Zero-downtime deployment, real-time monitoring, and post-launch support. We stay engaged to ensure your product grows reliably.',
  },
]

export const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '12+', label: 'Years Experience' },
  { value: '40+', label: 'Expert Engineers' },
  { value: '99%', label: 'Client Satisfaction' },
]

export const teamMembers = [
  {
    name: 'Alexandra Chen',
    role: 'CEO & Co-Founder',
    bio: 'Former engineering lead at Google with 15+ years building enterprise-scale systems.',
  },
  {
    name: 'Marcus Rivera',
    role: 'CTO & Co-Founder',
    bio: 'PhD in Computer Science (MIT). Architected systems serving 100M+ users.',
  },
  {
    name: 'Priya Nair',
    role: 'Head of AI/ML',
    bio: 'Led machine learning teams at DeepMind. Specialist in NLP and computer vision.',
  },
  {
    name: 'Jordan Blake',
    role: 'Lead Designer',
    bio: 'Award-winning UX designer with a background in industrial design and HCI.',
  },
]
