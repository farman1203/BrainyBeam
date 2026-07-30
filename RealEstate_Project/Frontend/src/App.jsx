import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import {
  LayoutDashboard, UserPlus, Users, Home, PlusSquare, KanbanSquare,
  CalendarClock, UserCircle, Search, Heart, Scale, MessageSquare, Building2,
} from 'lucide-react'

import AuthLayout from './layouts/AuthLayout'
import DashboardLayout from './layouts/DashboardLayout'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

import AdminDashboard from './pages/admin/Dashboard'


import AgentDashboard from './pages/agent/Dashboard'
import MyProperties from './pages/agent/MyProperties'
import AddProperty from './pages/agent/AddProperty'
import EditProperty from './pages/agent/EditProperty'
// import AgentPropertyDetails from './pages/agent/PropertyDetails'


import BuyerDashboard from './pages/buyer/Dashboard'


import { currentUser } from './data/dummyData'
import './App.css'

const adminNav = [
  { label: 'Dashboard', to: '/admin/dashboard', icon: LayoutDashboard, end: true },
  { label: 'Create Agent', to: '/admin/agents/create', icon: UserPlus },
  { label: 'Agent List', to: '/admin/agents', icon: Users },
]

const agentNav = [
  { label: 'Dashboard', to: '/agent/dashboard', icon: LayoutDashboard, end: true },
  { label: 'My Properties', to: '/agent/properties', icon: Home, end: true },
  { label: 'Add Property', to: '/agent/properties/add', icon: PlusSquare },
  { label: 'Leads', to: '/agent/leads', icon: KanbanSquare },
  { label: 'Site Visits', to: '/agent/site-visits', icon: CalendarClock },
  { label: 'Profile', to: '/agent/profile', icon: UserCircle },
]

const buyerNav = [
  { label: 'Dashboard', to: '/buyer/dashboard', icon: LayoutDashboard, end: true },
  { label: 'Browse Properties', to: '/buyer/properties', icon: Search, end: true },
  { label: 'Compare', to: '/buyer/compare', icon: Scale },
  { label: 'Saved Properties', to: '/buyer/saved', icon: Heart },
  { label: 'My Inquiries', to: '/buyer/inquiries', icon: MessageSquare },
  { label: 'Profile', to: '/buyer/profile', icon: UserCircle },
]


function Landing() {
  return <Navigate to="/login" replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      {/* Auth */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Admin Panel */}
      <Route path="/admin" element={<DashboardLayout navItems={adminNav} />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />

      </Route>

      {/* Agent Panel */}
      <Route path="/agent" element={<DashboardLayout navItems={agentNav} />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AgentDashboard />} />
        <Route path="properties" element={<MyProperties />} />
        <Route path="properties/add" element={<AddProperty />} />
        <Route path="properties/edit/:id" element={<EditProperty />} />
        {/* <Route path="properties/:id" element={<AgentPropertyDetails />} /> */}
      </Route>

      {/* Buyer Panel */}
      <Route path="/buyer" element={<DashboardLayout navItems={buyerNav}  />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<BuyerDashboard />} />
      </Route>

      {/* Fallback */}
      <Route
        path="*"
        element={
          <div className="not-found-page">
            <div className="not-found-icon">
              <Building2 size={22} />
            </div>
            <h1 className="not-found-title">Page not found</h1>
            <p className="not-found-message">The page you're looking for doesn't exist.</p>
            <a href="/login" className="not-found-link">Back to Login</a>
          </div>
        }
      />
    </Routes >
  )
}
