import React, { useState } from 'react'
import { Scale, Plus } from 'lucide-react'
import ComparisonTable from '../../components/common/ComparisonTable'
import EmptyState from '../../components/common/EmptyState'
import { properties } from '../../data/dummyData'
import './CompareProperties.css'

export default function CompareProperties() {
  const [compareIds, setCompareIds] = useState(['p1', 'p2', 'p4'])
  const items = properties.filter((p) => compareIds.includes(p.id))
  const remaining = properties.filter((p) => !compareIds.includes(p.id))

  const removeItem = (id) => setCompareIds((prev) => prev.filter((i) => i !== id))
  const addItem = (id) => {
    if (compareIds.length >= 4) return
    setCompareIds((prev) => [...prev, id])
  }

  return (
    <div className="page-stack-6">
      <div>
        <h1 className="page-title compare-page-heading">
          <Scale size={22} /> Compare Properties
        </h1>
        <p className="page-subtitle">Compare up to 4 properties side by side.</p>
      </div>

      {items.length === 0 ? (
        <EmptyState title="No properties to compare" message="Add properties from the listing page to compare them here." />
      ) : (
        <ComparisonTable items={items} onRemove={removeItem} />
      )}

      {remaining.length > 0 && compareIds.length < 4 && (
        <div>
          <h3 className="compare-add-heading">Add another property</h3>
          <div className="compare-add-row">
            {remaining.map((p) => (
              <button
                key={p.id}
                onClick={() => addItem(p.id)}
                className="compare-add-btn"
              >
                <Plus size={14} /> {p.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
