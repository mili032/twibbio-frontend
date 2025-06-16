"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JSX } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Separator,
} from "@/components/ui";

const faqs = [
  {
    question: "What is Twibbio?",
    answer:
      "Twibbio is a powerful tool that helps businesses transform user feedback into valuable marketing assets such as case studies, testimonials, and social media content.",
  },
  {
    question: "How does Twibbio work?",
    answer:
      "Twibbio collects and analyzes user feedback, then uses advanced processing to convert it into various content formats that you can use for marketing and business growth.",
  },
  {
    question: "Is Twibbio free to use?",
    answer:
      "Yes, Twibbio offers a free tier that allows you to try out the core features. Premium features are available through paid subscriptions.",
  },
  {
    question: "Can I export the generated content?",
    answer:
      "Yes, you can export your generated content in multiple formats suitable for different platforms and use cases.",
  },
  {
    question: "How secure is my data with Twibbio?",
    answer:
      "We take data security seriously. All data is encrypted and stored securely, and we comply with industry-standard security practices.",
  },
];

const FAQ = (): JSX.Element => {
  return (
    <section className="py-8 md:py-16">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>
            <h2 className="text-3xl md:text-4xl font-bold text-center font-heading">
              Frequently Asked Questions
            </h2>
          </CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
};

export { FAQ };
