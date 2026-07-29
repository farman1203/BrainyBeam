import React from 'react'
import { X } from 'lucide-react'
import { formatPrice } from '../../data/dummyData'
import './ComparisonTable.css'

/**
 * Renders a comparison table for a list of properties.
 * Props:
 *  - items: array of property objects
 *  - onRemove: callback(id) to remove a property from comparison
 */
export default function ComparisonTable({ items, onRemove }) {
  const rows = [
    { label: 'Price', render: (p) => formatPrice(p.price) },
    { label: 'City', render: (p) => p.city },
    { label: 'Locality', render: (p) => p.locality },
    { label: 'BHK', render: (p) => (p.bhk > 0 ? p.bhk : 'N/A') },
    { label: 'Area (sqft)', render: (p) => p.area },
    { label: 'Type', render: (p) => p.type },
    { label: 'Agent', render: (p) => p.agent },
    { label: 'Amenities', render: (p) => p.amenities.join(', ') },
  ]

  return (
    <div className="comparison-table-wrap">
      <table className="comparison-table">
        <thead>
          <tr>
            <th className="comparison-table-property-header">Property</th>
            {items.map((p) => (
              <th key={p.id} className="comparison-table-col-header">
                <div className="comparison-table-col-inner">
                  <button
                    onClick={() => onRemove(p.id)}
                    className="comparison-table-remove-btn"
                    aria-label="Remove from comparison"
                  >
                    <X size={12} />
                  </button>
                  <img src={p.image} alt={p.title} className="comparison-table-image" />
                  <p className="comparison-table-title">{p.title}</p>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? 'comparison-table-row-alt' : ''}>
              <td className="comparison-table-row-label">{row.label}</td>
              {items.map((p) => (
                <td key={p.id} className="comparison-table-cell">{row.render(p)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
