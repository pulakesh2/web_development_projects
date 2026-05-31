import React from "react";
import ReactDOM from "react-dom/client";

// import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Academy from "./Components/pages/Academy";
import Students from "./Components/pages/Students";
import FeePayment from "./Components/pages/Fee_payment";
import Enquiries from "./Components/pages/Enquiries";
import Coaches from "./Components/pages/Coaches";
import Schedule from "./Components/pages/Schedule";
import DashBoard from "./Components/pages/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/academy" element={<Academy />} />
      <Route path="/students" element={<Students />} />
      <Route path="/fee payment" element={<FeePayment />} />
      <Route path="/enquiries" element={<Enquiries />} />
      <Route path="/coaches" element={<Coaches />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  </BrowserRouter>
);
