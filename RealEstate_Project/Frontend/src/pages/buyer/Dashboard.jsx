import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, Heart, MessageSquare, Search } from 'lucide-react'
import DashboardCard from '../../components/common/DashboardCard'
import PropertyCard from '../../components/common/PropertyCard'
import EmptyState from '../../components/common/EmptyState'
import './Dashboard.css'
import axios from 'axios'
import { useAuth } from '../../context/AuthContext'

export default function BuyerDashboard() {

  const user = useAuth();
  const [prop, setProp] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProperties()
  })

  const getProperties = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/property",
        {
          withCredentials: true,
        }
      );
      setProp(res.data.properties)
    } catch (error) {
      console.log(error);
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

        <DashboardCard />

      </div>

      <div>
        <div className="buyer-dashboard-section-header">
          <h2 className="buyer-dashboard-section-title">Recently Viewed</h2>
          <Link to="/buyer/properties" className="buyer-dashboard-view-link">Browse more</Link>
        </div>

        {
          prop.length === 0 ? (
            <EmptyState
              title="No Properties Found"
              message="No Property Available"
            />
          ) : (
            <>
              <div className="property-grid-responsive">
                {
                  prop.slice(0, 3).map((property) => (
                    <PropertyCard property={property} />
                  ))
                }
              </div>
            </>
          )
        }


      </div>



      {/* <div>
        <div className="buyer-dashboard-section-header">
          <h2 className="buyer-dashboard-section-title">Saved Properties</h2>
          <Link to="/buyer/saved" className="buyer-dashboard-view-link">View all</Link>
        </div>
        
          <EmptyState icon={Heart} title="No saved properties" message="Tap the heart icon on any listing to save it here." />
     
          <div className="property-grid-responsive">
            
              <PropertyCard key="" property="" detailsPath="/buyer/properties" />
          
          </div>
      
      </div> */}
    </div>
  )
}
