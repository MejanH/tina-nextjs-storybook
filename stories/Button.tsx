import React from "react";

interface ButtonProps {
  variant: ButtonVariants;
  label: string;
  onClick?: () => void;
}

type ButtonVariants = "primary" | "secondary";
/**
 * Primary UI component for user interaction
 */
export const Button = ({ variant, label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`px-4 py-2 text-white rounded-full font-semibold ${
        variant == "primary" ? "bg-indigo-600" : "bg-teal-600"
      }`}
      {...props}
    >
      {label}
    </button>
  );
};
