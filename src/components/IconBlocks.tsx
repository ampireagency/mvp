import { HandCoins, LogIn, PhoneCall } from "lucide-react";
import React from "react";

type IconBlock = {
  title: string;
  description: string;
  icon: any;
};

const iconBlocks: IconBlock[] = [
  {
    description: "Industry-leading documentation",
    title: "Sign Up: Register your institute and get access to the platform.",
    icon: <LogIn />,
  },
  {
    description: "Developer community support",
    title: "Automated Evaluation: AI evaluates and provides detailed feedback.",
    icon: <PhoneCall />,
  },
  {
    description: "Simple and affordable",
    title: "Analyze Results: Get real-time insights and track progress.",
    icon: <HandCoins />,
  },
];

const howItWorksSteps: string[] = [
  "Sign Up: Register your institute and get access to the platform.",
  "Upload Papers: Students upload their answer sheets.",
  "Automated Evaluation: AI evaluates and provides detailed feedback.",
  "Analyze Results: Get real-time insights and track progress.",
];

const IconBlocks: React.FC = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="lg:w-3/4">
          <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
            How It Works
          </h2>
          <p className="mt-3 text-gray-800 dark:text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel totam
            incidunt eligendi consequuntur sapiente ipsum suscipit blanditiis
            corporis pariatur qui enim velit eius veniam eveniet asperiores,
            ipsa nihil nam exercitationem?
          </p>
          <p className="mt-5">
            <a
              className="inline-flex items-center gap-x-1 font-medium text-green-500 dark:text-green-500"
              href="#"
            >
              Contact sales to learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </p>
        </div>
        <div className="space-y-6 w-full lg:space-y-10">
          {iconBlocks.map((block, index) => (
            <div className="flex w-full items-center" key={index}>
              <span className="flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                {block.icon}
              </span>
              <div className="ms-5 w-full sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  {block.title}
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  {block.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="mt-10">
        <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
          How It Works
        </h2>
        <ol className="mt-3 text-gray-800 dark:text-neutral-400">
          {howItWorksSteps.map((step, index) => (
            <li className="mt-2" key={index}>
              {step}
            </li>
          ))}
        </ol>
      </div> */}
    </div>
  );
};

export default IconBlocks;
