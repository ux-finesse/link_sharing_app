import {FC} from "react"
import Image from "next/image";

const LinkPreview1: FC = () => {
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

const LinkPreview2: FC = () => {
  return (
    <div
      id="2"
      className="bg-[#1a1a1a] w-[237px] justify-between flex h-[56px] p-[16px] rounded-lg">
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/teenyicons_frontendmentor-solid.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[16px]">
          Frontend Mentor
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

const LinkPreview3: FC = () => {
  return (
    <div
      id="3"
      className="bg-[#1a1a1a] w-[237px] justify-between flex h-[56px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/teenyicons_twitter-solid.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[16px]">
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
      className="bg-[#1a1a1a] w-[237px] justify-between flex h-[56px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/teenyicons_linkedin-solid.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[16px]">
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
      className="bg-[#FF0000] w-[237px] justify-between flex h-[56px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/teenyicons_youtube-solid.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[16px]">
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
      className="bg-[#1877F2] w-[237px] justify-between flex h-[56px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/teenyicons_facebook-solid.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[16px]">
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
      className="bg-[#9146FF] w-[237px] justify-between flex h-[56px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/teenyicons_twitch-solid.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[16px]">
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
      className="bg-[#0A0A0A] w-[237px] justify-between flex h-[56px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/teenyicons_devto-solid.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[16px]">
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
      className="bg-[#AD2C27] w-[237px] justify-between flex h-[56px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/teenyicons_codewars-solid.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[16px]">
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
      className="bg-[#000000] w-[237px] justify-between flex h-[56px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/teenyicons_codepen-solid.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[16px]">
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
      className="bg-[#006400] w-[237px] justify-between flex h-[56px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/teenyicons_freecodecamp-solid.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[16px]">
          freeCodeCamp
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
      className="bg-[#FC6D26] w-[237px] justify-between flex h-[56px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/teenyicons_gitlab-solid.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[16px]">
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
      className="bg-[#2962FF] w-[237px] justify-between flex h-[56px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/teenyicons_hashnode-solid.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[16px]">
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
      className="bg-[#F48024] w-[237px] justify-between flex h-[56px] p-[16px] rounded-lg"
    >
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src="/icons/teenyicons_stackoverflow-solid.svg"
          alt="app-logo"
          width={20}
          height={20}
        />
        <p className="text-white font-[400] leading-[24px] text-[16px]">
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