import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import PropertyForm from './PropertyForm'
import EmptyState from '../../components/common/EmptyState'
import { properties } from '../../data/dummyData'
import './EditProperty.css'

export default function EditProperty() {
  const { id } = useParams()
  const property = properties.find((p) => p.id === id)

  const handleSubmit = (values) => {
    console.log('Property updated (demo):', values)
  }

  if (!property) {
    return <EmptyState title="Property not found" message="This property may have been removed." />
  }

  return (
    <div className="edit-property-page">
      <Link to="/agent/properties" className="edit-property-back-link">
        <ArrowLeft size={15} /> Back to My Properties
      </Link>
      <div className="edit-property-header">
        <h1 className="page-title">Edit Property</h1>
        <p className="page-subtitle">Update the details for "{property.title}".</p>
      </div>
      <PropertyForm initialData={property} onSubmit={handleSubmit} submitLabel="Save Changes" />
    </div>
  )
}
