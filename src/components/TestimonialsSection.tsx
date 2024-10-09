// src/components/TestimonialsSection.tsx
import React from 'react';

const testimonials = [
  {
    name: "John Doe",
    feedback: "Renewable Energy Co. provided excellent service and helped us transition to solar energy seamlessly.",
  },
  {
    name: "Jane Smith",
    feedback: "Their wind energy solutions have significantly reduced our energy costs. Highly recommend!",
  },
  {
    name: "Mike Johnson",
    feedback: "The team is professional and dedicated. We love our new energy storage system!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-10 px-5 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-5">What Our Clients Say</h2>
      <div className="flex flex-col space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border p-4 rounded-lg shadow">
            <p className="italic">"{testimonial.feedback}"</p>
            <p className="mt-2 font-bold text-right">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
