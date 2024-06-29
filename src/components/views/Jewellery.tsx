import React from "react";
import jewellery from "../../../public/jewellery.webp";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
function Jewellery() {
  return (
    <div className="bg-[#FBFCFF]  my-10 z-10 pb-5">
      <div className="mx-[8.5%]">
        <div className="flex justify-end items-center py-14">
          <h1 className="lg:max-w-[43%] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Unique and Authentic Vintage Designer Jewellery
          </h1>
        </div>

        <div className="lg:gap-x-36 flex flex-col xl:flex-row  justify-between gap-y-10">
          {/* Text Section */}
          <div className="relative  flex-1 text-[#212121] font-sans gap-x-[15%] gap-y-7 lg:gap-y-3 grid grid-cols-2 grid-rows-2">
            <div className="z-30">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Using Good Quality Materials{" "}
              </h4>
              <p className="leading-7 mt-2 lg:[&:not(:first-child)]:mt-2 ">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className="z-30">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                100% Handmade Products{" "}
              </h4>
              <p className="leading-7 mt-2 lg:[&:not(:first-child)]:mt-2 ">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className="z-30">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Modern Fashion Design
              </h4>
              <p className="leading-7 mt-2 lg:[&:not(:first-child)]:mt-2 ">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className="z-30">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Discount for Bulk Orders{" "}
              </h4>
              <p className="leading-7 mt-2 lg:[&:not(:first-child)]:mt-2 ">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>

            <div className="absolute z-20">
              <h1 className="scroll-m-20 text-7xl sm:text-8xl   text-[#ECEDEF] font-extrabold tracking-tight lg:text-8xl xl:max-w-[50%]">
                Different from others
              </h1>
            </div>
          </div>
          {/* Picture Section */}
          <div className="flex flex-col gap-y-5 sm:flex-row flex-1 gap-x-10 justify-between">
            <div className="max-w-[60%] flex justify-center  xl:flex-1">
              <Image
                src={jewellery}
                className="bg-cover"
                width={340}
                height={200}
                alt={""}
              />
            </div>
            <div className="flex flex-col flex-1 justify-center items-start gap-y-8">
              <p className="leading-7 mt-2 lg:[&:not(:first-child)]:mt-5 ">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.{" "}
              </p>
              <Link href={"/products"}>
                <Button className="rounded-none">See All Products</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jewellery;
