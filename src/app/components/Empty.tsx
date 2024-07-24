// import React, { FC } from "react";
// import Image from "next/image";

// const Empty: FC = () => {
//   return (
//     <>
//       <div className="rounded-lg w-[728px] h-[469px] bg-light-grey px-[20px] py-[62.5px]">
//         <div className="flex flex-col justify-center items-center gap-[40px]">
//           <Image
//             src="/uploadimg.svg"
//             alt="app-logo"
//             width={249.53}
//             height={160}
//             className="sm:flex sm:justify-start sm:items-left"
//           />
//           <div className="flex flex-col justify-center items-center gap-[24px]">
//             <h3 className="leading-[48px] text-[32px] font-[600] font-IntSans">
//               Let’s get you started
//             </h3>
//             <p className="w-[488px] text-center text-[16px] text-grey-color font-IntSans font-[400] leading-[24px]">
//               Use the “Add new link” button to get started. Once you have more
//               than one link, you can reorder and edit them. We’re here to help
//               you share your profiles with everyone!
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Empty;

import React, { FC } from "react";
import Image from "next/image";

const Empty: FC = () => {
  return (
    <div className="rounded-lg w-[728px] h-[469px] bg-light-grey px-[20px] py-[62.5px]">
      <div className="flex flex-col justify-center items-center gap-[40px]">
        <Image
          src="/uploadimg.svg"
          alt="app-logo"
          width={249.53}
          height={160}
          className="sm:flex sm:justify-start sm:items-left"
        />
        <div className="flex flex-col justify-center items-center gap-[24px]">
          <h3 className="leading-[48px] text-[32px] font-[600] font-IntSans">
            Let’s get you started
          </h3>
          <p className="w-[488px] text-center text-[16px] text-grey-color font-IntSans font-[400] leading-[24px]">
            Use the “Add new link” button to get started. Once you have more
            than one link, you can reorder and edit them. We’re here to help you
            share your profiles with everyone!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Empty;