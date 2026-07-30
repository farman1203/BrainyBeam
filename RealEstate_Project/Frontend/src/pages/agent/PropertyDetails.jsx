import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Pencil, Users } from 'lucide-react'
import PropertyDetailsView from '../../components/common/PropertyDetailsView'
import EmptyState from '../../components/common/EmptyState'
import './PropertyDetails.css'
import axios from 'axios'

export default function AgentPropertyDetails() {
  const { id } = useParams()
  const [property, setProperty] = useState(null);

  useEffect(() => {
    getProperty()
  }, [])

  const getProperty = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/property/${id}`,
        {
          withCredentials: true,
        }
      )
      setProperty(res.data.property);
    } catch (error) {
      console.log(error);
    }
  }

  if (!property) {
    return <EmptyState title="Property not found" message="This listing may have been removed." />
  }

  return (
    <div>
      <Link to="/agent/properties" className="agent-property-details-back-link">
        <ArrowLeft size={15} /> Back to My Properties
      </Link>

      <PropertyDetailsView
        property={property}
        actions={
          <>
            <Link
              to={`/agent/properties/edit/${property._id}`}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              <Pencil size={16} /> Edit Property
            </Link>
            <Link
              to="/agent/leads"
              className="btn-secondary"
              style={{ width: '100%' }}
            >
              <Users size={16} /> View Leads
            </Link>
          </>
        }
      />
    </div>
  )
}
