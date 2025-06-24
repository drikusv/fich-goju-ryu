import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";


export default function TopBanner() {
    const [menuOpen, setMenuOpen] = useState(false);

    const ButtonRing = (url: string) => {
        const location = useLocation();
        return location.pathname === url
            ? "outline-none ring-2 ring-[#de1e2c]"
            : "";
    }

  return (
    <header className="w-full bg-black text-white shadow-xl px-4 z-20 fixed top-0 left-0">
      <div className="flex items-center justify-between max-w-7xl mx-auto h-20">
        {/* Logo & Title */}
        <div className="flex items-center gap-4 h-full">
          <img
            src="/images/Goju_logo-removebg-preview.png"
            alt="Banner"
            className="w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-white shadow-lg bg-white"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-lg lg:text-2xl font-impact font-bold tracking-wide text-white leading-tight drop-shadow">
              FICHARDTPARK <span className="text-[#de1e2c]">GOJU RYU</span> KARATE
            </h1>
            <span className="hidden lg:block text-xs text-gray-300 font-medium tracking-wide mt-1">
              Mondays & Wednesdays 17:15–18:15 · Fichardtpark Sport Centre
            </span>
          </div>
        </div>
        {/* Hamburger Menu (Mobile) */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
        {/* Navigation */}
        <nav className="hidden lg:flex justify-center gap-2 lg:gap-6 h-full items-center">
          <Link
            to="/"
            className={`text-white text-base font-semibold rounded-full px-4 py-2 transition ${ButtonRing("/")} hover:bg-[#de1e2c] hover:text-white `}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-white text-base font-semibold rounded-full px-4 py-2 transition ${ButtonRing("/about")} hover:bg-[#de1e2c] hover:text-white`}
          >
            About
          </Link>
          <Link
            to="/events"
            className={`text-white text-base font-semibold rounded-full px-4 py-2 transition ${ButtonRing("/events")} hover:bg-[#de1e2c] hover:text-white`}
          >
            Events
          </Link>
          <Link
            to="/contact"
            className={`text-white text-base font-semibold rounded-full px-4 py-2 transition ${ButtonRing("/contact")} hover:bg-[#de1e2c] hover:text-white `}
          >
            Contact Us
          </Link>
        </nav>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-black border-t border-gray-800 px-4 pb-4 pt-2 flex flex-col gap-2">
          <Link
            to="/"
            className="text-white text-base font-semibold rounded-full px-4 py-2 transition hover:bg-[#de1e2c] hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-base font-semibold rounded-full px-4 py-2 transition hover:bg-[#de1e2c] hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/events"
            className="text-white text-base font-semibold rounded-full px-4 py-2 transition hover:bg-[#de1e2c] hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            to="/contact"
            className="text-white text-base font-semibold rounded-full px-4 py-2 transition hover:bg-[#de1e2c] hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
