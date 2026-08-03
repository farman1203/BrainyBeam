import React, { useEffect, useMemo, useState } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'
import axios from 'axios'
import PropertyCard from '../../components/common/PropertyCard'
import Pagination from '../../components/common/Pagination'
import LoadingSkeleton from '../../components/common/LoadingSkeleton'
import EmptyState from '../../components/common/EmptyState'
import './BrowseProperties.css'

export default function BrowseProperties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const pageSize = 6;

  const paged = properties.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  useEffect(() => {
    getProperties();
  }, []);

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
                    key={property._id}
                    property={property}
                    detailsPath="/buyer/properties"
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
