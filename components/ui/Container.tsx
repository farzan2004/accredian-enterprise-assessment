import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-0 w-full max-w-full px-4 sm:px-6 lg:px-16 ${className}`}
    >
      {children}
    </div>
  );
}