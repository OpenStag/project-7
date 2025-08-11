import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-center ">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/book1.jpg" // Replace with the actual path to your image
            alt="Bookshelf background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="object-cover w-full h-full blur-xs"
          />
          <div className="absolute inset-0 "></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-white p-4">
          <h1 className="text-4xl md:text-6xl lg:text-[56px] font-black leading-tight tracking-normal mb-4 text-white">
            Welcome to <span className="text-[#F8B600]">Book Haven</span>
          </h1>
          <p className="font-black text-2xl md:text-4xl lg:text-[23px] leading-tight tracking-normal mb-8 max-w-2xl mx-auto">
            Discover stories that inspire, educate, and entertain.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white-900 font-bold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300">
            Explore Book
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-[#AABEE7] py-16">
        <div className="container mx-auto p-8 max-w-4xl text-black bg-white rounded-lg shadow-lg">
          {/* Heading */}
          <h2 className="text-4xl text-black font-bold text-center mb-8">About Us</h2>

          {/* First Paragraph */}
          <p className="text-lg mb-6">
            <span className="font-bold">At Book Haven,</span> we believe every book holds the power to change lives. Since our founding in 2020, we've grown into a cozy community hub for readers of all ages. Whether you're into gripping thrillers, heartwarming romance, children's stories, or educational reads—we have something for everyone.
          </p>

          {/* Second Paragraph */}
          <p className="text-lg mb-6">
            Our mission is to promote a love for reading and make books accessible to all.
          </p>

          {/* Quote */}
          <p className="italic text-lg text-center mt-8">
            "A room without books is like a body without a soul." —Cicero
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;