// components/ProcessSteps.tsx
import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Scan Student Work",
    description:
      "It pays off: saves time overall, prevents cheating, and frees your office of old exams.",
    image:
      "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
  },
  {
    number: 2,
    title: "Grade Submissions",
    description:
      "Give detailed feedback while maintaining consistency with a flexible rubric.",
    image:
      "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
  },
  {
    number: 3,
    title: "Send & Export Grades",
    description:
      "Send grades to students with a click or export them to your own gradebook.",
    image:
      "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
  },
  {
    number: 4,
    title: "Get Detailed Analytics",
    description:
      "Get per-question and per-rubric statistics to understand how your students are doing.",
    image:
      "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
  },
];

const ProcessSteps = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div
            key={step.number}
            className="text-center relative p-4 rounded-lg"
          >
            <div className="relative">
              <div className="flex items-center justify-center">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-[200px] h-[200px] rounded-full border-2 border-green-500"
                  width={500}
                  height={300}
                />
                <div className="absolute bottom-0 left-16 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  {step.number}
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
            <p className="mt-2 text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
