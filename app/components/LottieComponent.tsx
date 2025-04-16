"use client";
import { useEffect, useRef } from "react";
import "@dotlottie/player-component";

const LottieComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create the player element
    const player = document.createElement("dotlottie-player");
    player.setAttribute("src", "/github.lottie");
    player.setAttribute("autoplay", "");
    player.setAttribute("loop", "");
    player.style.width = "30%";
    player.style.height = "30%";

    // Add it to our container
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(player);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: "30%", height: "30%" }} />;
};

export default LottieComponent;
