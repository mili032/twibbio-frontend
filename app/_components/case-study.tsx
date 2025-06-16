"use client";

import { JSX } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Quote,
  TrendingUp,
  Users,
  Star,
  ArrowUpRight,
  Building2,
  Calendar,
  Target,
  BarChart3,
  CheckCircle2
} from "lucide-react";

interface CaseStudyData {
  id: string;
  company: {
    name: string;
    industry: string;
    size: string;
    logo?: string;
  };
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
  timeline: string;
  tags: string[];
}

const CaseStudy = (): JSX.Element => {
  const caseStudies: CaseStudyData[] = [
    {
      id: "1",
      company: {
        name: "Sample Marketing Agency",
        industry: "Marketing",
        size: "25 employees"
      },
      challenge: "Example: Needed a better way to showcase client success stories and turn positive feedback into compelling marketing content.",
      solution: "Example: Used Twibbio to automatically generate case studies and testimonials from client feedback, making it easy to create professional marketing materials.",
      results: [
        {
          metric: "Content Creation Time",
          value: "75%",
          improvement: "-75%"
        },
        {
          metric: "Case Studies Published",
          value: "3x",
          improvement: "+200%"
        },
        {
          metric: "Lead Generation",
          value: "45%",
          improvement: "+45%"
        }
      ],
      testimonial: {
        quote: "Sample quote: Twibbio transformed how we create case studies. What used to take days now takes minutes, and the quality is consistently excellent.",
        author: "Sarah Johnson",
        position: "Marketing Director"
      },
      timeline: "1 month",
      tags: ["Case Studies", "Content Generation", "Marketing"]
    },
    {
      id: "2",
      company: {
        name: "Sample Tech Company",
        industry: "SaaS",
        size: "100 employees"
      },
      challenge: "Example: Struggling to effectively share customer success stories across LinkedIn and other social channels to build brand credibility.",
      solution: "Example: Leveraged Twibbio to convert customer testimonials into engaging LinkedIn posts and social media content, enhancing brand visibility and engagement.",
      results: [
        {
          metric: "LinkedIn Engagement",
          value: "85%",
          improvement: "+85%"
        },
        {
          metric: "Social Reach",
          value: "10k+",
          improvement: "+150%"
        },
        {
          metric: "Conversion Rate",
          value: "32%",
          improvement: "+32%"
        }
      ],
      testimonial: {
        quote: "Sample quote: Twibbio helps us consistently create compelling social content that resonates with our audience and drives real business results.",
        author: "Michael Chen",
        position: "Social Media Manager"
      },
      timeline: "2 months",
      tags: ["Social Media", "LinkedIn", "Content Marketing"]
    },
    {
      id: "3",
      company: {
        name: "Sample Success Inc",
        industry: "Customer Success",
        size: "50 employees"
      },
      challenge: "Example: Finding it difficult to collect and organize customer testimonials in a way that made them useful for marketing and sales.",
      solution: "Example: Implemented Twibbio to streamline testimonial collection and automatically generate polished customer stories.",
      results: [
        {
          metric: "Testimonial Collection",
          value: "150+",
          improvement: "+200%"
        },
        {
          metric: "Sales Close Rate",
          value: "28%",
          improvement: "+28%"
        },
        {
          metric: "Marketing ROI",
          value: "3.5x",
          improvement: "+250%"
        }
      ],
      testimonial: {
        quote: "Sample quote: Twibbio simplified our entire testimonial process. We now have a constant stream of high-quality customer stories to fuel our marketing.",
        author: "Rebecca Torres",
        position: "Customer Success Lead"
      },
      timeline: "3 months",
      tags: ["Testimonials", "Customer Stories", "Sales Enablement"]
    }
  ];

  return (
    <section className="container grid items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl font-heading">
          Sample Use Cases
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          See how Twibbio can help businesses turn user feedback into valuable insights, case studies, and marketing content.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((caseStudy) => (
          <Card key={caseStudy.id} className="bg-card text-card-foreground shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold leading-none tracking-tight">
                {caseStudy.company.name}
              </CardTitle>
              <CardDescription>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Building2 className="mr-2 h-4 w-4" />
                  {caseStudy.company.industry}
                  <Separator orientation="vertical" className="mx-2 h-4" />
                  <Users className="mr-2 h-4 w-4" />
                  {caseStudy.company.size}
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center">
                  <Target className="mr-2 h-5 w-5 text-red-500" />
                  <h3 className="text-sm font-semibold">Challenge</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {caseStudy.challenge}
                </p>
                <div className="flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                  <h3 className="text-sm font-semibold">Solution</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {caseStudy.solution}
                </p>
                <div>
                  <div className="flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-indigo-500" />
                    <h3 className="text-sm font-semibold">Results</h3>
                  </div>
                  <ul className="list-none pl-0 mt-4">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="mb-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{result.metric}</span>
                          <div className="flex items-center">
                            <span className="mr-2 text-sm font-medium">{result.value}</span>
                            <Badge variant="outline">
                              <TrendingUp className="mr-1 h-3 w-3" />
                              {result.improvement}
                            </Badge>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export { CaseStudy };