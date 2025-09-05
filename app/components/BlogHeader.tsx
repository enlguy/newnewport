// components/BlogNavBar.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Neonderthaw } from "next/font/google";

const neon = Neonderthaw({
  variable: "--font-neonderthaw-regular",
  subsets: ["latin"],
  weight: "400",
});

export default function BlogNavBar() {
  const [navbar, setNavbar] = useState(false);
  const navItemClass = `cursor-pointer text-white hover:text-[#cc7af3]`;

  return (
    <nav className="w-full bg-black fixed top-0 left-0 right-0 z-50">
      {/* ... (rest of your navigation JSX) ... */}
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
                  <Image src="/close.png" width={30} height={30} alt="close menu" />
                ) : (
                  <Image
                    src="/menu.png"
                    width={30}
                    height={30}
                    alt="open menu"
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
                <Link href="/" className={navItemClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#tech" className={navItemClass} onClick={() => setNavbar(false)}>
                  Tech
                </Link>
              </li>
              <li>
                <Link href="/#projects" className={navItemClass} onClick={() => setNavbar(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className={navItemClass} onClick={() => setNavbar(false)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#about" className={navItemClass} onClick={() => setNavbar(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/#contact" className={navItemClass} onClick={() => setNavbar(false)}>
                  Contact
                </Link>
              </li>            
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}