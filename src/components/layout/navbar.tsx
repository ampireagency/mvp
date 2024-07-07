import { NavItem, navItems } from "@/lib/navData";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  const renderNavItem = (item: NavItem, index: number) => (
    <a
      key={index}
      className={`py-3 ps-px sm:px-3 font-medium ${
        item.current ? "text-black" : "text-black"
      }`}
      href={item.href}
      aria-current={item.current ? "page" : undefined}
    >
      {item.name}
    </a>
  );

  const renderSubMenu = (subMenu: NavItem[], parentIndex: number) => (
    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
      {subMenu.map((subItem, subIndex) =>
        subItem.subMenu ? (
          <div
            key={subIndex}
            className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover] relative"
          >
            <button
              type="button"
              className="w-full flex justify-between items-center text-sm text-gray-800 rounded-lg py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
            >
              {subItem.name}
              <svg
                className="sm:-rotate-90 flex-shrink-0 ms-2 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {renderSubMenu(subItem.subMenu, subIndex)}
          </div>
        ) : (
          <Link
            key={subIndex}
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
            href={subItem.href}
          >
            {subItem.name}
          </Link>
        )
      )}
    </div>
  );

  return (
    <div
      id="navbar-collapse-with-animation"
      className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end py-2 md:py-0 sm:ps-7">
        {navItems.map((item, index) =>
          item.subMenu ? (
            <div
              key={index}
              className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] py-3 ps-px sm:px-3"
            >
              <button
                type="button"
                className="flex items-center w-full   font-medium"
              >
                {item.name}
                <svg
                  className="flex-shrink-0 ms-2 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {renderSubMenu(item.subMenu, index)}
            </div>
          ) : (
            renderNavItem(item, index)
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
