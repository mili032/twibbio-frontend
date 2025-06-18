import "./globals.css";
import type { Metadata } from "next";
import { QueryProvider } from "@/providers";
import { Header, Footer } from "@/components/shared";
import { Plus_Jakarta_Sans as Inter } from "next/font/google";

const font2 = Inter({
  display: "swap",
  preload: true,
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${font2.className} antialiased`}>
        <QueryProvider>
          <Header />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Twibbio | Turn user feedback into valuable insights",
  description:
    "Twibbio is a tool that helps you turn real user feedback into case studies, testimonials, LinkedIn posts, and more.",
};
