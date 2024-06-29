import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Hero from "../components/views/Hero";
import Wrapper from "@/components/layout/Wrapper";
import Footer from "@/components/layout/Footer";
import Jewellery from "../components/views/Jewellery";
import NewsLetter from "../components/views/NewsLetter";
import ProductCard from "@/components/views/ProductCard";

export default function Home() {
  return (
    <>
      <Wrapper>
        <Hero />
        <ProductCard />
        <Jewellery />
        <NewsLetter />
      </Wrapper>
    </>
  );
}
