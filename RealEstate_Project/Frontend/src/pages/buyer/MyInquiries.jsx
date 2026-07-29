import React from 'react'
import { MessageSquare } from 'lucide-react'
import EmptyState from '../../components/common/EmptyState'
import { inquiries } from '../../data/dummyData'
import './MyInquiries.css'

export default function MyInquiries() {
  return (
    <div className="page-stack-6">
      <div>
        <h1 className="page-title">My Inquiries</h1>
        <p className="page-subtitle">Track the inquiries you've sent to agents.</p>
      </div>

      {inquiries.length === 0 ? (
        <EmptyState icon={MessageSquare} title="No inquiries yet" message="Inquiries you send to agents will appear here." />
      ) : (
        <div className="inquiries-list">
          {inquiries.map((inq) => (
            <div key={inq.id} className="inquiry-card">
              <div>
                <p className="inquiry-property">{inq.property}</p>
                <p className="inquiry-agent">To: {inq.agent}</p>
                <p className="inquiry-message">"{inq.message}"</p>
              </div>
              <div className="inquiry-meta">
                <span
                  className={`status-pill ${inq.status === 'Responded' ? 'status-pill--success' : 'status-pill--gold'}`}
                >
                  {inq.status}
                </span>
                <p className="inquiry-date">{inq.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
