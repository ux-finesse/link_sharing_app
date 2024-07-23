import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button
      className="rounded-md w-[114px] h-[46px] bg-white px-[27px] py-[11px] hover-secondary-hover border border-primary-color hover:bg-primary-hover text-primary-color text-[16px] font-[600] leading-[24px]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
