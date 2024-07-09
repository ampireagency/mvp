import DasHeader from "@/components/layout/das-header";
import Sidebar from "@/components/layout/sidebar";
import Search from "@/components/shared/search";
import TableAss from "@/components/shared/table-ass";
import React from "react";

const page = () => {
  return (
    <div>
      <>
        {/* Content */}
        <div className="w-full p-6 lg:ps-72">
          <div className="p-4 sm:p-6 border rounded-3xl space-y-4 sm:space-y-6">
            <Search />
            <TableAss />
          </div>
        </div>
        {/* End Content */}
        {/* ========== END MAIN CONTENT ========== */}
      </>
    </div>
  );
};

export default page;
