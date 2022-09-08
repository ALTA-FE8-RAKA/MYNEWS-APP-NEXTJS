import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "../components/Navbar";

function DetailNews() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-md px-4 md:px-8 mx-auto">
          <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">{router.query.title}</h1>
          <div className="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8">
            <Image src={router.query.image} alt={router.query.title} width={800} height={400} className="rounded-lg w-full h-full object-cover object-center" />
          </div>
          <p className="text-gray-500 sm:text-lg mb-6 md:mb-8 text-justify">{router.query.content}</p>
        </div>
      </div>
    </>
  );
}

export default DetailNews;
