"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bad_Script } from "next/font/google";

const script = Bad_Script({
  variable: "--bad-script-regular",
  subsets: ["latin"],
  weight: "400",
});

// Reuse the synthwave colors from other components for consistency
const synthwaveColors = {
  background: "#0f0624", // Deep purple background
  neon: {
    pink: "#ff00ff",
    blue: "#00ffff",
    purple: "#bf00ff",
  },
};

const About = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  // Setup canvas and animation
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = 500;

    // Create stars with synthwave colors
    const stars: {
      x: number;
      y: number;
      size: number;
      speed: number;
      color: string;
    }[] = [];

    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.1,
        color: [
          "rgba(255, 255, 255, 0.8)",
          "rgba(255, 0, 255, 0.7)",
          "rgba(0, 255, 255, 0.7)",
        ][Math.floor(Math.random() * 3)],
      });
    }

    // Animation function
    const animate = () => {
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, synthwaveColors.background);
      gradient.addColorStop(1, "#320a5c");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      ctx.strokeStyle = "rgba(255, 0, 255, 0.15)";
      ctx.lineWidth = 1;

      // Horizontal grid lines
      for (let y = 0; y < canvas.height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical grid lines
      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Update and draw stars
      stars.forEach((star) => {
        star.x -= star.speed;
        if (star.x < 0) {
          star.x = canvas.width;
          star.y = Math.random() * canvas.height;
        }

        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect to some stars
        if (Math.random() > 0.9) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = star.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div
      className="relative py-16"
      style={{ background: synthwaveColors.background }}
    >
      {/* Background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Title with neon effect */}
      <div className="relative z-10 mb-12">
        <h2
          className="text-5xl text-center font-bold tracking-wider font-['Orbitron',sans-serif]"
          style={{
            color: "white",
            textShadow: `0 0 10px ${synthwaveColors.neon.pink}, 0 0 20px ${synthwaveColors.neon.blue}`,
          }}
        >
          ABOUT ME
        </h2>
        <div
          className="w-24 h-1 mx-auto mt-4"
          style={{
            background: `linear-gradient(to right, ${synthwaveColors.neon.blue}, ${synthwaveColors.neon.pink})`,
          }}
        ></div>
      </div>

      {/* Content container */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left column with photo */}
        <div className="relative">
          <div
            className="relative rounded-lg overflow-hidden shadow-xl"
            style={{
              boxShadow: `0 0 25px ${synthwaveColors.neon.purple}, 0 0 50px ${synthwaveColors.neon.blue}`,
            }}
          >
            <Image
              src="/ChatGPTme1.png"
              alt="Jack Epner"
              width={500}
              height={500}
              className="w-full aspect-square object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
          </div>

          {/* Tagline overlay */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <div
              className={`${script.className} text-3xl`}
              style={{
                color: "white",
                textShadow: `0 0 10px ${synthwaveColors.neon.pink}, 0 0 20px ${synthwaveColors.neon.blue}`,
              }}
            >
              A Digital Man of Mystery
            </div>
          </div>
        </div>

        {/* Right column with bio */}
        <div className="text-white ml-8">
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: synthwaveColors.neon.blue }}
          >
            Who Am I?
          </h3>

          <p className="mb-4">
            I'm a multidisciplinary creative and technologist with a global
            perspective shaped by living in 15 countries across 4 continents. My
            journey has taken me from sales to teaching, film and television
            production to digital marketing, and now marketing operations and
            web development.
          </p>

          <p className="mb-4">
            With experience spanning various industries, I bring a unique blend
            of technical knowledge and creative problem-solving to every
            project. My approach combines cutting-edge technology with
            human-centered design principles.
          </p>

          <p className="mb-4">
            When I'm not at a computer, I may be found reading, exploring the
            outdoors, or maybe just running errands....
          </p>
          <p className="mb-4">You can call me Jack.</p>

          <div className="mt-8">
            <Link href="/resume/my-resume.pdf">
              <button
                className="px-6 py-3 rounded-md text-white font-medium transition-all duration-300 cursor-pointer"
                style={{
                  background: `linear-gradient(90deg, ${synthwaveColors.neon.purple}, ${synthwaveColors.neon.pink})`,
                  boxShadow: `0 0 15px ${synthwaveColors.neon.purple}`,
                }}
              >
                Download Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
