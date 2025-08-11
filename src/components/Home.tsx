import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/home.png"
            alt="Bookshelf background"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            priority
            className="scale-105"
          />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-white p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-normal mb-6 drop-shadow-2xl">
            Welcome to <span className="text-[#F8B600] drop-shadow-lg">Book Haven</span>
          </h1>
          <p className="font-semibold text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-normal mb-10 max-w-3xl mx-auto drop-shadow-xl">
            Discover stories that inspire, educate, and entertain.
          </p>
          <button className="bg-[#F8B600] hover:bg-yellow-600 text-gray-900 font-bold py-4 px-10 rounded-lg shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-400/25 text-lg">
            Explore Books
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-[#AABEE7] py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center mb-8 text-black">About Us</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* First Paragraph */}
            <p className="text-lg mb-6 text-black">
              <span className="font-bold italic">At Book Haven,</span> we believe every book holds the power to change lives. Since our founding in 2020, we've grown into a cozy community hub for readers of all ages. Whether you're into gripping thrillers, heartwarming romance, children's stories, or educational reads—we have something for everyone.
            </p>

            {/* Second Paragraph */}
            <p className="text-lg mb-6 text-black">
              Our mission is to promote a love for reading and make books accessible to all.
            </p>

            {/* Quote */}
            <p className="italic text-lg text-center mt-8 text-black">
              "A room without books is like a body without a soul." — Cicero
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;