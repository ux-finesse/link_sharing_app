
import { FC, useState } from "react";
import Button from "./common/buttons/Secondary";
import Empty from "./Empty";
import LinkCard from "./LinkCard";

const CustomizeLink: FC = () => {
  const [links, setLinks] = useState<any[]>([]);
  const [linkCount, setLinkCount] = useState(0);
  const [errors, setErrors] = useState<{ [key: number]: string }>({});

  // CREATE: Add new link, limited to 5
  const handleAddLink = () => {
    if (links.length < 5) {
      setLinks([...links, { id: linkCount + 1, url: "", platform: null }]);
      setLinkCount(linkCount + 1);
    }
  };

  // UPDATE: Save link details
  const handleSaveLink = (id: number, url: string, platform: any) => {
    setLinks(
      links.map((link) => (link.id === id ? { ...link, url, platform } : link))
    );
  };

  // DELETE: Remove a link
  const handleRemoveLink = (id: number) => {
    const newLinks = links.filter((link) => link.id !== id);
    setLinks(newLinks);
    if (newLinks.length === 0) {
      setLinkCount(0); // Reset link count when all links are removed
    }
  };

  // Save all links
  const handleSaveAllLinks = () => {
    const newErrors: { [key: number]: string } = {};
    links.forEach((link) => {
      if (!link.url || !link.platform) {
        newErrors[link.id] = "Please check the URL and platform";
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Perform the save operation here, e.g., send data to a server
      console.log("Links saved:", links);
    }
  };

  return (
    <>
      <main className="w-full flex flex-row gap-[24px] px-[24px] pb-[24px] bg-light-grey justify-center items-start">
        <section className="w-[560px] h-[834px] bg-white flex items-center justify-center">
          <div className="flex items-center justify-center">
            <svg
              width="308"
              height="632"
              viewBox="0 0 308 632"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 54.5C1 24.9528 24.9528 1 54.5 1H253.5C283.047 1 307 24.9528 307 54.5V577.5C307 607.047 283.047 631 253.5 631H54.5C24.9528 631 1 607.047 1 577.5V54.5Z"
                stroke="#737373"
              />
              <path
                d="M12 55.5C12 30.9233 31.9233 11 56.5 11H80.5C86.8513 11 92 16.1487 92 22.5C92 30.5081 98.4919 37 106.5 37H201.5C209.508 37 216 30.5081 216 22.5C216 16.1487 221.149 11 227.5 11H251.5C276.077 11 296 30.9233 296 55.5V576.5C296 601.077 276.077 621 251.5 621H56.5C31.9233 621 12 601.077 12 576.5V55.5Z"
                fill="white"
                stroke="#737373"
              />
              <circle cx="153.5" cy="112" r="48" fill="#EEEEEE" />
              <rect
                x="73.5"
                y="185"
                width="160"
                height="16"
                rx="8"
                fill="#EEEEEE"
              />
              <rect
                x="117.5"
                y="214"
                width="72"
                height="8"
                rx="4"
                fill="#EEEEEE"
              />
              {links.map((link, index) => (
                <g key={link.id}>
                  <rect
                    x="35"
                    y={278 + 64 * index}
                    width="237"
                    height="44"
                    rx="8"
                    fill={link.platform ? link.platform.color : "#EEEEEE"}
                  />
                  {link.platform && (
                    <image
                      x="50"
                      y={282 + 64 * index}
                      width="30"
                      height="30"
                      href={link.platform.icon}
                    />
                  )}
                </g>
              ))}
            </svg>
          </div>
        </section>

        <section>
          <div className="w-[808px] h-[739px] gap-[40px] flex bg-white flex-col p-[40px]">
            <div className="gap-[8px] flex flex-col">
              <h3 className="leading-[48px] text-[32px] font-[600] font-IntSans">
                Customize your links
              </h3>
              <p className="text-[16px] text-grey-color font-IntSans font-[400] leading-[24px]">
                Add/edit/remove links below and then share all your profiles
                with the world!
              </p>
            </div>
            <div className="gap-[24px] flex flex-col">
              <Button
                onClick={handleAddLink}
                disabled={links.length >= 5}
                className="rounded-lg w-[728px] h-[46px] bg-white px-[27px] py-[11px] hover-secondary-hover border border-primary-color hover:bg-primary-hover text-primary-color text-[16px] font-[600] leading-[24px]"
              >
                + Add new link
              </Button>
              <div className=" w-full h-[500px] flex flex-col overflow-y-auto overflow-x-hidden gap-[24px] no-scrollbar">
                {links.length === 0 ? (
                  <Empty />
                ) : (
                  links.map((link) => (
                    <LinkCard
                      key={link.id}
                      id={link.id}
                      url={link.url}
                      platform={link.platform}
                      onRemove={handleRemoveLink}
                      onSave={handleSaveLink}
                      error={errors[link.id]}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="border-t border-t-border-color w-[808px] h-[94px] bg-white px-[40px] py-[24px] flex justify-end">
            <Button
              onClick={handleSaveAllLinks}
              disabled={links.length === 0}
              className={`rounded-lg w-[91px] h-[46px] bg-primary-color px-[27px] text-white py-[11px] hover-secondary-hover ${
                links.length === 0
                  ? "border-gray-300 text-gray-300"
                  : "border-primary-color hover:bg-primary-hover text-primary-color"
              } text-[16px] font-[600] leading-[24px]`}
            >
              Save
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default CustomizeLink;
