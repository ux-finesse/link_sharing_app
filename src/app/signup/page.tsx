"use client";
import React, { FormEvent, useState, FC } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/common/buttons/Primary";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp: FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    switch (field) {
      case "email":
        setEmail(value);
        setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
        break;
      case "password":
        setPassword(value);
        setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors = { email: "", password: "", confirmPassword: "" };

    if (!email) {
      newErrors.email = "Email can't be empty";
    }

    if (!password) {
      newErrors.password = "Password can't be empty";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password && !newErrors.confirmPassword) {
      setLoading(true);
      try {
        console.log("Sending data:", { email, password });
        const res = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        if (res.ok) {
          console.log("Response data:", data);
          toast.success("Account created successfully", { theme: "light" });
          router.push("/welcome"); // Redirect to welcome screen
        } else {
          console.error("Error response:", data);
          toast.error(data.error || "Registration failed", { theme: "light" });
        }
      } catch (error) {
        console.error("Error during registration:", error);
        toast.error((error as Error).message, { theme: "light" });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
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
        className="lg:w-[476px] sm:w-[476px] xs:w-full  h-[618px] rounded-lg lg:bg-white sm:bg-white xs:bg-inherit lg:p-[40px] sm:p-[40px] xs:px-[32px]"
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
                className={`g:w-[396px] sm:w-[396px] xs:w-[326px] focus:shadow-xl relative outline-primary-color text-[16px] h-[48px] border ${
                  errors.email ? "border-red-500" : "border-border-color"
                } rounded-lg pl-[44px] pr-[16px] py-[12px]`}
                value={email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              <Image
                src="/ph_envelope-simple-fill.svg"
                alt="ph_envelope-simple-fill"
                width={16}
                height={16}
                className="absolute  top-[16px] left-[16px]"
              />
              {errors.email && (
                <small className="absolute top-[16px] right-[16px] text-[12px] text-error-color">
                  {errors.email}
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
                  errors.password ? "border-red-500" : "border-border-color"
                } rounded-lg pl-[44px] pr-[16px] py-[12px]`}
                value={password}
                onChange={(e) => handleInputChange("password", e.target.value)}
              />
              <Image
                src="/ph_lock-key-fill.svg"
                alt="ph_lock-key-fill"
                width={16}
                height={16}
                className="absolute top-[16px] left-[16px]"
              />
              {errors.password && (
                <small className="absolute top-[16px] right-[16px] text-[12px] text-error-color">
                  {errors.password}
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
                className={`g:w-[396px] sm:w-[396px] xs:w-[326px] focus:shadow-xl text-[16px] h-[48px] border ${
                  errors.confirmPassword
                    ? "border-red-500"
                    : "border-border-color"
                } outline-primary-color rounded-lg pl-[44px] pr-[16px] py-[12px]`}
                value={confirmPassword}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
              />
              <Image
                src="/ph_lock-key-fill.svg"
                alt="ph_lock-key-fill"
                width={16}
                height={16}
                className="absolute top-[16px] left-[16px]"
              />
              {errors.confirmPassword && (
                <small className="absolute top-[16px] right-[16px] text-[12px] text-error-color">
                  {errors.confirmPassword}
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
          className="rounded-lg g:w-[396px] sm:w-[396px] xs:w-[326px] h-[46px] bg-primary-color hover:bg-primary-hover text-white text-[16px] font-[600]"
        >
          {loading ? "Signing you up...." : "Create new account"}
        </Button>
        <div className=" lg:flex-row sm:flex-row lg:gap-[5px] sm:gap-[5px] xs:text-center items-center justify-center mt-[24px] flex xs:flex-col xs:gap-0">
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
    </main>
  );
};

export default SignUp;