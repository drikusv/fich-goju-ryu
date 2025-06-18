import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../public/Home/Home";
import About from "../public/About/About";
import Events from "../public/Events/Events";
import ContactUs from "../public/ContactUs/ContactUs";

export default function BodyContent() {
  return (
  <div className="flex justify-center max-h-[calc(100vh-10px)] md:max-h-[calc(100vh)] pt-20 pb-10 overflow-y-auto">
    <div className="w-full max-w-[120vh] px-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  </div>
  );
}
