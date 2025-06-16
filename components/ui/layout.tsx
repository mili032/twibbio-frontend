import { JSX } from "react";
import { cn } from "@/lib/utils";

export const Layout = ({
  className,
  children,
}: Readonly<{
  className?: string;
  children?: React.ReactNode;
}>): JSX.Element => {
  return (
    <div className={cn(`container mx-auto px-2 lg:px-4`, className)}>
      {children}
    </div>
  );
};
