import React from "react";
import Link from "next/link";

function Navbar() {
  const url = "#";
  return (
    <>
      <div className="bg-indigo-400 drop-shadow-lg">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <header className="flex gap-8 items-center py-4 md:py-8 ">
            {/* <!-- logo - start --> */}
            <Link href={url} className="inline-flex items-center text-white text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
              <a>News Update</a>
            </Link>
            {/* <!-- logo - end --> */}

            {/* <!-- nav - start --> */}
            <nav className="hidden lg:flex gap-12">
              <Link href={url} className="text-white hover:text-slate-500 active:text-slate-700 text-lg font-semibold transition duration-100">
                <a>Home</a>
              </Link>
            </nav>
            {/* <!-- nav - end --> */}
          </header>
        </div>
      </div>
    </>
  );
}

export default Navbar;
