"use client";
import { JSX } from "react";
import { Button } from "@/components/ui";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Hero = (): JSX.Element => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
      }}
    >
      <section
        className={`min-h-[75dvh] flex flex-col items-center justify-center text-center max-w-5xl mx-auto`}
      >
        <h1
          className={`text-5xl md:text-6xl font-bold mb-8 mt-[10rem] font-heading`}
        >
          Turn user feedback into{" "}
          <span className={`text-indigo-500 italic underline`}>valuable</span> asset for your
          business
        </h1>
        <p className={`text-xl mb-8 text-muted-foreground`}>
          Twibbio is a tool that helps you turn real user feedback into case
          studies, testimonials, LinkedIn posts, and more.
        </p>
        <div className={`flex items-center justify-center gap-4`}>
          <Button
            variant={`default`}
            className={`rounded-full`}
            asChild
            size={`lg`}
          >
            <Link href={`/get-started`}>
              Try Now - It's Free <ChevronRight />
            </Link>
          </Button>
          <Button
            variant={`outline`}
            className={`rounded-full`}
            asChild
            size={`lg`}
          >
            <Link href={`/sign-up`}>Sign Up</Link>
          </Button>
        </div>
      </section>
      <div
        className={`bg-gradient-to-b from-white to-transparent h-26 w-full rotate-180`}
      />
    </div>
  );
};

export { Hero };
