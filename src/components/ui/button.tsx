"use client";

import { inter } from "@/fonts";

interface ButtonProps {
  disabled?: boolean;
  secondary?: boolean;
  warning?: boolean;
  onClick?: () => void;
  text: string;
}

const Button = ({
  disabled,
  secondary,
  warning,
  onClick,
  text
}: ButtonProps) => {
  const buttonClassPrimary = `${
    inter.variable
  } font-sans text-black text-sm font-semibold tracking-wider bg-neon_light p-2 px-8 rounded-full ${
    warning
      ? "disabled:rounded-sm disabled:bg-[#FFB02E] disabled:bg-opacity-50"
      : "disabled:bg-white disabled:bg-opacity-25"
  }`;
  const buttonClassSecondary = `${inter.variable} font-sans text-neon_light text-sm font-normal tracking-wider p-2 px-8 border-solid border border-neon_light rounded-full`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={secondary ? buttonClassSecondary : buttonClassPrimary}
    >
      {text}
    </button>
  );
};

export default Button;
