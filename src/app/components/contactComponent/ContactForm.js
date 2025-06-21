"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Loader } from "rsuite";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    // TODO: send form data to backend or API

    emailjs
      .send(
        "service_wadew4d", // Replace with Email.js service ID
        "template_pe2qd0m", // Replace with Email.js template ID
        formData,
        "tG6JhuQ9EkeZzXpmv" // Replace with Email.js public key
      )
      .then(() => {
        // console.log("Form submitted:", formData);

        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
      })
      .catch(() => {
        alert("Failed to send message. Try again!");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto p-6 space-y-4 px-11"
      //   className="w-full max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-4 px-11"
    >
      <div>
        <label className="block font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div>
        <label className="block font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div>
        <label className="block font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div>
        <label className="block font-medium text-gray-700">Message</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-700 transition"
      >
        <span className={`${isLoading ? "hidden" : "inline-block"} `}>
          Submit
        </span>
        <span className={` ${isLoading ? "inline-block" : "hidden"} `}>
          <Loader size="xs" />
        </span>
      </button>
    </form>
  );
}
