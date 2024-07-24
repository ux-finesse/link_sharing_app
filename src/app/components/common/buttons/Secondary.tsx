import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  id?:string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  onClick,
  disabled,
  id
}) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled} id={id}>
      {children}
    </button>
  );
};

export default Button;
