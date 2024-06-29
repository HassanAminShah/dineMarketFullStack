import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { client } from "../../../sanity/lib/client";
import { Image as IImage } from "sanity";
import Link from "next/link";

async function getData() {
  const res = await client.fetch(
    `*[_type == "product"]{title,price,category->{name},image,"urlImage":image.asset->url,_id}`
  );
  return res;
}

interface IProduct {
  title: string;
  price: number;
  category: { name: string };
  image: IImage;
  urlImage: string;
  _id: string;
}

const getProductsByCategory = async (category: string) => {
  const data = await getData();
  data.filter((product: IProduct) => product.category.name === category);
};

export default async function Page({ params }: { params: { slug: string } }) {
  const result = getProductsByCategory(params.slug);
  console.log(result);

  return <div>Page</div>;
}

const Home = async () => {
  const data = await getData();

  return (
    <div className="flex justify-center items-center max-w-screen-2xl w-full">
      <div className=" py-10 max-w-screen-2xl w-full mx-auto">
        <div className="flex flex-wrap justify-center sm:justify-between gap-y-10 px-[8.5%]">
          {data.map((product: IProduct) => (
            <Link href={`/${product.category.name}`} key={product._id}>
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
                <p className="pt-1">{product.category.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
