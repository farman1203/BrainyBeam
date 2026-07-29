import React, { useMemo, useState } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'
import SearchBar from '../../components/common/SearchBar'
import FilterSidebar from '../../components/common/FilterSidebar'
import PropertyCard from '../../components/common/PropertyCard'
import Pagination from '../../components/common/Pagination'
import EmptyState from '../../components/common/EmptyState'
import LoadingSkeleton from '../../components/common/LoadingSkeleton'
import { properties, savedPropertyIds as initialSaved } from '../../data/dummyData'
import './BrowseProperties.css'

export default function BrowseProperties() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [savedIds, setSavedIds] = useState(initialSaved)
  const [loading] = useState(false)
  const [filters, setFilters] = useState({ city: '', type: '', bhk: '', maxPrice: 25000000 })
  const pageSize = 6

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const matchesQuery =
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.city.toLowerCase().includes(query.toLowerCase()) ||
        p.locality.toLowerCase().includes(query.toLowerCase())
      const matchesCity = !filters.city || p.city === filters.city
      const matchesType = !filters.type || p.type === filters.type
      const matchesBhk = !filters.bhk || p.bhk === filters.bhk
      const matchesPrice = p.price <= filters.maxPrice
      return matchesQuery && matchesCity && matchesType && matchesBhk && matchesPrice
    })
  }, [query, filters])

  const paged = filtered.slice((page - 1) * pageSize, page * pageSize)

  const toggleSave = (id) => {
    setSavedIds((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
  }

  const resetFilters = () => setFilters({ city: '', type: '', bhk: '', maxPrice: 25000000 })

  return (
    <div className="page-stack-6">
      <div>
        <h1 className="page-title">Browse Properties</h1>
        <p className="page-subtitle">Explore {properties.length} listings across Gujarat.</p>
      </div>

      <div className="browse-search-row">
        <SearchBar value={query} onChange={(v) => { setQuery(v); setPage(1) }} />
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="browse-filter-toggle-btn"
        >
          <SlidersHorizontal size={16} /> Filters
        </button>
      </div>

      <div className="browse-layout-grid">
        <div className="browse-sidebar-desktop">
          <FilterSidebar filters={filters} setFilters={setFilters} onReset={resetFilters} />
        </div>

        {/* Mobile filter drawer */}
        {mobileFiltersOpen && (
          <div className="browse-mobile-drawer">
            <div className="browse-mobile-drawer-overlay" onClick={() => setMobileFiltersOpen(false)} />
            <div className="browse-mobile-drawer-panel">
              <div className="browse-mobile-drawer-close-row">
                <button onClick={() => setMobileFiltersOpen(false)} className="browse-mobile-drawer-close-btn">
                  <X size={20} />
                </button>
              </div>
              <FilterSidebar filters={filters} setFilters={setFilters} onReset={resetFilters} />
            </div>
          </div>
        )}

        <div>
          {loading ? (
            <LoadingSkeleton count={6} />
          ) : filtered.length === 0 ? (
            <EmptyState title="No properties match your filters" message="Try adjusting your search or filters." action={
              <button onClick={resetFilters} className="browse-reset-btn">Reset Filters</button>
            } />
          ) : (
            <>
              <div className="property-grid-responsive">
                {paged.map((p) => (
                  <PropertyCard
                    key={p.id}
                    property={p}
                    detailsPath="/buyer/properties"
                    onSave={toggleSave}
                    saved={savedIds.includes(p.id)}
                  />
                ))}
              </div>
              <Pagination page={page} totalPages={Math.ceil(filtered.length / pageSize)} onChange={setPage} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
