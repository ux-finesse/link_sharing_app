/* eslint-disable @next/next/no-img-element */
"use client"
import React, { FC, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "../components/common/buttons/Secondary";
import { toast } from "react-toastify";
import Link from "next/link";
import withAuth from "../components/withAuth";
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
} from "../components/LinkPreview";

const PreviewContent: FC = () => {
  const searchParams = useSearchParams();
  const key = searchParams.get("key");

  const [links, setLinks] = useState<any[]>([]);
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [previewUrl, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (key) {
      fetch(`/api/saveState?key=${key}`)
        .then((response) => response.json())
        .then((data) => {
          setLinks(data.links || []);
          setFormValues(
            data.formValues || { firstname: "", lastname: "", email: "" }
          );
          setPreview(data.preview || null);
        })
        .catch((error) => {
          toast.error(`Error fetching data: ${error}`);
        });
    }
  }, [key]);

  const handleShareLink = () => {
    const linkUrls = links.map((link) => link.url).join("\n");
    navigator.clipboard.writeText(linkUrls).then(
      () => {
        toast.success("Links copied to clipboard!");
      },
      (err) => {
        toast.error(`Could not copy links: ${err}`);
      }
    );
  };

  const renderLinkPreviews = () => {
    return links.map((link, index) => {
      const { platform } = link;
      switch (platform?.id) {
        case 1:
          return <LinkPreview1 key={index} />;
        case 2:
          return <LinkPreview2 key={index} />;
        case 3:
          return <LinkPreview3 key={index} />;
        case 4:
          return <LinkPreview4 key={index} />;
        case 5:
          return <LinkPreview5 key={index} />;
        case 6:
          return <LinkPreview6 key={index} />;
        case 7:
          return <LinkPreview7 key={index} />;
        case 8:
          return <LinkPreview8 key={index} />;
        case 9:
          return <LinkPreview9 key={index} />;
        case 10:
          return <LinkPreview10 key={index} />;
        case 11:
          return <LinkPreview11 key={index} />;
        case 12:
          return <LinkPreview12 key={index} />;
        case 13:
          return <LinkPreview13 key={index} />;
        case 14:
          return <LinkPreview14 key={index} />;
        default:
          return (
            <div
              key={index}
              className="w-[237px] h-[44px] bg-[#EEEEEE] rounded-lg"
            ></div>
          );
      }
    });
  };

  const profileQueryParams = new URLSearchParams({
    key: key || "",
  }).toString();

  return (
    <>
      <nav className="w-full lg:p-[24px] sm:p-[24px] xs:p-0">
        <div className="w-full px-[24px] rounded-lg py-[16px] lg:bg-white sm:bg-white xs:bg-inherit flex items-center justify-between">
          <Link href={`/home?${profileQueryParams}`}>
            <Button className="rounded-lg w-[164px] h-[46px] bg-white px-[27px] py-[11px] hover-secondary-hover border border-primary-color hover:bg-primary-hover text-primary-color text-[16px] font-[600] leading-[24px]">
              Back to Editor
            </Button>
          </Link>
          <Button
            onClick={handleShareLink}
            className="rounded-lg w-[138px] h-[46px] text-[16px] leading-[27px] bg-primary-color px-[27px] font-[600] text-white py-[11px] hover-secondary-hover"
          >
            Share Link
          </Button>
        </div>
      </nav>
      <section className="lg:bg-primary-color sm:bg-primary-color xs:bg-inherit w-full h-[357px] absolute top-0 z-[-1] rounded-b-[32px]">
        <div className="w-[349px] rounded-3xl h-[569px] absolute lg:bg-white sm:bg-white xs:bg-inherit flex flex-col justify-start items-center gap-[30px] top-[208px] p-[40px] top-1/2 left-1/2 transform -translate-x-1/2 flex mx-auto">
          <div className="items-center justify-center flex flex-col gap-[20px]">
            <div
              id="avatar"
              className="relative w-[104px] h-[104px] bg-[#EEEEEE] rounded-full overflow-hidden"
            >
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Profile Preview"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : null}
              <div
                className={`absolute inset-0 rounded-full border-4 border-primary-color transition-opacity duration-300 ${
                  previewUrl ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
            <div
              id="name"
              className="min-w-[160px] max-w-full h-[16px] transition-opacity duration-300 flex items-center justify-center"
            >
              <p className="text-[18px] text-dark-grey font-IntSans text-center font-[600] leading-[27px]">
                {formValues.firstname} {formValues.lastname}
              </p>
            </div>
            <div
              id="email"
              className="min-w-[72px] max-w-full h-[16px] transition-opacity duration-300 flex items-center justify-center"
            >
              <p className="text-[14px] text-grey-color font-IntSans text-center font-[400] leading-[21px]">
                {formValues.email}
              </p>
            </div>
          </div>
          <div className="items-center justify-center flex flex-col gap-[20px]">
            {renderLinkPreviews()}
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(PreviewContent);
