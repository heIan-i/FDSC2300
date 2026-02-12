import "./Hero.css";
import React, {useState, useEffect} from "react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <section className="hero">
      {/* Overlay */}
      <div
        className={`overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      {/* Side Menu */}
      <nav className={`side-menu ${isOpen ? "active" : ""}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Left panel */}
      <div className="hero-left">
        {/* <-- Hamburger Button --> */}
        <button className={`hamburger ${isOpen ? "open" : ""}`} onClick={isOpen ? closeMenu : openMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <p className="tagline">
          the art at the intersection of<br />
          science and sensory experience.
        </p>
      </div>

      {/* Right panel */}
      <div className="hero-right" />

      {/* Overlay content */}
      <div className="hero-center">
        <h1>
          FOOD <span>+</span> SCIENCE
        </h1>
      </div>

      <div className="hero-title">FDSC 2300</div>
    </section>
  );
}
