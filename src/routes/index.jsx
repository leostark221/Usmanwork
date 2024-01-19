// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import Analytics from "../screens/Analytics";
import Home from "../screens/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/analytics" element={<Analytics />} />
      {/* <Route path="/message" element={<Message />} />
      <Route path="/news" element={<News />} />
      <Route path="/recruitment" element={<Recruitment />} />
      <Route path="/project" element={<Project />} /> */}
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;
