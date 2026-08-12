import React, { useEffect, useState } from "react";
import { Scale, Plus } from "lucide-react";
import axios from "axios";
import ComparisonTable from "../../components/common/ComparisonTable";
import EmptyState from "../../components/common/EmptyState";
import "../buyer/style/CompareProperties.css";

export default function CompareProperties() {
  const [properties, setProperties] = useState([]);
  const [compareIds, setCompareIds] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get all properties
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

  // Selected properties
  const items = properties.filter((p) =>
    compareIds.includes(p._id)
  );

  // Remaining properties
  const remaining = properties.filter(
    (p) => !compareIds.includes(p._id)
  );

  // Remove property
  const removeItem = (id) => {
    setCompareIds((prev) =>
      prev.filter((itemId) => itemId !== id)
    );
  };

  // Add property
  const addItem = (id) => {
    if (compareIds.length >= 3) {
      alert("You can compare maximum 3 properties.");
      return;
    }
    setCompareIds((prev) => [...prev, id]);
  };

  if (loading) {
    return <h2>Loading properties...</h2>;
  }

  return (
    <div className="page-stack-6">

      <div>
        <h1 className="page-title compare-page-heading">
          <Scale size={22} /> Compare Properties
        </h1>

        <p className="page-subtitle">
          Compare up to 3 properties side by side.
        </p>
      </div>

      {items.length === 0 ? (
        <EmptyState
          title="No properties to compare"
          message="Add properties from the listing page to compare them here."
        />
      ) : (
        <ComparisonTable
          items={items}
          onRemove={removeItem}
        />
      )}

      {remaining.length > 0 && compareIds.length < 3 && (
        <div>
          <h3 className="compare-add-heading">
            Add another property
          </h3>

          <div className="compare-add-row">
            {remaining.map((p) => (
              <button
                key={p._id}
                onClick={() => addItem(p._id)}
                className="compare-add-btn"
              >
                <Plus size={14} />
                {p.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
