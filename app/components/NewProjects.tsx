"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style.css";

// Reuse the synthwave colors from TechStackGalaxy for consistency
const synthwaveColors = {
  background: "#0f0624", // Deep purple background
  neon: {
    pink: "#ff00ff",
    blue: "#00ffff",
    purple: "#bf00ff",
  },
};

const Projects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const animationRef = useRef<number>(0);

  // Setup canvas and animation
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = 200; // Adjust height as needed

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

  // Project data
  const projects = [
    {
      title: "Optimizing HubSpot for a Global Business",
      image: "/crm.png",
      link: "https://www.potentiam.co.uk",
      description:
        "Large data management and optimization project for HubSpot and web integrations",
    },
    {
      title: "SaaS landing page and blog",
      image: "/hubprospscreen.png",
      link: "https://hubprosper.com/",
      description: "Built with NextJS and Markdown for SEO optimization",
    },
    {
      title: "YouTube Bookmarker",
      image: "/ytext.png",
      link: "https://chromewebstore.google.com/detail/youtube-bookmark-manager/hceieggkdlhpjhnpahpogcnkdbeknbhm",
      description:
        "Browser extension in JavaScript to save time-stamped bookmarks with links on YouTube videos",
    },
    {
      title: "Data Normalization Tool with HubSpot Integration",
      image: "/normlz.png",
      link: "https://www.normlz.com",
      description: "Built with Nextjs, Neon Postgres, Prisma, and Next-Auth",
    },
    {
      title: "GTM Strategy",
      image: "/rw.jpg",
      link: "https://resumeworded.com/",
      description: "Market research and growth strategy for scaling a SaaS",
    },
  ];

  return (
    <div
      className="projects-section relative py-16"
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
          PROJECTS
        </h2>
        <div
          className="w-24 h-1 mx-auto mt-4"
          style={{
            background: `linear-gradient(to right, ${synthwaveColors.neon.blue}, ${synthwaveColors.neon.pink})`,
          }}
        ></div>
      </div>

      {/* Swiper carousel */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active",
          bulletClass: "swiper-pagination-bullet",
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="max-w-lg">
            <div
              className="relative overflow-hidden rounded-lg transition-transform duration-300 ease-in-out"
              style={{
                height: "400px",
                boxShadow:
                  isHovering === index
                    ? `0 0 25px ${synthwaveColors.neon.pink}, 0 0 50px ${synthwaveColors.neon.blue}`
                    : "0 10px 30px rgba(0, 0, 0, 0.5)",
                transform: isHovering === index ? "scale(1.03)" : "scale(1)",
              }}
              onMouseEnter={() => setIsHovering(index)}
              onMouseLeave={() => setIsHovering(null)}
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 ease-in-out hover:scale-110"
                  />

                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>

                  {/* Project description */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.description}</p>

                    {/* Animated view project button */}
                    <div
                      className="mt-4 inline-block py-2 px-4 rounded-md transition-colors duration-300"
                      style={{
                        background:
                          isHovering === index
                            ? `linear-gradient(45deg, ${synthwaveColors.neon.pink}, ${synthwaveColors.neon.blue})`
                            : "rgba(255, 255, 255, 0.2)",
                        border: `1px solid ${
                          isHovering === index
                            ? synthwaveColors.neon.pink
                            : "rgba(255, 255, 255, 0.3)"
                        }`,
                      }}
                    >
                      View Project
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
