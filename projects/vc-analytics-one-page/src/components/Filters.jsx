import React, { useState } from "react";

const Filters = () => {
  const [filters, setFilters] = useState({
    company: "V-Connect",
    location: "Mumbai",
    subnet: "203.122.4.255/25",
    top: "20",
    sort: "Descending",
    filterBy: "usage",
    dateRange: "last7days",
    searchIP: "203.122.4.134",
  });

  const clearFilters = () => {
    setFilters({});
  };

  return (
    <div style={{ backgroundColor: "#2c2c2c", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <select value={filters.company} style={{ padding: "5px", flex: 1 }}>
          <option value="V-Connect">V-Connect</option>
        </select>
        <select value={filters.location} style={{ padding: "5px", flex: 1 }}>
          <option value="101">101</option>
        </select>
        <input type="text" value={filters.subnet} style={{ padding: "5px", flex: 1 }} />
        <select value={filters.top} style={{ padding: "5px", flex: 1 }}>
          <option value="20">20</option>
        </select>
        <select value={filters.sort} style={{ padding: "5px", flex: 1 }}>
          <option value="Descending">Descending</option>
          <option value="Ascending">Ascending</option>
        </select>
        <select value={filters.filterBy} style={{ padding: "5px", flex: 1 }}>
          <option value="usage">Usage</option>
        </select>
        <select value={filters.dateRange} style={{ padding: "5px", flex: 1 }}>
          <option value="last7days">Last 7 Days</option>
        </select>
        <input type="text" value={filters.searchIP} style={{ padding: "5px", flex: 1 }} />
      </div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {Object.keys(filters).map((key) => (
          <span
            key={key}
            style={{
              backgroundColor: "#444",
              color: "#fff",
              padding: "5px 10px",
              borderRadius: "16px",
            }}
          >
            {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${filters[key]}`}
          </span>
        ))}
      </div>
      <button
        onClick={clearFilters}
        style={{
          marginTop: "10px",
          padding: "10px",
          backgroundColor: "#00bfff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
