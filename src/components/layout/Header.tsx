"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import logo from "../../../public/Logo.webp";
import Image from "next/image";
import { CgShoppingCart } from "react-icons/cg";
import { useAppSelector } from "@/redux/store";

const Header = () => {
  const [open, setOpen] = useState(false);
  const ToggleNavbar = (): void => {
    setOpen(!open);
  };

  const links = [
    {
      lname: "Female",
      href: "/female",
    },
    {
      lname: "Male",
      href: "/male",
    },
    {
      lname: "Kids",
      href: "/kids",
    },
    {
      lname: "All Products",
      href: "/products",
    },
  ];

  const totalItems = useAppSelector((state) => state.cart.totalQuantity);
  return (
    <div className=" max-w-screen-2xl w-full mx-auto z-50 left-0 sticky top-0 bg-white">
      <header className="px-[8.5%]  lg:my-[2%] lg:py-2 lg:flex items-center  lg:justify-between hidden">
        <Link href={"/"}>
          <div className="flex items-center pr-5">
            <Image src={logo} width={140} height={25} alt={""} />
          </div>
        </Link>
        <div className="flex items-center">
          <div className="flex justify-between gap-x-8 items-center lg:text-lg ">
            {links.map((link) => (
              <div>
                <Link href={link.href} key={link.href}>
                  {link.lname}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center border h-8 border-b-2 rounded mx-2 px-1 w-[35%]">
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
              className="lucide lucide-search dark:text-white"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </span>
          <Input></Input>
        </div>
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex justify-center items-center">
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
          </div>

          <div className="absolute top-0 right-1 text-xs bg-red-900 rounded-full h-4 w-4 text-white flex justify-center items-center">
            {totalItems ? totalItems : 0}
          </div>
        </div>
      </header>
      <div className="lg:hidden py-4 px-[8.5%] flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center">
            <Image src={logo} width={140} height={25} alt={""} />
          </div>
        </Link>
        <button
          className=" inline-flex items-center justify-center text-black"
          onClick={ToggleNavbar}
        >
          {open ? (
            <svg
              width="50px"
              height="50px"
              viewBox="0 -0.5 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
                fill="#000000"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
            >
              <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z" />
            </svg>
          )}
        </button>
      </div>
      {open && (
        <div className="lg:hidden h-[100vh] bg-white  flex flex-col justify-start pt-20 items-center gap-y-7">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex justify-center items-center">
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
            </div>

            <div className="absolute top-0 right-1 text-xs bg-red-900 rounded-full h-4 w-4 text-white flex justify-center items-center">
              {totalItems ? totalItems : 0}
            </div>
          </div>
          {links.map((link) => (
            <div>
              <Link href={link.href} key={link.href}>
                {link.lname}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
