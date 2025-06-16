"use client";

import { JSX } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
  Badge,
  Button,
} from "@/components/ui";
import {
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Target,
  Zap,
  TrendingUp,
} from "lucide-react";

const ProblemSolution = (): JSX.Element => {
  const problems = [
    {
      title: "Ineffective Feedback Management",
      description:
        "Businesses collect feedback but struggle to organize and analyze it effectively",
      impact: "Missed opportunities for improvement",
    },
    {
      title: "Poor Customer Engagement",
      description:
        "Limited tools to engage customers and gather meaningful insights, leading to low participation rates",
      impact: "Reduced customer satisfaction",
    },
    {
      title: "Lack of Actionable Insights",
      description:
        "Raw feedback data without proper analysis and recommendations",
      impact: "Stagnant business growth",
    },
  ];

  const solutions = [
    {
      title: "Intelligent Feedback Processing",
      description:
        "Advanced AI algorithms transform raw feedback into structured, actionable insights",
      benefit: "Faster decision making",
      icon: <Zap className={`h-6 w-6`} />,
    },
    {
      title: "Enhanced Customer Engagement",
      description:
        "Interactive tools and personalized experiences to boost customer participation",
      benefit: "Higher engagement rates",
      icon: <Target className={`h-6 w-6`} />,
    },
    {
      title: "Data-Driven Growth",
      description:
        "Comprehensive analytics and reporting to drive strategic business decisions",
      benefit: "Measurable improvements",
      icon: <TrendingUp className={`h-6 w-6`} />,
    },
  ];

  return (
    <section className={`py-8 md:py-16`}>
      <div className={`text-center mb-8 md:mb-16`}>
        <Badge variant="outline" className={`mb-4`}>
          Problem & Solution
        </Badge>
        <h1
          className={`text-4xl md:text-6xl font-bold mb-6 text-foreground font-heading`}
        >
          Transforming Feedback Into Growth
        </h1>
        <p
          className={`text-lg font-light text-muted-foreground max-w-3xl mx-auto`}
        >
          Discover how Twibbio addresses critical business challenges and
          delivers innovative solutions
        </p>
      </div>

      <div className={`mb-8 md:mb-16`}>
        <div className={`flex items-center gap-3 mb-8`}>
          <div
            className={`rounded-full p-2 size-12 flex items-center justify-center bg-red-100 text-red-600`}
          >
            <AlertTriangle className={`h-8 w-8 text-destructive`} />
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold font-heading`}>
            The Problem
          </h2>
        </div>

        <p
          className={`text-lg mb-8 text-muted-foreground max-w-4xl !font-normal`}
        >
          Businesses often struggle to effectively leverage user feedback,
          leading to missed opportunities for growth and improvement.
          Traditional feedback systems are fragmented, difficult to analyze, and
          fail to provide actionable insights.
        </p>

        <div className={`grid md:grid-cols-3 gap-6`}>
          {problems.map((problem, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className={`text-lg flex items-start gap-2`}>
                  <AlertTriangle
                    className={`h-5 w-5 text-destructive mt-0.5 flex-shrink-0`}
                  />
                  {problem.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`mb-3`}>
                  {problem.description}
                </CardDescription>
                <Badge
                  variant="destructive"
                  className={`text-xs bg-red-100 text-red-800 border-red-200`}
                >
                  {problem.impact}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className={`my-8 md:my-16`} />

      <div className={`mb-8 md:mb-16`}>
        <div className={`flex items-center gap-3 mb-8`}>
          <div
            className={`rounded-full p-2 size-12 flex items-center justify-center bg-green-100`}
          >
            <CheckCircle className={`h-8 w-8 text-green-600`} />
          </div>

          <h2 className={`text-3xl md:text-4xl font-bold font-heading`}>
            The Solution
          </h2>
        </div>

        <p className={`text-lg mb-8 text-muted-foreground max-w-4xl`}>
          Twibbio provides a comprehensive platform that transforms raw feedback
          into actionable insights, enhancing customer engagement and driving
          innovation through intelligent analysis and seamless integration.
        </p>

        <div className={`grid md:grid-cols-3 gap-6`}>
          {solutions.map((solution, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className={`text-lg flex items-start gap-2`}>
                  <div className={`text-green-600`}>{solution.icon}</div>
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`mb-3`}>
                  {solution.description}
                </CardDescription>
                <Badge
                  variant="secondary"
                  className={`bg-green-100 text-green-800 border-green-200`}
                >
                  {solution.benefit}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className={`text-center`}>
        <Card
          className={`max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200`}
        >
          <CardHeader>
            <CardTitle className={`text-2xl font-heading`}>
              Ready to Transform Your Feedback?
            </CardTitle>
            <CardDescription className={`text-base`}>
              Start using Twibbio today to turn feedback into growth
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center`}>
              <Button
                size="lg"
                className={`bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full`}
              >
                Get Started Free
                <ArrowRight className={`ml-2 h-4 w-4`} />
              </Button>
              <Button variant="outline" size="lg" className={`rounded-full`}>
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { ProblemSolution };
