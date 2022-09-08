import React from "react";
import Image from "next/image";

function CardContent({ image, title, author, date }) {
  return (
    <>
      <a href="#" className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
        <Image src={image} loading="lazy" alt={title} className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" width={600} height={600} />
      </a>

      <div className="flex flex-col flex-1 p-4 sm:p-6">
        <h2 className="text-gray-800 text-lg font-semibold mb-2">
          <a href="#" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">
            {title}
          </a>
        </h2>

        <div className="flex justify-between items-end mt-auto">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
              <Image src="https://source.unsplash.com/random/portrait" loading="lazy" alt="Photo by Brock Wegner" className="object-cover object-center" width={30} height={30} />
            </div>

            <div>
              <span className="block text-indigo-500">{author}</span>
              <span className="block text-gray-400 text-xs">{date}</span>
            </div>
          </div>

          <span className="text-gray-500 text-sm border rounded px-2 py-1">Article</span>
        </div>
      </div>
    </>
  );
}

export default CardContent;
