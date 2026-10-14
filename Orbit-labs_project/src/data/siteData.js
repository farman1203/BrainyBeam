import {
    Code2, Smartphone, Cloud, ShieldCheck, Database, Sparkles,
    Server,
    Layers,
} from 'lucide-react';

export const services = [
    { icon: Code2, title: 'Web Engineering', text: 'High-performance websites and web apps built for speed, scale and conversion.', tags: ['React', 'Node.js', 'APIs'], details: { overview: 'We build fast, reliable websites and web applications, from marketing sites to complex platforms, with a focus on performance, clean code and results you can measure.', deliver: ['Custom websites and web apps in React and Node.js','API design and third-party integrations','Performance, SEO and accessibility built in','Admin panels and dashboards that are easy to use'] } },
    { icon: Smartphone, title: 'Mobile Experiences', text: 'Polished cross-platform products that feel native, fast and intuitive.', tags: ['React Native', 'UX/UI', 'iOS & Android'], details: { overview: 'We create cross-platform mobile apps that feel native, load quickly and are simple to use, so your customers keep coming back.', deliver: ['Cross-platform apps for iOS and Android','Native-feeling interface and smooth navigation','Push notifications, offline support and device features','App store release and ongoing updates'] } },
    { icon: Cloud, title: 'Cloud & DevOps', text: 'Reliable cloud infrastructure, CI/CD and deployment workflows that stay simple.', tags: ['AWS', 'Docker', 'CI/CD'], details: { overview: 'We set up dependable cloud infrastructure and release workflows, so shipping new features is safe, repeatable and stress-free.', deliver: ['Cloud setup and migration on AWS','Docker-based, repeatable environments','CI/CD pipelines for automated, safe releases','Monitoring, backups and cost-aware scaling'] } },
    { icon: ShieldCheck, title: 'Cyber Security', text: 'Practical security engineering that protects your products and customer data.', tags: ['Auth', 'Audits', 'Monitoring'], details: { overview: 'We bring practical security into your product from the start, protecting your users, your data and your reputation.', deliver: ['Secure authentication and access control','Security reviews and vulnerability audits','Data protection and safe API practices','Monitoring and incident-ready logging'] } },
    { icon: Database, title: 'Data & AI', text: 'Useful automation, analytics and AI features that turn data into decisions.', tags: ['AI', 'Analytics', 'Automation'], details: { overview: 'We turn your data into useful decisions and remove repetitive work with automation and AI features that fit your business.', deliver: ['Dashboards and analytics that answer real questions','Workflow automation that saves manual effort','AI features such as assistants, search and summaries','Clean data pipelines behind every insight'] } },
    { icon: Sparkles, title: 'Product Design', text: 'Clean, conversion-focused interfaces designed around real people and outcomes.', tags: ['UX Research', 'UI', 'Prototyping'], details: { overview: 'We design clear, conversion-focused interfaces around real people, from first research to a polished, developer-ready design.', deliver: ['User research and journey mapping','Wireframes and clickable prototypes','Accessible UI and reusable design systems','Developer-friendly design handoff'] } }
];
// `art` picks the built-in illustration. To use a real screenshot instead, add `image: '/projects/name.jpg'`
// (put the file in a /public/projects folder) and it replaces the illustration automatically.
export const projects = [
    { title: 'E-Commerce Platform', text: 'A fast, conversion-focused online store with smooth product discovery, secure checkout and an easy-to-manage catalog.', category: 'E-COMMERCE', art: 'ecommerce' },
    { title: 'MediNest', text: 'A patient-first healthcare platform that brings appointment booking, doctor discovery and follow-ups into one simple place.', category: 'HEALTHCARE', art: 'healthcare' },
    { title: 'Real Estate Portal', text: 'A modern property platform to browse listings, filter by what matters and connect buyers, sellers and agents quickly.', category: 'REAL ESTATE', art: 'realestate' },
];

export const technologyGroups = [
    {
        title: 'Frontend Development',
        description: 'Responsive, interactive and modern user interfaces.',
        icon: Code2,
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
    },
    {
        title: 'Backend Development',
        description: 'Secure APIs, server-side logic and scalable applications.',
        icon: Server,
        technologies: ['Node.js', 'Express.js', 'Python', 'PHP', 'REST APIs', 'GraphQL'],
    },
    {
        title: 'Database & Storage',
        description: 'Reliable data management and efficient data access.',
        icon: Database,
        technologies: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Supabase', 'Redis'],
    },
    {
        title: 'Cloud & DevOps',
        description: 'Deployment, hosting and modern development workflows.',
        icon: Cloud,
        technologies: ['AWS', 'Azure', 'Docker', 'Vercel', 'Netlify', 'GitHub Actions'],
    },
    {
        title: 'Mobile Development',
        description: 'Mobile experiences designed for performance and usability.',
        icon: Smartphone,
        technologies: ['React Native', 'Flutter', 'Android', 'iOS', 'Expo'],
    },
    {
        title: 'Tools & Engineering',
        description: 'Tools that help teams collaborate and ship quality software.',
        icon: Layers,
        technologies: ['Git', 'GitHub', 'Postman', 'Figma', 'npm', 'Vite'],
    },
];

// Existing figures from the original Home and About pages (shown in both places).
export const stats = [
    { value: 40, suffix: '+', label: 'Products shipped' },
    { value: 8, suffix: ' yrs', label: 'Engineering craft' },
    { value: 98, suffix: '%', label: 'Client retention' },
];

export const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/team', label: 'Team' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
];

// Contact details exactly as they appeared on the Contact page and in the footer.
export const contactDetails = {
    email: 'hello@orbitlabs.dev',
    phone: '+91 99999 99999',
    phoneHref: 'tel:+919999999999',
    location: 'Ahmedabad, India',
};

export const footerContact = {
    email: 'orbitlabs@gmail.com',
    phone: '9999999999',
};

export const footerServices = ['Web Development', 'Mobile Apps', 'Cloud & Devops', 'AI & Automation', 'Cyber Security'];

// TODO: replace each '#' with the real profile URL.
export const socialLinks = [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'GitHub', href: '#' },
];

// Team page: how the team is organised (no individual names are invented).
export const teamAreas = [
    { icon: Code2, title: 'Web & Mobile Engineers', text: 'Build fast, reliable web and mobile products from the first commit to the final release.', tags: ['React', 'Node.js', 'React Native'] },
    { icon: Cloud, title: 'Cloud & DevOps', text: 'Keep products online, secure and easy to ship with automated pipelines.', tags: ['AWS', 'Docker', 'CI/CD'] },
    { icon: ShieldCheck, title: 'Security', text: 'Protect your product and customer data with practical security engineering.', tags: ['Auth', 'Audits', 'Monitoring'] },
    { icon: Database, title: 'Data & AI', text: 'Turn data into useful automation, analytics and AI features.', tags: ['AI', 'Analytics', 'Automation'] },
    { icon: Sparkles, title: 'Product Design', text: 'Shape clear, people-first interfaces through research and prototyping.', tags: ['UX Research', 'UI', 'Prototyping'] },
    { icon: Layers, title: 'Project Delivery', text: 'Keep every project on track with clear communication and steady progress updates.', tags: ['Planning', 'Updates', 'Support'] },
];

// DUMMY PLACEHOLDER MEMBERS: replace these names and roles with your real team.
// Optional photo: { name: 'Full Name', role: 'Role', photo: '/team/name.jpg' } (file in /public/team).
// Without a photo, an initials avatar is shown. An empty list hides the "Meet the team" section.
export const teamMembers = [
    { name: 'Aarav Mehta', role: 'Founder & Technical Lead' },
    { name: 'Riya Shah', role: 'Product Design Lead' },
    { name: 'Kabir Patel', role: 'Senior Full-Stack Engineer' },
    { name: 'Ananya Desai', role: 'Frontend Engineer' },
    { name: 'Vihaan Joshi', role: 'Cloud & DevOps Engineer' },
    { name: 'Isha Trivedi', role: 'Mobile App Developer' },
    { name: 'Rohan Parekh', role: 'Security Engineer' },
    { name: 'Meera Nair', role: 'Project Delivery Manager' },
];
