"use client";
import { useEffect, useRef } from "react";

const LottieComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import("@dotlottie/player-component").then(() => {
      if (!containerRef.current) return;

      // Create the player element
      const player = document.createElement("dotlottie-player");
      player.setAttribute("src", "/github.lottie");
      player.setAttribute("autoplay", "");
      player.setAttribute("loop", "");
      player.style.width = "70%";
      player.style.height = "70%";

      // Add it to our container
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(player);
    });

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: "70%", height: "70%" }} />;
};

export default LottieComponent;
