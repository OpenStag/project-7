import React from 'react';

const ContactUs = () => {
  return (
    <section className="min-h-screen bg-white py-12 px-4 md:px-20 text-black" id="contact">

      <h2 className="text-5xl font-extrabold text-center mb-6">Get in Touch</h2>
      <p className="text-xl text-center mb-10 font-bold">
        Have a question, suggestion, or book request? We'd love to hear from you.
      </p>

      <div className=" flex flex-auto md:grid-cols-2 gap-8 w-6xl  mx-auto text-black">
        {/* Contact Form */}
        <div className='flex flex-auto items-center justify-center'>
        <form className="bg-gray-100 p-6 h-100 w-120 rounded-lg shadow-md items-center justify-center">

          <div className="mb-4">
            <label className="block mb-1 font-bold text-xl">Name</label>
            <input
              type="text"
              className="w-full  bg-white border-0 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-bold text-xl">Email</label>
            <input
              type="email"
              className="w-full  bg-white border-0 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-bold text-xl">Message</label>
            <textarea
              
              className="w-full  bg-white border-0 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-900 text-white px-4 py-2 rounded hover:bg-red-800 transition"
          >
            Send Message
          </button>
        </form>
        </div>

        {/* Contact Details */}
        <div className="text-left space-y-6 pl-36  pr-15 align-middle">
          <div>
            <h3 className="text-2xl font-bold">Visit Us</h3>
            <p className='text-xl font-bold'>123 Main Street, Colombo, Sri Lanka</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Call Us</h3>
            <p className='text-xl font-bold'>+94 711519402</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Email Us</h3>
            <p className='text-xl font-bold'>openstage.org@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
