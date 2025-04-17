"use client";
import { useEffect, useRef } from "react";
import "@dotlottie/player-component";

const LottieComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create the player element
    const player = document.createElement("dotlottie-player");
    player.setAttribute("src", "/linkedin.lottie");
    player.setAttribute("autoplay", "");
    player.setAttribute("loop", "");
    player.style.width = "70%";
    player.style.height = "70%";

    // Add it to our container
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(player);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: "70%", height: "70%" }} />;
};

export default LottieComponent;
