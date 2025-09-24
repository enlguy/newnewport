"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import LottieComponentLeft from "./LottieComponentLeft";
import LottieComponentRight from "./LottieComponentRight";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    // Formspree submission URL
    const formspreeUrl = "https://formspree.io/f/meoajgqe";

    fetch(formspreeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Message sent successfully!");
        reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "There was an error sending your message. Please try again later."
        );
      });
  };

  return (
    <div className="container mx-auto py-8 bg-white mt-30">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact</h1>
      <div className="flex flex-col md:flex-row items-center justify-between gap-20">
        <div className="flex-1 flex justify-center">
          <Link
            href="https://github.com/enlguy"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-25"
          >
            <LottieComponentLeft />
          </Link>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-2 max-w-lg mx-auto p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: true })}
              className="w-full mt-2 p-3 border rounded-lg"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                This field is required
              </p>
            )}
          </div>

          <div id="contact" className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: true })}
              className="w-full mt-2 p-3 border rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                This field is required
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              {...register("message", { required: true })}
              className="w-full mt-2 p-3 border rounded-lg"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                This field is required
              </p>
            )}
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="flex-1 flex justify-center">
          <Link
            href="https://linkedin.com/in/jack-epner"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LottieComponentRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
