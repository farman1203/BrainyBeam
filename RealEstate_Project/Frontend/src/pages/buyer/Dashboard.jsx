// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Eye, Heart, MessageSquare, Search } from 'lucide-react'
// import DashboardCard from '../../components/common/DashboardCard'
// import PropertyCard from '../../components/common/PropertyCard'
// import EmptyState from '../../components/common/EmptyState'
// import { properties, recentlyViewedIds, savedPropertyIds, inquiries } from '../../data/dummyData'
// import './Dashboard.css'

// export default function BuyerDashboard() {
//   const recentlyViewed = properties.filter((p) => recentlyViewedIds.includes(p.id))
//   const saved = properties.filter((p) => savedPropertyIds.includes(p.id))

//   const stats = [
//     { label: 'Recently Viewed', value: recentlyViewed.length, icon: Eye, tone: 'brand' },
//     { label: 'Saved Properties', value: saved.length, icon: Heart, tone: 'gold' },
//     { label: 'My Inquiries', value: inquiries.length, icon: MessageSquare, tone: 'success' },
//   ]

//   return (
//     <div className="page-stack-8">
//       <div className="page-header-row">
//         <div>
//           <h1 className="page-title">Welcome back, Karan</h1>
//           <p className="page-subtitle">Here's a summary of your property search.</p>
//         </div>
//         <Link
//           to="/buyer/properties"
//           className="btn-primary"
//         >
//           <Search size={16} /> Browse Properties
//         </Link>
//       </div>

//       <div className="stats-grid-3">
//         {stats.map((s) => (
//           <DashboardCard key={s.label} {...s} />
//         ))}
//       </div>

//       <div>
//         <div className="buyer-dashboard-section-header">
//           <h2 className="buyer-dashboard-section-title">Recently Viewed</h2>
//           <Link to="/buyer/properties" className="buyer-dashboard-view-link">Browse more</Link>
//         </div>
//         {recentlyViewed.length === 0 ? (
//           <EmptyState title="No properties viewed yet" message="Properties you view will appear here." />
//         ) : (
//           <div className="property-grid-responsive">
//             {recentlyViewed.map((p) => (
//               <PropertyCard key={p.id} property={p} detailsPath="/buyer/properties" />
//             ))}
//           </div>
//         )}
//       </div>

//       <div>
//         <div className="buyer-dashboard-section-header">
//           <h2 className="buyer-dashboard-section-title">Saved Properties</h2>
//           <Link to="/buyer/saved" className="buyer-dashboard-view-link">View all</Link>
//         </div>
//         {saved.length === 0 ? (
//           <EmptyState icon={Heart} title="No saved properties" message="Tap the heart icon on any listing to save it here." />
//         ) : (
//           <div className="property-grid-responsive">
//             {saved.map((p) => (
//               <PropertyCard key={p.id} property={p} detailsPath="/buyer/properties" />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

import React from 'react'

const Dashboard = () => {
  return (
    <div>
      welcome buyer dashboard
    </div>
  )
}

export default Dashboard
