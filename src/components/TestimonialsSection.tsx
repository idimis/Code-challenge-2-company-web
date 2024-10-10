// src/components/TestimonialsSection.tsx
import React from 'react';

// Sample testimonials with additional information
const testimonials = [
  {
    name: "John Doe",
    feedback: "Renewable Energy Co. provided excellent service and helped us transition to solar energy seamlessly. Their expertise and commitment to sustainability are truly commendable. I couldn't have asked for a better partner in this transition.",
    office: "Renewable Energy Co.",
    profession: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    feedback: "Their wind energy solutions have significantly reduced our energy costs. Highly recommend! The team was incredibly supportive throughout the process, and they have truly changed the way we think about energy consumption.",
    office: "Green Tech Solutions",
    profession: "Operations Director",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Mike Johnson",
    feedback: "The team is professional and dedicated. We love our new energy storage system! From the initial consultation to installation, every step was smooth. Our energy independence has greatly improved.",
    office: "Eco Innovations",
    profession: "Lead Engineer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-10 px-5 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-5">What Our Clients Say</h2>
      <div className="flex flex-col space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border p-6 rounded-lg shadow flex items-start space-x-4">
            <img src={testimonial.image} alt={`${testimonial.name}'s photo`} className="w-16 h-16 rounded-full" />
            <div className="flex-1">
              <p className="italic text-lg">"{testimonial.feedback}"</p>
              <p className="mt-2 font-bold text-right">
                - {testimonial.name}, <span className="font-medium">{testimonial.office}, {testimonial.profession}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
