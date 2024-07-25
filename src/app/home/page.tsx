"use client";
import React, { FC, useState, useEffect } from "react";
import { useAuth } from "../lib/useAuth";
import Link from "next/link";
import Button from "../components/common/buttons/Primary";
import NavBar from "../components/layouts/NavBar";
import CustomizeLink from "../components/CustomizeLink";
import { useSearchParams } from "next/navigation";

const Home: FC = () => {
  const { user, loading } = useAuth();

  const searchParams = useSearchParams();
  const key = searchParams.get("key");

  const [selectedTab, setSelectedTab] = useState("links");
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
        });
    }
  }, [key]);

  if (loading) {
    // return <p>Loading...</p>;
  }

  if (!user) {
    // return (
    //   <main className="min-h-screen flex items-center">
    //     <div className="flex bg-white items-center flex-col justify-center mx-auto gap-[20px] w-[600px] rounded-lg h-[400px]">
    //       <p className="font-[400] text-center">
    //         You need to be logged in to access this page.
    //       </p>
    //       <Link href="/login">
    //         <Button
    //           type="submit"
    //           className="rounded-lg w-[125px] h-[46px] bg-primary-color text-white text-[14px] font-[500] hover:bg-primary-hover"
    //         >
    //           Go to Login
    //         </Button>
    //         <p></p>
    //       </Link>
    //     </div>
    //   </main>
    // );
  }

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





export default Home;


