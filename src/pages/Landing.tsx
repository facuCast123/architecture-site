import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Landing = () => {
  // Code to toggle hero image view
  const [projectView, setProjectView] = useState(1);

  const handleProjectView = (value: number) => {
    setProjectView(value);
    if (value === 1) {
      setProjectView(1);
    } else {
      setProjectView(2);
    }
  };

  const projectViewBg =
    projectView === 1
      ? 'bg-[url("/hero-image.png")]'
      : 'bg-[url("/hero-image-desktop.jpg")]';

  return (
    <div className="h-screen py-6 px-32 mb-24 flex items-center justify-between gap-4 flex-nowrap">
      <div className="w-2/6 h-full flex flex-col justify-center gap-y-16 relative">
        <h1 className="text-8xl font-semibold relative">
          <span className="uppercase font-light opacity-30">Project</span>{" "}
          <br />
          <span
            className={`${
              projectView === 1 ? "block animate-fade-in-left" : "hidden"
            }`}
          >
            Lorem
          </span>
          <span
            className={`${
              projectView === 2 ? "block" : "hidden"
            } animate-fade-in-left`}
          >
            Ipsum
          </span>
          {/* {projectView === 1 ? "Lorem" : "Ipsum"} */}
        </h1>

        <div className="flex items-center gap-x-6">
          <button
            className={`border-gray-100 border-2 p-4 text-2xl ${
              projectView === 1 ? "bg-gray-100 cursor-default" : ""
            }`}
            onClick={() => handleProjectView(1)}
          >
            <GoArrowLeft />
          </button>
          <button
            className={`border-gray-100 border-2 p-4 text-2xl ${
              projectView === 2 ? "bg-gray-100 cursor-default" : ""
            }`}
            onClick={() => handleProjectView(2)}
          >
            <GoArrowRight />
          </button>
        </div>

        <div className="flex items-center gap-x-6 text-3xl text-gray-400">
          <p>0{projectView}</p>{" "}
          <span className="text-5xl text-gray-300 font-thin">/</span> <p>02</p>
        </div>
      </div>

      <div
        className={`w-4/6 h-full ${projectViewBg} bg-center bg-cover bg-no-repeat relative`}
      >
        <div className="absolute bottom-0 left-0 flex items-center gap-5 bg-white py-6 px-12 text-lg underline-offset-8 uppercase tracking-widest cursor-pointer hover:underline">
          View project{" "}
          <span className="text-2xl">
            <GoArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
