"use client";
import React, { useState, FC } from "react";
import Image from "next/image";
import Button from "../components/common/buttons/Primary";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

const LogIn: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { email: "", password: "" };
    if (!email) {
      newErrors.email = "Can’t be empty";
    }
    if (!password) {
      newErrors.password = "Please check again";
    }
    setErrors(newErrors);
    if (!newErrors.email && !newErrors.password) {
      setLoading(true);
      try {
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/dashboard"); // Redirect to dashboard on successful login
      } catch (error) {
        console.error(error);
        alert("Failed to login. Please check your credentials.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  };

  return (
    <>
      <main className="flex flex-col items-center min-h-screen justify-center gap-[50px]">
        <Image
          src="/logo.svg"
          alt="app-logo"
          width={182.5}
          height={40}
          className="justify-start items-left"
        />
        <form
          onSubmit={handleSubmit}
          className="w-[476px] h-[482px] rounded-lg bg-white p-[40px] gap-[40px]"
        >
          <div className="mb-[40px] gap-[8px] flex flex-col">
            <h3 className="leading-[48px] text-[32px] font-[600] font-IntSans ">
              Login
            </h3>
            <p className="text-[16px]  text-grey-color font-IntSans font-[400] leading-[24px]">
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
                  onChange={handleEmailChange}
                  placeholder="e.g. alex@email.com"
                  className={`w-[396px] focus:shadow-xl relative text-[16px] h-[48px] outline-primary-color border ${
                    errors.email ? "border-red-500" : "border-border-color"
                  } rounded-lg pl-[44px] pr-[16px] py-[12px]`}
                />
                <Image
                  src="/ph_envelope-simple-fill.svg"
                  alt="ph_envelope-simple-fill"
                  width={16}
                  height={16}
                  className="absolute top-[16px] left-[16px]"
                />
                {errors.email && (
                  <small className="absolute top-[16px] right-[16px] text-[12px] text-red-500">
                    {errors.email}
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
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                  className={`w-[396px] focus:shadow-xl text-[16px] h-[48px] outline-primary-color border ${
                    errors.password ? "border-red-500" : "border-border-color"
                  } rounded-lg  pl-[44px] pr-[16px] py-[12px]`}
                />
                <Image
                  src="/ph_lock-key-fill.svg"
                  alt="ph_lock-key-fill"
                  width={16}
                  height={16}
                  className="absolute top-[16px] left-[16px]"
                />
                {errors.password && (
                  <small className="absolute top-[16px] right-[16px] text-[12px] text-red-500">
                    {errors.password}
                  </small>
                )}
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="rounded-lg w-[396px] h-[46px] bg-primary-color text-white text-[16px] font-[600]"
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
          <div className=" flex gap-[5px] items-center justify-center flex mt-[24px]">
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
};

export default LogIn;
