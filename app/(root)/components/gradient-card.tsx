import type React from "react";

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientCard({ children, className = "" }: GradientCardProps) {
  return (
    <div
      className={`relative rounded-xl dark:bg-gradient-to-b from-neutral-100 to-neutral-300 p-[1px] backdrop-blur-3xl dark:from-neutral-800/10 dark:to-neutral-800/30 ${className}`}
    >
      <div className="relative rounded-xl p-6 bg-neutral-50 dark:bg-neutral-900">{children}</div>
    </div>
  );
}
