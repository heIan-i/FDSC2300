import { Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import About from "./About";
import PastDishes from "./past/pastdishes";
import MiseEnPlace from "./mise/miseenplace";

export default function App() {
  return (
    <Routes>
      {/* Home route (Hero + About) */}
      <Route
        path="/"
        element={
          <>
            <Hero />
            <About />
          </>
        }
      />

      {/* PastDishes subpage */}
      <Route path="/pastdishes" element={<PastDishes />} />
      <Route path="/miseenplace" element={<MiseEnPlace />} />
    </Routes>
  );
}