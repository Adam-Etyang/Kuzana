import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "px-5 py-2.5 rounded-lg font-medium transition active:scale-[0.98] disabled:opacity-50";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-[#112250] text-white hover:bg-[#0d1a3a]",
    secondary:
      "border border-[#112250] text-[#112250] hover:bg-[#112250] hover:text-white",
    ghost: "text-[#112250] hover:bg-[#e9e4dc]",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}