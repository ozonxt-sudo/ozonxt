
import React from 'react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 h-full flex flex-col">
      <p className="text-gray-600 italic flex-grow">"{testimonial.quote}"</p>
      <div className="mt-6 flex items-center">
        <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
        <div className="ml-4">
          <p className="font-bold text-ozonxt-blue-dark">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
