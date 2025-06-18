"use client";
import { JSX } from "react";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mark Peterson",
    role: "CEO, TechStart",
    company: "SaaS Company",
    content:
      "Twibbio transformed how we collect and use feedback. Our conversions increased by 150% in the first 3 months.",
    rating: 5,
    avatar: "MP",
  },
  {
    name: "Anna Nicole",
    role: "Marketing Manager",
    company: "E-commerce",
    content:
      "Finally we have a system that automatically generates quality testimonials. Saves us hours of work every week.",
    rating: 5,
    avatar: "AN",
  },
  {
    name: "Steven Johnson",
    role: "Founder",
    company: "Digital Agency",
    content:
      "Clients are thrilled with the analytics we get. Twibbio helps us provide them with better service.",
    rating: 5,
    avatar: "SJ",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">
            What our customers say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have increased their
            results with Twibbio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative flex flex-col"
            >
              <Quote className="w-8 h-8 text-blue-200 absolute top-4 right-4" />

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-blue-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Testimonials };
