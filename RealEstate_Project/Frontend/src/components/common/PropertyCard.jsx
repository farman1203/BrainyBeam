import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, BedDouble, Ruler, Home, Heart, Scale } from 'lucide-react'
import './PropertyCard.css'


export default function PropertyCard({ property, detailsPath = '/buyer/properties', onSave, onCompare, saved = false }) {
  const { id, title, city, locality, price, bhk, area, type, agent, image } = property

  return (
    <div className="property-card">
      <div className="property-card-image-wrap">
        <img
          src={image}
          alt={title}
          className="property-card-image"
        />
        <span className="property-card-type-badge">
          {type}
        </span>
        <div className="property-card-actions">
          {onSave && (
            <button
              onClick={() => onSave(id)}
              aria-label="Save property"
              className={`property-card-icon-btn ${saved ? 'property-card-icon-btn--saved' : ''}`}
            >
              <Heart size={16} fill={saved ? 'currentColor' : 'none'} />
            </button>
          )}
          {onCompare && (
            <button
              onClick={() => onCompare(id)}
              aria-label="Add to compare"
              className="property-card-icon-btn"
            >
              <Scale size={16} />
            </button>
          )}
        </div>
      </div>

      <div className="property-card-body">
        <div>
          <h3 className="property-card-title line-clamp-2">{title}</h3>
          <p className="property-card-location">
            <MapPin size={14} /> {locality}, {city}
          </p>
        </div>

        <div className="property-card-facts">
          {bhk > 0 && (
            <span className="property-card-fact">
              <BedDouble size={15} /> {bhk} BHK
            </span>
          )}
          <span className="property-card-fact">
            <Ruler size={15} /> {area} sqft
          </span>
          <span className="property-card-fact">
            <Home size={15} /> {type}
          </span>
        </div>

        <div className="property-card-footer">
          <div>
            <p className="property-card-price">{formatPrice(price)}</p>
            <p className="property-card-agent">Agent: {agent}</p>
          </div>
          <Link
            to={`${detailsPath}/${id}`}
            className="property-card-details-link"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}
