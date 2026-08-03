import React from 'react'
import PropertyForm from './PropertyForm'
import './AddProperty.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export default function AddProperty() {

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const res = await axios.post("http://localhost:3000/api/property", values,
        {
          withCredentials: true,
        }
      );
      toast.success(res.data.message);
      navigate("/agent/properties");
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="add-property-page">
      <div className="add-property-header">
        <h1 className="page-title">Add Property</h1>
        <p className="page-subtitle">Fill in the details to list a new property.</p>
      </div>
      <PropertyForm onSubmit={handleSubmit} submitLabel="Publish Property" />
    </div>
  )
}
