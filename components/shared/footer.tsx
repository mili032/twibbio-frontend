"use client";

import { Button } from "@/components/ui";
import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { JSX } from "react";

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fcfbf9] border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-2xl font-bold">
            <Image src={`/logo.svg`} alt={`Twibbio`} width={200} height={150} />
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:stefan@twibbio.com">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="text-center text-muted-foreground">
            <p>© {currentYear} Twibbio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
