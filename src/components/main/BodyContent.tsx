import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../public/Home/Home";
import About from "../public/About/About";
import Events from "../public/Events/Events";
import ContactUs from "../public/ContactUs/ContactUs";

export default function BodyContent() {
  return (
  <div className="flex justify-center overflow-y-auto max-h-[calc(100vh-10px)]  lg:max-h-[calc(100vh)] pt-20 pb-10">
    <div className="w-full lg:max-w-[120vh] px-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  </div>
  );
}
