"use client";
import {
  Button,
  Layout,
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetHeader,
} from "@/components/ui";
import { Bolt, House, LogIn, Menu } from "lucide-react";
import { JSX, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MENU_ITEMS = [
  {
    label: "Home",
    href: "/",
    icon: <House />,
  },
  {
    label: "Get Started",
    href: "/get-started",
    icon: <Bolt />,
  },
  {
    label: "Login",
    href: "/login",
    icon: <LogIn />,
  },
  {
    label: "Sign Up",
    href: "/sign-up",
    icon: <LogIn className={`-rotate-90`} />,
  },
] as const;

const Header = (): JSX.Element => {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);

  return (
    <header
      className={`fixed max-md:px-2 max-md:mt-2 max-md:top-2 left-0 right-0 mt-5 top-5 z-50 max-w-[60rem] w-full transition-all duration-500 mx-auto`}
    >
      <Layout className={`rounded-full border drop-shadow-xs bg-[#fcfbf9]`}>
        <div
          className={`flex items-center justify-between gap-2 px-4 py-2 overflow-hidden`}
        >
          <Link href={`/`} className={`shrink-0`}>
            <Image src={`/logo.svg`} alt={`Twibbio`} width={150} height={150} />
          </Link>
          <nav className={`max-md:hidden flex items-center gap-4`}>
            {MENU_ITEMS.map((item) => {
              return (
                <Button
                  key={item.label}
                  variant={`ghost`}
                  className={`rounded-full`}
                  asChild
                >
                  <Link href={item.href}>
                    {item.icon}
                    {item.label}
                  </Link>
                </Button>
              );
            })}
          </nav>
          <nav className={`md:hidden`}>
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant={`ghost`} className={`rounded-full md:hidden`}>
                  <Menu className={`size-6`} />
                </Button>
              </SheetTrigger>
              <SheetContent side={`left`}>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className={`flex flex-col gap-2 mt-4 mr-auto items-start`}>
                  {MENU_ITEMS.map((item) => {
                    return (
                      <Button
                        key={item.label}
                        variant={`ghost`}
                        className={`rounded-full`}
                        asChild
                      >
                        <Link
                          href={item.href}
                          onClick={() => setSheetOpen(false)}
                        >
                          {item.icon}
                          {item.label}
                        </Link>
                      </Button>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </Layout>
    </header>
  );
};

export { Header };
