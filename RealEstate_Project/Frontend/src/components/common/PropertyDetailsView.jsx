import React, { useEffect, useState } from 'react'
import { MapPin, BedDouble, Ruler, Home, Check, Phone, Mail, MapPinned } from 'lucide-react'
import './PropertyDetailsView.css'
import { useAuth } from '../../context/AuthContext'
import axios from 'axios'

export default function PropertyDetailsView({ property, actions }) {
  const [activeImage, setActiveImage] = useState(0)
  const { user } = useAuth();
  const [agent, setAgent] = useState([])

  // useEffect(() => {
  //   getagent()
  // }, [])

  // try {
  //   const getagent = async () => {
  //     const res = await axios.get('https:localhost:3000/api/admin/agent')
  //     console.log(res.data.property);
  //   }
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <div className="pdv-stack">
      {/* Gallery */}
      <div>
        <div className="pdv-gallery-main">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8B6qoFCgTR1NZRCi4aYL5AoCz4N1UsoC7plvBDT8mg&s=10"
          />
        </div>
        <div className="pdv-thumb-row">
          {property.images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActiveImage(i)}
              className={`pdv-thumb-btn ${activeImage === i ? 'pdv-thumb-btn--active' : ''}`}
            >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8B6qoFCgTR1NZRCi4aYL5AoCz4N1UsoC7plvBDT8mg&s=10" alt="" />
            </button>
          ))}
        </div>
      </div>

      <div className="pdv-grid">
        <div className="pdv-main-col">
          {/* Title + info */}
          <div className="pdv-panel">
            <div className="pdv-title-row">
              <div>
                <span className="pdv-type-badge">{property.type}</span>
                <h1 className="pdv-title">{property.title}</h1>
                <p className="pdv-location">
                  <MapPin size={15} /> {property.locality}, {property.city}
                </p>
              </div>
              <p className="pdv-price">₹ {property.price?.toLocaleString()}</p>
            </div>

            <div className="pdv-facts-row">
              {property.bhk > 0 && (
                <span className="pdv-fact"><BedDouble size={18} className="pdv-fact-icon" /> {property.bhk} BHK</span>
              )}
              <span className="pdv-fact"><Ruler size={18} className="pdv-fact-icon" /> {property.area} sqft</span>
              <span className="pdv-fact"><Home size={18} className="pdv-fact-icon" /> {property.type}</span>
            </div>

            <div className="pdv-desc-block">
              <h3 className="pdv-block-heading">Description</h3>
              <p className="pdv-desc-text">{property.description}</p>
            </div>
          </div>

          {/* Amenities */}
          <div className="pdv-panel">
            <h3 className="pdv-block-heading" style={{ marginBottom: '1rem' }}>Amenities</h3>
            <div className="pdv-amenities-grid">
              {property.amenities?.map((a) => (
                <span key={a} className="pdv-amenity">
                  <Check size={15} className="pdv-amenity-icon" /> {a}
                </span>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="pdv-panel">
            <h3 className="pdv-block-heading" style={{ marginBottom: '1rem' }}>Location</h3>
            <div className="pdv-map-placeholder">
              <MapPinned size={28} className="pdv-map-icon" />
              <p className="pdv-map-text">Google Map placeholder</p>
              <p className="pdv-map-coords">Lat: {property.location?.lat} Lng: {property.location?.lng}</p>
            </div>
          </div>
        </div>

        {/* Sidebar: Agent + Actions */}
        <div className="pdv-side-col">
          <div className="pdv-panel">
            <h3 className="pdv-block-heading" style={{ marginBottom: '1rem' }}>Listed By</h3>
            <div className="pdv-agent-row">
              <div className="pdv-agent-avatar">
                {property.agent?.name?.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="pdv-agent-name">{property.agent?.name}</p>
                <p className="pdv-agent-role">Real Estate Agent</p>
              </div>
            </div>
            <div className="pdv-agent-contact">
              <p><Phone size={14} />{property.agent?.phone}</p>
              <p><Mail size={14} /> {property.agent?.email}</p>
            </div>
          </div>

          {actions && (
            <div className="pdv-panel pdv-actions-panel">
              {actions}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
