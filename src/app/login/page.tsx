"use client";
import React, { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../../firebase"; // Adjust the import path as necessary
import Button from "../components/common/buttons/Primary"; // Adjust the import path as necessary
import { toast } from "react-toastify";

type ErrorState = {
  email?: string;
  password?: string;
  general?: string;
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<ErrorState>({});
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError({});
    setLoading(true);

    try {
      const credential = await signInWithEmailAndPassword(
        getAuth(app),
        email,
        password
      );
      const idToken = await credential.user.getIdToken();

      await fetch("/api/login", {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });

      router.push("/welcome");
      toast.success("Successfully logged in!");
    } catch (e) {
      const errorMessage = (e as Error).message;
      if (errorMessage.includes("password")) {
        setError({ password: errorMessage });
      } else if (errorMessage.includes("email")) {
        setError({ email: errorMessage });
      } else {
        setError({ general: errorMessage });
      }
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main className="flex flex-col lg:items-center sm:items-center min-h-screen justify-center xs:items-start lg:gap-[50px] sm:gap-[50px] xs:gap-[20px]">
        <Image
          src="/logo.svg"
          alt="app-logo"
          width={182.5}
          height={40}
          className="justify-start items-left lg:ml-0 sm:ml-0 xs:ml-[32px]"
        />
        <form
          onSubmit={handleSubmit}
          className="lg:w-[476px] sm:w-[476px] xs:w-full  lg:h-[482px] sm:h-[482px] xs:bg-inherit rounded-lg lg:bg-white sm:bg-white lg:p-[40px] sm:p-[40px] xs:px-[32px] gap-[40px]"
        >
          <div className="mb-[40px] gap-[8px] flex flex-col">
            <h3 className="leading-[48px] lg:text-[32px] xs:text-[24px] font-[600] font-IntSans">
              Login
            </h3>
            <p className="text-[16px] lg:w-full sm:w-full xs:w-[311px] text-grey-color font-IntSans font-[400] leading-[24px]">
              Add your details below to get back into the app
            </p>
          </div>

          <div className="flex flex-col gap-[24px] mb-[24px]">
            <div className=" gap-[8px] flex flex-col">
              <label
                htmlFor="email"
                className="text-[12px] font-IntSans text-dark-grey"
              >
                Email address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. alex@email.com"
                  className={`lg:w-[396px] sm:w-[396px] xs:w-[326px] focus:shadow-xl relative text-[16px] h-[48px] outline-primary-color border ${
                    error.email ? "border-red-500" : "border-border-color"
                  } rounded-lg pl-[44px] pr-[16px] py-[12px]`}
                />
                <Image
                  src="/ph_envelope-simple-fill.svg"
                  alt="ph_envelope-simple-fill"
                  width={16}
                  height={16}
                  className="absolute top-[16px] left-[16px]"
                />
                {error.email && (
                  <small className="absolute top-[16px] right-[16px] text-[12px] text-red-500">
                    {error.email}
                  </small>
                )}
              </div>
            </div>

            <div className=" gap-[8px] flex flex-col relative">
              <label
                htmlFor="password"
                className="text-[12px] font-IntSans text-dark-grey"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className={`lg:w-[396px] sm:w-[396px] xs:w-[326px] focus:shadow-xl text-[16px] h-[48px] outline-primary-color border ${
                    error.password ? "border-red-500" : "border-border-color"
                  } rounded-lg  pl-[44px] pr-[16px] py-[12px]`}
                />
                <Image
                  src="/ph_lock-key-fill.svg"
                  alt="ph_lock-key-fill"
                  width={16}
                  height={16}
                  className="absolute top-[16px] left-[16px]"
                />
                {error.password && (
                  <small className="absolute top-[16px] right-[16px] text-[12px] text-red-500">
                    {error.password}
                  </small>
                )}
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="rounded-lg lg:w-[396px] sm:w-[396px] xs:w-[326px] h-[46px] bg-primary-color hover:bg-primary-hover text-white text-[16px] font-[600]"
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
            <div className=" lg:flex-row sm:flex-row lg:gap-[5px] sm:gap-[5px] xs:text-center items-center justify-center mt-[24px] flex xs:flex-col xs:gap-0 ">
            <p className="text-[16px] text-grey-color font-IntSans font-[400] leading-[24px]">
              Don’t have an account?
            </p>
            <Link href="/signup">
              <span className="text-primary-color text-[16px] font-IntSans font-[400] leading-[24px] hover:underline cursor-pointer">
                Create account
              </span>
            </Link>
          </div>
        </form>
      </main>
    </>
  );
}
