export const projectsData = [
  {
    id: "medicore",
    title: "MediCore",
    subtitle: "Healthcare Management Platform",
    category: "Healthcare",
    type: "SaaS",
    featured: true,
    client: "MediCore Health Systems, Chicago",
    year: "2025",
    timeline: "6 Months",
    summary: "A unified clinical workflow management platform connecting clinicians, lab diagnostics, patient records, and telehealth appointments under strict HIPAA compliance.",
    challenge: "MediCore's existing hospital network relied on siloed, outdated desktop databases, resulting in average patient intake delays of 22 minutes and fragmented medical history tracking across five regional clinics.",
    solution: "TechNova engineered a secure, cloud-native web and tablet application featuring real-time electronic health records (EHR), automated appointment triage, and HL7 FHIR-compliant patient data pipelines.",
    keyFeatures: [
      "Real-time patient intake and biometric charts",
      "Encrypted WebRTC telehealth video consultations",
      "Automated pharmacy e-prescriptions & refill warnings",
      "Role-based clinical permission hierarchies with audit logging"
    ],
    metrics: [
      { label: "Intake Wait Time", value: "-68%" },
      { label: "Active Doctors", value: "3,200+" },
      { label: "HIPAA Compliance", value: "100%" }
    ],
    technologies: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "WebRTC", "AWS GovCloud"],
    clientReview: {
      quote: "TechNova transformed our clinic operations entirely. Doctors spend more time caring for patients and zero time fighting clunky software.",
      author: "Dr. Elena Rostova",
      role: "VP of Digital Health, MediCore"
    }
  },
  {
    id: "shopsphere",
    title: "ShopSphere",
    subtitle: "Next-Gen Omnichannel E-Commerce Platform",
    category: "Retail",
    type: "E-Commerce",
    featured: true,
    client: "ShopSphere Global Retail, London",
    year: "2025",
    timeline: "5 Months",
    summary: "A lightning-fast headless e-commerce ecosystem serving over 2 million monthly shoppers across 14 European markets with dynamic localization.",
    challenge: "The brand struggled with legacy monolithic shopping software that crashed during Black Friday peak traffic and took over 4.5 seconds to load catalog category filters.",
    solution: "We designed and deployed a headless Next.js frontend with Edge caching, microservices-based cart and checkout, and real-time inventory management across multiple fulfillment hubs.",
    keyFeatures: [
      "Sub-second Algolia instantaneous faceted catalog search",
      "Single-page frictionless Stripe Checkout with Apple/Google Pay",
      "Dynamic multi-currency exchange rate calculation",
      "Personalized product recommendation engine based on user browsing history"
    ],
    metrics: [
      { label: "Mobile Conversions", value: "+42%" },
      { label: "Page Load Time", value: "0.8s" },
      { label: "Peak Black Friday Orders", value: "450k+" }
    ],
    technologies: ["React.js", "Next.js", "Node.js", "Stripe API", "Redis", "Tailwind CSS"],
    clientReview: {
      quote: "Our online revenue grew 42% in the first quarter post-launch. TechNova's engineering standards and speed were nothing short of exemplary.",
      author: "David Chen",
      role: "Chief Commercial Officer, ShopSphere"
    }
  },
  {
    id: "finova",
    title: "Finova",
    subtitle: "Enterprise Financial Dashboard & Wealth Engine",
    category: "FinTech",
    type: "SaaS",
    featured: true,
    client: "Finova Capital Partners, New York",
    year: "2025",
    timeline: "7 Months",
    summary: "An institutional wealth analytics suite providing portfolio managers with automated risk calculations, real-time asset tracking, and algorithmic reporting.",
    challenge: "Private wealth analysts spent over 15 hours every week compiling fragmented spreadsheets from 12 custody banks into client PDF reports, leading to costly data discrepancies.",
    solution: "TechNova engineered an ultra-secure financial analytics dashboard integrating multi-bank open banking APIs, custom charting engines, and automated risk scoring algorithms.",
    keyFeatures: [
      "High-frequency streaming charts using WebSockets and Canvas",
      "Automated portfolio rebalancing and Monte Carlo risk simulations",
      "Bank-grade AES-256 data encryption and SOC2 compliance controls",
      "One-click white-labeled client performance reporting"
    ],
    metrics: [
      { label: "Assets Tracked", value: "$4.8B" },
      { label: "Hours Saved / Week", value: "15 hrs" },
      { label: "Calculation Latency", value: "<15ms" }
    ],
    technologies: ["React.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Docker"],
    clientReview: {
      quote: "TechNova transformed our idea into a product that our customers genuinely love. The dashboard runs flawlessly under intense market volatility.",
      author: "Sarah Mitchell",
      role: "CEO & Co-Founder, Finora"
    }
  },
  {
    id: "estatehub",
    title: "EstateHub",
    subtitle: "Modern Real Estate Marketplace & Agent CRM",
    category: "Real Estate",
    type: "Web",
    featured: true,
    client: "EstateHub Realty Group, Austin",
    year: "2024",
    timeline: "4 Months",
    summary: "A modern commercial and residential real estate discovery portal featuring 3D virtual tours, interactive map polygons, and an automated broker CRM.",
    challenge: "Prospective buyers and corporate tenants found traditional listing sites slow and confusing, resulting in high bounce rates and low lead conversion for property brokers.",
    solution: "We engineered an interactive map-first portal utilizing Mapbox GL, spatial queries, and responsive scheduling tools that sync directly with broker Google Calendars.",
    keyFeatures: [
      "Vector-based interactive polygon map search with neighborhood insights",
      "Embedded Matterport 3D virtual walkthroughs",
      "Automated lead capture and automated SMS/WhatsApp tour scheduling",
      "Broker pipeline management dashboard with automated valuation models"
    ],
    metrics: [
      { label: "Tour Bookings", value: "+84%" },
      { label: "Active Listings", value: "18,500" },
      { label: "Lead Response Time", value: "<3 mins" }
    ],
    technologies: ["React.js", "Mapbox GL", "Node.js", "MongoDB", "Express", "AWS S3"],
    clientReview: {
      quote: "Our agents closed 35% more transactions within 6 months. EstateHub set a new industry benchmark for real estate UX in our region.",
      author: "Marcus Vance",
      role: "Managing Director, EstateHub"
    }
  },
  {
    id: "eduplus",
    title: "EduPlus",
    subtitle: "Interactive Learning Management System",
    category: "Education",
    type: "Web",
    featured: true,
    client: "EduPlus Institute, Toronto",
    year: "2024",
    timeline: "5 Months",
    summary: "An accessible, gamified corporate learning and university LMS serving 80,000 enrolled students with interactive code sandboxes and live grading.",
    challenge: "The client needed to replace a cumbersome, non-responsive moodle instance that alienated non-technical students and lacked mobile compatibility.",
    solution: "TechNova built an intuitive, student-first learning platform with micro-credentials, interactive chapter quizzes, video bookmarking, and instructor analytics.",
    keyFeatures: [
      "Adaptive learning paths based on individual quiz performance",
      "Low-bandwidth video streaming optimized for mobile networks",
      "Automated verifiable certificate generation with cryptographic hashes",
      "Instructor dashboard with student drop-off risk indicators"
    ],
    metrics: [
      { label: "Course Completion", value: "+54%" },
      { label: "Active Students", value: "80,000+" },
      { label: "Mobile Usage", value: "62%" }
    ],
    technologies: ["React.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis", "Cloudflare Stream"],
    clientReview: {
      quote: "Student engagement scores broke all historical records. The platform is responsive, beautiful, and completely reliable.",
      author: "Prof. Arthur Pendelton",
      role: "Dean of Digital Learning, EduPlus"
    }
  },
  {
    id: "fleetflow",
    title: "FleetFlow",
    subtitle: "Logistics & Supply Chain Fleet Management",
    category: "Logistics",
    type: "Enterprise",
    featured: true,
    client: "FleetFlow Global Logistics, Hamburg",
    year: "2024",
    timeline: "6 Months",
    summary: "An end-to-end telemetry and dispatch operations platform tracking over 4,500 heavy freight vehicles across European transit corridors in real time.",
    challenge: "Dispatchers were manually calculating delivery routing using legacy radio and disjointed spreadsheets, resulting in costly route delays and fuel wastage.",
    solution: "We designed an IoT telematics command center with live GPS vehicle clustering, driver rest compliance monitoring, and automated dynamic route re-routing.",
    keyFeatures: [
      "Sub-second GPS vehicle position streaming via MQTT and WebSockets",
      "Predictive fuel consumption and maintenance warning indicators",
      "Automated EU driver work-hour compliance logs and warnings",
      "Consignee live tracking portal with ETA push updates"
    ],
    metrics: [
      { label: "Fuel Cost Savings", value: "18.4%" },
      { label: "On-Time Deliveries", value: "98.7%" },
      { label: "Fleet Monitored", value: "4,500+" }
    ],
    technologies: ["React.js", "TypeScript", "Node.js", "TimescaleDB", "MQTT", "Docker"],
    clientReview: {
      quote: "FleetFlow reduced our yearly fuel expenditure by nearly €1.2M while improving our on-time delivery metric to an unprecedented 98.7%.",
      author: "Klaus Hoffmann",
      role: "Head of Fleet Operations, FleetFlow"
    }
  },
  {
    id: "novacloud",
    title: "NovaCloud Orchestrator",
    subtitle: "Multi-Cloud Kubernetes & Governance Platform",
    category: "Cloud",
    type: "Enterprise",
    featured: false,
    client: "NovaCloud Systems, San Francisco",
    year: "2024",
    timeline: "8 Months",
    summary: "An enterprise developer platform unifying AWS, Azure, and private cloud Kubernetes clusters under unified RBAC and FinOps cost policies.",
    challenge: "Engineering teams experienced fragmented provisioning workflows, leading to orphaned cloud assets and unpredictable monthly cloud bill spikes.",
    solution: "We built an internal developer portal allowing engineers to spin up compliant environments in minutes while enforcing cloud budget ceilings.",
    keyFeatures: [
      "Self-service environment provisioning with automated teardown",
      "Real-time FinOps cost allocation by engineering squad",
      "Unified security compliance scanning and SBOM generation"
    ],
    metrics: [
      { label: "Cloud Spend Reduced", value: "31%" },
      { label: "Deployment Velocity", value: "4x" },
      { label: "Managed Nodes", value: "12,000+" }
    ],
    technologies: ["React.js", "Go", "Kubernetes", "Terraform", "Prometheus", "PostgreSQL"],
    clientReview: {
      quote: "TechNova delivered a developer experience on par with the world's top tech firms. Our engineers love it.",
      author: "Rachel Morgan",
      role: "VP Infrastructure, NovaCloud"
    }
  },
  {
    id: "pulseai",
    title: "PulseAI Assistant",
    subtitle: "Predictive Enterprise Customer Intelligence",
    category: "Emerging Tech",
    type: "Mobile",
    featured: false,
    client: "PulseAI Labs, Singapore",
    year: "2025",
    timeline: "4 Months",
    summary: "An iOS and Android enterprise mobile app delivering real-time sentiment alerts, predictive customer churn scoring, and AI-drafted responses for executive account leads.",
    challenge: "Enterprise account executives were frequently blindsided by customer churn signals buried inside thousands of support tickets and email threads.",
    solution: "TechNova engineered a native mobile experience delivering instant push alerts when high-value accounts showed risk indicators, with recommended recovery actions.",
    keyFeatures: [
      "Live account health radar and sentiment trajectory",
      "Native push notifications for urgent customer escalation triggers",
      "AI-assisted executive response drafts with context retrieval",
      "Offline review mode with biometric Face ID authentication"
    ],
    metrics: [
      { label: "Churn Reduction", value: "-28%" },
      { label: "Executive App DAU", value: "94%" },
      { label: "Response Time", value: "<15m" }
    ],
    technologies: ["React Native", "TypeScript", "Python", "OpenAI API", "Redis", "FastAPI"],
    clientReview: {
      quote: "PulseAI gives our executive team an unfair advantage. We catch client dissatisfaction before it ever becomes an issue.",
      author: "Kenji Sato",
      role: "Chief Revenue Officer, PulseAI"
    }
  }
];
