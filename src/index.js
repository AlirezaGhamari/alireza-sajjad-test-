import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   
  <BrowserRouter>
   <App/>
    <Routes>
        <Route path="/home" element={<Home  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);
