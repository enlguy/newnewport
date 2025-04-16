"use client";

import React from "react";
import { useForm } from "react-hook-form";

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
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "There was an error sending your message. Please try again later."
        );
      });
  };

  return (
    <div className="container mx-auto py-8 bg-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto p-6 rounded-lg shadow-lg"
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
            <p className="text-red-500 text-sm mt-1">This field is required</p>
          )}
        </div>

        <div className="mb-4">
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
            <p className="text-red-500 text-sm mt-1">This field is required</p>
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
            <p className="text-red-500 text-sm mt-1">This field is required</p>
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
    </div>
  );
};

export default Contact;
