import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, MessageSquare, Scale, CheckCircle2 } from 'lucide-react'
import PropertyDetailsView from '../../components/common/PropertyDetailsView'
import EmptyState from '../../components/common/EmptyState'
import { properties } from '../../data/dummyData'
import './PropertyDetails.css'

export default function BuyerPropertyDetails() {
  const { id } = useParams()
  const property = properties.find((p) => p.id === id)
  const [inquired, setInquired] = useState(false)

  if (!property) {
    return <EmptyState title="Property not found" message="This listing may have been removed." />
  }

  return (
    <div>
      <Link to="/buyer/properties" className="buyer-property-details-back-link">
        <ArrowLeft size={15} /> Back to Listings
      </Link>

      <PropertyDetailsView
        property={property}
        actions={
          <>
            <button
              onClick={() => setInquired(true)}
              disabled={inquired}
              className="btn-primary buyer-property-inquiry-btn"
            >
              {inquired ? <><CheckCircle2 size={16} /> Inquiry Sent</> : <><MessageSquare size={16} /> Send Inquiry</>}
            </button>
            <Link
              to="/buyer/compare"
              className="btn-secondary buyer-property-compare-link"
            >
              <Scale size={16} /> Add to Compare
            </Link>
          </>
        }
      />
    </div>
  )
}
