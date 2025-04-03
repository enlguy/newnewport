import React from "react";

const Tech = () => {
  return (
    <div className="flex justify-center items-center bg-[#041464] w-full">
      <div className="mt-3 mx-auto grid grid-cols-4 gap-20">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
          className="w-68 h-68"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          className="w-68 h-68"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
          className="w-68 h-68"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
          className="w-68 h-68"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
          className="w-68 h-68"
        />

        <img src="/hubspot.png" className="w-68 h-68" />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          className="w-68 h-68"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg"
          className="w-68 h-68"
        />
      </div>
    </div>
  );
};

export default Tech;
