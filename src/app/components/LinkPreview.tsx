import {FC} from "react"
import Image from "next/image";

const LinkPreview1: FC = () => {
  return (
    <div
      id="1"
      className="bg-[#1a1a1a] w-[237px] justify-between flex h-[44px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/teenyicons_github-solid.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[14px]">
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

const LinkPreview2: FC = () => {
  return (
    <div
      id="2"
      className="bg-[#ffffff] w-[237px] justify-between flex border border-border-color h-[44px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image src="/icons/fm.svg" alt="app-logo" width={20} height={20} />
        <p className=" text-dark-grey font-[400] leading-[24px] text-[14px]">
          Frontend Mentor
        </p>
      </div>
      <Image
        src="/icons/mdi_arrow-right-drk.svg"
        alt="app-logo"
        width={16}
        height={16}
      />
    </div>
  );
};

const LinkPreview3: FC = () => {
  return (
    <div
      id="3"
      className="bg-[#43B7E9] w-[237px] justify-between flex h-[44px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/mdi_twitter.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[14px]">
          Twitter
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

const LinkPreview4: FC = () => {
  return (
    <div
      id="4"
      className="bg-[#2D68FF] w-[237px] justify-between flex h-[44px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/mdi_linkedin.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[14px]">
          LinkedIn
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

const LinkPreview5: FC = () => {
  return (
    <div
      id="5"
      className="bg-[#EE3939] w-[237px] justify-between flex h-[44px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/ri_youtube-fill.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[14px]">
          YouTube
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

// Repeat the pattern above for other LinkPreview components (LinkPreview6, LinkPreview7, ...)

const LinkPreview6: FC = () => {
  return (
    <div
      id="6"
      className="bg-[#2442AC] w-[237px] justify-between flex h-[44px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/bi_facebook.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[14px]">
          Facebook
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

const LinkPreview7: FC = () => {
  return (
    <div
      id="7"
      className="bg-[#EE3FC8] w-[237px] justify-between flex h-[44px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/mdi_twitch.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[14px]">
          Twitch
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

const LinkPreview8: FC = () => {
  return (
    <div
      id="8"
      className="bg-[#333333] w-[237px] justify-between flex h-[44px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/skill-icons_devto-dark.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[14px]">
          Dev.to
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

const LinkPreview9: FC = () => {
  return (
    <div
      id="9"
      className="bg-[#8A1A50] w-[237px] justify-between flex h-[44px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/cib_codewars.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[14px]">
          Codewars
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

const LinkPreview10: FC = () => {
  return (
    <div
      id="10"
      className="bg-[#000000] w-[237px] justify-between flex h-[44px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/ri_codepen-line.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[14px]">
          Codepen
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

const LinkPreview11: FC = () => {
  return (
    <div
      id="11"
      className="bg-[#302267] w-[237px] justify-between flex h-[44px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image src="/icons/fcc.svg" alt="app-logo" width={20} height={20} />
        <p className="text-white font-[400] leading-[24px] text-[14px]">
          FreeCodeCamp
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

const LinkPreview12: FC = () => {
  return (
    <div
      id="12"
      className="bg-[#EB4925] w-[237px] justify-between flex h-[44px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/ri_gitlab-fill.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[14px]">
          GitLab
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

const LinkPreview13: FC = () => {
  return (
    <div
      id="13"
      className="bg-[#0330D1] w-[237px] justify-between flex h-[44px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/fa6-brands_hashnode.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[14px]">
          Hashnode
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

const LinkPreview14: FC = () => {
  return (
    <div
      id="14"
      className="bg-[#EC7100] w-[237px] justify-between flex h-[44px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/cib_stackoverflow.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[14px]">
          Stack Overflow
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

export {
  LinkPreview1,
  LinkPreview2,
  LinkPreview3,
  LinkPreview4,
  LinkPreview5,
  LinkPreview6,
  LinkPreview7,
  LinkPreview8,
  LinkPreview9,
  LinkPreview10,
  LinkPreview11,
  LinkPreview12,
  LinkPreview13,
  LinkPreview14,
};