"use client";
import React, { FormEvent, useState, FC } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/common/buttons/Primary";
import { toast } from "react-toastify";

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
        const res = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error);
        }

        toast.success("Account created successfully");
        router.push("/welcome"); // Redirect to welcome screen
      } catch (error) {
        toast.error((error as Error).message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen justify-center gap-[50px]">
      <Image
        src="/logo.svg"
        alt="app-logo"
        width={182.5}
        height={40}
        className="sm:flex sm:justify-start sm:items-left"
      />

      <form
        onSubmit={handleSubmit}
        className="w-[476px] h-[618px] rounded-lg bg-white p-[40px]"
      >
        <div className="mb-[40px] gap-[8px] flex flex-col">
          <h3 className="leading-[48px] text-[32px] font-[600] font-IntSans">
            Create account
          </h3>
          <p className="text-[16px] text-grey-color font-IntSans font-[400] leading-[24px]">
            Let’s get you started sharing your links!
          </p>
        </div>

        <div className="flex flex-col gap-[24px] mb-[24px]">
          <div className="gap-[8px] flex flex-col">
            <label
              htmlFor="email"
              className="text-[12px] font-IntSans text-dark-grey"
            >
              Email address
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="e.g. alex@email.com"
                className={`w-[396px] focus:shadow-xl relative outline-primary-color text-[16px] h-[48px] border ${
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
                className="absolute top-[16px] left-[16px]"
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
                className={`w-[396px] focus:shadow-xl text-[16px] h-[48px] outline-primary-color border ${
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
                className={`w-[396px] focus:shadow-xl text-[16px] h-[48px] border ${
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
          className="rounded-lg w-[396px] h-[46px] bg-primary-color hover:bg-primary-hover text-white text-[16px] font-[600]"
        >
          {loading ? "Signing you up...." : "Create new account"}
        </Button>
        <div className="flex gap-[5px] items-center justify-center flex mt-[24px]">
          <p className="text-[16px] text-grey-color font-IntSans font-[400] leading-[24px]">
            Already have an account?
          </p>
          <Link href="/login">
            <a className="text-primary-color text-[16px] font-IntSans font-[400] leading-[24px] hover:underline cursor-pointer">
              Login
            </a>
          </Link>
        </div>
      </form>
    </main>
  );
};

export default SignUp;
