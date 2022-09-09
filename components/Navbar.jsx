import React from "react";
import Link from "next/link";
import { NewspaperIcon } from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <>
      <div className="bg-indigo-500 drop-shadow-lg">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <header className="flex gap-11 items-center justify-center py-8 px-20 md:py-8 ">
            {/* <!-- logo - start --> */}

            <Link href="/" aria-label="logo">
              <a className="inline-flex items-center text-white text-2xl font-bold gap-2.5">
                <NewspaperIcon className="h-6 w-6" />
                News Update
              </a>
            </Link>
            {/* <!-- logo - end --> */}
          </header>
        </div>
      </div>
    </>
  );
}

export default Navbar;
