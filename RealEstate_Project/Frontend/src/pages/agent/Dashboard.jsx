import React from 'react'
import { Link } from 'react-router-dom'
import { Home, ListChecks, CalendarCheck, Handshake, Plus } from 'lucide-react'
import DashboardCard from '../../components/common/DashboardCard'
// import LeadStatusCard from '../../components/common/LeadStatusCard'
import './Dashboard.css'

export default function AgentDashboard() {
  // const myProperties = properties.filter((p) => p.agentId === 'a1')
  // const myLeads = leads.slice(0, 4)
  // const upcomingVisits = siteVisits.filter((v) => v.status === 'Upcoming')

  // const stats = [
  //   // { label: 'Total Properties', value: myProperties.length, icon: Home, tone: 'brand' },
  //   { label: 'Active Leads', value: leads.filter((l) => l.status !== 'Closed' && l.status !== 'Lost').length, icon: ListChecks, tone: 'gold' },
  //   { label: 'Scheduled Visits', value: upcomingVisits.length, icon: CalendarCheck, tone: 'success' },
  //   { label: 'Closed Deals', value: leads.filter((l) => l.status === 'Closed').length, icon: Handshake, tone: 'danger' },
  // ]

  return (
    <div className="page-stack-6">
      <div className="page-header-row">
        <div>
          <h1 className="page-title">Agent Dashboard</h1>
          <p className="page-subtitle">Welcome back, Here's what's happening today.</p>
        </div>
        <Link
          to="/agent/properties/add"
          className="btn-primary"
        >
          <Plus size={16} /> Add Property
        </Link>
      </div>

      <div className="stats-grid-4">

        <DashboardCard key="" />

      </div>

      <div className="agent-dashboard-grid">
        <div className="agent-dashboard-leads-panel">
          <div className="agent-dashboard-panel-header">
            <h2 className="agent-dashboard-panel-title">Recent Leads</h2>
            <Link to="/agent/leads" className="agent-dashboard-view-all">View all</Link>
          </div>
          <div className="agent-dashboard-leads-grid">

            {/* <LeadStatusCard key="" lead="" /> */}

          </div>
        </div>

        <div className="agent-dashboard-visits-panel">
          <div className="agent-dashboard-panel-header">
            <h2 className="agent-dashboard-panel-title">Upcoming Visits</h2>
            <Link to="/agent/site-visits" className="agent-dashboard-view-all">View all</Link>
          </div>
          <ul className="agent-dashboard-visits-list">

            <li key="" className="agent-dashboard-visit-item">
              <p className="agent-dashboard-visit-buyer"></p>
              <p className="agent-dashboard-visit-property"></p>
              <p className="agent-dashboard-visit-time"></p>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}


