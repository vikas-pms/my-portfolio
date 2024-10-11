import React from 'react'

function ContactPage() {
  return (
    <>
    <section className="py-10 bg-black text-white ">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Contact Me</h2>
            <form className="max-w-md mx-auto">
                <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 border rounded bg-slate-600" />
                <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 border rounded bg-slate-600" />
                <textarea placeholder="Your Message" className="w-full p-2 mb-4 border rounded bg-slate-600"></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </section>
    </>
  )
}

export default ContactPage