import React, { useEffect, useState } from 'react'
import LeadStatusCard from '../../components/common/LeadStatusCard'
import EmptyState from '../../components/common/EmptyState'
import { Users } from 'lucide-react'
import './Leads.css'
import axios from 'axios'

const statuses = [
  'new',
  'contacted',
  'site visit',
  'negotiation',
  'closed',
  'lost',
]

const columnTitle = {
  new: 'New',
  contacted: 'Contacted',
  'site visit': 'Site Visit Scheduled',
  negotiation: 'Negotiation',
  closed: 'Closed',
  lost: 'Lost',
}

const columnToneClass = {
  new: 'leads-column-inner--new',
  contacted: 'leads-column-inner--contacted',
  'site visit': 'leads-column-inner--visit',
  negotiation: 'leads-column-inner--negotiation',
  closed: 'leads-column-inner--closed',
  lost: 'leads-column-inner--lost',
}

export default function Leads() {
  const [leads, setLeads] = useState([])
  useEffect(() => {
    getAgentInquiry()
  }, [])

  const getAgentInquiry = async () => {
    try {
      const res = await axios.get(
        'http://localhost:3000/api/inquiry/agent',
        {
          withCredentials: true,
        }
      )
      console.log("Inquiry response:", res.data)
      setLeads(res.data.inquiries || [])
    } catch (error) {
      console.log(
        error.response?.data || error
      )
    }
  }

  const moveLead = async (id, newStatus) => {
    try {
      setLeads((prev) =>
        prev.map((lead) =>
          lead._id === id
            ? {
              ...lead,
              status: newStatus,
            }
            : lead
        )
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="page-stack-6">
      <div>
        <h1 className="page-title">
          Leads
        </h1>
        <p className="page-subtitle">
          Track and move leads through your sales pipeline.
        </p>
      </div>
      {leads.length === 0 ? (
        <EmptyState
          icon={Users}
          title="No leads found"
          message="You don't have any inquiries yet."
        />
      ) : (
        <div className="leads-board">
          {statuses.map((status) => {
            const columnLeads = leads.filter(
              (lead) => lead.status === status
            )
            return (
              <div
                key={status}
                className={`leads-column-inner ${columnToneClass[status]}`}
              >
                <div className="leads-column-header">
                  <h3>
                    {columnTitle[status]}
                  </h3>
                  <span>
                    {columnLeads.length}
                  </span>
                </div>
                <div className="leads-column-body">
                  {columnLeads.map((lead) => (
                    <LeadStatusCard
                      key={lead._id}
                      lead={lead}
                      statuses={statuses}
                      onMove={moveLead}
                    />
                  ))}
                  {columnLeads.length === 0 && (
                    <p className="leads-empty-column">
                      No leads
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}