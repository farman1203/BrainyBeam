import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, BedDouble, Ruler, Home, Heart, Scale } from 'lucide-react'
import '../common/style/PropertyCard.css'


export default function PropertyCard({ property, detailsPath = '/buyer/properties', onSave, onCompare, saved = false }) {
  const { _id, title, name, city, locality, price, bhk, area, type, agent, image } = property

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `₹ ${(price / 10000000).toFixed(2)} Cr`;
    }
    if (price >= 100000) {
      return `₹ ${(price / 100000).toFixed(2)} L`;
    }
    if (price >= 1000) {
      return `₹ ${(price / 1000).toFixed(1)} K`;
    }
    return `₹ ${price}`;
  }

  return (
    <div className="property-card">
      <div className="property-card-image-wrap">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8B6qoFCgTR1NZRCi4aYL5AoCz4N1UsoC7plvBDT8mg&s=10"
          alt={title}
          className="property-card-image"
        />
        <span className="property-card-type-badge">
          {type}
        </span>
        <div className="property-card-actions">
          <button
            onClick={() => onSave?.(_id)}
            className={`property-card-icon-btn ${saved ? "property-card-icon-btn--saved" : ""
              }`}
          >
            <Heart
              size={16}
              fill={saved ? "currentColor" : "none"}
            />
          </button>

          {/* <button
            onClick={() => onCompare?.(_id)}
            className="property-card-icon-btn"
          >
            <Scale size={16} />
          </button> */}

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
            <p className="property-card-price">
              {formatPrice(price)}
            </p>
            <p className="property-card-agent">Agent: {property.agent?.name}</p>
          </div>
          <Link
            to={`${detailsPath}/${_id}`}
            className="property-card-details-link"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}
