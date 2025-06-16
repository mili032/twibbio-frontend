import { JSX } from "react";
import { Layout } from "@/components/ui";
import {
  Hero,
  ProblemSolution,
  CaseStudy,
  ExampleCaseStudy,
} from "@/app/_components";
import { FAQ } from "@/components/shared";

const Index = (): JSX.Element => {
  return (
    <main>
      <Hero />
      <Layout>
        <ProblemSolution />
        <CaseStudy />
        <ExampleCaseStudy />
        <FAQ />
      </Layout>
    </main>
  );
};

export default Index;
