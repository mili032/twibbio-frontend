"use client";
import { JSX, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils"; // Make sure to import your utility function for classnames
import { Pricing } from "@/app/pricing/_components/pricing";
import { Layout } from "@/components/ui";

const plans = [
  {
    id: "free",
    title: "Hobby",
    description: "For personal projects and experiments.",
    price: {
      monthly: 0,
    },
    features: [
      {
        id: "generations",
        text: "%d monthly generations",
        value: 5,
        included: true,
      },
      { text: "Basic analytics", included: true },
      { text: "Email support", included: true },
      { text: "Priority support", included: false },
      { text: "Custom integrations", included: false },
    ],
    buttonText: "Start for Free",
    buttonVariant: "outline" as const,
  },
  {
    id: "standard",
    title: "Pro",
    description: "For professionals and small teams.",
    price: {
      monthly: 29,
    },
    features: [
      {
        id: "generations",
        text: "%d monthly generations",
        value: 50,
        included: true,
      },
      { text: "Advanced analytics", included: true },
      { text: "Priority email support", included: true },
      { text: "Custom branding", included: true },
      { text: "Custom integrations", included: false },
    ],
    buttonText: "Get Started",
    buttonVariant: "default" as const,
    featured: true,
  },
  {
    id: "premium",
    title: "Enterprise",
    description: "For large-scale applications and businesses.",
    price: {
      monthly: 99,
    },
    features: [
      {
        id: "generations",
        text: "Unlimited generations",
        value: Infinity,
        included: true,
      },
      { text: "Advanced analytics", included: true },
      { text: "24/7 priority support", included: true },
      { text: "Custom branding", included: true },
      { text: "Custom integrations & API", included: true },
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
  },
];

const Index = (): JSX.Element => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <Layout>
      <section className="w-full bg-background py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Flexible pricing for teams of all sizes
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that's right for you. Get more value and a
              discount by signing up for a yearly plan.
            </p>
          </div>

          {/* Billing Cycle Toggle */}
          <div className="flex justify-center mb-10">
            <Tabs
              value={billingCycle}
              onValueChange={(value: string) =>
                setBillingCycle(value as "monthly" | "yearly")
              }
              className="w-auto"
            >
              <TabsList>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly (Save 25%)</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => {
              const yearlyPrice = Math.round(plan.price.monthly * 12 * 0.75);
              const displayPrice =
                billingCycle === "monthly" ? plan.price.monthly : yearlyPrice;

              return (
                <Card
                  key={plan.id}
                  className={cn(
                    "flex flex-col rounded-xl shadow-lg transition-transform duration-300",
                    "featured" in plan && plan.featured
                      ? "bg-primary text-primary-foreground -translate-y-4 ring-4 ring-primary/50"
                      : "bg-card",
                  )}
                >
                  <CardHeader className="text-center border-b">
                    <CardTitle className="text-2xl font-bold mb-1">
                      {plan.title}
                    </CardTitle>
                    <CardDescription
                      className={cn(
                        "featured" in plan && plan.featured
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground",
                      )}
                    >
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1 p-6">
                    <div className="text-center my-6">
                      <span className="text-5xl font-extrabold">
                        ${displayPrice}
                      </span>
                      <span
                        className={cn(
                          "text-lg ml-1",
                          "featured" in plan && plan.featured
                            ? "text-primary-foreground/80"
                            : "text-muted-foreground",
                        )}
                      >
                        /{billingCycle === "monthly" ? "mo" : "yr"}
                      </span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                      {plan.features.map((feature) => {
                        let featureText = feature.text;
                        if ("id" in feature && feature.id === "generations") {
                          const value = "value" in feature ? feature.value : 0;
                          if (Number.isFinite(value)) {
                            const displayValue =
                              billingCycle === "yearly"
                                ? Math.round(value * 1.25)
                                : value;
                            featureText = feature.text.replace(
                              "%d",
                              String(displayValue),
                            );
                          }
                        }

                        return (
                          <li
                            key={feature.text}
                            className="flex items-center gap-3"
                          >
                            {feature.included ? (
                              <Check
                                className={cn(
                                  "h-5 w-5 shrink-0",
                                  "featured" in plan && plan.featured
                                    ? "text-background"
                                    : "text-primary",
                                )}
                              />
                            ) : (
                              <X className="h-5 w-5 text-muted-foreground/50 shrink-0" />
                            )}
                            <span
                              className={cn(
                                !feature.included && "text-muted-foreground/70",
                              )}
                            >
                              {featureText}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                    <Button
                      variant={
                        "featured" in plan && plan.featured
                          ? "secondary"
                          : plan.buttonVariant
                      }
                      size="lg"
                      className="w-full text-base font-semibold py-6"
                    >
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

export { Pricing };
