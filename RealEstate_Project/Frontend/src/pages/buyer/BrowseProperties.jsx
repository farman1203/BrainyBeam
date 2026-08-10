import React, { useEffect, useMemo, useState } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'
import axios from 'axios'
import PropertyCard from '../../components/common/PropertyCard'
import Pagination from '../../components/common/Pagination'
import LoadingSkeleton from '../../components/common/LoadingSkeleton'
import FilterSidebar from '../../components/common/FilterSidebar'
import EmptyState from '../../components/common/EmptyState'
import '../buyer/style/BrowseProperties.css'
import { toast } from 'react-toastify'
import SearchBar from '../../components/common/SearchBar'
import { useAuth } from '../../context/AuthContext'

export default function BrowseProperties() {
  const user = useAuth();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savedIds, setSavedIds] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 6;
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState({
    city: "",
    type: "",
    bhk: "",
    maxPrice: 25000000,
  });

  const filtered = properties.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.city.toLowerCase().includes(query.toLowerCase()) ||
      p.locality.toLowerCase().includes(query.toLowerCase());

    const matchesCity = !filters.city || p.city === filters.city;

    const matchesType = !filters.type || p.type === filters.type;

    const matchesBhk = !filters.bhk || Number(p.bhk) === Number(filters.bhk);

    const matchesPrice = p.price <= filters.maxPrice;

    return (
      matchesSearch &&
      matchesCity &&
      matchesType &&
      matchesBhk &&
      matchesPrice
    );
  });

  const paged = filtered.slice((page - 1) * pageSize, page * pageSize)
  const cities = [...new Set(properties.map((p) => p.city))];
  const pageess = properties.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
    getProperties();
    getSavedIds();
  }, []);

  const resetFilters = () => {
    setFilters({
      city: "",
      type: "",
      bhk: "",
      maxPrice: 25000000,
    });
  };

  const toggleSave = async (id) => {
    const res = await axios.post(`http://localhost:3000/api/property/save/${id}`, {},
      {
        withCredentials: true
      }
    );
    if (res.data.saved) {
      setSavedIds(prev => [...prev, id]);
      toast.success("Propery Saved")
    } else {
      setSavedIds(prev => prev.filter(x => x !== id));
      toast.info("Propery Removed")
    }
  }

  const getSavedIds = async () => {
    const res = await axios.get("http://localhost:3000/api/property/save",
      {
        withCredentials: true
      }
    );
    setSavedIds(res.data.properties.map(item => item._id));
  }

  const getProperties = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/property",
        {
          withCredentials: true,
        }
      );
      setProperties(res.data.properties);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-stack-6">
      <div>
        <h1 className="page-title">Browse Properties</h1>
        <p className="page-subtitle">
          Total {properties.length} Properties
        </p>
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
          <FilterSidebar filters={filters} setFilters={setFilters} onReset={resetFilters} cities={cities} />
        </div>

        {/* {/* Mobile filter drawer */}
        {
          loading ? (
            <LoadingSkeleton count={6} />
          ) : properties.length === 0 ? (
            <EmptyState
              title="No Properties Found"
              message="No Property Available"
            />
          ) : (
            <>
              <div className="property-grid-responsive">
                {
                  paged.map((property) => (
                    <PropertyCard
                      property={property}
                      onSave={toggleSave}
                      saved={savedIds.includes(property._id)}
                    />
                  ))
                }
              </div>
              <Pagination
                page={page}
                totalPages={Math.ceil(filtered.length / pageSize)}
                onChange={setPage}
              />
            </>
          )
        }
      </div>
    </div >
  )
}
