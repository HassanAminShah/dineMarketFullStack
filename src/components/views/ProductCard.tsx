import React, { cache } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { Image as IImage } from "sanity";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";

async function GetData() {
  const res = await client.fetch(
    `*[_type ==   "product"]{title,price,alt,category->{name},image,"urlImage":image.asset->url,_id}`
  );
  return res;
}

interface IProduct {
  title: string;
  price: number;
  alt: string;
  price1: number;
  category: { name: string };
  image: IImage;
  urlImage: string;
  _id: string;
}

const ProductCard = async () => {
  const data = await GetData();

  return (
    <div className="flex justify-center items-center max-w-screen-2xl w-full">
      <div className="flex justify-center items-center h-full my-20 max-w-[90%] xl:max-w-[95%] 2xl:max-w-[100%] ">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-[63%] sm:max-w-[67%] lg:max-w-[80%] xl:max-w-[77%] flex justify-between"
        >
          <CarouselContent>
            {data.map((product: IProduct) => (
              <CarouselItem
                key={product._id}
                className="md:basis-1/2 w-[90%] xl:basis-1/3 flex flex-col justify-center items-center"
              >
                <div className="font-bold ">
                  <Link href={`/products/${product.alt}`}>
                    <Image
                      src={urlForImage(product.image).url()}
                      alt={product.title}
                      width={300}
                      height={300}
                    />
                    <h1 className="pt-2">{product.title}</h1>
                    <p>${product.price}</p>
                    {/* <p>${product.price1}</p> */}
                    <p>{product.category.name}</p>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default ProductCard;
