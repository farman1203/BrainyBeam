import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Sidebar from '../components/common/Sidebar'
import Footer from '../components/common/Footer'
import './DashboardLayout.css'

/**
 * Shared shell for Admin / Agent / Buyer panels: Navbar + Sidebar + content + Footer.
 * Props:
 *  - navItems: sidebar links specific to the role
 *  - user: current user object (name, role, avatar)
 */
export default function DashboardLayout({ navItems, user }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="dashboard-layout">
      <Navbar user={user} onMenuClick={() => setSidebarOpen(true)} />
      <div className="dashboard-layout-body">
        <Sidebar items={navItems} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="dashboard-layout-main">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
