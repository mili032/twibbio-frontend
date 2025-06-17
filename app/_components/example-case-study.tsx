"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { JSX } from "react";
import {
  MessageCircle,
  Target,
  Lightbulb,
  Trophy,
  LinkedinIcon,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ExampleCaseStudy = (): JSX.Element => {
  const rawFeedback =
    "I recently purchased a standing desk from ErgoDesk and it has completely transformed my work-from-home setup. I was having terrible back pain from sitting all day, but now I can easily switch between sitting and standing. The build quality is excellent and assembly was straightforward. Best investment I've made for my home office - my productivity has increased and my back pain is gone!";

  const testimonial =
    "The ErgoDesk standing desk has been a game-changer for my work-from-home setup. As someone who struggled with back pain from prolonged sitting, the ability to easily switch between sitting and standing positions has made a tremendous difference. The desk's excellent build quality and straightforward assembly process were impressive. Without a doubt, it's been the best investment for my home office, significantly boosting my productivity while eliminating my back pain.";

  return (
    <section className={`pt-8 md:pt-16`}>
      <h2 className="text-5xl font-bold text-center font-heading mb-8">
        Transforming Feedback into Success Stories
      </h2>
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <CardContent>
          <div className="mb-6 bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Raw Feedback:</h4>
            <p className="text-gray-600">{rawFeedback}</p>
          </div>
          <Tabs defaultValue="case-study" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="case-study">Case Study</TabsTrigger>
              <TabsTrigger value="testimonial">Testimonial</TabsTrigger>
              <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
            </TabsList>

            <TabsContent className={`mt-4`} value="case-study">
              <div className="space-y-6">
                <div className="bg-indigo-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="h-5 w-5 text-indigo-600" />
                    <h4 className="font-semibold">The Challenge</h4>
                  </div>
                  <p className="text-gray-600">
                    Chronic back pain and discomfort from extended sitting
                    periods were severely impacting a remote worker's health and
                    daily productivity.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Lightbulb className="h-5 w-5 text-purple-600" />
                    <h4 className="font-semibold">The Solution</h4>
                  </div>
                  <p className="text-gray-600">
                    Implementation of ErgoDesk's adjustable standing desk,
                    featuring easy height adjustment and premium build quality
                    for a seamless work experience.
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Trophy className="h-5 w-5 text-green-600" />
                    <h4 className="font-semibold">Key Outcomes</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-lg text-sm text-gray-600">
                      ✓ Eliminated Back Pain
                    </div>
                    <div className="bg-white p-3 rounded-lg text-sm text-gray-600">
                      ✓ Improved Productivity
                    </div>
                    <div className="bg-white p-3 rounded-lg text-sm text-gray-600">
                      ✓ Better Ergonomics
                    </div>
                    <div className="bg-white p-3 rounded-lg text-sm text-gray-600">
                      ✓ Enhanced Workflow
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent className={`mt-4`} value="testimonial">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-indigo-600" />
                  <h3 className="font-semibold text-lg">
                    Customer Testimonial
                  </h3>
                </div>
                <blockquote className="text-gray-600 italic border-l-4 border-indigo-200 pl-4">
                  {testimonial}
                </blockquote>
              </div>
            </TabsContent>

            <TabsContent className={`mt-4`} value="linkedin">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <LinkedinIcon className="h-6 w-6 text-blue-600" />
                  <h3 className="font-semibold text-lg">LinkedIn Post</h3>
                </div>
                <div className="text-gray-600 space-y-4">
                  <p>🎯 Game-changing Investment Alert! 🚀</p>
                  <p>
                    Just upgraded my home office with an ErgoDesk standing desk
                    and I had to share my experience:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>No more back pain</li>
                    <li>Seamless sitting/standing transitions</li>
                    <li>Premium build quality</li>
                    <li>Easy assembly</li>
                  </ul>
                  <p>
                    Result: Productivity through the roof! Best home office
                    investment I've made. 💪
                  </p>
                  <p>
                    #ProductivityHack #RemoteWork #HomeOffice #WellnessAtWork
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
};

export { ExampleCaseStudy };
