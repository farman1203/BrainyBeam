export const industriesData = [
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    slug: "healthcare",
    icon: "HeartPulse",
    tagline: "Secure, HIPAA-Compliant Digital Health Systems",
    description: "We empower medical networks, diagnostic labs, and health-tech pioneers with interoperable, patient-centric digital tools designed for clinical precision and strict privacy standards.",
    challenges: [
      "Fragmented electronic health records across disparate clinical departments",
      "Rigid regulatory compliance hurdles (HIPAA, HITECH, GDPR, FDA)",
      "High patient friction in scheduling, intake, and remote telehealth access",
      "Data security vulnerabilities in legacy on-premise hospital servers"
    ],
    solutions: [
      "FHIR & HL7-compliant interoperable clinical databases and EHR integrations",
      "End-to-end encrypted WebRTC telehealth suites with virtual waiting rooms",
      "Automated clinical scheduling, digital intake kiosks, and e-prescriptions",
      "Zero-trust cloud infrastructure with automated audit logging and disaster recovery"
    ],
    technologies: ["React.js", "TypeScript", "Node.js", "WebRTC", "PostgreSQL", "AWS GovCloud"],
    benefits: [
      "Up to 68% reduction in patient check-in wait times",
      "Guaranteed 100% regulatory compliance and audit readiness",
      "Seamless interoperability with legacy lab and diagnostic hardware",
      "Higher doctor satisfaction and reduced clinical administrative burnout"
    ],
    caseStudyRef: "medicore"
  },
  {
    id: "fintech",
    title: "FinTech & Banking",
    slug: "fintech",
    icon: "LineChart",
    tagline: "Resilient Financial Systems & Wealth Analytics",
    description: "Building high-throughput, bank-grade digital financial platforms, payment orchestration engines, and wealth management dashboards with ironclad security.",
    challenges: [
      "Stringent financial compliance (SOC2 Type II, PCI-DSS Level 1, KYC/AML)",
      "Millisecond latency requirements for high-volume trading and portfolio rebalancing",
      "Complex integration matrices across open banking and legacy mainframe systems",
      "Rising threat vectors in fraud, account takeover, and synthetic identity fraud"
    ],
    solutions: [
      "Microservices architecture engineered for sub-15ms transaction routing",
      "Automated biometric KYC verification and AI-driven anti-fraud rule engines",
      "Interactive data visualization suites for institutional wealth managers",
      "Immutable transaction ledgers and automated regulatory reporting engines"
    ],
    technologies: ["React.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Docker", "Redis"],
    benefits: [
      "Near-zero calculation latency under volatile market trading spikes",
      "Complete elimination of manual multi-custody spreadsheet consolidation",
      "Seamless integration with major banking protocols and Plaid/Stripe APIs",
      "99.999% platform availability SLA for institutional clients"
    ],
    caseStudyRef: "finova"
  },
  {
    id: "education",
    title: "Education & EdTech",
    slug: "education",
    icon: "GraduationCap",
    tagline: "Immersive Learning Management & Student Portals",
    description: "Transforming how universities, training institutes, and EdTech startups teach through accessible, collaborative, and gamified digital learning platforms.",
    challenges: [
      "High student abandonment rates and low digital course completion",
      "Poor accessibility across low-bandwidth mobile connections in remote regions",
      "Fragmented grade reporting, assignment submission, and proctoring workflows",
      "Lack of actionable student retention and drop-off analytics for faculty"
    ],
    solutions: [
      "Interactive video lecture players with synchronized notes, quizzes, and transcripts",
      "Adaptive learning pathways that dynamically recalibrate based on comprehension",
      "Micro-credentialing and cryptographically verifiable digital certificates",
      "Comprehensive teacher portals with early intervention student warning radars"
    ],
    technologies: ["React.js", "Next.js", "Node.js", "PostgreSQL", "Cloudflare Stream", "Redis"],
    benefits: [
      "Over 50% increase in course graduation and student engagement rates",
      "Optimized mobile streaming that works seamlessly even on 3G cellular connections",
      "Automated grading workflows that save educators hundreds of hours each semester",
      "Full WCAG 2.1 AA accessibility compliance for diverse learners"
    ],
    caseStudyRef: "eduplus"
  },
  {
    id: "ecommerce",
    title: "Retail & E-Commerce",
    slug: "ecommerce",
    icon: "ShoppingBag",
    tagline: "Headless High-Converting Digital Storefronts",
    description: "Architecting modern headless commerce platforms, global multi-vendor marketplaces, and omnichannel retail apps that scale flawlessly during traffic surges.",
    challenges: [
      "Painfully slow page loads costing up to 7% in lost conversions per second of delay",
      "Monolithic cart platforms failing during high-volume seasonal flash sales",
      "Complex international taxation, customs, multi-currency, and localized checkouts",
      "Disjointed inventory visibility between physical brick-and-mortar and digital stores"
    ],
    solutions: [
      "Headless React frontend architecture with Edge caching for instantaneous navigation",
      "Frictionless single-click checkout with unified Stripe and digital wallet integration",
      "Real-time omnichannel inventory synchronization across warehouse ERPs",
      "Algolia and AI-driven personalized product discovery and semantic search"
    ],
    technologies: ["React.js", "Next.js", "Shopify Plus API", "Stripe", "Node.js", "Algolia"],
    benefits: [
      "Average 35%+ increase in mobile checkout completion rates",
      "Sub-second catalog browsing and search response times",
      "Zero crashes or downtime during peak holiday promotions and flash campaigns",
      "Streamlined global internationalization in over 20+ languages and currencies"
    ],
    caseStudyRef: "shopsphere"
  },
  {
    id: "realestate",
    title: "Real Estate & PropTech",
    slug: "real-estate",
    icon: "Building2",
    tagline: "Spatial Marketplaces & Smart Property CRMs",
    description: "Modernizing real estate brokerage, property management, and commercial leasing with geospatial mapping, 3D walkthroughs, and automated deal pipelines.",
    challenges: [
      "Static 2D photo listings that fail to convey space, driving low buyer interest",
      "Slow, manual broker lead routing that allows high-value inquiries to go cold",
      "Tedious lease agreement workflows with manual paper signing and document silos",
      "Inaccurate property valuation estimations and disconnected MLS feed updates"
    ],
    solutions: [
      "Interactive vector map search with neighborhood demographics, transit, and zoning overlays",
      "Immersive 3D virtual tour integrations directly inside listing galleries",
      "Automated lead triage and automated SMS/WhatsApp showing appointment schedulers",
      "Comprehensive broker pipeline dashboards with MLS RETS/RESO automated syncing"
    ],
    technologies: ["React.js", "Mapbox GL", "Node.js", "MongoDB", "Express", "AWS S3"],
    benefits: [
      "Up to 80% higher tour booking rates compared to legacy listing platforms",
      "Sub-3-minute automated broker response time for inbound buyer inquiries",
      "Higher average time-on-page and brand stickiness",
      "Unified pipeline tracking from initial inquiry to signed digital closing"
    ],
    caseStudyRef: "estatehub"
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    slug: "logistics",
    icon: "Truck",
    tagline: "Real-Time Telematics & Dispatch Command Centers",
    description: "Delivering intelligent fleet tracking, dynamic route optimization, warehouse automation, and end-to-end cargo visibility across global supply lines.",
    challenges: [
      "Blind spots in cargo transit resulting in frequent delivery delays and disputes",
      "Inefficient manual dispatch schedules leading to excessive fuel consumption",
      "Complex multi-leg driver hour compliance laws (DOT/ELD and EU standards)",
      "Outdated warehouse inventory systems causing fulfillment bottlenecks"
    ],
    solutions: [
      "High-throughput IoT GPS telemetry processing thousands of pings per second",
      "Dynamic algorithmic route recalculation based on live weather and traffic jams",
      "Automated electronic logging device (ELD) hours tracking and break notifications",
      "Self-service consignee delivery portals with live tracking and push notifications"
    ],
    technologies: ["React.js", "TypeScript", "Node.js", "TimescaleDB", "MQTT", "Docker"],
    benefits: [
      "Documented 15-20% drop in overall fleet fuel expenditures",
      "Industry-leading 98%+ on-time delivery metric achievement",
      "Total visibility from warehouse loading dock to recipient signature",
      "Proactive vehicle maintenance warnings reducing catastrophic highway breakdowns"
    ],
    caseStudyRef: "fleetflow"
  },
  {
    id: "travel",
    title: "Travel & Hospitality",
    slug: "travel",
    icon: "Plane",
    tagline: "Connected Booking Engines & Guest Portals",
    description: "Crafting frictionless airline, hotel, and luxury tour booking portals with real-time room availability, dynamic pricing engines, and contactless guest experiences.",
    challenges: [
      "Severe booking cart abandonment due to surprise fees and slow multi-step forms",
      "Double-booking risks across fragmented third-party OTA distribution channels",
      "Poor mobile guest experiences during check-in, keyless entry, and room service",
      "Seasonal demand swings necessitating rapid price changes and promotion rollouts"
    ],
    solutions: [
      "Transparent, three-click responsive booking funnel with real-time rate holds",
      "Unified two-way channel manager integrations across Booking.com, Expedia, and direct channels",
      "Mobile guest web app enabling digital check-in, room key access, and concierge chat",
      "Dynamic pricing recommendation engines analyzing competitor rates in real time"
    ],
    technologies: ["React.js", "Next.js", "Node.js", "GraphQL", "Redis", "Stripe Payments"],
    benefits: [
      "Over 40% growth in direct, commission-free hotel website bookings",
      "Virtually zero double-booking discrepancies across connected OTA networks",
      "Elevated guest review scores through frictionless digital concierge tools",
      "Instant synchronization across localized payment options and currencies"
    ],
    caseStudyRef: "shopsphere"
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial IoT",
    slug: "manufacturing",
    icon: "Factory",
    tagline: "Smart Factory Dashboards & Preventive Maintenance",
    description: "Connecting factory machines, PLC sensors, and supply chain ERPs into real-time operational cockpits that boost equipment effectiveness and reduce factory downtime.",
    challenges: [
      "Unplanned machine breakdowns causing millions in factory floor halts",
      "Isolated legacy industrial machinery that cannot communicate with cloud ERPs",
      "Paper-based quality control checklists prone to human oversight and delays",
      "Lack of centralized Overall Equipment Effectiveness (OEE) metrics for plant managers"
    ],
    solutions: [
      "Edge-to-cloud industrial sensor gateways utilizing MQTT and OPC-UA standards",
      "Predictive vibration and thermal anomaly detection using machine learning",
      "Digital tablet checklists for shop floor technicians with barcode verification",
      "Executive real-time OEE dashboards with drill-downs per production line"
    ],
    technologies: ["React.js", "Python", "MQTT", "Time Series DB", "WebSockets", "Docker"],
    benefits: [
      "Up to 35% reduction in costly unscheduled equipment downtime",
      "Real-time visibility into scrap rates and production run bottlenecks",
      "Seamless bridge between 20-year-old factory machinery and modern cloud software",
      "Higher worker safety and audit-compliant maintenance records"
    ],
    caseStudyRef: "fleetflow"
  }
];
