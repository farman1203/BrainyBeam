import {
    Code2, Smartphone, Cloud, ShieldCheck, Database, Sparkles,
    Server,
    Layers,
} from 'lucide-react';

export const services = [
    { icon: Code2, title: 'Web Engineering', text: 'High-performance websites and web apps built for speed, scale and conversion.', tags: ['React', 'Node.js', 'APIs'] },
    { icon: Smartphone, title: 'Mobile Experiences', text: 'Polished cross-platform products that feel native, fast and intuitive.', tags: ['React Native', 'UX/UI', 'iOS & Android'] },
    { icon: Cloud, title: 'Cloud & DevOps', text: 'Reliable cloud infrastructure, CI/CD and deployment workflows that stay simple.', tags: ['AWS', 'Docker', 'CI/CD'] },
    { icon: ShieldCheck, title: 'Cyber Security', text: 'Practical security engineering that protects your products and customer data.', tags: ['Auth', 'Audits', 'Monitoring'] },
    { icon: Database, title: 'Data & AI', text: 'Useful automation, analytics and AI features that turn data into decisions.', tags: ['AI', 'Analytics', 'Automation'] },
    { icon: Sparkles, title: 'Product Design', text: 'Clean, conversion-focused interfaces designed around real people and outcomes.', tags: ['UX Research', 'UI', 'Prototyping'] }
];
export const projects = [['Fintech Platform', 'A secure digital banking experience with a frictionless onboarding flow.'],
['Commerce Engine', 'A scalable commerce stack built for high-volume product discovery.'],
['Care Connect', 'A patient-first healthcare platform simplifying appointments and follow-ups.']];

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

