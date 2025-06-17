"use client";
import { JSX } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Separator,
  Badge,
} from "@/components/ui";
import {
  Zap,
  MessageCircle,
  BarChart3,
  Settings,
  Brain,
  Shield,
  ExternalLink,
} from "lucide-react";

const TwibbioWidget = (): JSX.Element => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 rounded-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with SVG */}
        <div className="text-center space-y-8 mb-16">
          <Badge
            variant="secondary"
            className="text-sm px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
          >
            ✨ Feedback Collection Widget
          </Badge>

          {/* SVG Illustration */}
          <div className="flex justify-center mb-8">
            <svg
              width="300"
              height="250"
              viewBox="0 0 300 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-lg"
            >
              {/* Background Circle */}
              <circle
                cx="150"
                cy="125"
                r="120"
                fill="url(#gradient1)"
                opacity="0.1"
              />

              {/* Main Device */}
              <rect
                x="80"
                y="60"
                width="140"
                height="100"
                rx="12"
                fill="url(#gradient2)"
                stroke="#e2e8f0"
                strokeWidth="2"
              />

              {/* Screen */}
              <rect
                x="90"
                y="70"
                width="120"
                height="80"
                rx="6"
                fill="#ffffff"
              />

              {/* Chat Bubbles */}
              <rect
                x="100"
                y="80"
                width="60"
                height="15"
                rx="7"
                fill="#3b82f6"
              />
              <rect
                x="110"
                y="100"
                width="80"
                height="15"
                rx="7"
                fill="#e5e7eb"
              />
              <rect
                x="100"
                y="120"
                width="70"
                height="15"
                rx="7"
                fill="#3b82f6"
              />

              {/* Floating Elements */}
              <circle cx="220" cy="80" r="8" fill="#10b981" opacity="0.8" />
              <rect
                x="215"
                y="75"
                width="10"
                height="10"
                rx="2"
                fill="#ffffff"
              />

              <circle cx="60" cy="140" r="6" fill="#f59e0b" opacity="0.8" />
              <rect x="57" y="137" width="6" height="6" rx="1" fill="#ffffff" />

              {/* Stars */}
              <path
                d="M240 120 L242 126 L248 126 L243 130 L245 136 L240 132 L235 136 L237 130 L232 126 L238 126 Z"
                fill="#fbbf24"
              />
              <path
                d="M50 100 L51 103 L54 103 L52 105 L53 108 L50 106 L47 108 L48 105 L46 103 L49 103 Z"
                fill="#fbbf24"
              />

              {/* Connection Lines */}
              <path
                d="M150 60 Q180 40 220 80"
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                opacity="0.6"
              />
              <path
                d="M150 160 Q120 180 60 140"
                stroke="#10b981"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                opacity="0.6"
              />

              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient
                  id="gradient2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f8fafc" />
                  <stop offset="100%" stopColor="#e2e8f0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-indigo-500 font-heading">
              Twibbio Widget
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
              Transform your website into a feedback powerhouse with our
              intelligent widget that captures, analyzes, and converts user
              insights into actionable data
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold">
                Lightning Fast Setup
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-base leading-relaxed">
                Deploy our widget in under 2 minutes with a simple code snippet.
                No complex configurations or technical expertise required.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold">
                Smart Feedback Collection
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-base leading-relaxed">
                Our AI model summarizes and recommends a well-crafted feedback
                based on user input.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold">Analytics</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-base leading-relaxed">
                Track and analyze feedback metrics, including the number of
                submissions and conversion rate of visitors who initially
                skipped but later provided valuable reviews.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold">
                Full Customization
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-base leading-relaxed">
                Customize the widget's appearance, behavior, and positioning to
                your needs with our intuitive settings panel.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-400 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold">
                AI-Powered Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-base leading-relaxed">
                Leverage artificial intelligence to generate insights, write
                e-mail sequences, and create marketing assets from user
                feedback.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold">
                Integrations
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-base leading-relaxed">
                Seamlessly integrate with social media platforms to share
                feedback, testimonials, and case studies.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-16" />

        {/* How it Works Section */}
        <div className="text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent font-heading">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-semibold">Quick Integration</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Copy our lightweight script and paste it into your website.
                  The widget automatically adapts to your site's design and
                  starts collecting feedback immediately.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-semibold">Smart Collection</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Users provide feedback through our intuitive interface. AI
                  automatically categorizes responses and identifies key
                  insights in real-time.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-semibold">Actionable Results</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Access comprehensive analytics, generate reports, and
                  transform feedback into marketing assets like testimonials and
                  case studies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TwibbioWidget };
