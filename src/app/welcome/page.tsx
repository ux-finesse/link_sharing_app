"use client";
import React from "react";
import  useAuth  from "../lib/useAuth";
import { useRouter } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import Button from "../components/common/buttons/Primary";
import "../globals.css";
import { app } from "../../../firebase";
import withAuth from "../components/withAuth";

const Welcome: React.FC = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  async function handleLogout() {
    await signOut(getAuth(app));

    await fetch("/api/logout");

    router.push("/login");
  }


  if (loading) {
    return (
      <>
        <div className="min-h-screen flex items-center flex-col justify-center">
          <p className="font-[600] text-center">Loading...</p>
        </div>
      </>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen flex items-center ">
        <div className=" flex lg:bg-white xs:items-center xs:bg-inherit flex-col justify-center mx-auto gap-[20px] w-[600px] rounded-lg h-[400px]">
          <p className="font-[400] text-center">
            You need to be logged in to access this page.
          </p>
          <Link href="/login">
            <Button
              type="submit"
              className="rounded-lg w-[125px] h-[46px] bg-primary-color text-white text-[14px] font-[500] hover:bg-primary-hover"
            >
              Go to Login
            </Button>
            <p></p>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center xs:px-[40px] lg:px-0">
      <div className=" flex lg:bg-white items-center flex-col xs:bg-inherit justify-center mx-auto gap-[20px] w-[600px] rounded-lg h-[400px]">
        <h1 className="font-[600] text-center">
          Welcome,
          <br />
          {user.email}
        </h1>
        <Link href="/home">
          <Button
            type="submit"
            className="rounded-lg w-[125px] h-[46px] bg-primary-color text-white text-[14px] font-[500] hover:bg-primary-hover"
          >
            Take me Home
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default withAuth(Welcome);
