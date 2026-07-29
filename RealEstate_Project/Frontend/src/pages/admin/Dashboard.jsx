import React from 'react'
import { Users, Home, UserCheck, ListChecks, Activity } from 'lucide-react'
import DashboardCard from '../../components/common/DashboardCard'
import './Dashboard.css'

export default function AdminDashboard() {

  return (
    <div className="page-stack-6">
      <div>
        <h1 className="page-title">Admin Dashboard</h1>
        <p className="page-subtitle">Overview of platform activity across agents, properties and leads.</p>
      </div>

      <div className="stats-grid-4">

        <DashboardCard />

      </div>

      <div className="admin-dashboard-grid">
        <div className="admin-dashboard-agents-panel">
          <h2 className="admin-dashboard-panel-title">Top Performing Agents</h2>
          <div className="admin-dashboard-agent-list">

            <div key="" className="admin-dashboard-agent-row">
              <div className="admin-dashboard-agent-info">
                <img src="" alt="" className="admin-dashboard-agent-avatar" />
                <div>
                  <p className="admin-dashboard-agent-name"></p>
                  <p className="admin-dashboard-agent-meta"> </p>
                </div>
              </div>
              <span
                className="status-pill"
              >

              </span>
            </div>

          </div>
        </div>

        <div className="admin-dashboard-activity-panel">
          <h2 className="admin-dashboard-panel-title admin-dashboard-panel-title--icon">
            <Activity size={17} /> Recent Activities
          </h2>
          <ul className="admin-dashboard-activity-list">

            <li className="admin-dashboard-activity-item">
              <p className="admin-dashboard-activity-text"></p>
              <p className="admin-dashboard-activity-time"></p>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}


// import React from 'react'

// const Dashboard = () => {
//   return (
//     <div>
//       welcome admin dashboard
//     </div>
//   )
// }

// export default Dashboard

