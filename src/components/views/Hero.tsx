import { Badge } from "@/components/ui/badge";
import React from "react";
import hero from "../../../public/heroimg.webp";
import logo1 from "../../../public/logo1.webp";
import logo2 from "../../../public/logo2.webp";
import logo3 from "../../../public/logo3.webp";
import logo4 from "../../../public/logo4.webp";
import img1 from "../../../public/img1.webp";
import img2 from "../../../public/img2.webp";
import img3 from "../../../public/img3.webp";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import path from "path";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="">
      <main className="flex flex-col lg:flex-row  justify-between mx-[8.5%]">
        <div className=" flex flex-col flex-grow lg:max-w-[50%]">
          <div>
            <Badge className="px-7 py-2 bg-blue-100 text-blue-700 text-lg font-bold mt-10">
              Sale 70%
            </Badge>
          </div>
          <h1 className="mt-10 scroll-m-20 font-extrabold tracking-tight text-5xl lg:text-4xl xl:text-6xl">
            An Industrial Take on Streetwear
          </h1>
          <p className="leading-7 mt-3 lg:[&:not(:first-child)]:mt-10 ">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <div>
            <Link href="/products">
              <button className="flex items-center justify-center gap-x-3 rounded-none text-lg bg-black text-white px-8 py-5 mt-5 lg:mt-10">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-shopping-cart"
                  >
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                </span>{" "}
                Start Shopping
              </button>
            </Link>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap lg:max-w-[80%] justify-between xl:my-20 my-10 gap-x-5 gap-y-5">
            <Image src={logo1} alt="" />
            <Image src={logo2} alt="" />
            <Image src={logo3} alt="" />
            <Image src={logo4} alt="" />
          </div>
        </div>
        <div className="hidden lg:flex lg:max-w-[50%] lg:h-[80%]">
          <div className="rounded-full bg-orange-100 mt-10 ">
            <Image src={hero} alt=""></Image>
          </div>
        </div>
      </main>

      <main className="mt-20 text-center flex flex-wrap lg:flex-nowrap flex-col justify-between mx-[8.5%]">
        <h4 className="scroll-m-20 text-blue-600 font-semibold tracking-tight">
          PROMOTIONS
        </h4>
        <h2 className="scroll-m-20 py-5 text-3xl font-bold tracking-tight first:mt-0">
          Our Promotion Events
        </h2>
        <div className="grid grid-cols-4 grid-rows-2 gap-x-5 gap-y-5 ">
          {/* horizontal top div */}
          <div className="bg-gray-300 flex flex-col lg:flex-row justify-around items-center col-start-1 col-end-5 row-start-1 row-end-2 lg:col-start-1 lg:col-end-3 ">
            <div className="flex flex-col justify-center py-5">
              <h2 className=" scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                GET UP TO 60%
              </h2>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                For the summer season
              </h4>
            </div>
            <Image src={img1} alt="" />
          </div>

          {/* horizontal bottom div */}
          <div className="bg-black text-white col-start-1 col-end-5 row-start-2 row-end-3 lg:col-start-1 lg:col-end-3 flex flex-col justify-center">
            <h2 className=" scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              GET 30% Off
            </h2>
            <h4 className="scroll-m-20 text-lg tracking-tight">
              USE PROMO CODE
            </h4>
            <div>
              <Button className="tracking-wide bg-zinc-500 hover:bg-zinc-500 font-bold  px-5 mt-5 lg:px-20">
                D I N E W E E K E N D S A L E
              </Button>
            </div>
          </div>
          {/* Vertical div 1 */}
          <div className="bg-orange-100 flex flex-col items-center justify-between px-5 col-start-1 col-end-5 row-start-3 row-end-4 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3">
            <div className="flex flex-col items-start w-full">
              <h4 className="pt-6  scroll-m-20 text-xl text-start tracking-tight">
                Flex Sweatshirt
              </h4>
              <div className="flex justify-start gap-x-3 text-center w-full">
                <p className=" line-through text-lg">$100.00</p>
                <p className="font-semibold text-lg">$75.00</p>
              </div>
            </div>
            <Image src={img2} alt="" />
          </div>
          {/* Vertical div 2 */}
          <div className="bg-gray-200 flex flex-col items-center justify-between px-5 col-start-1 col-end-5 row-start-4 row-end-5  lg:col-start-4 lg:row-start-1 lg:row-end-3">
            <div className="flex flex-col items-start w-full">
              <h4 className="pt-6  scroll-m-20 text-xl text-start tracking-tight">
                Flex Push Button Bomber{" "}
              </h4>
              <div className="flex justify-start gap-x-3 text-center w-full">
                <p className=" line-through text-lg">$225.00</p>
                <p className="font-semibold text-lg">$190.00</p>
              </div>
            </div>
            <Image src={img3} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
