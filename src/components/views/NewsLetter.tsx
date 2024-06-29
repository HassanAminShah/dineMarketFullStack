import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function NewsLetter() {
  return (
    <div className="my-20 lg:my-40 relative top-0">
      <div className="z-20 flex flex-col justify-center items-center w-[90%] sm:w-full gap-y-5 px-[7%] sm:mx-0">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
          Subscribe Our Newsletter
        </h2>
        <p className="leading-7 lg:[&:not(:first-child)]:mt-0 ">
          Get the latest information and promo offers directly{" "}
        </p>
        <div className="flex justify-center gap-x-3 w-full items-center">
          <Input
            type="email"
            className="border-[1px] py-4 w-[50%] md:w-[30%] lg:w-[24%] xl:w-[19%]  border-black"
            placeholder="Input email address"
          ></Input>
          <Button className="rounded-none">Get Started</Button>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center -z-10">
        <h1 className="scroll-m-20 text-7xl sm:text-8xl   text-[#ECEDEF] font-extrabold tracking-tight lg:text-8xl xl:max-w-[50%]">
          Newsletter
        </h1>
      </div>
    </div>
  );
}

export default NewsLetter;
