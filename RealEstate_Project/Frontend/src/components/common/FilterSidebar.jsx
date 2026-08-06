import React from 'react'
import { SlidersHorizontal, RotateCcw } from 'lucide-react'
import '../common/style/FilterSidebar.css'

export default function FilterSidebar({ filters, setFilters, onReset, cities }) {
  const update = (key, value) => setFilters((prev) => ({ ...prev, [key]: value }))
  const propertyTypes = [
    "flat",
    "villa",
    "plot",
  ];

  return (
    <aside className="filter-sidebar">
      <div className="filter-sidebar-header">
        <h3 className="filter-sidebar-title">
          <SlidersHorizontal size={17} /> Filters
        </h3>
        <button onClick={onReset} className="filter-sidebar-reset">
          <RotateCcw size={13} /> Reset
        </button>
      </div>

      <div className="filter-sidebar-sections">
        <div>
          <label className="form-field-label">City</label>
          <select
            value={filters.city}
            onChange={(e) => update('city', e.target.value)}
            className="filter-sidebar-select"
          >
            <option value="">All Cities</option>
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-field-label">Property Type</label>
          <select
            value={filters.type}
            onChange={(e) => update('type', e.target.value)}
            className="filter-sidebar-select"
          >
            <option value="">All Types</option>
            {propertyTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-field-label">BHK</label>
          <div className="filter-sidebar-bhk-row">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                onClick={() => update('bhk', filters.bhk === n ? '' : n)}
                className={`filter-sidebar-bhk-btn ${filters.bhk === n ? 'filter-sidebar-bhk-btn--active' : ''}`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="form-field-label">
            Max Price: ₹{(filters.maxPrice / 100000).toFixed(0)}L
          </label>
          <input
            type="range"
            min="1000000"
            max="25000000"
            step="500000"
            value={filters.maxPrice}
            onChange={(e) => update('maxPrice', Number(e.target.value))}
            className="filter-sidebar-range"
          />
        </div>
      </div>
    </aside>
  )
}
