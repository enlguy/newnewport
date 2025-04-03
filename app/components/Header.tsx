"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Neonderthaw } from "next/font/google";

const neon = Neonderthaw({
  variable: "--font-neonderthaw-regular",
  subsets: ["latin"],
  weight: "400",
});

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbar, setNavbar] = useState(false);
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
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-50">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 text-white">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <div className={neon.className}>
                <Link href="/" className="text-[#cc7af3]">
                  Jack Epner
                </Link>
              </div>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.png" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/menu.png"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex gap-5">
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
                    onClick={() => setNavbar(!navbar)}
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
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
