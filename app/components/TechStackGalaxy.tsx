"use client";

import { useEffect, useRef, useState } from "react";

interface TechIcon {
  x: number;
  y: number;
  z: number;
  x3d: number;
  y3d: number;
  z3d: number;
  size: number;
  speed: number;
  rotationSpeed: number;
  angle: number;
  name: string;
  loaded: boolean;
  image: HTMLImageElement;
}

interface Star {
  x: number;
  y: number;
  size: number;
  twinkle: number;
}

// Tech stack definitions
const techStack = [
  {
    name: "React",
    iconPath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "NextJS",
    iconPath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Typescript",
    iconPath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "NodeJS",
    iconPath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "Supabase",
    iconPath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
  {
    name: "Postgres",
    iconPath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
  },
  {
    name: "Google Cloud",
    iconPath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-plain.svg",
  },
  {
    name: "TailwindCSS",
    iconPath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  },
  {
    name: "HTML5",
    iconPath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg",
  },
  { name: "github", iconPath: "/icons/github.svg" },
];

const TechStackGalaxy: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const techIconsRef = useRef<TechIcon[]>([]);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(0);
  const [iconsLoaded, setIconsLoaded] = useState(0);
  const [allIconsLoaded, setAllIconsLoaded] = useState(false);

  // Initialize tech icons and stars
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize mouse position to center
    setMousePosition({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    // Create and load tech icons
    const icons: TechIcon[] = [];
    let loadedCount = 0;

    // Helper function to calculate distance between two points in 3D space
    const distance3D = (
      x1: number,
      y1: number,
      z1: number,
      x2: number,
      y2: number,
      z2: number
    ) => {
      return Math.sqrt(
        Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2)
      );
    };

    // Helper function to generate random position with minimum distance check
    const generatePosition = (
      existingPositions: { x: number; y: number; z: number }[]
    ) => {
      const minDistance = 400; // Minimum distance between icons
      let attempts = 0;
      const maxAttempts = 100;

      while (attempts < maxAttempts) {
        const phi = Math.random() * Math.PI * 2;
        const theta = Math.acos(2 * Math.random() - 1); // Better distribution on sphere
        const radius = 800 + Math.random() * 600; // Increased radius range

        const x = radius * Math.sin(theta) * Math.cos(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(theta);

        // Check distance from all existing positions
        const isFarEnough = existingPositions.every(
          (pos) => distance3D(x, y, z, pos.x, pos.y, pos.z) >= minDistance
        );

        if (isFarEnough || attempts === maxAttempts - 1) {
          return { x, y, z };
        }

        attempts++;
      }

      // Fallback position if we couldn't find a good spot
      return {
        x: Math.random() * 2000 - 1000,
        y: Math.random() * 2000 - 1000,
        z: Math.random() * 2000 - 1000,
      };
    };

    const existingPositions: { x: number; y: number; z: number }[] = [];

    techStack.forEach((tech) => {
      const position = generatePosition(existingPositions);
      existingPositions.push(position);

      const icon: TechIcon = {
        x: 0,
        y: 0,
        z: Math.random() * 1200 - 600,
        x3d: position.x,
        y3d: position.y,
        z3d: position.z,
        size: 20,
        speed: Math.random() * 0.2 + 0.1,
        rotationSpeed: Math.random() * 0.005 + 0.002,
        angle: Math.random() * Math.PI * 2,
        name: tech.name,
        loaded: false,
        image: new Image(),
      };

      icon.image.onload = () => {
        icon.loaded = true;
        loadedCount++;
        setIconsLoaded(loadedCount);

        if (loadedCount === techStack.length) {
          setAllIconsLoaded(true);
        }
      };

      icon.image.onerror = () => {
        console.error(`Failed to load icon: ${tech.name}`);
        loadedCount++;
        setIconsLoaded(loadedCount);

        if (loadedCount === techStack.length) {
          setAllIconsLoaded(true);
        }
      };

      icon.image.src = tech.iconPath;
      icons.push(icon);
    });

    techIconsRef.current = icons;

    // Create stars
    const starCount = 400;
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8,
        twinkle: Math.random() * 0.05 + 0.01,
      });
    }
    starsRef.current = stars;

    // Handle window resize
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = "#050A30";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      ctx.fillStyle = "white";
      starsRef.current.forEach((star) => {
        const twinkleSize =
          star.size * (1 + Math.sin(Date.now() * star.twinkle) * 0.5);
        ctx.beginPath();
        ctx.arc(star.x, star.y, twinkleSize, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update tech icons
      techIconsRef.current.forEach((icon) => {
        const mouseXInfluence =
          (mousePosition.x - window.innerWidth / 2) * 0.00008;
        const mouseYInfluence =
          (mousePosition.y - window.innerHeight / 2) * 0.00008;

        icon.angle += icon.rotationSpeed;

        const cosA = Math.cos(mouseXInfluence);
        const sinA = Math.sin(mouseXInfluence);
        const x3dNew = icon.x3d * cosA - icon.z3d * sinA;
        const z3dNew = icon.x3d * sinA + icon.z3d * cosA;
        icon.x3d = x3dNew;
        icon.z3d = z3dNew;

        const cosB = Math.cos(mouseYInfluence);
        const sinB = Math.sin(mouseYInfluence);
        const y3dNew = icon.y3d * cosB - icon.z3d * sinB;
        const z3dNew2 = icon.y3d * sinB + icon.z3d * cosB;
        icon.y3d = y3dNew;
        icon.z3d = z3dNew2;

        const scale = 800 / (icon.z3d + 2500);
        icon.x = icon.x3d * scale + window.innerWidth / 2;
        icon.y = icon.y3d * scale + window.innerHeight / 2;
        icon.size = scale * 180;
      });

      // Sort icons by z-depth
      techIconsRef.current.sort((a, b) => b.z3d - a.z3d);

      // Draw tech icons
      techIconsRef.current.forEach((icon) => {
        if (icon.loaded) {
          ctx.save();
          const size = icon.size;
          ctx.drawImage(
            icon.image,
            icon.x - size / 2,
            icon.y - size / 2,
            size,
            size
          );

          if (icon.z3d > 0) {
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            ctx.font = `${Math.max(16, icon.size / 3)}px Arial`;
            ctx.textAlign = "center";
            ctx.fillText(icon.name, icon.x, icon.y + icon.size / 2 + 24);
          }

          ctx.restore();
        } else {
          ctx.save();
          ctx.fillStyle = "#444";
          ctx.beginPath();
          ctx.arc(icon.x, icon.y, icon.size / 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      if (!allIconsLoaded) {
        const loadedPercent = (iconsLoaded / techStack.length) * 100;
        ctx.fillStyle = "white";
        ctx.font = "16px Arial";
        ctx.textAlign = "center";
        ctx.fillText(
          `Loading icons: ${loadedPercent.toFixed(0)}%`,
          canvas.width / 2,
          canvas.height / 2
        );
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition, iconsLoaded, allIconsLoaded]);

  return (
    <div className="tech-stack-galaxy">
      <div
        className="title"
        style={{
          position: "absolute",
          top: "20px",
          left: 0,
          width: "100%",
          textAlign: "center",
          color: "white",
          fontSize: "24px",
          textShadow: "0 0 10px rgba(0, 100, 255, 0.8)",
        }}
      >
        My Tech Stack Galaxy
      </div>
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          backgroundColor: "#050A30",
          width: "100%",
          height: "100vh",
        }}
      />
    </div>
  );
};

export default TechStackGalaxy;
