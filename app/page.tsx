import { JSX } from "react";
import { Layout } from "@/components/ui";
import {
  Hero,
  ProblemSolution,
  CaseStudy,
  ExampleCaseStudy,
} from "@/app/_components";
import { FAQ } from "@/components/shared";
import { TwibbioWidget } from "@/app/_components/twibbio-widget";

const Index = (): JSX.Element => {
  return (
    <main>
      <Hero />
      <Layout>
        <ProblemSolution />
        <CaseStudy />
        <TwibbioWidget />
        <ExampleCaseStudy />
        <FAQ />
      </Layout>
    </main>
  );
};

export default Index;
