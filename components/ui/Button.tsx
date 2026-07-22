import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`cursor-pointer rounded-lg shadow-md bg-blue-600 px-7 py-2 font-medium text-white transition hover:bg-blue-500 hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}