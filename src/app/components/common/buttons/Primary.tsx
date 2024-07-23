import React from "react";

interface ButtonProps {
 children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type: string;
}

const Button: React.FC<ButtonProps>= ({ className, children, onClick }) => {
  return (
    <button className="rounded-md w-[396px] h-[46px] bg-primary-color hover:bg-primary-hover text-white text-[16px] font-[600]" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
