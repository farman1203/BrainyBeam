import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

function ServiceCard({ icon: Icon, title, text, tags, index }) { return <motion.article className="service-card" whileHover={{ y: -10 }} transition={{ duration: .25 }}><div className="service-icon"><Icon size={23} /></div><span className="service-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p><div className="tags">{tags.map(t => <span key={t}>{t}</span>)}</div><ArrowUpRight className="service-arrow" size={21} /></motion.article> }

export default ServiceCard;
