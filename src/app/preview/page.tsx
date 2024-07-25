import React, { FC } from "react";
import Button from "../components/common/buttons/Secondary";
import Link from "next/link";

const Preview: FC = () => {
  return (
    <>
      <main className="min-h-screen">
        <nav className="w-full p-[24px] ">
          <div className="w-full px-[24px] rounded-lg  py-[16px] bg-white flex items-center justify-between">
            <Link href="/home">
              <Button className="rounded-lg w-[164px] h-[46px] bg-white px-[27px] py-[11px] hover-secondary-hover border border-primary-color hover:bg-primary-hover text-primary-color text-[16px] font-[600] leading-[24px]">
                Back to Editor{" "}
              </Button>
            </Link>
            
              <Button className="rounded-lg w-[138px] h-[46px] text-[16px] leading-[27px] bg-primary-color px-[27px] font-[600] text-white py-[11px] hover-secondary-hover">
                Share Link
              </Button>
            
          </div>
        </nav>
        <section className="bg-primary-color w-full h-[357px] absolute top-0 z-[-1] rounded-b-[32px]">
          <div className="w-[349px] rounded-3xl h-[569px] absolute bg-white items-center justify-center top-[208px] top-1/2 left-1/2 transform -translate-x-1/2 flex mx-auto"></div>
        </section>
      </main>
    </>
  );
};

export default Preview;
