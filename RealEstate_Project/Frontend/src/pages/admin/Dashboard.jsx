// import React from 'react'
// import { Users, Home, UserCheck, ListChecks, Activity } from 'lucide-react'
// import DashboardCard from '../../components/common/DashboardCard'
// import { agents, properties, recentActivities } from '../../data/dummyData'
// import './Dashboard.css'

// export default function AdminDashboard() {
//   const stats = [
//     { label: 'Total Agents', value: agents.length, icon: Users, tone: 'brand' },
//     { label: 'Total Properties', value: properties.length, icon: Home, tone: 'gold' },
//     { label: 'Total Buyers', value: 128, icon: UserCheck, tone: 'success' },
//     { label: 'Total Leads', value: 42, icon: ListChecks, tone: 'danger' },
//   ]

//   return (
//     <div className="page-stack-6">
//       <div>
//         <h1 className="page-title">Admin Dashboard</h1>
//         <p className="page-subtitle">Overview of platform activity across agents, properties and leads.</p>
//       </div>

//       <div className="stats-grid-4">
//         {stats.map((s) => (
//           <DashboardCard key={s.label} {...s} />
//         ))}
//       </div>

//       <div className="admin-dashboard-grid">
//         <div className="admin-dashboard-agents-panel">
//           <h2 className="admin-dashboard-panel-title">Top Performing Agents</h2>
//           <div className="admin-dashboard-agent-list">
//             {agents.map((a) => (
//               <div key={a.id} className="admin-dashboard-agent-row">
//                 <div className="admin-dashboard-agent-info">
//                   <img src={a.avatar} alt={a.name} className="admin-dashboard-agent-avatar" />
//                   <div>
//                     <p className="admin-dashboard-agent-name">{a.name}</p>
//                     <p className="admin-dashboard-agent-meta">{a.properties} properties · {a.leads} leads</p>
//                   </div>
//                 </div>
//                 <span
//                   className={`status-pill ${a.status === 'Active' ? 'status-pill--success' : 'status-pill--muted'}`}
//                 >
//                   {a.status}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="admin-dashboard-activity-panel">
//           <h2 className="admin-dashboard-panel-title admin-dashboard-panel-title--icon">
//             <Activity size={17} /> Recent Activities
//           </h2>
//           <ul className="admin-dashboard-activity-list">
//             {recentActivities.map((act) => (
//               <li key={act.id} className="admin-dashboard-activity-item">
//                 <p className="admin-dashboard-activity-text">{act.text}</p>
//                 <p className="admin-dashboard-activity-time">{act.time}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from 'react'

const Dashboard = () => {
  return (
    <div>
      welcome admin dashboard
    </div>
  )
}

export default Dashboard

