import React, { useState } from 'react'
import { UploadCloud, Save, X } from 'lucide-react'
import '../agent/style/PropertyForm.css'


export default function PropertyForm({ initialData = {}, onSubmit, submitLabel = 'Submit' }) {
  const propertyTypes = [
    "flat",
    "villa",
    "plot",
    "Apartment",
    "Bungalow",
    "commercial"
  ];
  const cities = [
    "Ahmedabad",
    "Surat",
    "Rajkot",
    "Vadodara",
    "Nadiad",
    "Gandhinagar",
    "Mumbai"
  ];
  const amenitiesList = [
    "Parking",
    "Lift",
    "Garden",
    "Gym",
    "Swimming Pool",
    "wide road",
    "Club House",
    "Security",
  ];
  const [form, setForm] = useState({
    title: initialData.title || '',
    description: initialData.description || '',
    type: initialData.type || propertyTypes[0],
    bhk: initialData.bhk || 1,
    area: initialData.area || '',
    price: initialData.price || '',
    city: initialData.city || cities[0],
    locality: initialData.locality || '',
    amenities: initialData.amenities || [],
    lat: initialData.lat || '',
    lng: initialData.lng || '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const toggleAmenity = (amenity) => {
    setForm((f) => ({ ...f, amenities: f.amenities.includes(amenity) ? f.amenities.filter((a) => a !== amenity) : [...f.amenities, amenity], }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.(form)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2500)
  }

  return (
    <div>
      {submitted && (
        <div className="success-banner property-form-banner">
          Property saved successfully.
        </div>
      )}

      <form onSubmit={handleSubmit} className="property-form">
        {/* Basic Info */}
        <div className="property-form-section">
          <h3 className="property-form-section-title">Basic Information</h3>

          <div>
            <label className="form-field-label">Title</label>
            <input
              name="title" required value={form.title} onChange={handleChange}
              placeholder="e.g. Sunrise Meadows Villa"
              className="form-field-input"
            />
          </div>

          <div>
            <label className="form-field-label">Description</label>
            <textarea
              name="description" rows={4} required value={form.description} onChange={handleChange}
              placeholder="Describe the property..."
              className="form-field-input resize-none"
            />
          </div>

          <div className="property-form-grid-3">
            <div>
              <label className="form-field-label">Property Type</label>
              <select name="type" value={form.type} onChange={handleChange} className="form-field-input">
                {propertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="form-field-label">BHK</label>
              <input
                type="number" min="0" name="bhk" value={form.bhk} onChange={handleChange}
                className="form-field-input"
              />
            </div>
            <div>
              <label className="form-field-label">Area (sqft)</label>
              <input
                type="number" required name="area" value={form.area} onChange={handleChange}
                className="form-field-input"
              />
            </div>
          </div>

          <div className="property-form-grid-3">
            <div>
              <label className="form-field-label">Price (₹)</label>
              <input
                type="number" required name="price" value={form.price} onChange={handleChange}
                className="form-field-input"
              />
            </div>
            <div>
              <label className="form-field-label">City</label>
              <select name="city" value={form.city} onChange={handleChange} className="form-field-input">
                {cities.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="form-field-label">Locality</label>
              <input
                name="locality" required value={form.locality} onChange={handleChange}
                className="form-field-input"
              />
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div>
          <h3 className="property-form-section-title" style={{ marginBottom: '0.75rem' }}>Amenities</h3>
          <div className="property-form-amenities-grid">
            {amenitiesList.map((a) => (
              <label key={a} className="property-form-amenity-label">
                <input
                  type="checkbox"
                  checked={form.amenities.includes(a)}
                  onChange={() => toggleAmenity(a)}
                  className="property-form-amenity-checkbox"
                />
                {a}
              </label>
            ))}
          </div>
        </div>

        {/* Images */}
        <div>
          <h3 className="property-form-section-title" style={{ marginBottom: '0.75rem' }}>Upload Images</h3>
          <div className="property-form-upload-box">
            <UploadCloud size={28} className="property-form-upload-icon" />
            <p className="property-form-upload-text">Drag & drop images here, or click to browse</p>
            <input type="file" />
            <input type="file" multiple className="property-form-hidden-input" />
          </div>
        </div>

        {/* Location */}
        <div>
          <h3 className="property-form-section-title" style={{ marginBottom: '0.75rem' }}>Location Coordinates</h3>
          <div className="property-form-grid-2">
            <div>
              <label className="form-field-label">Latitude</label>
              <input
                name="lat" value={form.lat} onChange={handleChange} placeholder="e.g. 23.0225"
                className="form-field-input"
              />
            </div>
            <div>
              <label className="form-field-label">Longitude</label>
              <input
                name="lng" value={form.lng} onChange={handleChange} placeholder="e.g. 72.4693"
                className="form-field-input"
              />
            </div>
          </div>
        </div>

        <div className="property-form-actions">
          <button
            type="submit"
            className="btn-primary"
          >
            <Save size={16} /> {submitLabel}
          </button>
          <button
            type="button"
            className="btn-secondary"
          >
            <X size={16} /> Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
