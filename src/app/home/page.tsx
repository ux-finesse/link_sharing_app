"use client";
import React, { useState } from "react";
import { useAuth } from "../lib/useAuth";
import Link from "next/link";
import Button from "../components/common/buttons/Primary";
import NavBar from "../components/layouts/NavBar";
import CustomizeLink from "../components/CustomizeLink";

const Dashboard: React.FC = () => {
  const { user, loading } = useAuth();

  const [selectedTab, setSelectedTab] = useState("links");

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
    <main>
      <NavBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <CustomizeLink selectedTab={selectedTab} />
    </main>
  );
};

export default Dashboard;
