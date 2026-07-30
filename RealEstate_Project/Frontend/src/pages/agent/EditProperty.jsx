import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import PropertyForm from './PropertyForm'
import EmptyState from '../../components/common/EmptyState'
import axios from "axios";
import { useEffect, useState } from "react";
import './EditProperty.css'
import { toast } from 'react-toastify'

export default function EditProperty() {

  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    getProperty();
  }, []);

  const getProperty = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/property/${id}`,
        {
          withCredentials: true
        }
      );
      setProperty(res.data.property);
    }
    catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = async (values) => {
    try {
      await axios.put(`http://localhost:3000/api/property/${id}`, values,
        {
          withCredentials: true
        }
      );
      toast.success("Property Updated");
    }
    catch (err) {
      toast.error(err.response.data.message);
    }
  }

  if (!property) {
    return <EmptyState title="Property not found" message="This property may have been removed." />
  }

  return (
    <div className="edit-property-page">
      <Link to="/agent/properties" className="edit-property-back-link">
        <ArrowLeft size={15} /> Back to My Properties
      </Link>
      <div className="edit-property-header">
        <h1 className="page-title">Edit Property</h1>
        <p className="page-subtitle">Update the details for "{property.title}".</p>
      </div>
      <PropertyForm initialData={property} onSubmit={handleSubmit} submitLabel="Save Changes" />
    </div>
  )
}
