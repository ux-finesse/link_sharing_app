"use client"
import React, { FC, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import NavBar from "../components/layouts/NavBar";
import CustomizeLink from "../components/CustomizeLink";

const HomeContent: FC = () => {
  const searchParams = useSearchParams();
  const key = searchParams.get("key");

  const [selectedTab, setSelectedTab] = useState<string>("links");
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
          console.error("Error fetching data:", error);
        });
    }
  }, [key]);

  return (
    <>
      <NavBar
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        links={links}
        formValues={formValues}
        preview={previewUrl}
      />
      <CustomizeLink
        selectedTab={selectedTab}
        links={links}
        setLinks={setLinks}
        formValues={formValues}
        setFormValues={setFormValues}
        preview={previewUrl}
        setPreview={setPreview}
      />
    </>
  );
};

export default HomeContent;
