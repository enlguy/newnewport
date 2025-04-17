import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bad_Script } from "next/font/google";

const script = Bad_Script({
  variable: "--bad-script-regular",
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  return (
    <div className="h-full bg-linear-to-t from-[#140256] to-[#040029]">
      <div className="h-screen grid md:grid-cols-2 items-center md:gap-4 gap-8 max-w-[1100px] max-md:max-w-md mx-auto">
        <Image
          src="/ChatGPTme1.png"
          alt="hero image"
          className="w-full h-full md:object-contain pr-20"
          width={425}
          height={650}
        />

        <div className="max-md:order-1 max-md:text-center">
          <div className="text-[white] text-2xl font-medium md:text-5xl md:leading-10 mb-15">
            <div className={script.className}>A Digital Man of Mystery</div>
          </div>
          <ul className="mt-4 text-sm text-[#12c5f7] leading-relaxed space-y-[1.5]">
            <li className="list-disc">I have lived in 15 countries</li>
            <li className="list-disc">
              I have worked in{" "}
              <span className="underline">
                <Link
                  href="https://www.imdb.com/name/nm4821772/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  film/TV{" "}
                </Link>
              </span>
            </li>
            <li className="list-disc">
              I have worked on marketing projects for the World Cup
            </li>
            <li className="list-disc">
              I sometimes make{" "}
              <span className="underline">
                <Link
                  href="https://soundcloud.com/tsearcher"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  music
                </Link>
              </span>
            </li>
            <li className="list-disc">I have taught university courses</li>
          </ul>
          <Link
            href="https://github.com/enlguy?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="px-5 py-2.5 mt-10 cursor-pointer rounded text-[15px] font-medium outline-none tracking-wide bg-[#0484d4] text-white hover:bg-blue-700"
            >
              Check out my latest project
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
