import { Image as IImage } from "sanity";
import { client } from "../../../sanity/lib/client";

import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";

async function getData() {
  const res =
    await client.fetch(`*[_type=="product" && category->name=="female"]{
    title,image,alt,price,_id,category->{name},ptype->{name},"urlImage":image.asset->url,_id}`);
  return res;
}

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

export default async function Home() {
  const data: IProduct[] = await getData();
  // console.log(data);

  return (
    <div className="flex justify-center items-center max-w-screen-2xl w-full">
      <div className=" py-10 max-w-screen-2xl w-full mx-auto">
        <div className="flex flex-wrap justify-center sm:justify-between gap-y-10 px-[8.5%]">
          {data.map((item: IProduct) => (
            <div key={item._id} className="font-bold  lg:px-2 px-1 ">
              <Link href={`/products/${item.alt}`}>
                <Image
                  src={urlForImage(item.image).url()}
                  alt="item.alt"
                  width={250}
                  height={300}
                  className="max-h-[250px] object-cover object-top"
                />
                <div className="pt-2">{item.title}</div>
                <div className="">{item.category.name}</div>
                <div className="">${item.price}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
