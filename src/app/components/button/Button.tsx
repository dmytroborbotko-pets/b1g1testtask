import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  styles?: string;
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  children,
  styles,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "px-3 py-2 rounded-[10px] text-[16px] font-['Red_Hat_Display'] font-[700] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = {
    primary:
      "bg-[#FFC632] hover:bg-yellow-500 text-black focus:ring-yellow-500",
    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${styles}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
