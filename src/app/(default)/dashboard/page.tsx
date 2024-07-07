"use client";

import { useState, ChangeEvent } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Data = {
  name: string;
  description: string;
  answerKey: File | null;
  answerSheet: File | null;
};

export default function Component() {
  const [data, setData] = useState<Data>({
    name: "",
    description: "",
    answerKey: null,
    answerSheet: null,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      setData((prevData) => ({ ...prevData, [name]: files[0] }));
    }
  };

  return (
    <div className="flex h-screen">
      <aside className="w-1/4 bg-blue-900 text-white p-6">
        <div className="flex flex-col items-center">
          <Avatar className="mb-4">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>PZ</AvatarFallback>
          </Avatar>
          <h2 className="text-lg font-semibold">Prof. Zizou</h2>
          <Button variant="ghost" className="mt-2">
            <FilePenIcon className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="mb-4">
              <Button
                variant="ghost"
                className="flex items-center w-full text-left"
              >
                <FileTextIcon className="w-5 h-5 mr-2" />
                ASSESSMENT
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="flex items-center w-full text-left"
              >
                <SettingsIcon className="w-5 h-5 mr-2" />
                SETTINGS
              </Button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <div className="mb-4">
              <label
                htmlFor="examName"
                className="block text-sm font-medium text-gray-700"
              >
                Name of the Exam:
              </label>
              <Input
                id="examName"
                name="name"
                value={data.name}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="examDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Description of the Exam:
              </label>
              <Textarea
                id="examDescription"
                name="description"
                value={data.description}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="answerKey"
                className="block text-sm font-medium text-gray-700"
              >
                Answer Key: <span className="text-gray-500">(Optional)</span>
              </label>
              <div className="flex items-center mt-1">
                <div className="flex-1 border border-dashed border-gray-300 p-4">
                  Drag and drop here the answer key
                </div>
                <Button
                  variant="outline"
                  className="ml-2"
                  onClick={() => document.getElementById("answerKey")?.click()}
                >
                  Click here to Upload
                </Button>
                <Input
                  id="answerKey"
                  name="answerKey"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border border-dashed border-gray-300 p-6">
            <UploadIcon className="w-10 h-10 text-blue-500" />
            <p className="mt-2 text-sm text-gray-700">
              Drag and drop the answer sheet here or Click to Upload
            </p>
            <Input
              id="answerSheet"
              name="answerSheet"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Button className="bg-blue-900 hover:bg-blue-800 text-white">
            EVALUATE
          </Button>
        </div>
      </main>
    </div>
  );
}

type IconProps = React.SVGProps<SVGSVGElement>;

function FilePenIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function FileTextIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}

function SettingsIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UploadIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
