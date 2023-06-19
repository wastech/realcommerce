//theme
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import "primereact/resources/primereact.min.css";
import AppHeader from "./components/AppHeader";
import NewArrival from "./components/NewArrival";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <AppHeader />;
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<NewArrival />} exact />
      </Routes>
    </Router>
  );
}

export default App;
