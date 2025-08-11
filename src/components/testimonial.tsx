import React from 'react';

interface TestimonialData {
  name: string;
  review: string;
  rating: number;
}

const Testimonial: React.FC = () => {
  const testimonials: TestimonialData[] = [
    {
      name: "Shalini R.",
      review: "Such a peaceful little shop! I always find something new and the staff are so helpful.",
      rating: 5
    },
    {
      name: "Nimal K.",
      review: "Great prices and excellent book recommendations. My kids love the children's corner!",
      rating: 5
    },
    {
      name: "Akash P.",
      review: "Book Haven has become my monthly treat. They even ordered a rare book just for me!",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-2xl ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="bg-blue-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black leading-none text-center text-gray-800 mb-12">
          What Our Readers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex justify-start mb-6">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Review Text */}
              <blockquote className="text-gray-800 text-lg italic mb-6 leading-relaxed">
                "{testimonial.review}"
              </blockquote>
              
              {/* Author Name */}
              <div className="text-gray-800 font-semibold text-lg">
                — {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;