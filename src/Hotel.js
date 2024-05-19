import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./Scenes/Navbar/Navbar";
import Footer from "./Scenes/Footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
const Newz = lazy(() => import("./Pages/Newz/Newz"));
const Body = lazy(() => import("./Pages/Body/Body"));
const Gallery = lazy(() => import("./Pages/Gallery/Gallery"));
const About = lazy(() => import("./Pages/About/About"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));

const Hotel = () => {
  const [headerHomePageState, setHeaderHomePageState] = useState(true);
  const homePage = window.location.pathname;

  useEffect(() => {
    if (homePage === "/") {
      setHeaderHomePageState(false);
    } else {
      setHeaderHomePageState(true);
    }
  }, []);

  return (
    <>
      <Navbar headerHomePageState={headerHomePageState} />
      <main
        className={`relative ${headerHomePageState ? "top-0" : "top-[60px]"}`}
      >
        <Suspense fallback="Loading">
          <Routes>
            <Route exact path="/" element={<Body />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/newz" element={<Newz />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer headerHomePageState={headerHomePageState} />
    </>
  );
};

export default Hotel;
