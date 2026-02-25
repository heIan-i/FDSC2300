import { useEffect, useRef } from "react";
import './About.css'
import falafel from "/images/falafel.webp";

export default function About() {
  const darkGreenRef = useRef<HTMLDivElement>(null);
  const oliveGreenRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

useEffect(() => {
  const handleScroll = () => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // progress from top to bottom
    let progress = rect.top / viewportHeight;
    progress = Math.max(0, Math.min(1, progress)); // clamp to viewport

    const offsets = {
      dark: (progress - 0.5) * 20,   // slowest
      olive: (progress - 0.5) * 35,  // medium
      image: (progress - 0.5) * 50,  // fastest
    };

    const darkBlock = document.querySelector('.block.dark-green') as HTMLElement;
    const oliveBlock = document.querySelector('.block.olive-green') as HTMLElement;

    if (darkBlock) darkBlock.style.transform = `translateY(${offsets.dark}px)`;
    if (oliveBlock) oliveBlock.style.transform = `translateY(${offsets.olive}px)`;
    imageRef.current.style.transform = `translateY(${offsets.image}px)`;
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <section className="about">
      <div className="about-left">
      <div className="about-container">
        <div ref={darkGreenRef} className="block dark-green"></div>
        <div ref={oliveGreenRef} className="block olive-green"></div>
        <img
          ref={imageRef}
          src={falafel}
          alt="food"
          className="parallax-img"
        />
      </div>
      </div>
      <div className="about-right">
          <h2>Introduction to Culinary SCIENCE</h2>
         <p>
          Explore the science of food and cooking through interdisciplinary lectures, culinary
demonstrations, sensory evaluations, and hands on activities. Scientific principles underlying
the culinary medium will be discussed. Ingredients, their functionality in recipes, and the
mechanisms that influence their interactions will be covered. Techniques and traditions that
culinary professionals use to transform ingredient mixtures into flavorful foods will be
presented. The multimodality of flavor perception will be examined. Recipes will serve as
models to help understand biochemical and physical forces that influence ingredient
interactions. Lectures and culinary demonstrations will converge, creating the context to
discuss emerging issues facing consumers and their food system, such as safety, sustainability,
health, and enjoyment.
         </p>
        </div>
    </section>
  );
}