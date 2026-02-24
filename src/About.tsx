import { useEffect, useRef } from "react";
import "./About.css";
import falafelImg from "../images/falafel.webp";

export default function About() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
  const handleScroll = () => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const progress = rect.top / viewportHeight;
    const offset = (progress - 0.5) * 30; // subtle

    imageRef.current.style.transform = `translateY(${offset}px)`;
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-left">
          <div className="green-back"></div>
          <div className="green-front"></div>
          <img
            ref={imageRef}
            src={falafelImg}
            alt="food"
            className="parallax-img"
          />
        </div>

        <div className="about-right">
          <h2>ABOUT</h2>
        </div>
      </div>
    </section>
  );
}