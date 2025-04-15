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
  { name: "react", iconPath: "/icons/react.svg" },
  {
    name: "NextJS",
    iconPath:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  { name: "typescript", iconPath: "/icons/typescript.svg" },
  { name: "node", iconPath: "/icons/nodejs.svg" },
  { name: "html5", iconPath: "/icons/html5.svg" },
  { name: "css3", iconPath: "/icons/css3.svg" },
  { name: "nextjs", iconPath: "/icons/nextjs.svg" },
  { name: "tailwind", iconPath: "/icons/tailwind.svg" },
  { name: "git", iconPath: "/icons/git.svg" },
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

    techStack.forEach((tech, index) => {
      const angle = (index / techStack.length) * Math.PI * 10;
      const radius = 300 + Math.random() * 100;

      const icon: TechIcon = {
        x: 0,
        y: 0,
        z: Math.random() * 1000 + 500,
        x3d: Math.cos(angle) * radius,
        y3d: Math.sin(angle) * radius,
        z3d: Math.random() * 500 - 250,
        size: 4,
        speed: Math.random() * 0.5 + 0.2,
        rotationSpeed: Math.random() * 0.02 + 0.01,
        angle: 0,
        name: tech.name,
        loaded: false,
        image: new Image(),
      };

      // Load the icon image
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
        // Still mark as loaded to avoid hanging
        loadedCount++;
        setIconsLoaded(loadedCount);

        if (loadedCount === techStack.length) {
          setAllIconsLoaded(true);
        }
      };

      // Set src after defining handlers
      icon.image.src = tech.iconPath;

      icons.push(icon);
    });

    techIconsRef.current = icons;

    // Create stars
    const starCount = 200;
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.25,
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

    // Cleanup function
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
        // Make stars twinkle
        const twinkleSize =
          star.size * (1 + Math.sin(Date.now() * star.twinkle) * 0.5);
        ctx.beginPath();
        ctx.arc(star.x, star.y, twinkleSize, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update tech icons
      techIconsRef.current.forEach((icon) => {
        // Mouse influence
        const mouseXInfluence =
          (mousePosition.x - window.innerWidth / 2) * 0.0001;
        const mouseYInfluence =
          (mousePosition.y - window.innerHeight / 2) * 0.0001;

        // Rotate in 3D space
        icon.angle += icon.rotationSpeed;

        // Apply rotation in X-Z plane (horizontal)
        const cosA = Math.cos(mouseXInfluence);
        const sinA = Math.sin(mouseXInfluence);
        const x3dNew = icon.x3d * cosA - icon.z3d * sinA;
        const z3dNew = icon.x3d * sinA + icon.z3d * cosA;
        icon.x3d = x3dNew;
        icon.z3d = z3dNew;

        // Apply rotation in Y-Z plane (vertical)
        const cosB = Math.cos(mouseYInfluence);
        const sinB = Math.sin(mouseYInfluence);
        const y3dNew = icon.y3d * cosB - icon.z3d * sinB;
        const z3dNew2 = icon.y3d * sinB + icon.z3d * cosB;
        icon.y3d = y3dNew;
        icon.z3d = z3dNew2;

        // Project 3D position to 2D screen
        const scale = 500 / (icon.z3d + 1500); // Perspective projection
        icon.x = icon.x3d * scale + window.innerWidth / 2;
        icon.y = icon.y3d * scale + window.innerHeight / 2;
        icon.size = scale * 30; // Larger size for icons
      });

      // Sort icons by z-depth for proper rendering (furthest first)
      techIconsRef.current.sort((a, b) => b.z3d - a.z3d);

      // Draw tech icons
      techIconsRef.current.forEach((icon) => {
        if (icon.loaded) {
          ctx.save();
          // Draw the icon image
          const size = icon.size;
          ctx.drawImage(
            icon.image,
            icon.x - size / 2,
            icon.y - size / 2,
            size,
            size
          );

          // Optional: Add name label under icon
          if (icon.z3d > 0) {
            // Only show label for icons in front
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            ctx.font = `${Math.max(10, icon.size / 3)}px Arial`;
            ctx.textAlign = "center";
            ctx.fillText(icon.name, icon.x, icon.y + icon.size / 2 + 15);
          }

          ctx.restore();
        } else {
          // Placeholder while loading
          ctx.save();
          ctx.fillStyle = "#444";
          ctx.beginPath();
          ctx.arc(icon.x, icon.y, icon.size / 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      // Loading indicator if not all icons are loaded
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

      // Continue animation
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup animation on unmount
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
      <div
        className="info"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "10px",
          borderRadius: "5px",
          fontSize: "14px",
        }}
      >
        Move your mouse to interact with the galaxy
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
