import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { client } from "../../../sanity/lib/client";
import { Image as IImage } from "sanity";
import Link from "next/link";

async function getData() {
  const res = await client.fetch(`*[_type=="product"]{
    title,image,alt,subcat,price,_id,category -> {
      name
    }, ptype -> {
      name
    }
  }`);
  return res;
}

interface IProduct {
  title: string;
  subcat: string;
  image: IImage;
  alt: string;
  category: {
    name: string;
  };
  price: number;
  ptype: string;
  _id: string;
}

const Home = async () => {
  const data = await getData();

  return (
    <div className="flex justify-center items-center max-w-screen-2xl w-full">
      <div className=" py-10 max-w-screen-2xl w-full mx-auto">
        <div className="flex flex-wrap justify-center sm:justify-between gap-y-10 px-[8.5%]">
          {data.map((product: IProduct) => (
            <Link href={`/products/${product.alt}`} key={product._id}>
              <div key={product._id} className="font-bold  lg:px-2 px-1 ">
                <Image
                  src={urlForImage(product.image).url()}
                  alt={product.title}
                  width={250}
                  height={260}
                  className=""
                />
                <h1 className="pt-2">{product.title}</h1>
                <p className="pt-1 text-lg">${product.price}</p>
                <p className="pt-1">{product.subcat}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
