import React from "react";
import logo from "../../../public/Logo.webp";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <div className="">
      <div className="max-w-screen-2xl w-full mx-auto">
        <div className="mx-[8.5%]  flex justify-between text-[#666666 flex-wrap gap-y-8 gap-x-3 lg:flex-nowrap]">
          <div className="flex flex-col md:max-w-[35%] items-start gap-y-7 pr-5">
            <Image src={logo} width={140} height={25} alt={""} />
            <p className="leading-7 lg:[&:not(:first-child)]:mt-0 ">
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made.
            </p>
            {/* Icons Div */}
            <div className="flex justify-evenly items-center gap-x-3">
              <div className="w-10 h-10 flex items-center justify-center bg-[#F1F1F1]  rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-[#F1F1F1]  rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-[#F1F1F1]  rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-start items-start gap-y-3">
            <h4 className="scroll-m-20 text-xl font-bold tracking-tight">
              Company
            </h4>
            <button>
              <Link href={""}>About</Link>
            </button>
            <button>
              <Link href={""}>Terms of Use</Link>
            </button>
            <button>
              <Link href={""}>Privacy Policy</Link>
            </button>
            <button>
              <Link href={""}>How it Works</Link>
            </button>
            <button>
              <Link href={""}>Contact Us</Link>
            </button>
          </div>
          <div className=" flex flex-col justify-start items-start gap-y-3">
            <h4 className="scroll-m-20 text-xl font-bold tracking-tight">
              Support
            </h4>
            <button>
              <Link href={""}>Support Carrer</Link>
            </button>
            <button>
              <Link href={""}>24h Service</Link>
            </button>
            <button>
              <Link href={""}>Quick Chat</Link>
            </button>
          </div>
          <div className=" flex flex-col justify-start items-start gap-y-3">
            <h4 className="scroll-m-20 text-xl font-bold tracking-tight">
              Contact
            </h4>
            <button>
              <Link href={""}>Whatsapp</Link>
            </button>
            <button>
              <Link href={""}>Support 24h</Link>
            </button>
          </div>
        </div>
      </div>

      <hr className="mt-20 mb-10 w-full border-black" />
      <div className="max-w-screen-2xl w-full mx-auto">
        <div className="mx-[8.5%] flex flex-wrap lg:flex-nowrap gap-x-10 gap-y-5 justify-center lg:justify-between items-center mb-10">
          <p>Copyright © 2024 Dine Market</p>
          <p>
            Design by. <span className="font-bold">Weird Design Studio</span>
          </p>
          <p>
            Code by. <span className="font-bold">HassanAminShah on github</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
