import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

export default function Button({ to, href, children, variant = 'primary', icon = true, ...rest }) {
  const cls = `btn btn-${variant}`
  const inner = <><span>{children}</span>{icon && <ArrowUpRight size={18} className="btn-ic" aria-hidden="true" />}</>
  return (
    <motion.span className="btn-wrap" whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }}>
      {to ? <Link to={to} className={cls} {...rest}>{inner}</Link>
        : href ? <a href={href} className={cls} {...rest}>{inner}</a>
        : <button type="button" className={cls} {...rest}>{inner}</button>}
    </motion.span>
  )
}
