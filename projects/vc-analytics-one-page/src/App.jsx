import React from "react";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import DataTable from "./components/DataTable";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div style={{ backgroundColor: "#1f1f1f", color: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Filters />
        <DataTable />
      </div>
      <Footer />
    </div>
  );
};

export default App;