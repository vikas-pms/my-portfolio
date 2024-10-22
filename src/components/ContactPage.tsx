"use client"
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function ContactPage() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_axvglji', 'template_6dqeb1t', form.current, 'sENjbhkYTd6wj8zqw')
        .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        }, (error) => {
          console.log(error.text);
          alert("Failed to send the message. Please try again later.");
        });
    }
  };

  return (
    <section id='contact' className="py-10 bg-gradient-to-r from-black to-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center text-blue-500 mb-8 animate-pulse">
        Contact Me
      </h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto p-6 rounded-lg shadow-lg bg-gray-800 border border-gray-700">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full p-3 mb-4 border rounded bg-gray-700 border-gray-600 focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 focus:scale-105"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 border rounded bg-gray-700 border-gray-600 focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 focus:scale-105"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 mb-4 border rounded bg-gray-700 border-gray-600 focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 focus:scale-105"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 transform hover:scale-105 focus:scale-105"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactPage;
