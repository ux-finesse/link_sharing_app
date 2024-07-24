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

// components/StatefulButton.tsx
// import { useState, FC } from 'react';

// const StatefulButton: FC = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isActive, setIsActive] = useState(false);
//   const [isDisabled, setIsDisabled] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const handleMouseDown = () => {
//     setIsActive(true);
//   };

//   const handleMouseUp = () => {
//     setIsActive(false);
//   };

//   const handleToggleDisable = () => {
//     setIsDisabled(!isDisabled);
//   };

//   let buttonClasses = 'rounded-md flex gap-[8px] justify-center items-center w-[191px] h-[46px] px-[27px] py-[11px] text-[16px] font-[600] leading-[24px] ';
//   if (isDisabled) {
//     buttonClasses += 'bg-gray-300 text-gray-500 cursor-not-allowed ';
//   } else if (isActive) {
//     buttonClasses += 'bg-primary-active text-white ';
//   } else if (isHovered) {
//     buttonClasses += 'bg-primary-hover text-primary-color ';
//   } else {
//     buttonClasses += 'bg-white text-grey-color ';
//   }

//   return (
//     <div className="flex flex-col items-center">
//       <button
//         className={buttonClasses}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         onMouseDown={handleMouseDown}
//         onMouseUp={handleMouseUp}
//         disabled={isDisabled}
//       >
//         Profile Details
//       </button>
//       <button 
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" 
//         onClick={handleToggleDisable}
//       >
//         Toggle Disable
//       </button>
//     </div>
//   );
// };

// export default StatefulButton;