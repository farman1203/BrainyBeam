import React, { useState } from "react";
import { UploadCloud, Save, X } from "lucide-react";
import "../agent/style/PropertyForm.css";

export default function PropertyForm({ initialData, onSubmit, submitLabel = "Submit", }) {

  const data = initialData || {};
  const propertyTypes = [
    "flat",
    "villa",
    "plot",
    "Apartment",
    "Bungalow",
    "commercial",
  ];

  const cities = [
    "Ahmedabad",
    "Surat",
    "Rajkot",
    "Vadodara",
    "Nadiad",
    "Gandhinagar",
    "Mumbai",
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

  const [existingImages, setExistingImages] = useState(
    data.images || []
  );

  const [images, setImages] = useState([]);

  const [form, setForm] = useState({
    title: data.title || "",
    description: data.description || "",
    type: data.type || propertyTypes[0],
    bhk: data.bhk || 1,
    area: data.area || "",
    price: data.price || "",
    city: data.city || cities[0],
    locality: data.locality || "",
    amenities: data.amenities || [],
    lat: data.location?.lat || "",
    lng: data.location?.lng || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleAmenity = (amenity) => {
    setForm((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const removeExistingImage = (publicId) => {
    setExistingImages((prev) =>
      prev.filter(
        (image) => image.public_id !== publicId
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("type", form.type);
    formData.append("bhk", form.bhk);
    formData.append("area", form.area);
    formData.append("price", form.price);
    formData.append("city", form.city);
    formData.append("locality", form.locality);
    formData.append("lat", form.lat);
    formData.append("lng", form.lng);

    formData.append(
      "amenities",
      JSON.stringify(form.amenities)
    );

    formData.append(
      "existingImages",
      JSON.stringify(existingImages)
    );

    images.forEach((image) => {
      formData.append("images", image);
    });

    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="property-form"
    >
      {/* BASIC INFORMATION */}
      <div className="property-form-section">
        <h3 className="property-form-section-title">
          Basic Information
        </h3>

        <div>
          <label className="form-field-label">
            Title
          </label>

          <input
            name="title"
            required
            value={form.title}
            onChange={handleChange}
            placeholder="e.g. Sunrise Meadows Villa"
            className="form-field-input"
          />
        </div>

        <div>
          <label className="form-field-label">
            Description
          </label>

          <textarea
            name="description"
            rows={4}
            required
            value={form.description}
            onChange={handleChange}
            placeholder="Describe the property..."
            className="form-field-input resize-none"
          />
        </div>

        <div className="property-form-grid-3">
          <div>
            <label className="form-field-label">
              Property Type
            </label>

            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="form-field-input"
            >
              {propertyTypes.map((type) => (
                <option
                  key={type}
                  value={type}
                >
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="form-field-label">
              BHK
            </label>

            <input
              type="number"
              min="0"
              name="bhk"
              value={form.bhk}
              onChange={handleChange}
              className="form-field-input"
            />
          </div>

          <div>
            <label className="form-field-label">
              Area
            </label>

            <input
              type="number"
              required
              name="area"
              value={form.area}
              onChange={handleChange}
              className="form-field-input"
            />
          </div>
        </div>

        <div className="property-form-grid-3">
          <div>
            <label className="form-field-label">
              Price
            </label>

            <input
              type="number"
              required
              name="price"
              value={form.price}
              onChange={handleChange}
              className="form-field-input"
            />
          </div>

          <div>
            <label className="form-field-label">
              City
            </label>

            <select
              name="city"
              value={form.city}
              onChange={handleChange}
              className="form-field-input"
            >
              {cities.map((city) => (
                <option
                  key={city}
                  value={city}
                >
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="form-field-label">
              Locality
            </label>

            <input
              name="locality"
              required
              value={form.locality}
              onChange={handleChange}
              className="form-field-input"
            />
          </div>
        </div>
      </div>

      {/* AMENITIES */}

      <div>
        <h3 className="property-form-section-title">
          Amenities
        </h3>

        <div className="property-form-amenities-grid">
          {amenitiesList.map((amenity) => (
            <label
              key={amenity}
              className="property-form-amenity-label"
            >
              <input
                type="checkbox"
                checked={form.amenities.includes(
                  amenity
                )}
                onChange={() =>
                  toggleAmenity(amenity)
                }
                className="property-form-amenity-checkbox"
              />

              {amenity}
            </label>
          ))}
        </div>
      </div>

      {/* EXISTING IMAGES */}
      {existingImages.length > 0 && (
        <div>
          <h3 className="property-form-section-title">
            Existing Images
          </h3>
          <div className="existing-images-grid">
            {existingImages.map((image) => (
              <div
                className="existing-image-card"
                key={image.public_id}
              >
                <img
                  src={image.url}
                  alt="Property"
                />
                <button
                  type="button"
                  onClick={() =>
                    removeExistingImage(
                      image.public_id
                    )
                  }
                  className="remove-image-btn"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* NEW IMAGES */}
      <div>
        <h3 className="property-form-section-title">
          Upload New Images
        </h3>
        <div className="property-form-upload-box">
          <UploadCloud
            size={28}
            className="property-form-upload-icon"
          />
          <p className="property-form-upload-text">
            Select new property images
          </p>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
      </div>

      {/* LOCATION */}
      <div>
        <h3 className="property-form-section-title">
          Location Coordinates
        </h3>
        <div className="property-form-grid-2">
          <div>
            <label className="form-field-label">
              Latitude
            </label>
            <input
              name="lat"
              value={form.lat}
              onChange={handleChange}
              className="form-field-input"
            />
          </div>
          <div>
            <label className="form-field-label">
              Longitude
            </label>
            <input
              name="lng"
              value={form.lng}
              onChange={handleChange}
              className="form-field-input"
            />
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="property-form-actions">
        <button
          type="submit"
          className="btn-primary"
        >
          <Save size={16} />
          {submitLabel}
        </button>
      </div>
    </form>
  );
}