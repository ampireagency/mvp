import Search from "@/components/shared/search";
import TableList from "@/components/shared/table-list";
import React from "react";

const page = () => {
  return (
    <div>
      <>
        {/* Content */}
        <div className="w-full p-6 lg:ps-72">
          <div className="py-6 flex items-end justify-end w-full flex-col">
            <h1>subject : science paper 1 </h1>
            <p>Datae : 6 july 2024</p>
          </div>
          <div className="p-4 sm:p-6 border rounded-3xl space-y-4 sm:space-y-6">
            <Search />
            <TableList isView={true} />
          </div>
        </div>
        {/* End Content */}
        {/* ========== END MAIN CONTENT ========== */}
      </>
    </div>
  );
};

export default page;
