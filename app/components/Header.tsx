"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroHeight = heroSection.clientHeight;
        setIsScrolled(window.scrollY > heroHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white shadow-md text-gray-800"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="${
              isScrolled ? 'text-gray-700 hover:text-[#cc7af3]' : 'text-white hover:text-[#cc7af3]'
            }`} text-xl font-bold z-20"
        >
          Your SaaS
        </h1>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link
                href="/"
                className="${
              isScrolled ? 'text-gray-700 hover:text-[#cc7af3]' : 'text-white hover:text-[#cc7af3]'
            }`} hover:text-[#cc7af3]"
              >
                Home
              </Link>
            </li>

            <li>
              <ScrollLink
                to="tech"
                smooth={true}
                className="cursor-pointer ${
              isScrolled ? 'text-gray-700 hover:text-[#cc7af3]' : 'text-white hover:text-[#cc7af3]'
            }`} hover:text-[#cc7af3]"
              >
                Tech
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                className="cursor-pointer ${
              isScrolled ? 'text-gray-700 hover:text-[#cc7af3]' : 'text-white hover:text-[#cc7af3]'
            }`} hover:text-[#cc7af3]"
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                className="cursor-pointer ${
              isScrolled ? 'text-gray-700 hover:text-[#cc7af3]' : 'text-white hover:text-[#cc7af3]'
            }`} hover:text-[#cc7af3]"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                className="cursor-pointer ${
              isScrolled ? 'text-gray-700 hover:text-[#cc7af3]' : 'text-white hover:text-[#cc7af3]'
            }`} hover:text-[#cc7af3]"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              type="button"
              className="fill-gray-100"
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
