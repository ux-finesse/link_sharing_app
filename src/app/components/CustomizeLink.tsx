/* eslint-disable @next/next/no-img-element */
import React, { FC, useEffect, useState } from "react";
import Button from "./common/buttons/Secondary";
import Empty from "./Empty";
import LinkCard from "./LinkCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import {
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
} from "./LinkPreview";

const CustomizeLink: FC<{
  selectedTab: string;
  links: any[];
  setLinks: (links: any[]) => void;
  formValues: { firstname: string; lastname: string; email: string };
  setFormValues: (values: { firstname: string; lastname: string; email: string }) => void;
  preview: string | null;
  setPreview: (preview: string | null) => void;
}> = ({
  selectedTab,
  links,
  setLinks,
  formValues,
  setFormValues,
  preview,
  setPreview,
}) => {
  const [linkCount, setLinkCount] = useState(0);
  const [errors, setErrors] = useState<{ [key: number]: string }>({});

  const [formErrors, setFormErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

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
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddLink = () => {
    if (links.length < 5) {
      const nextId =
        links.length > 0 ? Math.max(...links.map((link) => link.id)) + 1 : 1;
      setLinks([...links, { id: nextId, url: "", platform: null }]);
    }
  };

  const handleSaveLink = (id: number, url: string, platform: any) => {
    setLinks(
      links.map((link) => (link.id === id ? { ...link, url, platform } : link))
    );
  };

  const handleRemoveLink = (id: number) => {
    const newLinks = links.filter((link) => link.id !== id);
    setLinks(newLinks);
  };

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
    try {
      // Save data to the server
      const response = await fetch("/api/saveState", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          links,
          formValues,
          preview,
        }),
      });

      if (response.ok) {
        toast.success("Data saved successfully!");
      } else {
        toast.error("Error saving data to the server.");
      }
    } catch (error) {
      toast.error("Error saving data to the server.");
    }
  };

  const renderLinkPreviews = () => {
    const previews = [];
    for (let i = 0; i < 5; i++) {
      const link = links?.[i];
      if (link) {
        const { platform } = link;
        switch (platform?.id) {
          case 1:
            previews.push(<LinkPreview1 key={i} />);
            break;
          case 2:
            previews.push(<LinkPreview2 key={i} />);
            break;
          case 3:
            previews.push(<LinkPreview3 key={i} />);
            break;
          case 4:
            previews.push(<LinkPreview4 key={i} />);
            break;
          case 5:
            previews.push(<LinkPreview5 key={i} />);
            break;
          case 6:
            previews.push(<LinkPreview6 key={i} />);
            break;
          case 7:
            previews.push(<LinkPreview7 key={i} />);
            break;
          case 8:
            previews.push(<LinkPreview8 key={i} />);
            break;
          case 9:
            previews.push(<LinkPreview9 key={i} />);
            break;
          case 10:
            previews.push(<LinkPreview10 key={i} />);
            break;
          case 11:
            previews.push(<LinkPreview11 key={i} />);
            break;
          case 12:
            previews.push(<LinkPreview12 key={i} />);
            break;
          case 13:
            previews.push(<LinkPreview13 key={i} />);
            break;
          case 14:
            previews.push(<LinkPreview14 key={i} />);
            break;
          default:
            previews.push(
              <div
                key={i}
                id={`link${i + 1}`}
                className="w-[237px] h-[44px] bg-[#EEEEEE] rounded-lg"
              ></div>
            );
            break;
        }
      } else {
        previews.push(
          <div
            key={i}
            id={`link${i + 1}`}
            className="w-[237px] h-[44px] bg-[#EEEEEE] rounded-lg"
          ></div>
        );
      }
    }
    return previews;
  };

  return (
    <>
      <main className="w-full flex flex-row gap-[24px] lg:px-[24px] lg:pb-[24px] sm:px-[24px] sm:pb-[24px] xs:pb-[24px] bg-light-grey justify-center items-start sm:px-0">
        <section className="lg:w-full h-[834px] bg-white items-center justify-center sm:hidden xs:hidden lg:flex">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="lg:w-[285px] h-[611px] bg-white items-center justify-between flex flex-col py-[43.5px] px-[23.5px]">
                <div className="items-center justify-center flex flex-col gap-[20px]">
                  <div
                    id="avatar"
                    className="relative w-[96px] h-[96px] bg-[#EEEEEE] rounded-full overflow-hidden"
                  >
                    {preview ? (
                      <img
                        src={preview}
                        alt="Profile Preview"
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : null}
                    <div
                      className={`absolute inset-0 rounded-full border-4 border-primary-color transition-opacity duration-300 ${
                        preview ? "opacity-100" : "opacity-0"
                      }`}
                    ></div>
                  </div>
                  <div
                    id="name"
                    className={`min-w-[160px] max-w-full h-[16px] bg-[#EEEEEE] rounded-full transition-opacity duration-300 ${
                      formValues.firstname &&
                      formValues.lastname &&
                      formValues.email
                        ? "bg-opacity-0"
                        : "bg-opacity-100"
                    } flex items-center justify-center`}
                  >
                    <p className="text-[18px] text-dark-grey font-IntSans text-center font-[600] leading-[27px]">
                      {formValues.firstname} {formValues.lastname}
                    </p>
                  </div>
                  <div
                    id="email"
                    className={`min-w-[72px] max-w-full h-[16px] bg-[#EEEEEE] rounded-full transition-opacity duration-300 ${
                      formValues.firstname &&
                      formValues.lastname &&
                      formValues.email
                        ? "bg-opacity-0"
                        : "bg-opacity-100"
                    } flex items-center justify-center`}
                  >
                    <p className="text-[14px] text-grey-color font-IntSans text-center font-[400] leading-[21px]">
                      {formValues.email}
                    </p>
                  </div>
                </div>
                <svg
                  width="308"
                  height="632"
                  viewBox="0 0 308 632"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[-10px]"
                >
                  <path
                    d="M1 54.5C1 24.9528 24.9528 1 54.5 1H253.5C283.047 1 307 24.9528 307 54.5V577.5C307 607.047 283.047 631 253.5 631H54.5C24.9528 631 1 607.047 1 577.5V54.5Z"
                    stroke="#737373"
                  />
                  <path
                    d="M12 55.5C12 30.9233 31.9233 11 56.5 11H80.5C86.8513 11 92 16.1487 92 22.5C92 30.5081 98.4919 37 106.5 37H201.5C209.508 37 216 30.5081 216 22.5C216 16.1487 221.149 11 227.5 11H251.5C276.077 11 296 30.9233 296 55.5V576.5C296 601.077 276.077 621 251.5 621H56.5C31.9233 621 12 601.077 12 576.5V55.5Z"
                    stroke="#737373"
                  />
                </svg>
                <div className="items-center justify-center flex flex-col gap-[20px]">
                  {renderLinkPreviews()}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sm:w-full sm:flex sm:flex-col sm:justify-start lg:justify-start sm:items-center xs:flex xs:flex-col xs:justify-center xs:items-center sm:p-0 xs:p-0 lg:p-0 xs:h-[922px] lg:py-0">
          <div className="lg:w-[808px] lg:h-[739px] sm:h-[739px] xs:h-[861px] gap-[40px] flex bg-white flex-col lg:p-[40px] relative sm:w-full xs:w-[343px] xs:p-[24px]">
            {selectedTab === "links" && (
              <div id="createlink" className="absolute">
                <div className="gap-[8px] flex flex-col">
                  <h3 className="leading-[48px] lg:text-[32px] xs:text-[24px] font-[600] font-IntSans">
                    Customize your links
                  </h3>
                  <p className="text-[16px] xs:w-[295px] lg:w-full text-grey-color font-IntSans font-[400] leading-[24px]">
                    Add/edit/remove links below and then share all your profiles
                    with the world!
                  </p>
                </div>
                <div className="gap-[24px] flex flex-col mt-[40px]">
                  <Button
                    onClick={handleAddLink}
                    disabled={links.length >= 5}
                    className="rounded-lg lg:w-[728px] sm:w-[641px] xs:w-[295px] h-[46px] bg-white px-[27px] py-[11px] hover-secondary-hover border border-primary-color hover:bg-primary-hover text-primary-color text-[16px] font-[600] leading-[24px]"
                  >
                    + Add new link
                  </Button>
                  <div className="w-full h-[500px] flex flex-col overflow-y-auto overflow-x-hidden gap-[24px] ">
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
            )}

            {selectedTab === "profile" && (
              <div id="profile" className="absolute">
                <div className="gap-[8px] flex flex-col">
                  <h3 className="leading-[48px] text-[32px] font-[600] font-IntSans">
                    Profile Details
                  </h3>
                  <p className="text-[16px] text-grey-color font-IntSans font-[400] lg:w-[640px] sm:w-[640px] xs:w-[295px] leading-[24px]">
                    Add your details to create a personal touch to your profile.
                  </p>
                </div>
                <div className="gap-[24px] flex flex-col mt-[40px]">
                  <div className="lg:w-[728px] lg:h-[233px] sm:h-[233px] xs:h-[363px] sm:w-[640px] xs:w-[295px] flex xs:flex-col lg:flex-row sm:flex-row bg-light-grey rounded-lg lg:justify-between lg:items-center sm:justify-between sm:items-center xs:justify-start xs:items-start xs:gap-[16px] gap-[24px] xs:p-[20px]">
                    <p className="text-[16px] text-grey-color font-IntSans font-[400] leading-[24px]">
                      Profile picture
                    </p>
                    <div className="flex lg:flex-row sm:flex-row xs:flex-col bg-light-grey justify-between lg:items-center sm:items-center xs:items-start gap-[24px]">
                      <div className="w-[215px] h-[215px] flex flex-col gap-[8px] bg-secondary-hover rounded-lg justify-center items-center relative overflow-hidden group">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer z-10"
                        />
                        {preview ? (
                          <img
                            src={preview}
                            alt="Profile Preview"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <div className="flex flex-col justify-center items-center">
                            <Image
                              src="/ph_image.svg"
                              alt="Placeholder Image"
                              width={40}
                              height={40}
                              className="sm:flex sm:justify-start sm:items-left"
                            />
                            <p className="font-[600] text-[16px] text-primary-color text-center">
                              + Upload Image
                            </p>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col gap-[10px] justify-center items-center text-white text-[16px] font-[600] leading-[24px] transition-opacity duration-300">
                          <Image
                            src="/ph_imagec.svg"
                            alt="Placeholder Image"
                            width={40}
                            height={40}
                            className="sm:flex sm:justify-start sm:items-left"
                          />
                          Choose Image
                        </div>
                      </div>
                      <p className="font-[400] sm:w-[127px] text-[12px] text-grey-color lg:w-[215px]">
                        Image must be below 1024x1024px. Use PNG or JPG format.
                      </p>
                    </div>
                  </div>

                  <div
                    id="form"
                    className="lg:w-[728px] lg:h-[208px] lg:h-[208px] xs:h-[274px]rounded-lg bg-light-grey p-[20px] sm:w-[640px]"
                  >
                    <form action="" className="flex flex-col gap-[12px] h">
                      <div className="flex lg:flex-row sm:flex-row xs:flex-col  lg:items-center sm:items-center justify-between xs:items-start relative">
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
                            className={`lg:w-[432px] sm:w-[432px] xs:w-[255px] focus:shadow-xl rounded-lg text-[16px] px-[16px] py-[12px] h-[48px] border ${
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

                      <div className="flex lg:flex-row sm:flex-row xs:flex-col lg:items-center sm:items-center justify-between xs:items-start relative">
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
                            className={`lg:w-[432px] sm:w-[432px] xs:w-[255px] focus:shadow-xl rounded-lg text-[16px] px-[16px] py-[12px] h-[48px] border ${
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

                      <div className="flex lg:flex-row sm:flex-row xs:flex-col lg:items-center sm:items-center justify-between xs:items-start relative">
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
                            className={`lg:w-[432px] sm:w-[432px] xs:w-[255px] focus:shadow-xl rounded-lg text-[16px] px-[16px] py-[12px] h-[48px] border ${
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
          <div className="border-t sm:w-[721px] xs:w-[343px] border-t-border-color lg:w-[808px] h-[94px] bg-white lg:px-[40px] lg:py-[24px] xs:p-[16px] flex justify-end">
            <Button
              id="save"
              onClick={handleSaveAllLinks}
              disabled={!isFormValid && links.length === 0}
              className={`rounded-lg lg:w-[91px] xs:w-full  h-[46px] bg-primary-color px-[27px] text-white py-[11px] hover-secondary-hover ${
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
                     