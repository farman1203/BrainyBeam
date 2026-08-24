import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, Heart, MessageSquare, Search } from 'lucide-react'
import DashboardCard from '../../components/common/DashboardCard'
import PropertyCard from '../../components/common/PropertyCard'
import EmptyState from '../../components/common/EmptyState'
import '../buyer/style/Dashboard.css'
import axios from 'axios'
import { useAuth } from '../../context/AuthContext'

export default function BuyerDashboard() {

  const user = useAuth();

  const [loading, setLoading] = useState(true);
  const [properties, setProperty] = useState([]);
  const [savedProperties, setSavedProperties] = useState([]);
  const [inquiries, setInquiries] = useState([]);



  useEffect(() => {
    getDashboardData()
  },[])

  const getDashboardData = async () => {
    try {
      //get all property
      const propertyRes = await axios.get("http://localhost:3000/api/property",
        {
          withCredentials: true,
        }
      );

      //saved property
      const savedRes = await axios.get("http://localhost:3000/api/property/save",
        {
          withCredentials: true,
        }
      );

      //get all inquiery
      const inquiryRes = await axios.get("http://localhost:3000/api/inquiry/buyer",
        {
          withCredentials: true,
        }
      );

      setProperty(propertyRes.data.properties || [])
      setSavedProperties(savedRes.data.properties || [])
      setInquiries(inquiryRes.data.inquiries || [])

    } catch (error) {
      console.log(error);
    }

    if (loading) {
      return <h2>Loading...</h2>;
    }
  }

  return (
    <div className="page-stack-8">
      <div className="page-header-row">
        <div>
          <h1 className="page-title">Welcome back,{user?.name}</h1>
          <p className="page-subtitle">Here's a summary of your property search.</p>
        </div>
        <Link
          to="/buyer/properties"
          className="btn-primary"
        >
          <Search size={16} /> Browse Properties
        </Link>
      </div>

      <div className="stats-grid-3">

        <DashboardCard
        label="Recently Viewed"
        value={properties.length}
        icon={Eye} 
        tone='brand'/>

        <DashboardCard
        label="Saved Properties"
        value={savedProperties.length}
        icon={Heart} 
        tone='gold'/>

        <DashboardCard
        label="My Inquiries"
        value={inquiries.length}
        icon={MessageSquare} 
        tone='success'/>

      </div>

      <div>
        <div className="buyer-dashboard-section-header">
          <h2 className="buyer-dashboard-section-title">Recently Viewed</h2>
          <Link to="/buyer/properties" className="buyer-dashboard-view-link">Browse more</Link>
        </div>

        {
          properties.length === 0 ? (
            <EmptyState
              title="No Properties Found"
              message="No Property Available"
            />
          ) : (
            <>
              <div className="property-grid-responsive">
                {
                  properties.slice(0, 3).map((property) => (
                    <PropertyCard property={property} />
                  ))
                }
              </div>
            </>
          )
        }
      </div>

    </div>
  )
}
