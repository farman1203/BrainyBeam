import React from 'react'
import PropertyForm from './PropertyForm'
import './AddProperty.css'

export default function AddProperty() {
  const handleSubmit = (values) => {
    console.log('New property submitted (demo):', values)
  }

  return (
    <div className="add-property-page">
      <div className="add-property-header">
        <h1 className="page-title">Add Property</h1>
        <p className="page-subtitle">Fill in the details to list a new property.</p>
      </div>
      <PropertyForm onSubmit={handleSubmit} submitLabel="Publish Property" />
    </div>
  )
}
