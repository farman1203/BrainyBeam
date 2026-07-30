import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Pencil, Eye, Trash2 } from 'lucide-react'
import SearchBar from '../../components/common/SearchBar'
import EmptyState from '../../components/common/EmptyState'
import Pagination from '../../components/common/Pagination'
import './MyProperties.css'
import axios from 'axios'
import { useAuth } from '../../context/AuthContext'

export default function MyProperties() {

  const { user } = useAuth()
  const [properties, setProperties] = useState([]);
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const pageSize = 4
  const myProperties = properties.filter((p) => p.agent === user._id)
  const filtered = myProperties.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize)


  useEffect(() => {
    getProperties();
  }, []);

  const getProperties = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/property",
        {
          withCredentials: true
        }
      );
      setProperties(res.data.properties);
      console.log(res.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  const deleteProperty = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/property/${id}`,
        {
          withCredentials: true
        }
      );
      getProperties();
    }
    catch (err) {
      alert(err.response.data.message);
    }
  }

  return (
    <div className="page-stack-6">
      <div className="page-header-row">
        <div>
          <h1 className="page-title">My Properties</h1>
          <p className="page-subtitle">Manage listings you've published.</p>
        </div>
        <Link
          to="/agent/properties/add"
          className="btn-primary"
        >
          <Plus size={16} /> Add Property
        </Link>
      </div>

      <div className="my-properties-search-wrap">
        <SearchBar value={query} onChange={(v) => { setQuery(v); setPage(1) }} placeholder="Search your properties..." />
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          title="No properties yet"
          message="Get started by adding your first property listing."
          action={
            <Link to="/agent/properties/add" className="btn-primary" style={{ display: 'inline-flex' }}>
              Add Property
            </Link>
          }
        />
      ) : (
        <div className="my-properties-grid">
          {paged.map((p) => (
            <div key={p._id} className="my-properties-card">
              <img src={p.image} alt={p.title} className="my-properties-card-image" />
              <div className="my-properties-card-body">
                <span className="my-properties-status-badge">{p.status}</span>
                <h3 className="my-properties-card-title">{p.title}</h3>
                <p className="my-properties-card-location">{p.locality}, {p.city}</p>
                <p className="my-properties-card-price">₹ {p.price.toLocaleString()}</p>

                <div className="my-properties-card-actions">
                  <Link to={`/agent/properties/${p._id}`} className="my-properties-action-link">
                    <Eye size={13} /> View
                  </Link>
                  <Link to={`/agent/properties/edit/${p._id}`} className="my-properties-action-link">
                    <Pencil size={13} /> Edit
                  </Link>
                  <button onClick={() => deleteProperty(p._id)} className="my-properties-delete-btn">
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Pagination page={page} totalPages={Math.ceil(filtered.length / pageSize)} onChange={setPage} />
    </div>
  )
}
