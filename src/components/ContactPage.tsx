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
    <section className="py-10 bg-black text-white ">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
        <input type="text" name="user_name" placeholder="Your Name" className="w-full p-2 mb-4 border rounded bg-slate-600" required />
        <input type="email" name="user_email" placeholder="Your Email" className="w-full p-2 mb-4 border rounded bg-slate-600" required />
        <textarea name="message" placeholder="Your Message" className="w-full p-2 mb-4 border rounded bg-slate-600" required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </section>
  );
}

export default ContactPage;
