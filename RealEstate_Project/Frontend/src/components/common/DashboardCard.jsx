import React from 'react'
import  '../common/style/DashboardCard.css'

const toneClass = {
  brand: 'dashboard-card-icon-wrap--brand',
  gold: 'dashboard-card-icon-wrap--gold',
  success: 'dashboard-card-icon-wrap--success',
  danger: 'dashboard-card-icon-wrap--danger',
}

export default function DashboardCard({ label, value, icon: Icon, tone = 'brand', trend }) {
  return (
    <div className="dashboard-card">
      <div>
        <p className="dashboard-card-label">{label}</p>
        <p className="dashboard-card-value">{value}</p>
        {trend && <p className="dashboard-card-trend">{trend}</p>}
      </div>
      <div className={`dashboard-card-icon-wrap ${toneClass[tone]}`}>
        {Icon && <Icon size={20} strokeWidth={2} />}
      </div>
    </div>
  )
}
