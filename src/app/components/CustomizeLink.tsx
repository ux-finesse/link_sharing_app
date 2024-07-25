/* eslint-disable @next/next/no-img-element */

import React, { FC, useState, useEffect } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import Image from "next/image";
import Button from "./common/buttons/Secondary";
import Empty from "./Empty";
import LinkCard from "./LinkCard";
// import LinkPreview from "./LinkPreview"; // Make sure to import LinkPreview

const socials = [
  {
    id: 1,
    name: "GitHub",
    icon: "/github.svg",
    color: "#181717",
  },
  {
    id: 2,
    name: "Frontend Mentor",
    icon: "/ftmen.svg",
    color: "#F8F9FA",
  },
  { id: 3, name: "Twitter", icon: "/twitter.svg", color: "#1DA1F2" },
  { id: 4, name: "LinkedIn", icon: "/linkedin.svg", color: "#0077B5" },
  { id: 5, name: "YouTube", icon: "/youtube.svg", color: "#FF0000" },
  { id: 6, name: "Facebook", icon: "/facebook.svg", color: "#1877F2" },
  { id: 7, name: "Twitch", icon: "/twitch.svg", color: "#9146FF" },
  { id: 8, name: "Dev.to", icon: "/devto.svg", color: "#0A0A0A" },
  { id: 9, name: "Codewars", icon: "/codewars.svg", color: "#AD2C27" },
  { id: 10, name: "Codepen", icon: "/codepen.svg", color: "#000000" },
  {
    id: 11,
    name: "freeCodeCamp",
    icon: "/freecodecamp.svg",
    color: "#006400",
  },
  { id: 12, name: "GitLab", icon: "/gitlab.svg", color: "#FC6D26" },
  { id: 13, name: "Hashnode", icon: "/hashnode.svg", color: "#2962FF" },
  {
    id: 14,
    name: "Stack Overflow",
    icon: "/stack.svg",
    color: "#F48024",
  },
];

const Dropdown: FC<{ selected: any; onChange: (selected: any) => void }> = ({
  selected,
  onChange,
}) => {
  return (
    <Listbox value={selected} onChange={onChange}>
      <div className="relative">
        <label className="text-[12px] font-IntSans text-dark-grey">
          Platform
        </label>
        <ListboxButton className="relative w-full h-[48px] mt-[4px] cursor-default rounded-lg bg-white py-1.5 pl-[16px] pr-[16px] text-left text-dark-grey shadow-sm ring-1 ring-inset ring-gray-300 focus:shadow-xl focus:outline-primary-color focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 border-border-color">
          <span className="flex items-center">
            {selected && (
              <img
                alt={selected.name}
                src={selected.icon}
                className="h-5 w-5 flex-shrink-0 rounded-full"
              />
            )}
            <span className="ml-3 block truncate">
              {selected ? selected.name : "Select a platform"}
            </span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-[16px]">
            <svg
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L7 7L13 1" stroke="#633CFF" strokeWidth="2" />
            </svg>
          </span>
        </ListboxButton>
        <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {socials.map((social) => (
            <ListboxOption
              key={social.id}
              value={social}
              className="group relative cursor-default select-none py-2 pr-[16px] pl-[16px] text-gray-900"
            >
              <div className="flex items-center">
                <img
                  alt={social.name}
                  src={social.icon}
                  className="h-5 w-5 flex-shrink-0 rounded-full group-hover:scale-110  transition-transform duration-150"
                />
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold hover:text-primary-color">
                  {social.name}
                </span>
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

const CustomizeLink: FC<{ selectedTab: string }> = ({ selectedTab }) => {
  const [links, setLinks] = useState<any[]>([]);
  const [linkCount, setLinkCount] = useState(0);
  const [errors, setErrors] = useState<{ [key: number]: string }>({});
  const [previews, setPreviews] = useState<{ [key: number]: any }>({});

  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    const formIsValid =
      formValues.firstname.trim() !== "" &&
      formValues.lastname.trim() !== "" &&
      formValues.email.trim() !== "";
    setIsFormValid(formIsValid);
  }, [formValues]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    if (value.trim() === "") {
      setFormErrors({ ...formErrors, [name]: "Can't be empty" });
    } else {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
    setPreviews({ ...previews, [id]: platform });
  };

  // DELETE: Remove a link
  const handleRemoveLink = (id: number) => {
    const newLinks = links.filter((link) => link.id !== id);
    setLinks(newLinks);
    if (newLinks.length === 0) {
      setLinkCount(0); // Reset link count when all links are removed
    }
  };

  // Save all links and profile details
  const handleSaveAllLinks = async () => {
    const newErrors: { [key: number]: string } = {};

    links.forEach((link) => {
      if (!link.url || !link.platform) {
        newErrors[link.id] = "Please check the URL and platform";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Perform the save operation for links
    console.log("Links saved:", links);

    // Perform the save operation for profile details
    if (file && isFormValid) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("firstname", formValues.firstname);
      formData.append("lastname", formValues.lastname);
      formData.append("email", formValues.email);

      const response = await fetch("/api/saveProfile", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Profile saved successfully");
      } else {
        console.error("Profile save failed");
      }
    }
  };

  // Map of ID to corresponding LinkPreview component
  const renderLinkPreview = (id: number) => {
    const platform = previews[id];
    if (!platform) return null;

    switch (platform.id) {
      case 1:
        return (
          <div className="bg-[#1a1a1a] w-[237px] justify-between flex h-[56px] p-[16px] rounded-lg">
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
      case 5:
        return (
          <div className="bg-[#FF0000] w-[237px] justify-between flex h-[56px] p-[16px] rounded-lg">
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
      // Add other cases for different platforms here
      default:
        return null;
    }
  };

  return (
    <>
      <main className="w-full flex flex-row gap-[24px] px-[24px] pb-[24px] bg-light-grey justify-center items-start">
        <section className="w-[560px] h-[834px] bg-white flex items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="w-[285px] h-[611px] bg-white border border-border-color items-center justify-between flex flex-col py-[43.5px] px-[23.5px]">
              <div className="items-center justify-center flex flex-col gap-[20px]">
                <div
                  id="avatar"
                  className="w-[96px] h-[96px] bg-[#EEEEEE] rounded-full"
                ></div>
                <div
                  id="name"
                  className="w-[160px] h-[16px] bg-[#EEEEEE] rounded-full"
                ></div>
                <div
                  id="email"
                  className="w-[72px] h-[8px] bg-[#EEEEEE] rounded-full"
                ></div>
              </div>

              <div className="items-center justify-center flex flex-col gap-[20px]">
                {Array.from({ length: 5 }, (_, index) => (
                  <div key={index} id={`link${index + 1}`}>
                    {renderLinkPreview(index + 1) || (
                      <div className="w-[237px] h-[44px] bg-[#EEEEEE] rounded-lg"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="w-[808px] h-[739px] gap-[40px] flex bg-white flex-col p-[40px] relative">
            {selectedTab === "links" && (
              <div id="createlink" className="absolute">
                <div className="gap-[8px] flex flex-col">
                  <h3 className="leading-[48px] text-[32px] font-[600] font-IntSans">
                    Customize your links
                  </h3>
                  <p className="text-[16px] text-grey-color font-IntSans font-[400] leading-[24px]">
                    Add/edit/remove links below and then share all your profiles
                    with the world!
                  </p>
                </div>
                <div className="gap-[24px] flex flex-col mt-[40px]">
                  <Button
                    onClick={handleAddLink}
                    disabled={links.length >= 5}
                    className="rounded-lg w-[728px] h-[46px] bg-white px-[27px] py-[11px] hover-secondary-hover border border-primary-color hover:bg-primary-hover text-primary-color text-[16px] font-[600] leading-[24px]"
                  >
                    + Add new link
                  </Button>
                  <div className="w-full h-[500px] flex flex-col overflow-y-auto overflow-x-hidden gap-[24px] no-scrollbar">
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
                          onPlatformChange={(link.selectedPlatform)}
                        />
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            {selectedTab === "profile" && (
              <div id="profile" className="absolute">
                <div className="gap-[8px] flex flex-col">
                  <h3 className="leading-[48px] text-[32px] font-[600] font-IntSans">
                    Profile Details
                  </h3>
                  <p className="text-[16px] text-grey-color font-IntSans font-[400] leading-[24px]">
                    Add your details to create a personal touch to your profile.
                  </p>
                </div>
                <div className="gap-[24px] flex flex-col mt-[40px]">
                  <div className="w-[728px] h-[233px] flex flex-row bg-light-grey rounded-lg justify-between items-center gap-[24px] p-[20px]">
                    <p className="text-[16px] text-grey-color font-IntSans font-[400] leading-[24px]">
                      Profile picture
                    </p>
                    <div className="flex flex-row bg-light-grey justify-between items-center gap-[24px]">
                      <div className="w-[193px] h-[193px] flex gap-[8px] flex-col bg-secondary-hover rounded-lg text-grey-color w-[215px] justify-center items-center">
                        {preview ? (
                          <Image
                            src={preview}
                            alt="Profile Preview"
                            width={193}
                            height={193}
                            className="rounded-lg"
                          />
                        ) : (
                          <Image
                            src="/ph_image.svg"
                            alt="Placeholder Image"
                            width={40}
                            height={40}
                            className="sm:flex sm:justify-start sm:items-left"
                          />
                        )}
                        <p className="font-[400] text-[16px] font-[600] leading-[24px] text-primary-color">
                          + Upload Image
                        </p>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </div>
                      <p className="font-[400] text-[12px] text-grey-color w-[215px]">
                        Image must be below 1024x1024px. Use PNG or JPG format.
                      </p>
                    </div>
                  </div>

                  <div
                    id="form"
                    className="w-[728px] h-[208px] rounded-lg bg-light-grey p-[20px]"
                  >
                    <form action="" className="flex flex-col gap-[12px]">
                      <div className="flex flex-row items-center justify-between relative">
                        <label
                          htmlFor="firstname"
                          className="text-[16px] text-grey-color font-IntSans font-[400] leading-[24px]"
                        >
                          First name*
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="firstname"
                            placeholder="e.g. John"
                            value={formValues.firstname}
                            onChange={handleInputChange}
                            className={`w-[432px] focus:shadow-xl rounded-lg text-[16px] px-[16px] py-[12px] h-[48px] border ${
                              formErrors.firstname
                                ? "border-red-500"
                                : "border-border-color"
                            } outline-primary-color`}
                          />
                          {formErrors.firstname && (
                            <small className="absolute top-[16px] right-[16px] text-[12px] text-red-500">
                              {formErrors.firstname}
                            </small>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-row items-center justify-between relative">
                        <label
                          htmlFor="lastname"
                          className="text-[16px] text-grey-color font-IntSans font-[400] leading-[24px]"
                        >
                          Last name*
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="lastname"
                            placeholder="e.g. Appleseed"
                            value={formValues.lastname}
                            onChange={handleInputChange}
                            className={`w-[432px] focus:shadow-xl rounded-lg text-[16px] px-[16px] py-[12px] h-[48px] border ${
                              formErrors.lastname
                                ? "border-red-500"
                                : "border-border-color"
                            } outline-primary-color`}
                          />
                          {formErrors.lastname && (
                            <small className="absolute top-[16px] right-[16px] text-[12px] text-red-500">
                              {formErrors.lastname}
                            </small>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-row items-center justify-between relative">
                        <label
                          htmlFor="email"
                          className="text-[16px] text-grey-color font-IntSans font-[400] leading-[24px]"
                        >
                          Email
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            placeholder="e.g. john@example.com"
                            value={formValues.email}
                            onChange={handleInputChange}
                            className={`w-[432px] focus:shadow-xl rounded-lg text-[16px] px-[16px] py-[12px] h-[48px] border ${
                              formErrors.email
                                ? "border-red-500"
                                : "border-border-color"
                            } outline-primary-color`}
                          />
                          {formErrors.email && (
                            <small className="absolute top-[16px] right-[16px] text-[12px] text-red-500">
                              {formErrors.email}
                            </small>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="border-t border-t-border-color w-[808px] h-[94px] bg-white px-[40px] py-[24px] flex justify-end">
            <Button
              id="save"
              onClick={handleSaveAllLinks}
              disabled={!isFormValid && links.length === 0}
              className={`rounded-lg w-[91px] h-[46px] bg-primary-color px-[27px] text-white py-[11px] hover-secondary-hover ${
                !isFormValid && links.length === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100 hover:bg-primary-hover"
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

