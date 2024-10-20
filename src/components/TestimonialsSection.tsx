"use client";

import Image from 'next/image';
import React from 'react';

interface Testimonial {
  name: string;
  feedback: string;
  office: string;
  profession: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Muklas Spielberg",
    feedback:
      "Ciptadaya provided excellent service and helped us transition to solar energy seamlessly. Their expertise and commitment to sustainability are truly commendable. I couldn't have asked for a better partner in this transition.",
    office: "Hawthorne Heights Ltd",
    profession: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Yuni Tarantino",
    feedback:
      "Their wind energy solutions have significantly reduced our energy costs. Highly recommend! The team was incredibly supportive throughout the process, and they have truly changed the way we think about energy consumption.",
    office: "Green Tech Solutions",
    profession: "Operations Director",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Asep Kar Wai",
    feedback:
      "The team is professional and dedicated. We love our new energy storage system! From the initial consultation to installation, every step was smooth. Our energy independence has greatly improved.",
    office: "Eco Innovations",
    profession: "Lead Engineer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-10 px-5 overflow-x-hidden overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Client Testimonials</h2>
        <div className="flex flex-col gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6"
            >
              {/* Image Section */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name}'s photo`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center md:text-left">
                <p className="italic text-base md:text-lg text-left leading-relaxed"> 
                  &quot;{testimonial.feedback}&quot;
                </p>
                <p className="mt-4 font-bold">
                  - {testimonial.name},{' '}
                  <span className="font-medium">
                    {testimonial.office}, {testimonial.profession}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
