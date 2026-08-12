import React from "react";
import { X } from "lucide-react";
import "../common/style/ComparisonTable.css";

export default function ComparisonTable({ items, onRemove }) {

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
  };

  const pricePerSqft = (property) => {
    if (!property.price || !property.area) {
      return "N/A";
    }

    return `₹ ${Math.round(
      property.price / property.area
    ).toLocaleString()}`;
  };

  const rows = [
    {
      label: "Price",
      render: (p) => formatPrice(p.price),
    },
    {
      label: "City",
      render: (p) => p.city || "N/A",
    },
    {
      label: "Locality",
      render: (p) => p.locality || "N/A",
    },
    {
      label: "BHK",
      render: (p) => (p.bhk > 0 ? `${p.bhk} BHK` : "N/A"),
    },
    {
      label: "Area (sqft)",
      render: (p) => p.area ? `${p.area} sqft` : "N/A",
    },
    {
      label: "Type",
      render: (p) => p.type || "N/A",
    },
    {
      label: "Price / sqft",
      render: (p) => pricePerSqft(p),
    },
    {
      label: "Agent",
      render: (p) => p.agent?.name || "N/A",
    },
    {
      label: "Amenities",
      render: (p) =>
        p.amenities?.length
          ? p.amenities.join(", ")
          : "N/A",
    },
  ];

  return (
    <div className="comparison-table-wrap">
      <table className="comparison-table">
        <thead>
          <tr>
            <th className="comparison-table-property-header">
              Property
            </th>
            {items.map((p) => (
              <th
                key={p._id}
                className="comparison-table-col-header"
              >
                <div className="comparison-table-col-inner">
                  <button
                    onClick={() => onRemove(p._id)}
                    className="comparison-table-remove-btn"
                    aria-label="Remove from comparison"
                  >
                    <X size={12} />
                  </button>
                  <img
                    src={
                      p.images?.[0] ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8B6qoFCgTR1NZRCi4aYL5AoCz4N1UsoC7plvBDT8mg&s=10"
                    }
                    alt={p.title}
                    className="comparison-table-image"
                  />
                  <p className="comparison-table-title">
                    {p.title}
                  </p>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={i % 2 === 0 ? "comparison-table-row-alt" : ""}
            >
              <td className="comparison-table-row-label">
                {row.label}
              </td>
              {items.map((p) => (
                <td
                  key={p._id}
                  className="comparison-table-cell"
                >
                  {row.render(p)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
