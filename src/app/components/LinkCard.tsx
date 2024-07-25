/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useEffect } from "react";
import Dropdown from "./DropDown";
import Image from "next/image";

const LinkCard: FC<{
  id: number;
  url: string;
  platform: any;
  onRemove: (id: number) => void;
  onSave: (id: number, url: string, platform: any) => void;
  error?: string;
}> = ({
  id,
  url: initialUrl,
  platform: initialPlatform,
  onRemove,
  onSave,
  error,
}) => {
  const [url, setUrl] = useState(initialUrl);
  const [platform, setPlatform] = useState(initialPlatform);

  useEffect(() => {
    setUrl(initialUrl);
    setPlatform(initialPlatform);
  }, [initialUrl, initialPlatform]);

  useEffect(() => {
    onSave(id, url, platform);
  }, [url, platform]);

  return (
    <div className="w-[728px] h-[248px] rounded-lg bg-light-grey p-[20px] flex flex-col gap-[12px]">
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-center items-center gap-[8px]">
          <svg
            width="12"
            height="6"
            viewBox="0 0 12 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="12" height="1" fill="#737373" />
            <rect y="5" width="12" height="1" fill="#737373" />
          </svg>
          <p className="text-[16px] text-grey-color font-IntSans font-[700] leading-[24px]">
            Link #{id}
          </p>
        </div>
        <span
          onClick={() => onRemove(id)}
          className="text-grey-color text-[16px] font-IntSans font-[400] leading-[24px] hover:underline cursor-pointer"
        >
          Remove
        </span>
      </div>
      <Dropdown selected={platform} onChange={setPlatform} />
      <div className="flex flex-col gap-[24px]">
        <div className="gap-[8px] flex flex-col">
          <label
            htmlFor="url"
            className="text-[12px] font-IntSans text-dark-grey"
          >
            Link
          </label>
          <div className="relative">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="e.g. https://www.github.com/johnappleseed"
              className={`pl-[44px] pr-[16px] py-[12px] rounded-lg w-[688px] focus:shadow-xl relative border-border-color focus:outline-primary-color text-[16px] h-[48px] border ${
                error ? "border-red-500" : "border"
              }`}
            />
            <Image
              src="/ph_link-bold-grey.svg"
              alt="ph_link-bold-grey"
              width={16}
              height={16}
              className="absolute top-[16px] left-[16px]"
            />
            {error && (
              <small className="absolute top-[16px] right-[16px] text-[12px] text-error-color">
                {error}
              </small>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;



<svg
  width="21"
  height="20"
  viewBox="0 0 21 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11.1542 14.6509C11.2416 14.738 11.311 14.8415 11.3583 14.9554C11.4056 15.0694 11.43 15.1916 11.43 15.3149C11.43 15.4383 11.4056 15.5605 11.3583 15.6745C11.311 15.7884 11.2416 15.8919 11.1542 15.979L10.6902 16.4431C9.81081 17.3224 8.61815 17.8164 7.37455 17.8164C6.13095 17.8164 4.93828 17.3224 4.05892 16.4431C3.17957 15.5637 2.68555 14.371 2.68555 13.1274C2.68555 11.8838 3.17957 10.6912 4.05892 9.81181L5.9433 7.92822C6.78821 7.08122 7.925 6.58933 9.12082 6.55331C10.3166 6.51729 11.481 6.93986 12.3753 7.73447C12.4677 7.81655 12.5429 7.91601 12.5968 8.02717C12.6507 8.13833 12.6822 8.25902 12.6895 8.38235C12.6967 8.50568 12.6796 8.62923 12.6391 8.74595C12.5986 8.86266 12.5355 8.97026 12.4535 9.06259C12.3714 9.15493 12.2719 9.2302 12.1608 9.28409C12.0496 9.33799 11.9289 9.36947 11.8056 9.37672C11.6822 9.38398 11.5587 9.36687 11.442 9.32638C11.3253 9.28588 11.2177 9.2228 11.1253 9.14072C10.589 8.66441 9.89098 8.41102 9.17401 8.43237C8.45704 8.45371 7.77532 8.74819 7.2683 9.25556L5.38549 11.1368C4.85795 11.6643 4.56159 12.3798 4.56159 13.1259C4.56159 13.8719 4.85795 14.5874 5.38549 15.1149C5.91302 15.6425 6.62851 15.9388 7.37455 15.9388C8.12059 15.9388 8.83608 15.6425 9.36361 15.1149L9.82767 14.6509C9.91474 14.5637 10.0181 14.4946 10.1319 14.4474C10.2458 14.4002 10.3678 14.3759 10.491 14.3759C10.6142 14.3759 10.7362 14.4002 10.85 14.4474C10.9638 14.4946 11.0672 14.5637 11.1542 14.6509ZM16.9417 3.55713C16.0617 2.67912 14.8693 2.18604 13.6261 2.18604C12.383 2.18604 11.1906 2.67912 10.3105 3.55713L9.84642 4.02119C9.6703 4.19731 9.57136 4.43618 9.57136 4.68525C9.57136 4.93432 9.6703 5.17319 9.84642 5.34931C10.0225 5.52543 10.2614 5.62438 10.5105 5.62438C10.7596 5.62438 10.9984 5.52543 11.1745 5.34931L11.6386 4.88525C12.1661 4.35772 12.8816 4.06135 13.6277 4.06135C14.3737 4.06135 15.0892 4.35772 15.6167 4.88525C16.1443 5.41278 16.4406 6.12827 16.4406 6.87431C16.4406 7.62036 16.1443 8.33584 15.6167 8.86338L13.7331 10.7478C13.2257 11.2549 12.5436 11.549 11.8264 11.5697C11.1093 11.5905 10.4113 11.3364 9.87533 10.8595C9.78299 10.7774 9.6754 10.7143 9.55868 10.6738C9.44196 10.6333 9.31841 10.6162 9.19509 10.6235C9.07176 10.6307 8.95107 10.6622 8.8399 10.7161C8.72874 10.77 8.62928 10.8453 8.5472 10.9376C8.46513 11.0299 8.40204 11.1375 8.36155 11.2542C8.32106 11.371 8.30395 11.4945 8.3112 11.6178C8.31846 11.7412 8.34993 11.8619 8.40383 11.973C8.45773 12.0842 8.53299 12.1836 8.62533 12.2657C9.51906 13.0601 10.6826 13.483 11.8779 13.4477C13.0731 13.4124 14.2097 12.9217 15.055 12.0759L16.9394 10.1923C17.8184 9.31242 18.3124 8.1197 18.3128 6.87597C18.3133 5.63224 17.8201 4.43917 16.9417 3.55869V3.55713Z"
    fill="currentColor"
  />
</svg>;