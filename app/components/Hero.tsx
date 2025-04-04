import React from "react";
import Image from "next/image";
import Link from "next/link";

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
          <div className="text-[white] text-2xl font-medium md:text-5xl md:leading-10">
            A Digital Man of Mystery
          </div>
          <ul className="mt-4 text-sm text-slate-600 leading-relaxed">
            <li className="list-disc">I have lived in 15 countries</li>
            <li className="list-disc">
              I have worked in{" "}
              <span className="underline">
                <Link href="https://www.imdb.com/name/nm4821772/">
                  {" "}
                  film/TV{" "}
                </Link>
              </span>
            </li>
            <li className="list-disc">I have lived in 15 countries</li>
            <li className="list-disc">I have lived in 15 countries</li>
            <li className="list-disc">I have lived in 15 countries</li>
          </ul>
          <button
            type="button"
            className="px-5 py-2.5 mt-10 rounded text-[15px] font-medium outline-none tracking-wide bg-blue-600 text-white hover:bg-blue-700"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
