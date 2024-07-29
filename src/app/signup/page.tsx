"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { app } from "../../../firebase"; // Adjust the import path as necessary
import Button from "../components/common/buttons/Primary"; // Adjust the import path if necessary

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState<{
    email?: string;
    password?: string;
    confirmation?: string;
    general?: string;
  }>({});
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError({});

    if (password !== confirmation) {
      setError({ confirmation: "Passwords don't match" });
      toast.error("Passwords don't match");
      return;
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(getAuth(app), email, password);
      router.push("/login");
      toast.success("Account created successfully!");
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
        className="lg:w-[476px] sm:w-[476px] xs:w-full h-[618px] rounded-lg lg:bg-white sm:bg-white xs:bg-inherit lg:p-[40px] sm:p-[40px] xs:px-[32px]"
      >
        <div className="mb-[40px] gap-[8px] flex flex-col">
          <h3 className="leading-[48px] lg:text-[32px] xs:text-[24px] font-[600] font-IntSans">
            Create account
          </h3>
          <p className="lg:text-[16px] lg:text-grey-color lg:font-IntSans lg:font-[400] lg:leading-[24px]">
            Let’s get you started sharing your links!
          </p>
        </div>
        <div className="flex flex-col gap-[24px] mb-[24px]">
          <div className="lg:gap-[8px] sm:gap-[8px] lg:flex flex-col">
            <label
              htmlFor="email"
              className="lg:text-[12px] lg:font-IntSans lg:text-dark-grey"
            >
              Email address
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="e.g. alex@email.com"
                className={`lg:w-[396px] sm:w-[396px] xs:w-[326px] focus:shadow-xl relative outline-primary-color text-[16px] h-[48px] border ${
                  error.email ? "border-red-500" : "border-border-color"
                } rounded-lg pl-[44px] pr-[16px] py-[12px]`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Image
                src="/ph_envelope-simple-fill.svg"
                alt="ph_envelope-simple-fill"
                width={16}
                height={16}
                className="absolute top-[16px] left-[16px]"
              />
              {error.email && (
                <small className="absolute top-[16px] right-[16px] text-[12px] text-error-color">
                  {error.email}
                </small>
              )}
            </div>
          </div>
          <div className="gap-[8px] flex flex-col relative">
            <label
              htmlFor="password"
              className="text-[12px] font-IntSans text-dark-grey"
            >
              Create Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="At least 8 characters"
                className={`lg:w-[396px] sm:w-[396px] xs:w-[326px] focus:shadow-xl text-[16px] h-[48px] outline-primary-color border ${
                  error.password ? "border-red-500" : "border-border-color"
                } rounded-lg pl-[44px] pr-[16px] py-[12px]`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Image
                src="/ph_lock-key-fill.svg"
                alt="ph_lock-key-fill"
                width={16}
                height={16}
                className="absolute top-[16px] left-[16px]"
              />
              {error.password && (
                <small className="absolute top-[16px] right-[16px] text-[12px] text-error-color">
                  {error.password}
                </small>
              )}
            </div>
          </div>
          <div className="gap-[8px] flex flex-col relative">
            <label
              htmlFor="confirmPassword"
              className="text-[12px] font-IntSans text-dark-grey"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="At least 8 characters"
                className={`lg:w-[396px] sm:w-[396px] xs:w-[326px] focus:shadow-xl text-[16px] h-[48px] border ${
                  error.confirmation ? "border-red-500" : "border-border-color"
                } outline-primary-color rounded-lg pl-[44px] pr-[16px] py-[12px]`}
                value={confirmation}
                onChange={(e) => setConfirmation(e.target.value)}
              />
              <Image
                src="/ph_lock-key-fill.svg"
                alt="ph_lock-key-fill"
                width={16}
                height={16}
                className="absolute top-[16px] left-[16px]"
              />
              {error.confirmation && (
                <small className="absolute top-[16px] right-[16px] text-[12px] text-error-color">
                  {error.confirmation}
                </small>
              )}
            </div>
          </div>
          <p className="text-grey-color text-[12px] font-IntSans font-[400] leading-[18px]">
            Password must contain at least 8 characters
          </p>
        </div>
        <Button
          type="submit"
          className="rounded-lg lg:w-[396px] sm:w-[396px] xs:w-[326px] h-[46px] bg-primary-color hover:bg-primary-hover text-white text-[16px] font-[600]"
        >
          {loading ? "Signing you up..." : "Create new account"}
        </Button>
        {error.general && (
          <p className="text-red-500 text-center mt-4">{error.general}</p>
        )}
        <div className="lg:flex-row sm:flex-row lg:gap-[5px] sm:gap-[5px] xs:text-center items-center justify-center mt-[24px] flex xs:flex-col xs:gap-0">
          <p className="text-[16px] text-grey-color font-IntSans font-[400] leading-[24px]">
            Already have an account?
          </p>
          <Link href="/login">
            <p className="text-primary-color text-[16px] font-IntSans font-[400] leading-[24px] hover:underline cursor-pointer">
              Login
            </p>
          </Link>
        </div>
      </form>
    </main>
  );
};