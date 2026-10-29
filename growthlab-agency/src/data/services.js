import { Search, Share2, Code2, MousePointerClick, Palette, ShoppingBag } from 'lucide-react'

export const services = [
  { slug: 'seo', icon: Search, hue: 22, title: 'Search Engine Optimization', text: 'Climb the rankings with technical fixes, smart content and authority building that turns searches into customers.', points: ['Technical SEO Excellence', 'Keyword-Led Strategy', 'Authority & Link Building', 'Clear Performance Reports'] },
  { slug: 'social-media-marketing', icon: Share2, hue: 12, title: 'Social Media Marketing', text: 'Grow an engaged audience with consistent content, community care and creator partnerships on every key platform.', points: ['Data-Driven Content Plans', 'Reels & Visual Production', 'Community Management', 'Creator Collaborations'] },
  { slug: 'website-development', icon: Code2, hue: 36, title: 'Website Development', text: 'Fast, search-friendly websites designed around your visitors and built to turn clicks into enquiries.', points: ['Performance Engineering', 'Conversion-Focused UX', 'Scalable Architecture', 'Launch, QA & Support'] },
  { slug: 'performance-marketing', icon: MousePointerClick, hue: 44, title: 'Performance Marketing', text: 'Paid campaigns across search, social and display, planned around return and refined with every test.', points: ['Full-Funnel Ad Strategy', 'Conversion Optimization', 'Creative Testing', 'Transparent Reporting'] },
  { slug: 'graphic-designing-branding', icon: Palette, hue: 28, title: 'Graphic Design & Branding', text: 'Identity and creative that look consistent everywhere.', points: [] },
  { slug: 'e-commerce-marketing', icon: ShoppingBag, hue: 18, title: 'E-commerce Marketing', text: 'Growth plans for online stores.', points: [] },
]
