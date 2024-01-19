// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/index.jsx"; // Import AppRoutes
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header /> {/* Include your Header component */}
      <div className="ml-64">
        {" "}
        {/* Adjust margin as per your sidebar width */}
        <AppRoutes /> {/* This is where your routes are rendered */}
      </div>
    </Router>
  );
};

export default App;
