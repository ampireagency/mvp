

import React from "react";
import Navbar from "./navbar";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="bg-white border-gray-200 border-b px-4 lg:px-8 py-2.5 dark:bg-gray-800">
          <div className="flex justify-between items-center mx-auto max-w-screen-xl">
            <a
              href="https://flowbite.com"
              className="flex text-lg w-full font-bold items-center"
            >
              Correct Mate
            </a>
            <Navbar />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
