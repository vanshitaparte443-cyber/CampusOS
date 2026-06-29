import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeadingProps {
  title: string;
  description?: string;
  badge?: ReactNode;
  className?: string;
}

export function Heading({
  title,
  description,
  badge,
  className,
}: HeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl text-center",
        className
      )}
    >
      {badge}

      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-zinc-600">
          {description}
        </p>
      )}
    </div>
  );
}