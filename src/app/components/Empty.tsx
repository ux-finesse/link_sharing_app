import React, { FC } from "react";
import Image from "next/image";

const Empty: FC = () => {
  return (
    <div className="rounded-lg lg:w-[728px] sm:w-[641px] xs:w-[295px] h-[469px] bg-light-grey px-[20px] py-[62.5px]">
      <div className="flex flex-col justify-center items-center gap-[40px]">
        <Image
          src="/uploadimg.svg"
          alt="app-logo"
          width={249.53}
          height={160}
          className="sm:flex sm:justify-start sm:items-left xs:hidden"
        />
        <Image
          src="/imgm.svg"
          alt="app-logo"
          width={124.77}
          height={80}
          className="sm:flex sm:justify-start sm:items-left lg:hidden"
        />
        <div className="flex flex-col justify-center items-center gap-[24px] ">
          <h3 className="leading-[48px] lg:text-[32px] xs:text-[24px] font-[600] font-IntSans">
            Let’s get you started
          </h3>
          <p className="lg:w-[488px] xs:w-[255px] text-center text-[16px] text-grey-color font-IntSans font-[400] leading-[24px]">
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