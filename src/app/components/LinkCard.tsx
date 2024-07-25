import { FC, useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import Image from "next/image";

const LinkCard: FC<{
  id: number;
  url: string;
  platform: any;
  onRemove: (id: number) => void;
  onSave: (id: number, url: string, platform: any) => void;
  onPlatformChange: (id: number, platform: any) => void;
  error?: string;
}> = ({
  id,
  url: initialUrl,
  platform: initialPlatform,
  onRemove,
  onSave,
  onPlatformChange,
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

  const handlePlatformChange = (selectedPlatform: any) => {
    setPlatform(selectedPlatform);
    onPlatformChange(id, selectedPlatform);
  };

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
      <Dropdown selected={platform} onSelect={handlePlatformChange} />
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
              className={`pl-[44px] pr-[16px] py-[12px] rounded-lg w-[688px] focus:shadow-xl relative border-border-color focus:outline-primary-color  text-[16px] h-[48px] border ${
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
