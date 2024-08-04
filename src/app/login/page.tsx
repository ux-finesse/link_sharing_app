"use client";
import React, { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../../firebase"; 
import Button from "../components/common/buttons/Primary";
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

  const getCustomErrorMessage = (errorCode: string) => {
    switch (errorCode) {
      case "auth/invalid-email":
        return "Invalid email address.";
      case "auth/user-disabled":
        return "This account has been disabled.";
      case "auth/user-not-found":
        return "No account found with this email.";
      case "auth/wrong-password":
        return "Incorrect password.";
    }
  };

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
      const errorCode = (e as any).code;
      const customMessage = getCustomErrorMessage(errorCode);

      if (errorCode === "auth/wrong-password") {
        setError({ password: customMessage });
      } else if (
        errorCode === "auth/invalid-email" ||
        errorCode === "auth/user-not-found"
      ) {
        setError({ email: customMessage });
      } else {
        setError({ general: customMessage });
      }

      toast.error(customMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main className="flex flex-col lg:items-center w-full max-w-lg mx-auto sm:items-center min-h-screen justify-center xs:items-start lg:gap-[50px] sm:gap-[50px] xs:gap-[20px]">
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
            <h3 className="leading-[48px] text-[32px] xs:text-[24px] font-[600] font-IntSans">
              Login
            </h3>
            <p className="text-[16px] w-full text-grey-color font-IntSans font-[400] leading-[24px]">
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
                  className={`w-full focus:shadow-xl relative text-[16px] h-[48px] outline-primary-color border ${
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
                  <small className="absolute top-[16px] right-[16px] text-[12px] text-error-color">
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
                  className={`w-full focus:shadow-xl text-[16px] h-[48px] outline-primary-color border ${
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
                  <small className="absolute top-[16px] right-[16px] text-[12px] text-error-color">
                    {error.password}
                  </small>
                )}
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="rounded-lg w-full h-[46px] bg-primary-color hover:bg-primary-hover text-white text-[16px] font-[600]"
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
