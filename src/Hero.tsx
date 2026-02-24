import "./Hero.css";
import React, {useState, useEffect} from "react";
import cornell from "../images/cornell_logo_simple_white.png";

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

  useEffect(() => {
  document.body.style.overflow = isOpen ? "hidden" : "auto";
}, [isOpen]);

  return (
    <section className="hero">
      {/* Overlay */}
      <div
        className={`overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      {/* SLIDE MENU */}
  <div className={`side-menu ${isOpen ? "active" : ""}`}>
    <div className="menu-inner">

      <div className="menu-left">
        <nav className="menu-links">
          <a>mise en place</a>
          <a>past dishes</a>
          <a>menu</a>
          <a>submit</a>
          <a>instagram</a>
        </nav>

        <div className="menu-footer">
          <div className="school">Cornell University</div>
          <div className="contact">contact
          </div>
          
          <div className="address">
            411 Tower Rd<br />
            Stocking Hall<br />
            Ithaca, NY 14853
          </div>
        </div>
      </div>

      <div className="menu-divider" />

      {/*<div className="menu-image">
        <img src={cornell} alt="" />
      </div>*/}

    </div>
  </div>

      {/* Left panel */}
      <div className="hero-left">
        {/* <-- Hamburger Button --> */}
        <button className={`hamburger ${isOpen ? "open" : ""}`} onClick={isOpen ? closeMenu : openMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <p className="tagline">
          the art at the intersection of
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
