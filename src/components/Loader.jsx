"use client";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import Toolbar from "./Toolbar";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Shows from "./Shows";
import Culunary from "./Culunary";
import Footer from "./Footer";
import Contact from "./Contact";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isClient ? (
        <div className="relative">
          <Toolbar />
          <Hero />
          <About />
          <Shows />
          <Culunary />
          <Contact />
          <Footer />

          {/*<div className="fixed bottom-5 left-0 w-full block lg:hidden z-10">
            <Buttons />
          </div>*/}
        </div>
      ) : (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-primary">
          <BounceLoader color="#d7b072" size={100} />
        </div>
      )}
    </>
  );
};

export default Loader;
