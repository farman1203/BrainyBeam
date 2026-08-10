import React from 'react'
import { Phone, Home } from 'lucide-react'
import '../common/style/LeadStatusCard.css'

export default function LeadStatusCard({
  lead,
  statuses,
  onMove
}) {

  return (

    <div className="lead-status-card">
      <div className="lead-status-card-header">
        <div>
          <h4 className="lead-status-card-name">
            {lead.buyer?.name || 'Unknown Buyer'}
          </h4>

          <p className="lead-status-card-property">
            <Home size={14} />
            {lead.property?.title || 'Property'}
          </p>
        </div>
      </div>
      <div className="lead-status-card-contact">
        <p>
          <Phone size={14} />
          {lead.buyer?.phone || 'No phone'}
        </p>
      </div>

      {lead.message && (
        <p className="lead-status-card-message">
          {lead.message}
        </p>
      )}

      {onMove && (
        <select
          value={lead.status}
          onChange={(e) =>
            onMove(
              lead._id,
              e.target.value
            )
          }
          className="lead-status-card-select"
        >
          {statuses.map((status) => (
            <option
              key={status}
              value={status}
            >
              {status}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}