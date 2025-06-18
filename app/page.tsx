import { JSX } from "react";
import {
  Hero,
  Features,
  Benefits,
  Analytics,
  Testimonials,
} from "@/app/_components";
import { FAQ } from "@/components/shared";
import { TwibbioWidget } from "@/app/_components/twibbio-widget";
import { Layout } from "@/components/ui";

const Index = (): JSX.Element => {
  return (
    <main>
      <Hero />
      <Features />
      <Benefits />
      <Layout className={`my-10`}>
        <TwibbioWidget />
      </Layout>
      <Analytics />
      <Testimonials />
      <Layout>
        <FAQ />
      </Layout>
    </main>
  );
};

export default Index;
