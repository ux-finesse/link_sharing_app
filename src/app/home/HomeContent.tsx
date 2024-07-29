"use client";
import React, { FC, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import NavBar from "../components/layouts/NavBar";
import CustomizeLink from "../components/CustomizeLink";
import { getAuth, signOut } from "firebase/auth";
import useInactivityLogout from "../hooks/InActivityLogout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../../firebase";
import withAuth from "../components/withAuth";

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

  const router = useRouter();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.info("Logged out due to inactivity");
        router.push("/login");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
        toast.error("Failed to log out");
      });
  };

  // Set the timeout to 10 minutes (600,000 milliseconds)
  useInactivityLogout(600000, handleLogout);

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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default withAuth(HomeContent);
