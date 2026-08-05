import React, { useEffect, useMemo, useState } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'
import axios from 'axios'
import PropertyCard from '../../components/common/PropertyCard'
import Pagination from '../../components/common/Pagination'
import LoadingSkeleton from '../../components/common/LoadingSkeleton'
import EmptyState from '../../components/common/EmptyState'
import './BrowseProperties.css'
import { toast } from 'react-toastify'

export default function BrowseProperties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savedIds, setSavedIds] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const paged = properties.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  useEffect(() => {
    getProperties();
    getSavedIds();
  }, []);

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
    setSavedIds(
      res.data.properties.map(item => item._id)
    );
  }

  const getProperties = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/property",
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
              totalPages={Math.ceil(properties.length / pageSize)}
              onChange={setPage}
            />
          </>
        )
      }
    </div>
  )
}
