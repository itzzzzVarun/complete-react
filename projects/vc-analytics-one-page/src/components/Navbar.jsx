import React from "react";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#000", padding: "10px 20px", display: "flex", alignItems: "center" }}>
      <img src="/logo.png" alt="V-Connect Logo" style={{ height: "40px", marginRight: "20px" }} />
      <h1 style={{ color: "#00bfff", flexGrow: 1 }}>IP Analytics</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: "10px" }}>Varun</span>
        <div style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#00bfff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
        }}>V</div>
      </div>
    </div>
  );
};

export default Navbar;
