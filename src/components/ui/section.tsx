
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  id?: string;
  className?: string;
  background?: "white" | "gray" | "blue";
  children: React.ReactNode;
}

export function Section({
  id,
  className,
  background = "white",
  children,
  ...props
}: SectionProps) {
  const backgroundColors = {
    white: "bg-white",
    gray: "bg-company-gray",
    blue: "bg-company-blue text-white"
  };

  return (
    <section
      id={id}
      className={cn(
        "w-full",
        backgroundColors[background],
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4 md:px-8 section-padding">
        {children}
      </div>
    </section>
  );
}
