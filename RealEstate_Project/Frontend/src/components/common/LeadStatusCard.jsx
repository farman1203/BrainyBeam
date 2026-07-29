import React from 'react'
import { Phone, Home } from 'lucide-react'
import './LeadStatusCard.css'

/**
 * A single lead card shown inside a Kanban column.
 * Props: lead { buyer, property, phone, status }, onMove (optional)
 */
export default function LeadStatusCard({ lead, statuses, onMove }) {
  return (
    <div className="lead-status-card">
      <p className="lead-status-card-buyer">{lead.buyer}</p>
      <p className="lead-status-card-meta">
        <Home size={12} /> {lead.property}
      </p>
      <p className="lead-status-card-meta">
        <Phone size={12} /> {lead.phone}
      </p>

      {onMove && (
        <select
          value={lead.status}
          onChange={(e) => onMove(lead.id, e.target.value)}
          className="lead-status-card-select"
        >
          {statuses.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      )}
    </div>
  )
}
