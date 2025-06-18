"use client";
import { Clock, TrendingUp, Users, Shield } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description:
      "Automates the entire process from feedback collection to formatting",
    stat: "80% less time",
  },
  {
    icon: TrendingUp,
    title: "Increase Conversions",
    description: "Uses authentic customer words for better sales",
    stat: "2.3x more conversions",
  },
  {
    icon: Users,
    title: "Better User Understanding",
    description: "Deep analysis of user behavior and impressions",
    stat: "92% accuracy",
  },
  {
    icon: Shield,
    title: "Professional",
    description: "Removes manual work and human errors from the process",
    stat: "99.9% uptime",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">
            Why choose Twibbio?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their approach to
            customer feedback and increased sales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto group-hover:shadow-xl transition-shadow duration-300">
                  <benefit.icon className="w-10 h-10 text-blue-600" />
                </div>
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {benefit.stat}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Benefits };
