"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full bg-primary shadow-md transition-all duration-300 hidden lg:block ${
        isScrolled ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-full mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo-salama-white.png"
            alt="le salama 2"
            width={145}
            height={145}
            className="cursor-pointer"
          />
        </Link>
        <ul className="w-full flex justify-center items-center gap-8 text-[18px] leading-[54px] text-white">
          <li className="cursor-pointer z-50">
            <Link href="#">Carte</Link>
          </li>
          <li className="cursor-pointer z-50">
            <Link href="#about">A propos</Link>
          </li>
          <li className="cursor-pointer z-50">
            <Link href="#">Gallery</Link>
          </li>
          <li className="cursor-pointer z-50">
            <Link href="/group">Nos Restaurants</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#">Event</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#">Contact</Link>
          </li>
        </ul>
        <Link
          href=""
          className="uppercase bg-comptoire_2 text-primary px-6 py-3 text-[15px] hover:bg-primary hover:text-white duration-200 transition-all"
        >
          Reserver
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
