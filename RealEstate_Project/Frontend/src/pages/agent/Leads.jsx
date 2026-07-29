import React, { useState } from 'react'
import LeadStatusCard from '../../components/common/LeadStatusCard'
import EmptyState from '../../components/common/EmptyState'
import { leads as initialLeads, leadStatuses } from '../../data/dummyData'
import { Users } from 'lucide-react'
import './Leads.css'

const columnToneClass = {
  New: 'leads-column-inner--new',
  Contacted: 'leads-column-inner--contacted',
  'Site Visit Scheduled': 'leads-column-inner--visit',
  Negotiation: 'leads-column-inner--negotiation',
  Closed: 'leads-column-inner--closed',
  Lost: 'leads-column-inner--lost',
}

export default function Leads() {
  const [leads, setLeads] = useState(initialLeads)

  const moveLead = (id, newStatus) => {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l)))
  }

  return (
    <div className="page-stack-6">
      <div>
        <h1 className="page-title">Leads</h1>
        <p className="page-subtitle">Track and move leads through your sales pipeline.</p>
      </div>

      {leads.length === 0 ? (
        <EmptyState icon={Users} title="No leads yet" message="Leads from buyer inquiries will appear here." />
      ) : (
        <div className="leads-board">
          {leadStatuses.map((status) => {
            const columnLeads = leads.filter((l) => l.status === status)
            return (
              <div key={status} className="leads-column">
                <div className={`leads-column-inner ${columnToneClass[status]}`}>
                  <div className="leads-column-header">
                    <h3 className="leads-column-title">{status}</h3>
                    <span className="leads-column-count">{columnLeads.length}</span>
                  </div>
                  <div className="leads-column-cards">
                    {columnLeads.map((lead) => (
                      <LeadStatusCard key={lead.id} lead={lead} statuses={leadStatuses} onMove={moveLead} />
                    ))}
                    {columnLeads.length === 0 && (
                      <p className="leads-column-empty">No leads</p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
