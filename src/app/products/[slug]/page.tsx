// import { client } from "@/lib/createClient";
import { client } from "../../../../sanity/lib/client";
import { Image as Image1 } from "sanity";

import { Image as IImage } from "sanity";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import Link from "next/link";
import Wrapper from "@/components/layout/Wrapper";
import Quantity from "@/components/views/Quantity";
// import AddToCartButton from "@/components/Button";
// import { auth } from "@clerk/nextjs";

interface IProduct {
  title: string;
  image: IImage;
  alt: string;
  category: {
    name: string;
  };
  price: number;
  ptype: string;
  _id: string;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  totalPrice: number;
  subCat: string;
  image: Array<Image1>;
  userId: string;
  qunatity: number;
}

async function getData(slug: string) {
  const res = await client.fetch(
    `*[_type=="product" && alt==$slug]{
      title,image,alt,price,quantity,_id,category -> {
        name
      }, ptype -> {
        name
      }
    }`,
    { slug }
  );
  return res;
}

const sizes = ["XS", "S", "M", "L", "XL"];

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);

  return (
    <Wrapper>
      <div className="  mx-[8.5%] py-2 md:py-5 mb-20 ">
        <div className="flex justify-start flex-col md:flex-row gap-x-10 w-full">
          <h1 className="block md:hidden font-bold text-2xl text-gray-600 py-5">
            Product :
          </h1>
          {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 mdl:grid-cols-3 justify-center items-center gap-y-8 gap-x-5 mt-24"> */}
          <div className="hidden lg:flex justify-end items-start">
            <Image
              src={urlForImage(data[0].image).url()}
              alt="item.alt"
              width={100}
              height={100}
              className="max-h-[100px] object-cover object-top"
            />
          </div>
          <div key={data[0]._id} className="flex flex-col gap-y-2">
            <Image
              src={urlForImage(data[0].image).url()}
              alt="item.alt"
              width={650}
              height={550}
              className="max-h-[700px] object-cover object-top"
            />
          </div>
          <div>
            {/* Right side */}
            <h2 className="pt-10 text-xl sm:text-3xl font-semibold">
              {data[0].title}
            </h2>
            {/* <div className="pdp">{data[0].ptype.name}</div> */}
            <h4></h4>
            <div className="pt-2 md:pt-5">
              {/* <AddToCartButton props={data[0]} /> */}
              <span className=" text-lg sm:text-2xl font-bold">
                ${data[0].price}
              </span>
            </div>

            <h1 className="font-bold py-2 md:py-5 text-gray-600">
              SELECT SIZE
            </h1>
            {/* Sizes */}
            <div className=" text-sm  flex gap-x-5 font-extrabold text-gray-600">
              {sizes.map((size, index) => (
                <div
                  key={index}
                  className="h-7 w-7 rounded-full bg-gray-100 hover:shadow-lg hover:bg-gray-300 flex justify-center items-center"
                >
                  <button>{size}</button>
                </div>
              ))}
            </div>

            {/* Quantity */}

            <div className="py-3 md:py-5">
              <h1 className="font-extrabold text-xl text-gray-700">
                Quantity : <Quantity product={data} qty={1} />
              </h1>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-y-8 gap-x-5">
          <div className="relative">
            <h4 className="z-20">Product Information</h4>
            <div className="z-0 absolute left-10 text-[#F2F3F7] text-2xl font-bodyFont font-bold">
              Overview
            </div>
          </div>
        </div> */}
      </div>
    </Wrapper>
  );
};

export default page;
