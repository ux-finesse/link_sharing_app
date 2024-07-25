import {FC} from "react"
import Image from "next/image";











const LinkPreview: FC = () => {
  return (
    <div
      id="1"
      className="bg-[#1a1a1a] w-[237px] justify-between flex h-[56px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/teenyicons_github-solid.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[16px]">
          GitHub
        </p>
      </div>
      <Image
        src="/icons/mdi_arrow-right.svg"
        alt="app-logo"
        width={16}
        height={16}
      />
    </div>
  );
};
export default LinkPreview;