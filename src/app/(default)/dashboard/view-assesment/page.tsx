import React from "react";

const page = () => {
  return (
    <div className="px-24 py-5">
      <div className="lg:ps-64">
        {/* <Viewer fileUrl="/AmityJEESamplePaper.pdf" /> */}
        <div className="flex gap-6  items-center">
          <div className="flex-1 mt-12">
            <iframe
              src="https://research.google.com/pubs/archive/44678.pdf"
              width="400"
              height="600"
              className="w-full h-[600px] rounded-3xl "
            ></iframe>
            <div className="flex items-center justify-between pt-5">
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Previous
              </button>
              <h2>
                <span>2</span> of <span>9</span>
              </h2>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Next
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="">
              <h1 className="px-4 py-4">Success</h1>
              <div className="border shadow-md shadow-green-200 rounded-3xl h-[570px] px-6 py-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  iusto amet nulla nobis ad autem. Soluta ut odit impedit nulla
                  odio est, eveniet unde ea accusamus. Sequi excepturi ratione
                  nihil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
