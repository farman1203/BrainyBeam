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
import CreateAgent from './pages/admin/CreateAgent'
import AgentList from './pages/admin/AgentList'

import AgentDashboard from './pages/agent/Dashboard'
import MyProperties from './pages/agent/MyProperties'
import AddProperty from './pages/agent/AddProperty'
import EditProperty from './pages/agent/EditProperty'
import AgentPropertyDetails from './pages/agent/PropertyDetails'
import Leads from './pages/agent/Leads'
import SiteVisitSchedule from './pages/agent/SiteVisitSchedule'
import AgentProfile from './pages/agent/Profile'

import BuyerDashboard from './pages/buyer/Dashboard'
import BrowseProperties from './pages/buyer/BrowseProperties'
import BuyerPropertyDetails from './pages/buyer/PropertyDetails'
import CompareProperties from './pages/buyer/CompareProperties'
import SavedProperties from './pages/buyer/SavedProperties'
import MyInquiries from './pages/buyer/MyInquiries'
import BuyerProfile from './pages/buyer/Profile'

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

// Simple landing route: redirects straight to login.
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
      <Route path="/admin" element={<DashboardLayout navItems={adminNav} user={currentUser.admin} />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        {/* <Route path="agents/create" element={<CreateAgent />} />
        <Route path="agents" element={<AgentList />} />
        <Route path="profile" element={<AgentProfile />} /> */}
      </Route>

      {/* Agent Panel */}
      <Route path="/agent" element={<DashboardLayout navItems={agentNav} user={currentUser.agent} />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AgentDashboard />} />
        <Route path="properties" element={<MyProperties />} />
        <Route path="properties/add" element={<AddProperty />} />
        <Route path="properties/edit/:id" element={<EditProperty />} />
        <Route path="properties/:id" element={<AgentPropertyDetails />} />
        <Route path="leads" element={<Leads />} />
        <Route path="site-visits" element={<SiteVisitSchedule />} />
        <Route path="profile" element={<AgentProfile />} />
      </Route>

      {/* Buyer Panel */}
      <Route path="/buyer" element={<DashboardLayout navItems={buyerNav} user={currentUser.buyer} />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<BuyerDashboard />} />
        <Route path="properties" element={<BrowseProperties />} />
        <Route path="properties/:id" element={<BuyerPropertyDetails />} />
        <Route path="compare" element={<CompareProperties />} />
        <Route path="saved" element={<SavedProperties />} />
        <Route path="inquiries" element={<MyInquiries />} />
        <Route path="profile" element={<BuyerProfile />} />
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
    </Routes>
  )
}
