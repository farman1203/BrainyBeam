import React, { useState } from 'react'
import { Calendar, Clock, User, Home, CheckCircle2 } from 'lucide-react'
import EmptyState from '../../components/common/EmptyState'
import { siteVisits, timeSlots } from '../../data/dummyData'
import './SiteVisitSchedule.css'

export default function SiteVisitSchedule() {
  const [selectedSlot, setSelectedSlot] = useState(timeSlots[1])
  const upcoming = siteVisits.filter((v) => v.status === 'Upcoming')
  const completed = siteVisits.filter((v) => v.status === 'Completed')

  // Simple 7-day calendar strip starting today (dummy dates)
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(2026, 6, 28 + i)
    return d
  })

  return (
    <div className="page-stack-6">
      <div>
        <h1 className="page-title">Site Visit Schedule</h1>
        <p className="page-subtitle">Plan and track upcoming property visits.</p>
      </div>

      {/* Calendar strip */}
      <div className="svs-calendar-panel">
        <h3 className="svs-panel-title">
          <Calendar size={17} /> This Week
        </h3>
        <div className="svs-days-grid">
          {days.map((d, i) => (
            <div
              key={i}
              className={`svs-day-cell ${i === 1 ? 'svs-day-cell--active' : ''}`}
            >
              <p className="svs-day-weekday">{d.toLocaleDateString('en-US', { weekday: 'short' })}</p>
              <p className="svs-day-date">{d.getDate()}</p>
            </div>
          ))}
        </div>

        <h4 className="svs-slots-title">Available Time Slots</h4>
        <div className="svs-slots-row">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedSlot(slot)}
              className={`svs-slot-btn ${selectedSlot === slot ? 'svs-slot-btn--active' : ''}`}
            >
              <Clock size={13} /> {slot}
            </button>
          ))}
        </div>
      </div>

      <div className="svs-visits-grid">
        <div>
          <h3 className="svs-visits-heading">Upcoming Visits</h3>
          {upcoming.length === 0 ? (
            <EmptyState title="No upcoming visits" message="Scheduled visits will show up here." />
          ) : (
            <div className="svs-visits-list">
              {upcoming.map((v) => (
                <div key={v.id} className="svs-visit-card">
                  <div>
                    <p className="svs-visit-buyer"><User size={14} /> {v.buyer}</p>
                    <p className="svs-visit-property"><Home size={14} /> {v.property}</p>
                  </div>
                  <div className="svs-visit-meta">
                    <p className="svs-visit-date">{v.date}</p>
                    <p className="svs-visit-time">{v.time}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 className="svs-visits-heading">Completed Visits</h3>
          {completed.length === 0 ? (
            <EmptyState title="No completed visits" />
          ) : (
            <div className="svs-visits-list">
              {completed.map((v) => (
                <div key={v.id} className="svs-visit-card svs-visit-card--completed">
                  <div>
                    <p className="svs-visit-buyer"><User size={14} /> {v.buyer}</p>
                    <p className="svs-visit-property"><Home size={14} /> {v.property}</p>
                  </div>
                  <div className="svs-visit-meta">
                    <p className="svs-visit-done"><CheckCircle2 size={14} /> Done</p>
                    <p className="svs-visit-time">{v.date}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
