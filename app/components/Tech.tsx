import React from "react";

const Tech = () => {
  return (
    <div className="flex justify-center items-center bg-[#041464] w-full">
      <div className="text-white text-center text-4xl mt-3 mb-2">
        Techity Tech
        <div className="mt-5 mx-auto grid grid-cols-4 gap-20 mb-5">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            className="w-60 h-60"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            className="w-60 h-60"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
            className="w-60 h-60"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
            className="w-60 h-60"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
            className="w-60 h-60"
          />

          <img src="/hubspot.png" className="w-60 h-60" />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            className="w-60 h-60"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg"
            className="w-60 h-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Tech;
