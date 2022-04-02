import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Category from "../Category/Category";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Routes>
          <Route path="/category" element={<Category />} />
          <Route path="/category/women" element={<Category />} />
          <Route path="/category/men" element={<Category />} />
          <Route path="/category/kids" element={<Category />} />
          <Route path="*" element={<Navigate to="/category" />} />
        </Routes>
      </div>
    );
  }
}

export default App;
