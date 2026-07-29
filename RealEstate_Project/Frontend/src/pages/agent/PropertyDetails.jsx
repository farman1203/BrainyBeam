import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Pencil, Users } from 'lucide-react'
import PropertyDetailsView from '../../components/common/PropertyDetailsView'
import EmptyState from '../../components/common/EmptyState'
import { properties } from '../../data/dummyData'
import './PropertyDetails.css'

export default function AgentPropertyDetails() {
  const { id } = useParams()
  const property = properties.find((p) => p.id === id)

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
              to={`/agent/properties/edit/${property.id}`}
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
