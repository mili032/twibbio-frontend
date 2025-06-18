"use client";

import { Bot, Mail, FileText, BarChart3, Globe, Zap } from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "Automatic Collection",
    description:
      "Email sequences and embedded widgets automatically collect feedback from users after purchase or interaction.",
  },
  {
    icon: Bot,
    title: "NLP Analysis",
    description:
      "Advanced sentiment analysis and automatic user grouping by satisfaction level.",
  },
  {
    icon: FileText,
    title: "Content Generation",
    description:
      "Transforms raw feedback into testimonials, case studies, LinkedIn posts and blog articles.",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description:
      "Tracks performance, conversions, response rates and identifies the most successful email campaigns.",
  },
  {
    icon: Globe,
    title: "Multi-language",
    description:
      "Automatically translates testimonials into different languages for global presence.",
  },
  {
    icon: Zap,
    title: "Integrations",
    description:
      "Connects with CRMs, Shopify, WooCommerce, Zapier and other automation tools.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">
            Everything you need for feedback automation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From collection to analysis and content generation - Twibbio covers
            the entire customer feedback management process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Features };
