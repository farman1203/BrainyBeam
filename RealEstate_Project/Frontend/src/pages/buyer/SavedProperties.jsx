import React, { useState } from 'react'
import { Heart } from 'lucide-react'
import PropertyCard from '../../components/common/PropertyCard'
import EmptyState from '../../components/common/EmptyState'
import { properties, savedPropertyIds } from '../../data/dummyData'
import './SavedProperties.css'

export default function SavedProperties() {
  const [savedIds, setSavedIds] = useState(savedPropertyIds)
  const saved = properties.filter((p) => savedIds.includes(p.id))

  const toggleSave = (id) => setSavedIds((prev) => prev.filter((s) => s !== id))

  return (
    <div className="page-stack-6">
      <div>
        <h1 className="page-title">Saved Properties</h1>
        <p className="page-subtitle">Properties you've bookmarked for later.</p>
      </div>

      {saved.length === 0 ? (
        <EmptyState icon={Heart} title="No saved properties" message="Tap the heart icon on any listing to save it here." />
      ) : (
        <div className="property-grid-responsive">
          {saved.map((p) => (
            <PropertyCard key={p.id} property={p} detailsPath="/buyer/properties" onSave={toggleSave} saved />
          ))}
        </div>
      )}
    </div>
  )
}
