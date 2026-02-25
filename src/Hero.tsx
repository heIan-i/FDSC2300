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
    
    {/* Full-width links outside menu-left */}
    <nav className="menu-links">
      <a>mise en place</a>
      <a>past dishes</a>
      <a href="https://docs.google.com/spreadsheets/d/1xZactS92Ebs88LnDmC4UVdyxPEMs9yaACVzM4soJzxU/edit?usp=sharing">menu</a>
      <a href="https://forms.gle/39kmzf16GS2MeRcXA">submit</a>
      <a href="">instagram</a>
    </nav>
    
    {/* footer */}
      <div className="menu-footer">
  <div className="footer-left">
    <div className="img">
      <img src={cornell} alt="Cornell Logo" />
    </div>
    <div className="address">
      411 Tower Rd<br />
      Stocking Hall<br />
      Ithaca, NY 14853
    </div>
  </div>

  <div className="footer-right">
    <div className="contact">contact</div>
    <div className="list">
      crl3@cornell.edu<br />
      zzs2@cornell.<br />
      my569@cornell.edu
    </div>
  </div>

</div>
    

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
          CULINARY <span>+</span> SCIENCE
        </h1>
      </div>

      <div className="hero-title">FDSC 2300</div>
    </section>
  );
}
