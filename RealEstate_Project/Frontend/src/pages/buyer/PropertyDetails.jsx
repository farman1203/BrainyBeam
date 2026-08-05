import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, MessageSquare, Scale, CheckCircle2 } from 'lucide-react'
import PropertyDetailsView from '../../components/common/PropertyDetailsView'
import EmptyState from '../../components/common/EmptyState'
import './PropertyDetails.css'
import axios from 'axios'

export default function BuyerPropertyDetails() {
  const { id } = useParams()
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inquired, setInquired] = useState(false);

  useEffect(() => {
    getProperty()
  }, [])

  const getProperty = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/property/${id}`,
        {
          withCredentials: true,
        }
      );
      setProperty(res.data.property)
    } catch (error) {
      console.log(error);
    }
  }

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
