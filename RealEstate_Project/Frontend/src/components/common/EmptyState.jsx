import React from 'react'
import { Inbox } from 'lucide-react'
import './EmptyState.css'

/**
 * Empty state placeholder shown when a list has no data.
 * Props: icon, title, message, action (optional node, e.g. a button)
 */
export default function EmptyState({ icon: Icon = Inbox, title = 'Nothing here yet', message, action }) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">
        <Icon size={24} />
      </div>
      <h3 className="empty-state-title">{title}</h3>
      {message && <p className="empty-state-message">{message}</p>}
      {action && <div className="empty-state-action">{action}</div>}
    </div>
  )
}
