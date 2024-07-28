"use client";
import React, { useState, FC } from "react";
import Image from "next/image";
import Button from "../components/common/buttons/Primary";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import { auth } from "../lib/firebase";
import { toast } from "react-toastify";

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
        const response = await axios.post("/api/login", { email, password });

        if (response.data.error) {
          console.error("Login error:", response.data.error);
          toast.error(response.data.error.message, { theme: "light" });
        } else {
          console.log("Login successful:", response.data.user);
          router.push("/welcome"); // Redirect to welcome screen on successful login
          toast.success("Successfully logged in.", { theme: "light" });
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to login. Please check your credentials.", {
          theme: "light",
        });
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
      <main className="flex flex-col lg:items-center sm:items-center min-h-screen justify-center xs:items-start lg:gap-[50px] sm:gap-[50px] xs:gap-[20px]">
        <Image
          src="/logo.svg"
          alt="app-logo"
          width={182.5}
          height={40}
          className="justify-start items-left ml-[32px]"
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
                  onChange={handleEmailChange}
                  placeholder="e.g. alex@email.com"
                  className={`lg:w-[396px] sm:w-[396px] xs:w-[326px] focus:shadow-xl relative text-[16px] h-[48px] outline-primary-color border ${
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
                  className={`lg:w-[396px] sm:w-[396px] xs:w-[326px] focus:shadow-xl text-[16px] h-[48px] outline-primary-color border ${
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
};

export default LogIn;
