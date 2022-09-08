import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="bg-indigo-500 drop-shadow-lg">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <header className="flex gap-11 items-center py-8 px-8 md:py-8 ">
            {/* <!-- logo - start --> */}
            <Link href="/" aria-label="logo">
              <a className="inline-flex items-center text-white text-xl font-bold gap-2.5">News Update</a>
            </Link>
            {/* <!-- logo - end --> */}

            {/* <!-- nav - start --> */}
            <nav className="flex gap-12 text-white hover:text-slate-500 active:text-slate-700 text-lg font-semibold transition duration-100">
              <Link href="/">
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
