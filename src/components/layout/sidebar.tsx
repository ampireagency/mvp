import { Copy, Settings } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div
      id="application-sidebar"
      className="hs-overlay [--auto-close:lg]
hs-overlay-open:translate-x-0
-translate-x-full transition-all duration-300 transform
w-[260px]
hidden
fixed inset-y-0 start-0 z-[60]
bg-green-500 text-white border-e border-gray-200
lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
dark:bg-neutral-800 dark:border-neutral-700
"
    >
      <div className="px-8 pt-4">
        <div className="">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            className="rounded-full w-20 h-20 mx-auto"
            alt=""
          />
        </div>
        <h1 className="text-xl font-semibold text-center pt-4">Correct Mate</h1>
      </div>
      <nav
        className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
        data-hs-accordion-always-open=""
      >
        <ul className="space-y-1.5">
          <li>
            <a
              className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white"
              href="/view-assesment"
            >
              <Copy className="flex-shrink-0 size-4" />
              Assignments
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-white rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white"
              href="/setting"
            >
              <Settings className="flex-shrink-0 size-4" />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
