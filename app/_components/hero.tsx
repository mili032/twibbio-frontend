"use client";
import { JSX } from "react";
import { Button } from "@/components/ui";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  MessageSquare,
  Play,
  Star,
  TrendingUp,
} from "lucide-react";

const Hero = (): JSX.Element => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center pt-20">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 mr-2" />
              Smart Feedback Automation
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-[100%] font-heading">
              Turn feedback into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                powerful content
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Twibbio automatically collects, analyzes and converts customer
              reviews into testimonials, case studies and marketing content that
              increases conversions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              >
                Start Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <span className="ml-3 text-gray-600">
                Join 500+ happy customers
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Real-time Analytics</h3>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">92%</div>
                    <div className="text-sm text-gray-600">Email Response</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">156</div>
                    <div className="text-sm text-gray-600">
                      New Testimonials
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      2.3x
                    </div>
                    <div className="text-sm text-gray-600">
                      Conversion Increase
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">
                      4.8★
                    </div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
