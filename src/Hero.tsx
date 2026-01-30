import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* Left panel */}
      <div className="hero-left">
        <div className="hamburger">
          <span />
          <span />
          <span />
        </div>

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
