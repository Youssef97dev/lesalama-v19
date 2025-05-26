"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/yakitd32v7jwvcvm45s2",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/salama_20-min_m92cvb",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/po692czexw9alolb2qll",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/s9ddjvzdlmsosy5zywop",
];

const imagesMobile = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/g6rzpp98zct8gcxlsexv",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/usuix6tsgjhreciq8pcf",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/k36u7ezamlvdxte50jxo",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/js1vvihvz3cdlthvw7gw",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="relative w-full h-screen hidden lg:block">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full "
            />
          </div>
        ))}
      </div>
      <div className="relative w-full h-screen block lg:hidden">
        {imagesMobile.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              height={1000}
              width={500}
              className="object-cover h-screen"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
