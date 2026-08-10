import React, { useEffect, useState } from "react";
import axios from "axios";

import { Heart } from "lucide-react";

import PropertyCard from "../../components/common/PropertyCard";
import EmptyState from "../../components/common/EmptyState";

import "../buyer/style/SavedProperties.css";
import { toast } from "react-toastify";

export default function SavedProperties() {

  const [saved, setSaved] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSavedProperties();
  }, []);

  const getSavedProperties = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/property/save",
        {
          withCredentials: true,
        }
      );
      setSaved(res.data.properties);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const toggleSave = async (id) => {
    try {
      await axios.post(`http://localhost:3000/api/property/save/${id}`, {},
        {
          withCredentials: true,
        }
      );
      // Remove instantly from UI
      setSaved((prev) => prev.filter((p) => p._id !== id));
      toast.info("Propery Removed")
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="page-stack-6">

      <div>
        <h1 className="page-title">Saved Properties</h1>
        <p className="page-subtitle">
          Properties you've bookmarked for later.
        </p>
      </div>

      {saved.length === 0 ? (
        <EmptyState
          icon={Heart}
          title="No saved properties"
          message="Tap the heart icon on any listing to save it here."
        />
      ) : (
        <div className="property-grid-responsive">

          {saved.map((property) => (
            <PropertyCard
              key={property._id}
              property={property}
              detailsPath="/buyer/properties"
              onSave={toggleSave}
              saved={true}
            />
          ))}

        </div>
      )}

    </div>
  );
}