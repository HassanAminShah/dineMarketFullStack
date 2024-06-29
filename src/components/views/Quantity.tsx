"use client";
import { cartActions } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/store";
import { Image } from "sanity";

import React, { useState } from "react";
export interface Product {
  _id: string;
  name: string;
  price: number;
  totalPrice: number;
  subCat: string;
  image: Array<Image>;
  userId: string;
  qunatity: number;
}

type IProps = {
  product: Product;
  qty: number;
};

const Quantity = (props: IProps) => {
  const [num, setNum] = useState(1);
  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(cartActions.addToCart({ product: props.product, quantity: num }));
  };

  return (
    <div>
      <div className="flex gap-x-5 pt-2 md:pt-5 items-center">
        <button
          className="w-8 h-8  flex bg-slate-50 justify-center items-center border rounded-full"
          onClick={() => setNum(num <= 1 ? 1 : num - 1)}
        >
          -
        </button>
        <h1 className="">{num}</h1>
        <button
          className="w-8 h-8  flex bg-slate-50 justify-center items-center border rounded-full"
          onClick={() => setNum(num + 1)}
        >
          +
        </button>
      </div>

      <button
        onClick={addToCart}
        className="flex items-center font-semibold justify-center gap-x-3 rounded-none text-lg bg-black text-white px-8 py-3 my-3"
      >
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
        </span>
        Add To Cart
      </button>
    </div>
  );
};

export default Quantity;
